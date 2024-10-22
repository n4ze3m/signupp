import { useState } from "react";
import { Label } from "../ui/label";

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  options: { label: string; value: string }[];
};

export const FormSelect = ({
  label,
  name,
  placeholder,
  required,
  options,
}: Props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleBlur = () => {
    if (required && value.trim() === "") {
      setError(`${label} is required!!!`);
    } else {
      setError("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="" disabled hidden className="text-gray-400">
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-gray-700"
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
