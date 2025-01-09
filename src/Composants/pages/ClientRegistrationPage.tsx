import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Pour la navigation
import HeaderG from "../Components/HeaderG";
import ClientForm from "../Components/ClientForm";
import Button from "../Components/Button";

const ClientRegistrationPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // Hook pour gérer la navigation

  useEffect(() => {
    // Simule un délai pour le chargement (par exemple, 2 secondes)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);

  // Gestion du bouton "Enregistrer"
  const handleSave = () => {
    navigate("/camion"); // Redirige vers la page "Camion"
  };

  // Gestion du bouton "Annuler"
  const handleCancel = () => {
    window.location.reload(); // Rafraîchit la page actuelle
  };

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
          <h1 className="text-3xl font-bold">Bienvenue dans votre espace !</h1>
        </div>
      ) : (
        <>
          <div className="fixed top-0 left-0 w-full z-50">
            <HeaderG />
          </div>
          <main className="container mx-auto px-4">
            {/* Formulaire client */}
            <ClientForm />

            {/* Boutons en dessous du formulaire */}
            <div className="flex justify-center gap-16 mt-12">
              <Button label="Enregistrer" onClick={handleSave} variant="primary" />
              <Button label="Annuler" onClick={handleCancel} variant="secondary" />
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default ClientRegistrationPage;
