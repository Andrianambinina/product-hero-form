import { FormControl, FormHelperText, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import DatePickerInput from "../inputs/DatePickerFieldInput";

type Props = {
  name: string;
  label?: string;
  helperText?: string;
  inputFormat?: string;
  disableFuture?: boolean;
  withHour?: boolean;
  tooltip?: string;
} & TextFieldProps;

const DatePickerField = ({
  name,
  label,
  helperText,
  disableFuture,
  inputFormat,
  tooltip,
  withHour = false,
  ...inputProps
}: Props) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <FormControl component="fieldset" error={!!errors[name]}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePickerInput
            disableFuture={disableFuture}
            inputFormat={inputFormat}
            value={value}
            onChange={onChange}
            withHour={withHour}
            label={label}
            {...inputProps}
          />
        )}
      />
      {errors[name] && (
        <FormHelperText error>{(errors as any)[name].message}</FormHelperText>
      )}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default DatePickerField;
