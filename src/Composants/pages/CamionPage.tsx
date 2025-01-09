import React, { useState } from "react";
import HeaderG from "../Components/HeaderG";
import FormField from "../Components/FormField";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom"; // Import de useNavigate pour la navigation

const TruckRegistrationPage = () => {
  const [formData, setFormData] = useState({
    numero_plaque: "",
    marque: "",
    designation: "",
    tonage: "",
    numero_chassi: "",
  });

  const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAction = (action: string) => {
    console.log(`Action: ${action}`, formData);
  };

  const handleSave = () => {
    navigate("/caillasse"); // Redirige vers la page "Caillasse" après l'enregistrement
  };

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-full h-16 z-50">
        <HeaderG />
      </div>
      <main className="w-full max-w-5xl mx-auto flex flex-col items-center mt-12">
        <h1 className="text-4xl font-bold mb-24 mt-20 font-abhaya">ENREGISTREMENT CAMION</h1>

        <div className="grid grid-cols-2 gap-32 items-center w-full pl-40">
          {/* Champs de formulaire */}
          <div className="flex flex-col space-y-6 font-abhaya">
            <FormField
              label="Numéro plaque"
              name="numero_plaque"
              value={formData.numero_plaque}
              onChange={handleChange}
            />
            <FormField
              label="Marque"
              name="marque"
              value={formData.marque}
              onChange={handleChange}
            />
            <FormField
              label="Désignation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />
            <FormField
              label="Tonage"
              name="tonage"
              value={formData.tonage}
              onChange={handleChange}
            />
            <FormField
              label="Numéro châssi"
              name="numero_chassi"
              value={formData.numero_chassi}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-6">
            <Button label="Enregistrer" onClick={handleSave} variant="primary" />
            <Button
              label="Rechercher"
              onClick={() => handleAction("Rechercher")}
              variant="primary"
            />
            <Button
              label="Modifier"
              onClick={() => handleAction("Modifier")}
              variant="primary"
            />
            <Button
              label="Supprimer"
              onClick={() => handleAction("Supprimer")}
              variant="secondary"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TruckRegistrationPage;
