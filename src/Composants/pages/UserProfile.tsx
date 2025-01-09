import React from "react";
import HeaderG from "../Components/HeaderG";

const UserProfile: React.FC = () => {
  // Données statiques pour l'utilisateur (pour un usage interne)
  const userProfile = {
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    profilePicture: "https://via.placeholder.com/150",
    address: "123, Rue de Paris, France",
    phone: "+33 6 12 34 56 78",
    department: "Développement IT", // Département interne
    role: "Développeur Full-Stack", // Rôle de l'utilisateur
  };

  return (
    <div className="rounded-lg shadow-md">
        <HeaderG />
      {/* Image de profil */}
      <div className="flex justify-center mb-4">
        <img
          src={userProfile.profilePicture}
          alt={`${userProfile.name}'s profile`}
          className="h-24 w-24 rounded-full"
        />
      </div>

      {/* Informations utilisateur */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{userProfile.name}</h2>
        <p className="mb-4">{userProfile.email}</p>
        <p className="mb-4">Adresse : {userProfile.address}</p>
        <p className="mb-4">Téléphone : {userProfile.phone}</p>
        <p className="mb-4">Département : {userProfile.department}</p>
        <p className="mb-4">Rôle : {userProfile.role}</p>
      </div>
    </div>
  );
};

export default UserProfile;
