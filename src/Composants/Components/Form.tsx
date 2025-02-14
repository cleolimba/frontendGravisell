import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
  sexe :string
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    role: "Administrateur",
    password: "",
    confirmPassword: "",
    sexe : ""
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto mt-24 space-y-2 font-abhaya">
      <div className="grid grid-cols-2 gap-32">
        {/* Partie gauche */}
        <div>
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-lg">
              Nom
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Nom"
              className="w-full px-2 py-2 rounded bg-gray-800"
            />
          </div>

          <div className="space-y-2 mt-8">
            <label htmlFor="lastName" className="block text-lg">
              Prénom
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Prénom"
              className="w-full px-2 py-2 rounded bg-gray-800"
            />
          </div>

          <div className="mt-8">
            <label className="block text-lg mb-2 font-abhaya">Sexe</label>
            <select
              name="sexe"
              value={formData.sexe}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 font-abhaya"
            >
              <option value="">Choisir...</option>
              <option value="male">Masculin</option>
              <option value="female">Féminin</option>
            </select>
          </div>

          <div className="space-y-2 mt-8">
            <label htmlFor="email" className="block text-lg">
              E-mail address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre adresse mail"
              className="w-full px-2 py-2 rounded bg-gray-800"
            />
          </div>
        </div>

        {/* Partie droite */}
        <div>
          <div className="space-y-2">
            <label htmlFor="role" className="block text-lg">
              Rôle
            </label>
            <div className="relative">
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-2 py-2 rounded appearance-none bg-gray-800"
              >
                <option value="Administrateur">Administrateur</option>
                <option value="Réceptionniste">Réceptionniste</option>
                <option value="Livreur">Livreur</option>
                <option value="Caissière">Caissière</option>
                <option value="Chargeur">Chargeur</option>
              </select>
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>

          <div className="space-y-2 mt-8">
            <label htmlFor="password" className="block text-lg">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full px-2 py-2 rounded bg-gray-800"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-4 flex items-center"
              >
                <FontAwesomeIcon
                  icon={passwordVisible ? faEyeSlash : faEye}
                  className="text-blue-800 hover:text-blue-600"
                />
              </button>
            </div>
          </div>

          <div className="space-y-2 mt-8">
            <label htmlFor="confirmPassword" className="block text-lg">
              Confirmation mot de passe
            </label>
            <div className="relative">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="********"
                className="w-full px-2 py-2 rounded bg-gray-800"
              />
              <button
                type="button"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                className="absolute inset-y-0 right-4 flex items-center"
              >
                <FontAwesomeIcon
                  icon={confirmPasswordVisible ? faEyeSlash : faEye}
                  className="text-blue-800 hover:text-blue-600"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        {/* <button
          type="submit"
          className="bg-[#1B3641] text-white px-12 py-3 rounded text-xl hover:bg-[#264857] transition-colors" >
          S'inscrire
        </button> */}
      </div>
    </form>
  );
};

export default Form;
