import { Field } from "@/lib/data/type";
import { FormInput } from "../form/input";
import { FormSelect } from "../form/select";
import React, { useState, useEffect } from "react";
import { FormTextarea } from "../form/textarea";

const getField = (
  field: Field,
  onValidationChange: (name: string, isValid: boolean) => void
) => {
  switch (field.inputType) {
    case "input":
      return (
        <FormInput
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type}
          errorMessage={field.errorMessage}
          inputProps={field.inputOptions}
          placeholder={field.placeholder}
          regex={field.regex}
          required={field.required}
          onValidationChange={(isValid) => onValidationChange(field.name, isValid)}
        />
      );
    case "select":
      return (
        <FormSelect
          key={field.name}
          label={field.label}
          name={field.name}
          options={field?.options || []}
          placeholder={field.placeholder}
          required={field.required}
        />
      );
    case "textarea":
      return (
        <FormTextarea
          key={field.name}
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          regex={field.regex}
          errorMessage={field.errorMessage}
          inputProps={field.inputOptions as any}
          onValidationChange={(isValid) => onValidationChange(field.name, isValid)}
        />
      );
    default:
      return null;
  }
};

export const FieldAndStep = ({
  fields,
  handleValidation,
}: {
  fields: Field[];
  handleValidation: (isValid: boolean) => void;
}) => {
  const [fieldValidation, setFieldValidation] = useState<Record<string, boolean>>({});

  const handleFieldValidation = (name: string, isValid: boolean) => {
    setFieldValidation((prev) => ({ ...prev, [name]: isValid }));
  };

  useEffect(() => {
    const isAllValid = Object.values(fieldValidation).every((isValid) => isValid);
    handleValidation(isAllValid);
  }, [fieldValidation, handleValidation]);

  return (
    <>
      {fields.length === 1 ? (
        getField(fields[0], handleFieldValidation)
      ) : (
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          {fields.map((field, index) => (
            <React.Fragment key={index}>
              {getField(field, handleFieldValidation)}
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};
