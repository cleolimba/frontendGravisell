import React, { useState } from "react";
import Button from "../Components/Button";
import InputField from "../Components/InputField";
import HeaderG from "../Components/HeaderG";

const BonDeRecette: React.FC = () => {
  const [formData, setFormData] = useState({
    nomClient: "",
    motive: "",
    montantChiffre: "",
    montantLettre: "",
    refAutori: "",
    numeroBL: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Formulaire soumis :", formData);
  };

  return (
    <div className="min-h-screen">
      {/* En-tête fixe */}
      <div className="fixed top-0 left-0 w-full z-50">
        <HeaderG />
      </div>

      {/* Contenu principal */}
      <main className="pt-20 max-w-4xl mx-auto p-8"> {/* Ajout de pt-20 pour compenser la hauteur du Header */}
        <h1 className="text-4xl font-bold text-center mb-8">BON DE RECETTE N° ...</h1>
        <form className="grid grid-cols-2 gap-6">
          {/* Colonne gauche */}
          <InputField
            label="Nom client"
            name="nomClient"
            value={formData.nomClient}
            onChange={handleChange}
          />
          <InputField
            label="Réf. Autori."
            name="refAutori"
            value={formData.refAutori}
            onChange={handleChange}
          />
          <InputField
            label="Motive"
            name="motive"
            value={formData.motive}
            onChange={handleChange}
          />
          <InputField
            label="N° B.L."
            name="numeroBL"
            value={formData.numeroBL}
            onChange={handleChange}
          />
          <InputField
            label="Montant chiffre"
            name="montantChiffre"
            value={formData.montantChiffre}
            onChange={handleChange}
          />
          <InputField
            label="Montant lettre"
            name="montantLettre"
            value={formData.montantLettre}
            onChange={handleChange}
          />
          <InputField
            label="Date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
          />
        </form>

        {/* Code-barres */}
        <div className="flex justify-center items-center mt-8">
          <div className="h-12 w-48 flex items-center justify-center">
            <p className="text-sm font-bold">|| ||| | || |||</p> {/* Exemple visuel */}
          </div>
        </div>

        {/* Boutons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button label="Envoyer" onClick={handleSubmit} variant="primary" />
          <Button label="Rechercher" onClick={() => console.log("Rechercher")} variant="secondary" />
          <Button label="Supprimer" onClick={() => console.log("Supprimer")} variant="secondary" />
        </div>
      </main>
    </div>
  );
};

export default BonDeRecette;
