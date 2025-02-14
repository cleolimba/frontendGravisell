// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom"; // Pour la navigation
// // import HeaderG from "../Components/HeaderG";
// // import ClientForm from "../Components/ClientForm";
// // import Button from "../Components/Button";

// // const ClientRegistrationPage = () => {
// //   const [isLoading, setIsLoading] = useState(true);
// //   const navigate = useNavigate(); // Hook pour gérer la navigation

// //   useEffect(() => {
// //     // Simule un délai pour le chargement (par exemple, 2 secondes)
// //     const timer = setTimeout(() => {
// //       setIsLoading(false);
// //     }, 2000);

// //     return () => clearTimeout(timer); // Nettoyage du timer
// //   }, []);

// //   // Gestion du bouton "Enregistrer"
// //   const handleSave = () => {
// //     navigate("/camion"); // Redirige vers la page "Camion"
// //   };

// //   // Gestion du bouton "Annuler"
// //   const handleCancel = () => {
// //     window.location.reload(); // Rafraîchit la page actuelle
// //   };

// //   return (
// //     <div className="min-h-screen">
// //       {isLoading ? (
// //         <div className="min-h-screen flex flex-col items-center justify-center gap-6">
// //           <h1 className="text-3xl font-bold">Bienvenue dans votre espace !</h1>
// //         </div>
// //       ) : (
// //         <>
// //           <div className="fixed top-0 left-0 w-full z-50">
// //             <HeaderG />
// //           </div>
// //           <main className="container mx-auto px-4">
// //             {/* Formulaire client */}
// //             <ClientForm />

// //             {/* Boutons en dessous du formulaire */}
// //             <div className="flex justify-center gap-16 mt-12">
// //               <Button label="Enregistrer" onClick={handleSave} variant="primary" />
// //               <Button label="Annuler" onClick={handleCancel} variant="secondary" />
// //             </div>
// //           </main>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default ClientRegistrationPage;

// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";  // Assure-toi d'avoir installé axios : npm install axios
// // import HeaderG from "../Components/HeaderG";
// // import ClientForm from "../Components/ClientForm";
// // import Button from "../Components/Button";

// // const ClientRegistrationPage = () => {
// //   const [isLoading, setIsLoading] = useState(true);
// //   const navigate = useNavigate();

// //   // État pour stocker les informations du client
// //   const [clientData, setClientData] = useState({
// //     nom: "",
// //     prenom: "",
// //     sexe: "",
// //     email: "",
// //     mot_de_passe: "",
// //     confirmation_mot_de_passe: "",
// //     adresse: "",
// //     role: "",
// //     contact: "",
// //     matricule_agent: "",
// //   });

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setIsLoading(false);
// //     }, 2000);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   // Fonction pour capturer les changements dans le formulaire
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setClientData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   // Envoi des données au backend lors du clic sur "Enregistrer"
// //   const handleSave = async () => {
// //     try {
// //       const response = await axios.post("http://localhost:3333/clients", clientData);
// //       console.log("Client enregistré avec succès :", response.data);
// //       navigate("/camion"); // Redirection après l'enregistrement
// //     } catch (error) {
// //       console.error("Erreur lors de l'enregistrement du client :", error);
// //     }
// //   };

// //   const handleCancel = () => {
// //     window.location.reload();
// //   };

// //   return (
// //     <div className="min-h-screen">
// //       {isLoading ? (
// //         <div className="min-h-screen flex flex-col items-center justify-center gap-6">
// //           <h1 className="text-3xl font-bold">Bienvenue dans votre espace !</h1>
// //         </div>
// //       ) : (
// //         <>
// //           <div className="fixed top-0 left-0 w-full z-50">
// //             <HeaderG />
// //           </div>
// //           <main className="container mx-auto px-4">
// //             {/* Formulaire client */}
// //             <ClientForm formData={clientData} onChange={handleInputChange} />

// //             {/* Boutons en dessous du formulaire */}
// //             <div className="flex justify-center gap-16 mt-12">
// //               <Button label="Enregistrer" onClick={handleSave} variant="primary" />
// //               <Button label="Annuler" onClick={handleCancel} variant="secondary" />
// //             </div>
// //           </main>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default ClientRegistrationPage;

// import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios"; // Importation d'Axios pour les requêtes API
// import HeaderG from "../Components/HeaderG";
// import PhoneInput from "react-phone-input-2";
// import Button from "../Components/Button";
// // import ClientForm from "../Components/ClientForm";
// // import Button from "../Components/Button";

// const ClientRegistrationPage = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   // const [formData, setFormData] = useState({
//   //   idClient: "",
//   //   matAgent: "",
//   //   nom: "",
//   //   prenom: "",
//   //   profession: "",
//   //   contact: "",
//   //   sexe: "",
//   //   adresse: "",
//   // });

//   const [matAgent, setMatAgent] = useState('');
//   const [nom, setNom] = useState('');
//   const [prenom, setPrenom] = useState('');
//   const [profession, setProfession] = useState('');
//   const [contact, setContact] = useState('');
//   const [sexe, setSexe] = useState('');
//   const [adresse, setAdresse] = useState('');

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();

//   //   const formData = {
//   //     idClient: `CLI-${Date.now()}`,
//   //     matAgent,
//   //     nom,
//   //     prenom,
//   //     profession,
//   //     contact,
//   //     sexe,
//   //     adresse,
//   //   };
//   //   console.log(formData)

//   //   async function obtenirClients() {
//   //     try {
//   //       const reponse = await fetch('http://localhost:3333/clients', {
//   //         method: 'POST',
//   //         headers: {
//   //           'Content-Type': 'application/json'
//   //         },
//   //         body: JSON.stringify(formData)
//   //       });
        
//   //       if (!reponse.ok) {
//   //         throw new Error('Erreur dans la requête POST');
//   //       }

//   //       const donnees = await reponse.json();
//   //       console.log(donnees);
//   //     } catch (erreur) {
//   //       console.error('Il y a eu une erreur:', erreur);
//   //       alert("erreur lors d'enregistrement")
//   //     }
//   //   }
    
//   //   obtenirClients(); // Appeler la fonction pour exécuter la requête
    
//   //   // try {
//   //   //   const response = await axios.post('http://localhost:3333/clients', formData, {
//   //   //     headers: { 'Content-Type': 'application/json' },
//   //   //   });
//   //   //   alert('Client enregistré avec succès!');
//   //   //   console.log(response.data);
//   //   // } catch (error) {
//   //   //   alert('Erreur lors de l’enregistrement du client');
//   //   //   console.error(error);
//   //   // }
//   // };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     const formData = {
//       idClient: `CLI-${Date.now()}`,
//       matAgent,
//       nom,
//       prenom,
//       profession,
//       contact,
//       sexe,
//       adresse,
//     };
  
//     try {
//       const response = await fetch('http://localhost:3333/clients', {
//         method: 'POST',  // Utilisez POST pour envoyer des données
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),  // Convertir formData en chaîne JSON
//       });
  
//       if (!response.ok) {
//         throw new Error('Erreur lors de l’enregistrement');
//       }
  
//       const data = await response.json();
//       console.log(data);
//       alert('Client enregistré avec succès!');
//     } catch (error) {
//       console.error('Il y a eu une erreur:', error);
//       alert("Erreur lors de l'enregistrement");
//     }
//   };
  

//   // const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   // Gérer les changements dans le formulaire
//   // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//   //   const { name, value } = e.target;
//   //   setFormData({ ...formData, [name]: value });
//   // };

//   // Gérer les changements du numéro de téléphone
//   // const handlePhoneChange = (value: string) => {
//   //   setFormData({ ...formData, contact: value });
//   // };

//   // Gestion de l'enregistrement
//   // const handleSave = async () => {
//   //   try {
//   //     await axios.post("http://localhost:3333/clients", formData);
//   //     navigate("/camion");  // Redirection après succès
//   //   } catch (error) {
//   //     console.error("Erreur lors de l'enregistrement du client:", error);
//   //     alert("Échec de l'enregistrement. Veuillez réessayer.");
//   //   }
//   // };

//   // const handleCancel = () => {
//   //   window.location.reload();
//   // };

//   return (
//     <div className="min-h-screen">
//       {isLoading ? (
//         <div className="min-h-screen flex flex-col items-center justify-center gap-6">
//           <h1 className="text-3xl font-bold">Bienvenue dans votre espace !</h1>
//         </div>
//       ) : (
//         <>
//           <div className="fixed top-0 left-0 w-full z-50">
//             <HeaderG />
//           </div>
//           <main className="container mx-auto px-4">
//             {/* Passer les handlers au formulaire */}
//             {/* <ClientForm 
//               formData={formData} 
//               onChange={handleChange} 
//               onPhoneChange={handlePhoneChange} 
//             /> */}

// <form className="max-w-4xl mx-auto mt-12"  onSubmit={handleSubmit}>
//       <h1 className="text-center text-4xl font-bold mb-24 mt-24 font-abhaya">
//         ENREGISTREMENT CLIENT
//       </h1>
//       <div className="grid grid-cols-2 gap-40">
//         {/* Champs gauche */}
//         <div>
//           <div>
//             <label className="block text-lg mb-2 font-abhaya">Id Client</label>
//             <input
//               type="text"
//               name="idClient"
//               // value={formData.idClient}
//               // onChange={onChange}
//               className="w-full p-2 rounded bg-gray-800 font-abhaya"
//               disabled
//             />
//           </div>

//           <div className="mt-8">
//             <label className="block text-lg mb-2 font-abhaya">Mat. Agent</label>
//             <input
//               type="text"
//               name="matAgent"
//               value={matAgent}
//               onChange={(e) => setMatAgent(e.target.value)} 
//               placeholder="Matricule Agent"
//               className="w-full p-2 rounded bg-gray-800 font-abhaya"
//             />
//           </div>

//           <div className="mt-8">
//             <label className="block text-lg mb-2 font-abhaya">Nom</label>
//             <input
//               type="text"
//               name="nom"
//               value={nom}
//               onChange={(e) => setNom(e.target.value)} placeholder="Nom" 
//               className="w-full p-2 rounded bg-gray-800 font-abhaya"
//             />
//           </div>

//           <div className="mt-8">
//             <label className="block text-lg mb-2 font-abhaya">Prénom</label>
//             <input
//               type="text"
//               name="prenom"
//               value={prenom}
//               onChange={(e) => setPrenom(e.target.value)} placeholder="Prénom"
//               className="w-full p-2 rounded bg-gray-800 font-abhaya"
//             />
//           </div>
//         </div>

//         {/* Champs droit */}
//         <div>
//           <div>
//             <label className="block text-lg mb-2 font-abhaya">Profession</label>
//             <input
//               type="text"
//               name="profession"
//               value={profession}
//               onChange={(e) => setProfession(e.target.value)} placeholder="Profession" 
//               className="w-full p-2 rounded bg-gray-800 font-abhaya"
//             />
//           </div>

//           <div className="mt-8">
//             <label className="block text-lg mb-2 font-abhaya">Contact</label>
//             <PhoneInput
//               country={"cd"}
//               value={contact}
//               onChange={(value) => setContact(value)}
//               inputProps={{
//                 name: "contact",
//                 required: true,
//               }}
//               inputClass="font-abhaya"
//               inputStyle={{
//                 width: "100%",
//                 paddingLeft: "50px",
//                 borderRadius: "5px",
//                 fontSize: "16px",
//                 backgroundColor: "#gray-800",
//                 border: "1px solid #000",
//               }}
//             />
//           </div>

//           <div className="mt-8">
//             <label className="block text-lg mb-2 font-abhaya">Sexe</label>
//             <select
//               name="sexe"
//               value={sexe}
//               onChange={(e) => setSexe(e.target.value)}
//               className="w-full p-2 rounded bg-gray-800 font-abhaya"
//             >
//               <option value="">Choisir...</option>
//               <option value="male">Masculin</option>
//               <option value="female">Féminin</option>
//             </select>
//           </div>

//           <div className="mt-8">
//             <label className="block text-lg mb-2 font-abhaya">Adresse</label>
//             <input
//               type="text"
//               name="adresse"
//               value={adresse}
//               onChange={(e) => setAdresse(e.target.value)} placeholder="Adresse" 
//               className="w-full p-2 rounded bg-gray-800 font-abhaya"
//             />
//           </div>
//         </div>
//       </div>
//     <div className="flex justify-center gap-16 mt-12">
//               <Button label="Enregistrer"  variant="primary"  type="submit"/>
//               <Button label="Annuler" variant="secondary" />
//             </div>
      
//     </form>
//             {/* <div className="flex justify-center gap-16 mt-12">
//               <Button label="Enregistrer" onClick={handleSave} variant="primary" />
//               <Button label="Annuler" onClick={handleCancel} variant="secondary" />
//             </div> */}
//           </main>
//         </>
//       )}
//     </div>
//   );
// };

// export default ClientRegistrationPage;






import  { useState, FormEvent } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import { Client } from '../../types/Client';
import Button from '../Components/Button';


function App() {
  const [matAgent, setMatAgent] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [profession, setProfession] = useState('');
  const [contact, setContact] = useState('');
  const [sexe, setSexe] = useState('');
  const [adresse, setAdresse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const clientData: Client = {
      matAgent,
      nom,
      prenom,
      profession,
      contact,
      sexe,
      adresse
    };

    console.log(clientData);
    

    try {
      const response = await axios.post('http://localhost:3333/client', clientData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        // Réinitialiser le formulaire
        setMatAgent('');
        setNom('');
        setPrenom('');
        setProfession('');
        setContact('');
        setSexe('');
        setAdresse('');
        
        alert('Client enregistré avec succès!');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      // console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <form className="max-w-4xl mx-auto mt-12" onSubmit={handleSubmit}>
        <h1 className="text-center text-4xl font-bold mb-24 mt-24 font-abhaya">
          ENREGISTREMENT CLIENT
        </h1>
        <div className="grid grid-cols-2 gap-40">
          {/* Champs gauche */}
          <div>
            <div>
              <label className="block text-lg mb-2 font-abhaya">Id Client</label>
              <input
                type="text"
                name="idClient"
                className="w-full p-2 rounded bg-gray-800 font-abhaya"
                disabled
              />
            </div>

            <div className="mt-8">
              <label className="block text-lg mb-2 font-abhaya">Mat. Agent</label>
              <input
                type="text"
                name="matAgent"
                value={matAgent}
                onChange={(e) => setMatAgent(e.target.value)}
                placeholder="Matricule Agent"
                className="w-full p-2 rounded bg-gray-800 font-abhaya"
                required
              />
            </div>

            <div className="mt-8">
              <label className="block text-lg mb-2 font-abhaya">Nom</label>
              <input
                type="text"
                name="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Nom"
                className="w-full p-2 rounded bg-gray-800 font-abhaya"
                required
              />
            </div>

            <div className="mt-8">
              <label className="block text-lg mb-2 font-abhaya">Prénom</label>
              <input
                type="text"
                name="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                placeholder="Prénom"
                className="w-full p-2 rounded bg-gray-800 font-abhaya"
                required
              />
            </div>
          </div>

          {/* Champs droit */}
          <div>
            <div>
              <label className="block text-lg mb-2 font-abhaya">Profession</label>
              <input
                type="text"
                name="profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                placeholder="Profession"
                className="w-full p-2 rounded bg-gray-800 font-abhaya"
                required
              />
            </div>

            <div className="mt-8">
              <label className="block text-lg mb-2 font-abhaya">Contact</label>
              <PhoneInput
                country={"cd"}
                value={contact}
                onChange={(value) => setContact(value)}
                inputProps={{
                  name: "contact",
                  required: true,
                }}
                inputClass="font-abhaya"
                inputStyle={{
                  width: "100%",
                  paddingLeft: "50px",
                  borderRadius: "5px",
                  fontSize: "16px",
                  backgroundColor: "#gray-800",
                  border: "1px solid #000",
                }}
              />
            </div>

            <div className="mt-8">
              <label className="block text-lg mb-2 font-abhaya">Sexe</label>
              <select
                name="sexe"
                value={sexe}
                onChange={(e) => setSexe(e.target.value)}
                className="w-full p-2 rounded bg-gray-800 font-abhaya"
                required
              >
                <option value="">Choisir...</option>
                <option value="male">Masculin</option>
                <option value="female">Féminin</option>
              </select>
            </div>

            <div className="mt-8">
              <label className="block text-lg mb-2 font-abhaya">Adresse</label>
              <input
                type="text"
                name="adresse"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                placeholder="Adresse"
                className="w-full p-2 rounded bg-gray-800 font-abhaya"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-16 mt-12">
          <Button 
            label={loading ? "Enregistrement..." : "Enregistrer"}
            variant="primary"
            type="submit"
            // disabled={loading}
          />
          <Button 
            label="Annuler" 
            variant="secondary" 
            type="button"
            onClick={() => {
              setMatAgent('');
              setNom('');
              setPrenom('');
              setProfession('');
              setContact('');
              setSexe('');
              setAdresse('');
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
