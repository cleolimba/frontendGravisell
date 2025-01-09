import { useState } from "react";
// import { BellIcon, BellSlashIcon } from "@heroicons/react/24/outline";
import HeaderG from "../Components/HeaderG";

const Parametre = () => {
  const [selectedParam, setSelectedParam] = useState<string | null>(null);

  // États pour gérer les paramètres
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState<boolean>(true);
  const [isHistoryEnabled, setIsHistoryEnabled] = useState<boolean>(false);
  const [isMailAlertEnabled, setIsMailAlertEnabled] = useState<boolean>(true);
  const [isSauvegardeEnabled, setIsSauvegardeEnabled] = useState<boolean>(false);
  const [isMiseAJourEnabled, setIsMiseAJourEnabled] = useState<boolean>(false);

  const parameters = [
    {
      id: "security",
      title: "Sécurité",
      description: {
        active: "La double authentification est activée. Vous devez entrer un code de sécurité en plus de votre mot de passe pour accéder à votre compte, renforçant ainsi la sécurité de votre compte.",
        inactive: "La double authentification est désactivée. Vous accéderez à votre compte uniquement avec un mot de passe, mais cela pourrait réduire la protection contre les accès non autorisés.",
      },
    },
    {
      id: "history",
      title: "Historique des connexions",
      description: {
        active: "L'historique des connexions est activé. Vous pourrez consulter les connexions à votre compte pour détecter toute activité suspecte.",
        inactive: "L'historique des connexions est désactivé. Vous ne pourrez pas voir les connexions effectuées sur votre compte.",
      },
    },
    {
      id: "mailAlert",
      title: "Alertes par mail",
      description: {
        active: "Les alertes par mail sont activées. Vous recevrez des notifications importantes par mail.",
        inactive: "Les alertes par mail sont désactivées. Vous ne recevrez pas de notifications par mail.",
      },
    },
    {
      id: "sauvegarde",
      title: "Sauvegarde",
      description: {
        active: "Votre sauvegarde a été créée avec succès et est prête pour une utilisation future.",
        inactive: "Les données ont été restaurées à partir de la dernière sauvegarde, tout est à jour.",
      },
    },
    {
      id: "miseAJour",
      title: "Mise à jour",
      description: {
        active: "Une nouvelle mise à jour est disponible. Vous pouvez la mettre à jour maintenant.",
        inactive: "Vous avez la dernière mise à jour disponible.",
      },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <HeaderG />

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Left Section: Parameter List */}
        <div className="w-1/3 border-r border-gray-700 p-6">
          <h2 className="text-lg font-bold mb-4">Paramètres</h2>
          <ul>
            {parameters.map((param) => (
              <li
                key={param.id}
                className={`p-4 mb-2 cursor-pointer rounded-lg ${
                  selectedParam === param.id ? "bg-gray-700" : "bg-gray-800"
                } hover:bg-gray-700`}
                onClick={() => setSelectedParam(param.id)}
              >
                {param.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Selected Parameter Content */}
        <div className="w-2/3 p-6">
          {selectedParam ? (
            parameters.map((param) =>
              param.id === selectedParam ? (
                <div key={param.id}>
                  <h2 className="text-xl font-semibold mb-4">{param.title}</h2>
                  <div>
                    <div className="flex items-center mb-4">
                      <p className="text-lg font-medium mr-4">
                        {param.id === "security"
                          ? isTwoFactorEnabled
                            ? "Activée"
                            : "Désactivée"
                          : param.id === "history"
                          ? isHistoryEnabled
                            ? "Activée"
                            : "Désactivée"
                          : param.id === "mailAlert"
                          ? isMailAlertEnabled
                            ? "Activée"
                            : "Désactivée"
                          : param.id === "sauvegarde"
                          ? isSauvegardeEnabled
                            ? "Activée"
                            : "Désactivée"
                          : param.id === "sauvegarde"
                          ? isMiseAJourEnabled
                            ? "Créée"
                            : "Désactivée"
                          : param.id === "miseAJour"
                        }
                      </p>
                      <button
                        className={`w-12 h-6 flex items-center rounded-full p-1 ${
                          param.id === "security"
                            ? isTwoFactorEnabled
                              ? "bg-blue-500"
                              : "bg-gray-400"
                            : param.id === "history"
                            ? isHistoryEnabled
                              ? "bg-blue-500"
                              : "bg-gray-400"
                            : param.id === "mailAlert"
                            ? isMailAlertEnabled
                              ? "bg-blue-500"
                              : "bg-gray-400"
                            : param.id === "sauvegarde"
                            ? isSauvegardeEnabled
                              ? "bg-blue-500"
                              : "bg-gray-400"
                            : param.id === "sauvegarde"
                            ? isMiseAJourEnabled
                              ? "bg-blue-500"
                              : "bg-gray-400"
                            : param.id === "miseAJour"
                        }`}
                        onClick={() => {
                          if (param.id === "security") {
                            setIsTwoFactorEnabled(!isTwoFactorEnabled);
                          } else if (param.id === "history") {
                            setIsHistoryEnabled(!isHistoryEnabled);
                          } else if (param.id === "mailAlert") {
                            setIsMailAlertEnabled(!isMailAlertEnabled);
                          } else if (param.id === "sauvegarde") {
                            setIsSauvegardeEnabled(!isSauvegardeEnabled);
                          }
                          else if (param.id === "miseAJour") {
                            setIsMiseAJourEnabled(!isMiseAJourEnabled);
                          }
                        }}
                      >
                        <div
                          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                            param.id === "security"
                              ? isTwoFactorEnabled
                                ? "translate-x-6"
                                : "translate-x-0"
                              : param.id === "history"
                              ? isHistoryEnabled
                                ? "translate-x-6"
                                : "translate-x-0"
                              : param.id === "mailAlert"
                              ? isMailAlertEnabled
                                ? "translate-x-6"
                                : "translate-x-0"
                              : param.id === "sauvegarde"
                              ? isSauvegardeEnabled
                                ? "translate-x-6"
                                : "translate-x-0"
                              : param.id === "sauvegarde"
                              ? isMiseAJourEnabled
                                ? "translate-x-6"
                                : "translate-x-0"
                              : param.id === "miseAJour"
                          }`}
                        ></div>
                      </button>
                    </div>
                    <p className="text-gray-400 mt-2">
                      {param.id === "security"
                        ? isTwoFactorEnabled
                          ? param.description.active
                          : param.description.inactive
                        : param.id === "history"
                        ? isHistoryEnabled
                          ? param.description.active
                          : param.description.inactive
                        : param.id === "mailAlert"
                        ? isMailAlertEnabled
                          ? param.description.active
                          : param.description.inactive
                        : param.id === "sauvegarde"
                        ? isSauvegardeEnabled
                          ? param.description.active
                          : param.description.inactive
                        : param.id === "sauvegarde"
                        ? isMiseAJourEnabled
                          ? param.description.active
                          : param.description.inactive
                        : param.id === "miseAJour"
                        }
                    </p>
                  </div>
                </div>
              ) : null
            )
          ) : (
            <p className="text-gray-400">Sélectionnez un paramètre pour voir les détails.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Parametre;
