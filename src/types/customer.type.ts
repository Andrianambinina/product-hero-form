import { z } from "zod";
import { customerSchema } from "../validations/customer.validation";

export type ICustomerInput = z.infer<typeof customerSchema>;
