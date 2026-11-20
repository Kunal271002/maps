import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";
import { z } from "zod";

const enquirySchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2)
      .max(100)
      .refine((value) => !/[\r\n]/.test(value)),
    contact: z
      .string()
      .trim()
      .min(10)
      .max(18)
      .regex(/^[0-9+()\s-]+$/)
      .refine((value) => {
        const digitCount = value.replace(/\D/g, "").length;
        return digitCount >= 10 && digitCount <= 15;
      }),
    email: z.string().trim().email().max(254),
    course: z.enum([
      "Foundation (5th – 10th)",
      "11th – 12th Science",
      "11th – 12th Commerce / CA Foundation",
      "Integrated JEE",
      "Integrated NEET",
      "MHT-CET Crash Course",
    ]),
    mode: z.enum(["Online", "Offline", "Hybrid"]),
    message: z.string().trim().max(2000).optional(),
  })
  .strict();

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required mail configuration: ${name}`);
  }
  return value;
}

function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

export const sendEnquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const host = requiredEnv("SMTP_HOST");
    const user = requiredEnv("SMTP_USER");
    const pass = requiredEnv("SMTP_PASS");
    const portValue = requiredEnv("SMTP_PORT");
    const port = Number(portValue);

    if (!Number.isInteger(port) || port < 1 || port > 65535) {
      throw new Error("SMTP_PORT must be a valid port number.");
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const safeName = escapeHtml(data.fullName);
    const safeContact = escapeHtml(data.contact);
    const safeEmail = escapeHtml(data.email);
    const safeCourse = escapeHtml(data.course);
    const safeMode = escapeHtml(data.mode);
    const safeMessage = escapeHtml(data.message ?? "").replace(/\n/g, "<br>");

    try {
      await transporter.sendMail({
        from: `"MAPS Educare Website" <${user}>`,
        to: user,
        replyTo: data.email,
        subject: `New enquiry from ${data.fullName}`,
        text: [
          "New student enquiry",
          `Name: ${data.fullName}`,
          `Contact: ${data.contact}`,
          `Email: ${data.email}`,
          `Course: ${data.course}`,
          `Preferred mode: ${data.mode}`,
          data.message ? `Message: ${data.message}` : undefined,
        ]
          .filter(Boolean)
          .join("\n"),
        html: `
          <h2>New Student Enquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Contact:</strong> ${safeContact}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Course:</strong> ${safeCourse}</p>
          <p><strong>Preferred mode:</strong> ${safeMode}</p>
          ${safeMessage ? `<p><strong>Message:</strong><br>${safeMessage}</p>` : ""}
        `,
      });

      await transporter.sendMail({
        from: `"MAPS Educare" <${user}>`,
        to: data.email,
        subject: "Thank you for contacting MAPS Educare",
        text: `Thank you, ${data.fullName}! We received your enquiry for ${data.course} (${data.mode}). Our team will contact you shortly at ${data.contact}.`,
        html: `
          <h2>Thank you, ${safeName}!</h2>
          <p>We received your enquiry for <strong>${safeCourse}</strong> (${safeMode}).</p>
          <p>Our team will contact you shortly at ${safeContact}.</p>
          <p>For immediate assistance, call us at (+91) 96996 74371.</p>
          <p>Best regards,<br>Nami Sir &amp; Team<br>MAPS Educare</p>
        `,
      });
    } catch (error) {
      console.error("Enquiry email delivery failed:", error);
      throw new Error("Unable to send your enquiry right now. Please try again later.");
    }

    return { success: true };
  });
