import React, { useState } from "react";
import HeaderG from "../Components/HeaderG";
import FormField from "../Components/FormField";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom"; // Import de useNavigate pour la navigation

const Caillasses = () => {
  const [formData, setFormData] = useState({
    numero_plaque: "",
    marque: "",
    designation: "",
    tonage: "",
    numero_chassi: "",
  });

  const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAction = (action: string) => {
    console.log(`Action: ${action}`, formData);
  };

  const handleSave = () => {
    navigate("/commande");
  };

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-full h-16 z-50">
        <HeaderG />
      </div>
      <main className="w-full max-w-5xl mx-auto flex flex-col items-center mt-12">
        <h1 className="text-4xl font-bold mb-24 mt-20 font-abhaya">ENREGISTREMENT CAILLASSES</h1>

        <div className="grid grid-cols-2 gap-32 items-center w-full pl-40">
          {/* Champs de formulaire */}
          <div className="flex flex-col space-y-6 font-abhaya">
            <FormField
              label="Code caillasse"
              name="Code caillasse"
              value={formData.numero_plaque}
              onChange={handleChange}
            />
            <FormField
              label="Id client"
              name="Id client"
              value={formData.marque}
              onChange={handleChange}
            />
            <FormField
              label="Numéro commande"
              name="Numéro commande"
              value={formData.designation}
              onChange={handleChange}
            />
            <FormField
              label="Produit"
              name="Produit"
              value={formData.tonage}
              onChange={handleChange}
            />
            <FormField
              label="Tare"
              name="Tare"
              value={formData.numero_chassi}
              onChange={handleChange}
            />
            <FormField
              label="Poids bruts"
              name="Poids bruts"
              value={formData.numero_chassi}
              onChange={handleChange}
            />
            <FormField
              label="Poids nets"
              name="Poids nets"
              value={formData.numero_chassi}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-6">
            <Button label="Enregistrer" onClick={handleSave} variant="primary" />
            <Button
              label="Rechercher"
              onClick={() => handleAction("Rechercher")}
              variant="primary"
            />
            <Button
              label="Modifier"
              onClick={() => handleAction("Modifier")}
              variant="primary"
            />
            <Button
              label="Supprimer"
              onClick={() => handleAction("Supprimer")}
              variant="secondary"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Caillasses;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import HeaderG from "../Components/HeaderG";
// import FormField from "../Components/FormField";
// import Button from "../Components/Button";
// import { useNavigate } from "react-router-dom";

// const Caillasses = () => {
//   const [formData, setFormData] = useState({
//     numero_plaque: "",
//     marque: "",
//     designation: "",
//     tonage: "",
//     numero_chassi: "",
//   });
//   const [products, setProducts] = useState([]); // Liste des produits
//   const [selectedProduct, setSelectedProduct] = useState(""); // Produit sélectionné
//   const [lastClientName, setLastClientName] = useState(""); // Nom du dernier client

//   const navigate = useNavigate();

//   // Récupérer les produits depuis le backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/products");
//         setProducts(response.data);
//         console.log("Produits récupérés :", response.data);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des produits :", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = () => {
//     navigate("/commande");
//   };

//   const handleProductSelect = (sku: string) => {
//     setSelectedProduct(sku);
//     console.log("Produit sélectionné avec SKU :", sku);
//   };

//   const handleClientFetch = async () => {
//     // Exemple de requête pour récupérer le dernier client (à implémenter côté backend)
//     try {
//       const response = await axios.get("http://localhost:3001/clients/last");
//       setLastClientName(response.data.name);
//       console.log("Dernier client :", response.data.name);
//     } catch (error) {
//       console.error("Erreur lors de la récupération du dernier client :", error);
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       <div className="fixed top-0 left-0 w-full h-16 z-50">
//         <HeaderG />
//       </div>
//       <main className="w-full max-w-5xl mx-auto flex flex-col items-center mt-12">
//         <h1 className="text-4xl font-bold mb-24 mt-20 font-abhaya">ENREGISTREMENT CAILLASSES</h1>

//         <div className="grid grid-cols-2 gap-32 items-center w-full pl-40">
//           <div className="flex flex-col space-y-6 font-abhaya">
//             {/* Liste des produits */}
//             <div>
//               <label htmlFor="product" className="block mb-2 font-bold">Produit</label>
//               <select
//                 id="product"
//                 name="Produit"
//                 onChange={(e) => handleProductSelect(e.target.value)}
//                 className="border border-gray-300 p-2 rounded w-full"
//               >
//                 <option value="">Sélectionnez un produit</option>
//                 {products.map((product: any) => (
//                   <option key={product.sku} value={product.sku}>
//                     {product.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Dernier client */}
//             <FormField
//               label="Dernier client enregistré"
//               name="Dernier client"
//               value={lastClientName}
//               readOnly
//             />
//             <Button label="Récupérer le dernier client" onClick={handleClientFetch} variant="secondary" />
//           </div>

//           <div className="flex flex-col space-y-6">
//             <Button label="Enregistrer" onClick={handleSave} variant="primary" />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Caillasses;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import HeaderG from "../Components/HeaderG";
// import FormField from "../Components/FormField";
// import Button from "../Components/Button";
// import { useNavigate } from "react-router-dom";

// const Caillasses = () => {
//   const [formData, setFormData] = useState({
//     numero_plaque: "",
//     marque: "",
//     designation: "",
//     tonage: "",
//     numero_chassi: "",
//   });
//   const [products, setProducts] = useState([]); // Liste des produits
//   const [selectedProduct, setSelectedProduct] = useState(""); // Produit sélectionné
//   const [lastClientName, setLastClientName] = useState(""); // Nom du dernier client

//   const navigate = useNavigate();

//   // Récupérer les produits depuis le backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/products");
//         setProducts(response.data);
//         console.log("Produits récupérés :", response.data);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des produits :", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleSave = () => {
//     navigate("/commande");
//   };

//   const handleProductSelect = (sku: string) => {
//     setSelectedProduct(sku);
//     console.log("Produit sélectionné avec SKU :", sku);
//   };

//   const handleClientFetch = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/clients/last");
//       setLastClientName(response.data.name);
//       console.log("Dernier client :", response.data.name);
//     } catch (error) {
//       console.error("Erreur lors de la récupération du dernier client :", error);
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       <div className="fixed top-0 left-0 w-full h-16 z-50">
//         <HeaderG />
//       </div>
//       <main className="w-full max-w-5xl mx-auto flex flex-col items-center mt-12">
//         <h1 className="text-4xl font-bold mb-24 mt-20 font-abhaya">
//           ENREGISTREMENT CAILLASSES
//         </h1>

//         <div className="grid grid-cols-2 gap-32 items-center w-full pl-40">
//           <div className="flex flex-col space-y-6 font-abhaya">
//             {/* Liste des produits */}
//             <div>
//               <label htmlFor="product" className="block mb-2 font-bold">
//                 Produit
//               </label>
//               <select
//                 id="product"
//                 name="Produit"
//                 onChange={(e) => handleProductSelect(e.target.value)}
//                 className="border border-gray-300 p-2 rounded w-full"
//               >
//                 <option value="">Sélectionnez un produit</option>
//                 {products.map((product: any) => (
//                   <option key={product.sku} value={product.sku}>
//                     {product.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Dernier client */}
//             <div>
//               <FormField
//                 label="Dernier client enregistré"
//                 name="Dernier client"
//                 value={lastClientName}
//               />
//               <Button
//                 label="Récupérer le dernier client"
//                 onClick={handleClientFetch}
//                 variant="secondary"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col space-y-6">
//             <Button label="Enregistrer" onClick={handleSave} variant="primary" />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Caillasses;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import HeaderG from "../Components/HeaderG";
// import FormField from "../Components/FormField";
// import Button from "../Components/Button";
// import { useNavigate } from "react-router-dom";

// const Caillasses = () => {
//   // Suppression de formData et setFormData, inutilisés
//   const [products, setProducts] = useState([]); // Liste des produits
//   const [selectedProduct, setSelectedProduct] = useState(""); // Produit sélectionné
//   const [lastClientName, setLastClientName] = useState(""); // Nom du dernier client

//   const navigate = useNavigate();

//   // Récupérer les produits depuis le backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/products");
//         setProducts(response.data);
//         console.log("Produits récupérés :", response.data);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des produits :", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Fonction pour enregistrer les données
//   const handleSave = () => {
//     if (selectedProduct) {
//       console.log("Enregistrement avec le produit :", selectedProduct);
//       navigate("/commande");
//     } else {
//       console.warn("Aucun produit sélectionné !");
//     }
//   };

//   // Sélection d'un produit
//   const handleProductSelect = (sku: string) => {
//     setSelectedProduct(sku);
//     console.log("Produit sélectionné avec SKU :", sku);
//   };

//   // Récupération du dernier client
//   const handleClientFetch = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/clients/last");
//       setLastClientName(response.data.name);
//       console.log("Dernier client :", response.data.name);
//     } catch (error) {
//       console.error("Erreur lors de la récupération du dernier client :", error);
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       <div className="fixed top-0 left-0 w-full h-16 z-50">
//         <HeaderG />
//       </div>
//       <main className="w-full max-w-5xl mx-auto flex flex-col items-center mt-12">
//         <h1 className="text-4xl font-bold mb-24 mt-20 font-abhaya">
//           ENREGISTREMENT CAILLASSES
//         </h1>

//         <div className="grid grid-cols-2 gap-32 items-center w-full pl-40">
//           {/* Section de sélection des produits */}
//           <div className="flex flex-col space-y-6 font-abhaya">
//             <div>
//               <label htmlFor="product" className="block mb-2 font-bold">
//                 Produit
//               </label>
//               <select
//                 id="product"
//                 name="Produit"
//                 onChange={(e) => handleProductSelect(e.target.value)}
//                 className="border border-gray-300 p-2 rounded w-full"
//               >
//                 <option value="">Sélectionnez un produit</option>
//                 {products.map((product: any) => (
//                   <option key={product.sku} value={product.sku}>
//                     {product.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Section de récupération du dernier client */}
//             <div>
//               <FormField
//                 label="Dernier client enregistré"
//                 name="Dernier client"
//                 value={lastClientName}
//                 readOnly // Champ en lecture seule
//               />
//               <Button
//                 label="Récupérer le dernier client"
//                 onClick={handleClientFetch}
//                 variant="secondary"
//               />
//             </div>
//           </div>

//           {/* Section du bouton d'enregistrement */}
//           <div className="flex flex-col space-y-6">
//             <Button label="Enregistrer" onClick={handleSave} variant="primary" />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Caillasses;



