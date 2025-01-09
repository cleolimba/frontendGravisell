import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderG from "../Components/HeaderG";
import FormField from "../Components/FormField";
import ProductRow from "../Components/ProductRow";
import Button from "../Components/Button";

const BonDeLivraison: React.FC = () => {
  const navigate = useNavigate(); // Utilisation du hook useNavigate pour la navigation
  const [formData, setFormData] = useState({
    client_chantier: "",
    chauffeur: "",
    numero_materiel: "",
    numero_plaque: "",
    niveau_gasoil: "",
    numero_auto_charg: "",
    date: "",
    numero_bdc: "",
    date_bdc: "",
    heure_entree: "",
    heure_sortie: "",
    produit: "",
    tare: "",
    poids_brut: "",
    poids_net: "",
    reste_a_livrer: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log("Form data saved:", formData);
    navigate("/Caisse"); // Redirection après enregistrement
  };

  const handleAction = (action: string) => {
    console.log(`Action: ${action}`, formData);
  };

  return (
    <div className="min-h-screen font-abhaya">
      {/* Header fixe */}
      <div className="fixed top-0 w-full z-50">
        <HeaderG />
      </div>

      {/* Contenu principal avec un padding pour éviter que le header cache les éléments */}
      <main className="w-full max-w-6xl mx-auto flex flex-col items-center mt-32">
        {/* Titre */}
        <h1 className="text-4xl font-bold mb-12">BON DE LIVRAISON</h1>

        {/* Formulaire */}
        <div className="grid grid-cols-2 gap-16 w-full px-8">
          {/* Colonne gauche */}
          <div className="flex flex-col space-y-6">
            <FormField
              label="Client/Chantier"
              name="client_chantier"
              value={formData.client_chantier}
              onChange={handleChange}
            />
            <FormField
              label="Chauffeur"
              name="chauffeur"
              value={formData.chauffeur}
              onChange={handleChange}
            />
            <FormField
              label="N° Matériel"
              name="numero_materiel"
              value={formData.numero_materiel}
              onChange={handleChange}
            />
            <FormField
              label="N° Plaque"
              name="numero_plaque"
              value={formData.numero_plaque}
              onChange={handleChange}
            />
            <FormField
              label="Niveau gasoil"
              name="niveau_gasoil"
              value={formData.niveau_gasoil}
              onChange={handleChange}
            />
            <FormField
              label="N° Auto de Charg"
              name="numero_auto_charg"
              value={formData.numero_auto_charg}
              onChange={handleChange}
            />
          </div>

          {/* Colonne droite */}
          <div className="flex flex-col space-y-6">
            <FormField
              label="Date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <FormField
              label="N° Réquisition/BDC"
              name="numero_bdc"
              value={formData.numero_bdc}
              onChange={handleChange}
            />
            <FormField
              label="Date réquisition/BDC"
              name="date_bdc"
              value={formData.date_bdc}
              onChange={handleChange}
            />
            <FormField
              label="Heure-Entrée"
              name="heure_entree"
              value={formData.heure_entree}
              onChange={handleChange}
            />
            <FormField
              label="Heure-Sortie"
              name="heure_sortie"
              value={formData.heure_sortie}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Tableau des produits */}
        <div className="w-full mt-12 px-8">
          {/* En-têtes */}
          <div className="grid grid-cols-5 gap-4 text-center border-b border-white py-2">
            <span>Produit</span>
            <span>Tare</span>
            <span>Poids brut</span>
            <span>Poids net</span>
            <span>Rester à livrer</span>
          </div>
          {/* Ligne des produits */}
          <ProductRow
            produit={formData.produit}
            tare={formData.tare}
            poidsBrut={formData.poids_brut}
            poidsNet={formData.poids_net}
            resteALivrer={formData.reste_a_livrer}
            handleChange={handleChange}
          />
        </div>

        {/* Pied du formulaire */}
        <div className="w-full grid grid-cols-4 gap-8 text-center mt-12">
          <span>Pour réception</span>
          <span>Sécurité</span>
          <span>Livré par:</span>
          <span>VISA</span>
        </div>

        {/* Boutons */}
        <div className="flex space-x-8 mt-16">
          <Button label="Enregistrer" onClick={handleSave} variant="primary" />
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

export default BonDeLivraison;
