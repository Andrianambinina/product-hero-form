import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import DatePickerField from "../../components/form/fields/DatePickerField";
import Form from "../../components/form/Form";
import { ICustomerInput } from "../../types/customer.type";
import { customerSchema } from "../../validations/customer.validation";

const CreateCustomer = () => {
  const form = useForm<ICustomerInput>({
    resolver: zodResolver(customerSchema)
  });

  const { handleSubmit } = form;

  const onSubmitHandler: SubmitHandler<ICustomerInput> = (values) => {
    console.log("values: ", values);
  };

  return (
    <FormLayout>
      <Form
        form={form}
        onSubmit={handleSubmit(onSubmitHandler)}
        primaryButtonText="Créer l'utilisateur"
        error={(error as Error)?.message}
        loading={isLoading}
        buttonSx={{ fontSize: 16 }}
      >
        <DatePickerField
          name="arrivalDate"
          label="Arrivée dans l'entreprise"
          withHour
        />
      </Form>
    </FormLayout>
  );
};

export default CreateCustomer;
