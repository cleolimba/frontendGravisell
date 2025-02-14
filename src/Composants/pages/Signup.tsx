
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button"; // Bouton réutilisable
// import Form from "../Components/Form"; // Formulaire réutilisable
import HeaderG from "../Components/HeaderG"; // En-tête générique
import axios from "axios"; // Pour les requêtes HTTP
import { FormEvent, useState } from "react"; // Gestion des états et des événements
import BACKEND_URL from "../../config"; // URL de votre backend
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// Interface pour les données d'inscription
interface InscriptionData {
  nom: string;
  prenom: string;
  email: string;
  role: string;
  password: string;
  confirmation_mot_de_passe: string;
  sexe: string;
}

const SignupPage = () => {
  const navigate = useNavigate(); // Hook pour la navigation
  const [error, setError] = useState<string | null>(null); // Gestion des erreurs
  const [loading, setLoading] = useState<boolean>(false)
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState<InscriptionData>({
    nom: "",
    prenom: "",
    email: "",
    role: "Administrateur",
    password: "",
    confirmation_mot_de_passe: "",
    sexe: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const inscriptionData: InscriptionData = {
      nom: data.get("nom")?.toString() || "",
      prenom: data.get("prenom")?.toString() || "",
      email: data.get("email")?.toString() || "",
      role: data.get("role")?.toString() || "",
      password: data.get("password")?.toString() || "",
      confirmation_mot_de_passe: data.get("confirmation_mot_de_passe")?.toString() || "",
      sexe: data.get("sexe")?.toString() || ""
    };

    // Validation basique
    if (formData.password !== formData.confirmation_mot_de_passe) {
      console.log(formData.password)
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      // Requête d'inscription vers le backend
      setLoading(true)
      console.log(`${BACKEND_URL}/signup`, data)
      const response = await axios.post(`${BACKEND_URL}/signup`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Inscription réussie :", response.data);
      setLoading(false)
      // Redirection vers la page de connexion avec un paramètre
      navigate(`/connexion?nom=${inscriptionData.nom}`);
    } catch (error: any) {
      console.error("Erreur lors de l'inscription :", error);
      setLoading(false)
      setError(error.response?.data?.message || "Une erreur est survenue.");
    }
    console.log("Form submitted:", inscriptionData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    //console.log("setting form data", { ...formData, [name]: value });
     
    setFormData({
      ...formData, 
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* En-tête */}
      <div className="fixed top-0 left-0 w-full h-16 z-50">
        <HeaderG />
      </div>

      {/* Contenu principal */}
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-light text-center mt-24 font-abhaya">
          S'INSCRIRE
        </h1>

        {/* Message d'erreur */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {loading && <p>Loading...</p>}

        {/* Formulaire d'inscription */}
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
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Nom"
                  className="w-full px-2 py-2 rounded bg-gray-800"
                />
              </div>

              <div className="space-y-2 mt-8">
                <label htmlFor="prenom" className="block text-lg">
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  placeholder="Prénom"
                  className="w-full px-2 py-2 rounded bg-gray-800"
                />
              </div>

              <div className="mt-8">
                <label className="block text-lg mb-2 font-abhaya">Sexe</label>
                <select
                  name="sexe"
                  id="sexe"
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
                    <option value="admininistrateur">Administrateur</option>
                    <option value="receptionniste">Réceptionniste</option>
                    <option value="livreur">Livreur</option>
                    <option value="caissier">Caissier</option>
                    <option value="chargeur">Chargeur</option>
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
                <label htmlFor="confirmation_mot_de_passe" className="block text-lg">
                  Confirmation mot de passe
                </label>
                <div className="relative">
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    id="confirmation_mot_de_passe"
                    name="confirmation_mot_de_passe"
                    value={formData.confirmation_mot_de_passe}
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
            <Button label="S'inscrire" variant="primary" type="submit" />
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignupPage;

