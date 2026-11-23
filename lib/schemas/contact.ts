import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254),

  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(25),

  service: z.string().min(1, "Please select a practice area.").max(120),

  message: z
    .string()
    .trim()
    .min(20, "Please provide a little more detail.")
    .max(3000, "Your message is too long."),

  consent: z
    .boolean()
    .refine((value) => value === true, "Please agree to the privacy notice."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
