import React, { useState } from "react";
import HeaderG from "../Components/HeaderG";
import FormField from "../Components/FormField";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom"; // Import de useNavigate pour la navigation

const Caillasses = () => {
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
    navigate("/commande");
  };

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-full h-16 z-50">
        <HeaderG />
      </div>
      <main className="w-full max-w-5xl mx-auto flex flex-col items-center mt-12">
        <h1 className="text-4xl font-bold mb-24 mt-20 font-abhaya">ENREGISTREMENT CAILLASSES</h1>

        <div className="grid grid-cols-2 gap-32 items-center w-full pl-40">
          {/* Champs de formulaire */}
          <div className="flex flex-col space-y-6 font-abhaya">
            <FormField
              label="Code caillasse"
              name="Code caillasse"
              value={formData.numero_plaque}
              onChange={handleChange}
            />
            <FormField
              label="Id client"
              name="Id client"
              value={formData.marque}
              onChange={handleChange}
            />
            <FormField
              label="Numéro commande"
              name="Numéro commande"
              value={formData.designation}
              onChange={handleChange}
            />
            <FormField
              label="Produit"
              name="Produit"
              value={formData.tonage}
              onChange={handleChange}
            />
            <FormField
              label="Tare"
              name="Tare"
              value={formData.numero_chassi}
              onChange={handleChange}
            />
            <FormField
              label="Poids bruts"
              name="Poids bruts"
              value={formData.numero_chassi}
              onChange={handleChange}
            />
            <FormField
              label="Poids nets"
              name="Poids nets"
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

export default Caillasses;
