import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderG from "../Components/HeaderG";
import FormField from "../Components/FormField";
import Button from "../Components/Button";

const RecueCaisse: React.FC = () => {
  const [formData, setFormData] = useState({
    recue_caisse_numero: "",
    date: "",
    methode_paiement: "",
    recue_de: "",
    motif: "",
    montant_chiffre: "",
    montant_lettre: "",
  });

  const navigate = useNavigate(); // Utilisation de useNavigate

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAction = (action: string) => {
    if (action === "Envoyer") {
      console.log("Données envoyées :", formData);
      navigate("/chargement"); // Redirection vers la page de chargement
    } else {
      console.log(`Action: ${action}`, formData);
    }
  };

  return (
    <div className="min-h-screen font-abhaya">
      <div className="fixed top-0 left-0 w-full h-16">
      <HeaderG />
      </div>
      
      <main className="w-full max-w-5xl mx-automt-12">
        {/* Champs alignés */}
        <div className="space-y-4 w-[25rem] mt-24 ml-[35rem] mb-24">
          <div className="flex items-center justify-between">
            <label htmlFor="recue_caisse_numero" className="mr-4 w-1/3">
              Reçue de caisse n°
            </label>
            <input
              id="recue_caisse_numero"
              name="recue_caisse_numero"
              value={formData.recue_caisse_numero}
              onChange={handleChange}
              className="w-2/3 bg-gray-800 text-white border border-gray-700 rounded p-2"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="date" className="mr-4 w-1/3">
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="w-2/3 bg-gray-800 text-white border border-gray-700 rounded p-2"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="methode_paiement" className="mr-4 w-1/3">
              Méthode de paiement
            </label>
            <input
              id="methode_paiement"
              name="methode_paiement"
              value={formData.methode_paiement}
              onChange={handleChange}
              className="w-2/3 bg-gray-800 text-white border border-gray-700 rounded p-2"
            />
          </div>
        </div>

        {/* Titre */}
        <h1 className="text-4xl font-bold mb-20 mt-16 flex justify-center">REÇUE DE CAISSE</h1>

        {/* Formulaire principal */}
        <div className="grid grid-cols-2 gap-16 items-center px-8 justify-center ml-20">
          {/* Champs de formulaire gauche */}
          <div className="flex flex-col space-y-6 w-80">
            <FormField
              label="Reçue de"
              name="recue_de"
              value={formData.recue_de}
              onChange={handleChange}
            />
            <FormField
              label="Motif"
              name="motif"
              value={formData.motif}
              onChange={handleChange}
            />
          </div>

          {/* Champs de formulaire droite */}
          <div className="flex flex-col space-y-6 w-80">
            <FormField
              label="Montant en chiffre"
              name="montant_chiffre"
              value={formData.montant_chiffre}
              onChange={handleChange}
            />
            <FormField
              label="Montant en lettre"
              name="montant_lettre"
              value={formData.montant_lettre}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Boutons */}
        <div className="flex space-x-8 mt-32 justify-center">
          <Button
            label="Envoyer"
            onClick={() => handleAction("Envoyer")}
            variant="primary"
          />
          <Button
            label="Rechercher"
            onClick={() => handleAction("Rechercher")}
            variant="secondary"
          />
          <Button
            label="Supprimer"
            onClick={() => handleAction("Supprimer")}
            variant="secondary"
          />
        </div>
      </main>
    </div>
  );
};

export default RecueCaisse;
