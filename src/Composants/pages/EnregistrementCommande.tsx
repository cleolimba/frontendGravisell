import React, { useState } from "react";
import HeaderG from "../Components/HeaderG";
import FormField from "../Components/FormField";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const EnregistrementCommande: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom_client: "",
    numero_ordre: "",
    nom_produit: "",
    qte_commande: "",
    id_commande: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Validation simple des champs (optionnelle)
    const { nom_client, numero_ordre, nom_produit, qte_commande, id_commande } = formData;
    if (!nom_client || !numero_ordre || !nom_produit || !qte_commande || !id_commande) {
      return;
    }

    console.log("Form data saved:", formData);
    navigate("/BonDeLivraison"); // Redirection après enregistrement
  };

  const handleAction = (action: string) => {
    console.log(`Action: ${action}`, formData);
    if (action === "Supprimer") {
      setFormData({
        nom_client: "",
        numero_ordre: "",
        nom_produit: "",
        qte_commande: "",
        id_commande: "",
      });
    }
  };

  return (
    <div className="min-h-screen font-abhaya">
      <div className="fixed top-0 left-0 w-full h-16 z-50">
        <HeaderG />
      </div>
      <main className="w-full max-w-5xl mx-auto flex flex-col items-center mt-12">
        {/* Titre */}
        <h1 className="text-4xl font-bold mb-12 mt-16">ENREGISTREMENT COMMANDE</h1>

        {/* Formulaire */}
        <div className="grid grid-cols-2 gap-16 items-center w-full px-8">
          {/* Champs de formulaire gauche */}
          <div className="flex flex-col space-y-6">
            <FormField
              label="Nom client"
              name="nom_client"
              value={formData.nom_client}
              onChange={handleChange}
            />
            <FormField
              label="Numéro d’ordre"
              name="numero_ordre"
              value={formData.numero_ordre}
              onChange={handleChange}
            />
            <FormField
              label="Nom du produit"
              name="nom_produit"
              value={formData.nom_produit}
              onChange={handleChange}
            />
          </div>

          {/* Champs de formulaire droite */}
          <div className="flex flex-col space-y-6">
            <FormField
              label="Qté commande"
              name="qte_commande"
              value={formData.qte_commande}
              onChange={handleChange}
            />
            <FormField
              label="Id commande"
              name="id_commande"
              value={formData.id_commande}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Boutons */}
        <div className="flex space-x-8 mt-16">
          <Button
            label="Rechercher"
            onClick={() => handleAction("Rechercher")}
            variant="secondary"
          />
          <Button label="Enregistrer" onClick={handleSave} variant="primary" />
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

export default EnregistrementCommande;
