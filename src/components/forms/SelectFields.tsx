import React from "react";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectFields = ({
  name,
  label,
  control,
  options,
  placeholder,
  required = false,
  error,
}: SelectFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <Controller
        name={name}
        control={control}
        rules={{ required: required ? `${label} is required` : false }}
        render={({ field }) => (
          <Select
            value={field.value}
            onValueChange={field.onChange}
            className={`form-select ${error ? "border-red-500" : ""}`}
            {...(error && { "aria-invalid": "true" })}
            {...(error && { "aria-describedby": `${name}-error` })}
          >
            <SelectTrigger className="select-trigger">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600 text-white">
              {options.map((option) => (
                <SelectItem
                  className="focus:bg-gray-600 focus:text-white"
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1" id={`${name}-error`}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default SelectFields;
