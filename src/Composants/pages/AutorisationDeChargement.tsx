import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import de useNavigate
import InputField from "../Components/InputField";
import SelectField from "../Components/SelectField";
import Button from "../Components/Button"; // Importation de votre composant
import HeaderG from "../Components/HeaderG";

const AutorisationDeChargement: React.FC = () => {
  const [formData, setFormData] = useState({
    numeroCamion: "",
    nomChauffeur: "",
    nomClient: "",
    produit: "",
    quantiteApproximative: "",
    quantiteFinale: "",
    numeroBonCaisse: "",
    numeroBonLivraison: "",
    date: "",
  });

  const navigate = useNavigate(); // Hook pour naviguer vers une autre page

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Formulaire soumis :", formData);

    // Redirection vers la page "Bon de Recette"
    navigate("/bon-de-recette");
  };

  return (
    <div className="min-h-screen">
      {/* Header fixé */}
      <div className="fixed top-0 left-0 w-full z-10">
        <HeaderG />
      </div>

      {/* Contenu principal avec un padding-top */}
      <main className="w-full max-w-5xl p-8 pt-24"> {/* Ajoutez pt-24 pour espacer du header */}
        <h1 className="text-4xl font-bold text-center my-8">AUTORISATION DE CHARGEMENT N° ...</h1>

        <div className="grid grid-cols-2 gap-8 items-center">
          {/* Left Fields */}
          <div className="space-y-4">
            <InputField label="N° Camion" name="numeroCamion" value={formData.numeroCamion} onChange={handleChange} />
            <InputField label="Nom chauffeur" name="nomChauffeur" value={formData.nomChauffeur} onChange={handleChange} />
            <InputField label="Nom client" name="nomClient" value={formData.nomClient} onChange={handleChange} />
            <SelectField
              label="Produit"
              name="produit"
              value={formData.produit}
              options={["Produit A", "Produit B", "Produit C"]}
              onChange={handleChange}
            />
          </div>

          {/* Right Fields */}
          <div className="space-y-4">
            <InputField label="Qté. Approx." name="quantiteApproximative" value={formData.quantiteApproximative} onChange={handleChange} />
            <InputField label="Qté. Finale" name="quantiteFinale" value={formData.quantiteFinale} onChange={handleChange} />
            <InputField label="N° Bon Caisse" name="numeroBonCaisse" value={formData.numeroBonCaisse} onChange={handleChange} />
            <InputField label="N° Bon Livraison" name="numeroBonLivraison" value={formData.numeroBonLivraison} onChange={handleChange} />
          </div>
        </div>

        <div className="mt-8 text-right">
          <InputField label="Date" name="date" value={formData.date} onChange={handleChange} type="date" />
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button label="Envoyer" onClick={handleSubmit} variant="primary" />
          <Button label="Rechercher" onClick={() => console.log("Recherche...")} variant="secondary" />
          <Button label="Supprimer" onClick={() => console.log("Suppression...")} variant="secondary" />
        </div>
      </main>
    </div>
  );
};

export default AutorisationDeChargement;
