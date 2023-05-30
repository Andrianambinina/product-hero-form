import { TextField, TextFieldProps } from "@mui/material";
import {
  DateTimePicker,
  DesktopDatePicker,
  LocalizationProvider
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

type Props = {
  value?: Date;
  onChange: (value: any) => void;
  disableFuture?: boolean;
  withHour?: boolean;
  label?: string;
  inputFormat?: string;
} & TextFieldProps;

const DatePickerInput = ({
  value,
  disableFuture,
  onChange,
  label,
  inputFormat,
  withHour = false,
  ...inputProps
}: Props) => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    if (!value) return;
    setDate(value);
  }, [value]);

  const _onChange = (newDate: Date) => {
    setDate(newDate);
    onChange(newDate);
  };

  let Component: any = DesktopDatePicker;

  if (withHour) {
    Component = DateTimePicker;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Component
        disableFuture={disableFuture}
        inputFormat={
          inputFormat ?? (withHour ? "DD/MM/YYYY @ HH:mm" : "DD/MM/YYYY")
        }
        value={date}
        onChange={(value: Date) => _onChange(dayjs(value).toDate())}
        label={label}
        renderInput={(params: TextFieldProps) => (
          <TextField
            variant="standard"
            margin="dense"
            fullWidth
            color="primary"
            {...params}
            {...inputProps}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerInput;
