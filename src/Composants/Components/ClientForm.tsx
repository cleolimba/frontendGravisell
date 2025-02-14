// import React, { useState } from "react";
// import PhoneInput, { CountryData } from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css"; // Importation des styles nécessaires pour react-phone-input-2

// const ClientForm = () => {
//   const [formData, setFormData] = useState({
//     idClient: "",
//     matAgent: "",
//     nom: "",
//     prenom: "",
//     profession: "",
//     contact: "",
//     sexe: "",
//     adresse: "",
//   });

//   // Fonction pour gérer les changements dans les autres champs
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Fonction pour gérer les changements dans le champ de numéro de téléphone
//   const handlePhoneChange = (value: string, country: {} | CountryData) => {
//     if (isCountryData(country)) {
//       // Validation du nombre maximal de chiffres autorisés pour chaque pays
//       const maxLength = getMaxLengthForCountry(country.dialCode); // Longueur maximale pour le pays
//       const numberWithoutDialCode = value.replace(`+${country.dialCode}`, ""); // Exclure le code pays
//       if (numberWithoutDialCode.length <= maxLength) {
//         setFormData({ ...formData, contact: value });
//       }
//     }
//   };

//   // Fonction pour vérifier si le pays est bien de type CountryData
//   const isCountryData = (country: {} | CountryData): country is CountryData => {
//     return (country as CountryData).dialCode !== undefined;
//   };

//   // Fonction pour définir la longueur maximale par pays
//   const getMaxLengthForCountry = (dialCode: string) => {
//     // Configuration des longueurs maximales par code pays
//     const countryLengths: { [dialCode: string]: number } = {
//       "243": 9, // Congo RDC
//       "33": 9,  // France
//       "1": 10,  // États-Unis/Canada
//       // Ajoutez d'autres pays et leurs longueurs ici si nécessaire
//     };
//     return countryLengths[dialCode] || 10; // Valeur par défaut à 10 si le pays n'est pas défini
//   };

//   return (
//     <form className="max-w-4xl mx-auto mt-12">
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
//               value={formData.idClient}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-gray-800 font-abhaya"
//             />
//           </div>

//           <div className="mt-8">
//             <label className="block text-lg mb-2 font-abhaya">Mat. Agent</label>
//             <input
//               type="text"
//               name="matAgent"
//               value={formData.matAgent}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-gray-800 font-abhaya"
//             />
//           </div>

//           <div className="mt-8">
//             <label className="block text-lg mb-2 font-abhaya">Nom</label>
//             <input
//               type="text"
//               name="nom"
//               value={formData.nom}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-gray-800 font-abhaya"
//             />
//           </div>

//           <div className="mt-8">
//             <label className="block text-lg mb-2 font-abhaya">Prénom</label>
//             <input
//               type="text"
//               name="prenom"
//               value={formData.prenom}
//               onChange={handleChange}
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
//               value={formData.profession}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-gray-800 font-abhaya"
//             />
//           </div>

//           <div className="mt-8">
//             <label className="block text-lg mb-2 font-abhaya">Contact</label>
//             {/* Champ pour numéro de téléphone avec styles personnalisés */}
//             <PhoneInput
//               country={"cd"} // Par défaut, Congo RDC
//               value={formData.contact}
//               onChange={(value, country) => handlePhoneChange(value, country)}
//               inputProps={{
//                 name: "contact",
//                 required: true,
//               }}
//               placeholder="Saisir votre numéro de téléphone"
//               inputClass="font-abhaya" // Classe CSS personnalisée
//               inputStyle={{
//                 width: "100%", // Largeur du champ
//                 paddingLeft : "50px",
//                 borderRadius: "5px", // Coins arrondis
//                 fontSize: "16px", // Taille de la police
//                 backgroundColor: "#gray-800", // Couleur de fond
//                 border: "1px solid #000", // Bordure noire
//               }}
//               containerStyle={{
//                 border: "1px solid #ddd", // Bordure grise
//                 borderRadius: "5px", // Coins arrondis
//               }}
//               buttonStyle={{
//                 backgroundColor: "transparent", // Fond transparent pour le bouton du drapeau
//                 border: "1px solid #000", // Pas de bordure
//               }}
//             />
//           </div>

//           <div className="mt-8">
//             <label className="block text-lg mb-2 font-abhaya">Sexe</label>
//             <select
//               name="sexe"
//               value={formData.sexe}
//               onChange={handleChange}
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
//               value={formData.adresse}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-gray-800 font-abhaya"
//             />
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default ClientForm;

import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface ClientFormProps {
  formData: {
    idClient: string;
    matAgent: string;
    nom: string;
    prenom: string;
    profession: string;
    contact: string;
    sexe: string;
    adresse: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onPhoneChange: (value: string) => void;
}

const ClientForm: React.FC<ClientFormProps> = ({ formData, onChange, onPhoneChange }) => {
  return (
    <form className="max-w-4xl mx-auto mt-12">
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
              value={formData.idClient}
              onChange={onChange}
              className="w-full p-2 rounded bg-gray-800 font-abhaya"
              disabled
            />
          </div>

          <div className="mt-8">
            <label className="block text-lg mb-2 font-abhaya">Mat. Agent</label>
            <input
              type="text"
              name="matAgent"
              value={formData.matAgent}
              onChange={onChange}
              className="w-full p-2 rounded bg-gray-800 font-abhaya"
            />
          </div>

          <div className="mt-8">
            <label className="block text-lg mb-2 font-abhaya">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={onChange}
              className="w-full p-2 rounded bg-gray-800 font-abhaya"
            />
          </div>

          <div className="mt-8">
            <label className="block text-lg mb-2 font-abhaya">Prénom</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={onChange}
              className="w-full p-2 rounded bg-gray-800 font-abhaya"
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
              value={formData.profession}
              onChange={onChange}
              className="w-full p-2 rounded bg-gray-800 font-abhaya"
            />
          </div>

          <div className="mt-8">
            <label className="block text-lg mb-2 font-abhaya">Contact</label>
            <PhoneInput
              country={"cd"}
              value={formData.contact}
              onChange={onPhoneChange}
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
              value={formData.sexe}
              onChange={onChange}
              className="w-full p-2 rounded bg-gray-800 font-abhaya"
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
              value={formData.adresse}
              onChange={onChange}
              className="w-full p-2 rounded bg-gray-800 font-abhaya"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ClientForm;
