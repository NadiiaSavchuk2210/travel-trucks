import { NewBookingData } from "@/types/camper";

//* Validation rules
type Rule = (value: string | undefined) => string | null;

const rules = {
  required:
    (message: string): Rule =>
    (value) =>
      value?.trim() ? null : message,
  min:
    (length: number, message: string): Rule =>
    (value) =>
      value && value.trim().length >= length ? null : message,
  max:
    (length: number, message: string): Rule =>
    (value) =>
      value && value.trim().length <= length ? null : message,
  email:
    (message: string): Rule =>
    (value) =>
      value && /\S+@\S+\.\S+/.test(value) ? null : message,
};

//* Validation schema
export const validationSchema: Record<keyof NewBookingData, Rule[]> = {
  name: [
    rules.required("Name is required"),
    rules.min(3, "Name must be at least 3 characters"),
    rules.max(50, "Name is too long"),
  ],
  email: [rules.required("Email is required"), rules.email("Invalid email")],
  bookingDate: [rules.required("Booking date is required")],
  comment: [rules.max(500, "Comment is too long")],
};

//* Validate function
export function validateForm(
  data: Partial<NewBookingData>,
  schema: Partial<Record<keyof NewBookingData, Rule[]>>,
): Partial<Record<keyof NewBookingData, string>> {
  const errors: Partial<Record<keyof NewBookingData, string>> = {};

  (Object.keys(schema) as (keyof NewBookingData)[]).forEach((key) => {
    const fieldRules = schema[key];
    const value = data[key];
    if (!fieldRules) return;

    for (const rule of fieldRules) {
      const error = rule(value);
      if (error) {
        errors[key] = error;
        break;
      }
    }
  });

  return errors;
}
