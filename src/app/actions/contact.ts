// src/app/actions/contact.ts
"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 1. Define strict validation rules
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // 2. Extract and Validate Payload
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please fix the errors in the form.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    // 3. Dispatch Email via Resend
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Default testing domain
      to: "dgore7078@gmail.com", // Your actual email
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return { success: false, message: "Failed to send email. Please try again later." };
    }

    return { success: true, message: "Message sent successfully! I'll be in touch soon." };
  } catch (error) {
    return { success: false, message: "An unexpected error occurred." };
  }
}