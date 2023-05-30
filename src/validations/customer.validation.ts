import { z } from "zod";

export const customerSchema = z.object({
  arrivalDate: z.date()
});
