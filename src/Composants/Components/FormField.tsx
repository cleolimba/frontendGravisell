import React from "react";

type FormFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const FormField: React.FC<FormFieldProps> = ({ label, name, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-lg">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded bg-gray-200 focus:outline-none focus:bg-gray-300"
      />
    </div>
  );
};

export default FormField;
