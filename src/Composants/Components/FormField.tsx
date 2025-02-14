// import React from "react";

// type FormFieldProps = {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   type?: string;
// };

// const FormField: React.FC<FormFieldProps> = ({ label, name, value, onChange }) => {
//   return (
//     <div className="flex flex-col">
//       <label className="text-lg">{label}</label>
//       <input
//         type="text"
//         name={name}
//         value={value}
//         onChange={onChange}
//         className="w-full p-2 rounded bg-gray-200 focus:outline-none focus:bg-gray-300"
//       />
//     </div>
//   );
// };

// export default FormField;

import React from "react";

type FormFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // OnChange est optionnel pour les champs en lecture seule
  type?: string;
  readOnly?: boolean; // Ajout de la propriété readOnly
};

const FormField: React.FC<FormFieldProps> = ({ label, name, value, onChange, type = "text", readOnly = false }) => {
  return (
    <div className="flex flex-col">
      <label className="text-lg">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly} // Utilisation de la propriété readOnly
        className={`w-full p-2 rounded ${readOnly ? "bg-gray-300" : "bg-gray-200"} focus:outline-none focus:bg-gray-300`}
      />
    </div>
  );
};

export default FormField;
