interface InputFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
  }
  
  const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, type = "text" }) => {
    return (
      <div>
        <label htmlFor={name} className="">
          {label} :
        </label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>
    );
  };
  
  export default InputField;
  