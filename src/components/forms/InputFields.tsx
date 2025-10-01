import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const InputFields = ({
  name,
  label,
  register,
  placeholder,
  type = "text",
  error,
  validation,
  value,
  disabled,
}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        value={value}
        className={cn(
          "form-input",
          { "opacity-50 cursor-not-allowed": disabled },
          error && "border-red-500"
        )}
        {...(error && { "aria-invalid": "true" })}
        {...(error && { "aria-describedby": `${name}-error` })}
        {...register(name, validation)}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1" id={`${name}-error`}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default InputFields;
