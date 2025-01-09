import { useNavigate } from "react-router-dom"; // Pour naviguer entre les pages
import Button from "../Components/Button";
import Form from "../Components/Form";
import HeaderG from "../Components/HeaderG";
import axios from "axios";
import { FormEvent } from "react";

// Interface pour les données d'inscription
interface InscriptionData {
  nom: string;
  prenom: string;
  email_adress: string;
  role: string;
  mot_de_passe: string;
  confirm_mot_de_passe: string;
}

const SignupPage = () => {
  const navigate = useNavigate();

  // Fonction de validation (simulée pour cet exemple)
  const validateForm = () => {
    return true; // Simule une validation réussie
  };

  const handleSignup = () => {
    if (validateForm()) {
      console.log("Inscription réussie");
      navigate("/connexion");
    } else {
      console.log("Validation échouée");
    }
  };

  const recuperationInscription = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le rechargement de la page par défaut

    const formData = new FormData(event.currentTarget); // Récupère les valeurs du formulaire

    const data: InscriptionData = {
      nom: formData.get("nom") as string,
      prenom: formData.get("prenom") as string,
      email_adress: formData.get("email_adress") as string,
      role: formData.get("role") as string,
      mot_de_passe: formData.get("mot_de_passe") as string,
      confirm_mot_de_passe: formData.get("confirm_mot_de_passe") as string,
    };

    try {
      axios.post("http://localhost:3333/connexion-admin", data).then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={recuperationInscription}>
      <div className="min-h-screen">
        <div className="fixed top-0 left-0 w-full h-16 z-50">
          <HeaderG />
        </div>
        <main className="container mx-auto px-4">
          <h1 className="text-4xl font-light text-center mt-24 font-abhaya">
            S'INSCRIRE
          </h1>
          <Form />
          <div className="flex justify-center mt-20">
            <Button
              label="S'inscrire"
              onClick={handleSignup}
              variant="primary"
            />
          </div>
        </main>
      </div>
    </form>
  );
};

export default SignupPage;
