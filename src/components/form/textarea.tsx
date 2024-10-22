import { useState } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  regex?: RegExp;
  errorMessage?: string;
  inputProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  onValidationChange?: (isValid: boolean) => void;
};

export const FormTextarea = ({
  label,
  name,
  placeholder,
  required,
  regex,
  errorMessage,
  inputProps,
  onValidationChange,
}: Props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validateInput = () => {
    if (required && value.trim() === "") {
      setError(`${label} is required!!!`);
      onValidationChange && onValidationChange(false);
    } else if (regex && !regex.test(value)) {
      setError(errorMessage || "Invalid input");
      onValidationChange && onValidationChange(false);
    } else {
      setError("");
      onValidationChange && onValidationChange(true);
    }
  };

  const handleBlur = () => {
    validateInput();
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    validateInput();
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        onPaste={(e) => e.preventDefault()}
        {...inputProps}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
