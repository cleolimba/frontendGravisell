import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faRightToBracket, faBars, faTimes, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const HeaderG = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Mode sombre activé par défaut
  const [currentLanguage, setCurrentLanguage] = useState<"fr" | "en">("fr"); // Langue par défaut : français

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Traductions pour chaque langue
  const translations = {
    fr: [
      { name: "Autorisation de chargement", path: "/chargement" },
      { name: "Bon de livraison", path: "/BonDeLivraison" },
      { name: "Bon de recette", path: "/bonRecette" },
      { name: "Caisse", path: "/caisse" },
      { name: "Caillasses", path: "/caillasses" },
      { name: "Camion", path: "/camion" },
      { name: "Client", path: "/client" },
      { name: "Commande", path: "/commande" },
      { name: "Paramètre", path: "/parametre" },
      { name: "Rapport analyse", path: "/rapportAnalyse" },
      { name: "Profil utilisateur", path: "/profilUtilisateur" },
    ],
    en: [
      { name: "Loading Authorization", path: "/chargement" },
      { name: "Delivery Note", path: "/BonDeLivraison" },
      { name: "Receipt Note", path: "/bonRecette" },
      { name: "Cash", path: "/caisse" },
      { name: "Gravels", path: "/caillasses" },
      { name: "Truck", path: "/camion" },
      { name: "Client", path: "/client" },
      { name: "Order", path: "/commande" },
      { name: "Settings", path: "/parametre" },
      { name: "Analysis Report", path: "/rapportAnalyse" },
      { name: "User Profile", path: "/profilUtilisateur" },
    ],
  };

  // Rubriques affichées en fonction de la langue actuelle
  const rubriques = translations[currentLanguage];

  // Fonction pour basculer la langue
  const toggleLanguage = () => {
    setCurrentLanguage((prevLanguage) => (prevLanguage === "fr" ? "en" : "fr"));
  };

  return (
    <div>
      <header className="bg-white text-black dark:bg-black dark:text-white flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo/logo2 1.png" // Remplacez par le chemin réel de votre logo
            alt="Logo Gravisell"
            className="h-12 mr-4"
          />
        </div>

        {/* Recherche et Boutons */}
        <div className="flex items-center gap-6">
          {/* Icône de recherche */}
          <button className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5" />
          </button>

          {/* Bouton Menu */}
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="flex items-center gap-2 bg-blue-500 text-white dark:bg-blue-600 dark:text-gray-200 px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-800"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-5 w-5" />
              <span>{currentLanguage === "fr" ? "Menu" : "Menu"}</span>
            </button>
            {isMenuOpen && (
              <div className="absolute top-12 right-0 bg-gray-100 text-black dark:bg-gray-800 dark:text-white rounded shadow-lg w-56 z-10">
                <ul>
                  {rubriques.map((rubrique) => (
                    <li key={rubrique.name} className="border-b border-gray-200 dark:border-gray-600">
                      <Link
                        to={rubrique.path}
                        className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {rubrique.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Bouton pour changer la langue */}
          <button
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-black rounded hover:bg-gray-700 dark:hover:bg-gray-300"
            onClick={toggleLanguage}
          >
            <FontAwesomeIcon icon={faGlobe} className="h-5 w-5" />
            <span>{currentLanguage === "fr" ? "FR" : "EN"}</span>
          </button>

          {/* Bouton pour changer le thème */}
          <button
            className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white dark:bg-gray-200 dark:text-black rounded-full focus:outline-none"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>

          {/* Bouton Déconnexion */}
          <button className="bg-blue-500 text-white dark:bg-blue-600 dark:text-gray-200 p-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-800">
            <FontAwesomeIcon icon={faRightToBracket} className="h-5 w-5" />
          </button>
        </div>
      </header>
      <hr className="border-gray-300 dark:border-gray-600" />
    </div>
  );
};

export default HeaderG;
