interface SelectFieldProps {
    label: string;
    name: string;
    value: string;
    options: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
  const SelectField: React.FC<SelectFieldProps> = ({ label, name, value, options, onChange }) => {
    return (
      <div>
        <label htmlFor={name} className="block">
          {label} :
        </label>
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        >
          <option value="">Sélectionner</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default SelectField;
  