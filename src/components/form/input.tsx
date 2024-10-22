import { useState, useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  regex?: RegExp;
  errorMessage?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  onValidationChange?: (isValid: boolean) => void;
};

export const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  required,
  regex,
  errorMessage,
  inputProps,
  onValidationChange,
}: Props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched) {
      validateInput();
    }
  }, [value, touched]);

  const validateInput = () => {
    if (required && value.trim() === "") {
      setError(`${label} is required`);
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
    setTouched(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onPaste={handlePaste}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...inputProps}
      />
      {touched && error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};