import React from 'react';

interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant }) => {
  const baseStyle = "w-44 p-2 rounded text-white font-medium";
  const styles = {
    primary: "bg-[#1B3641] text-white py-2 rounded text-xl hover:bg-[#264857] transition-colors font-abhaya",
    secondary: "bg-gray-600 hover:bg-gray-700 font-abhaya text-xl",
  };
  return (
    <button type='submit' className={`${baseStyle} ${styles[variant]}`}>
      {label}
    </button>
  );
};

export default Button;
