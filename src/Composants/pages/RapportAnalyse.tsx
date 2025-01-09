// RapportAnalyse.tsx

import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import HeaderG from "../Components/HeaderG";

interface Data {
  mois: string;
  [key: string]: number | string;
}

const RapportAnalyse: React.FC = () => {
  const [dataProduits, setDataProduits] = useState<Data[]>([]);
  const [dataCommerciaux, setDataCommerciaux] = useState<Data[]>([]);

  useEffect(() => {
    // Récupération des données depuis le backend (remplacez l'URL avec votre point d'API réel)
    const fetchData = async () => {
      try {
        const produitsResponse = await fetch("/api/produits");
        const produitsData = await produitsResponse.json();
        setDataProduits(produitsData);

        const commerciauxResponse = await fetch("/api/commerciaux");
        const commerciauxData = await commerciauxResponse.json();
        setDataCommerciaux(commerciauxData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-6 py-10">
      <div className="fixed top-0 left-0 w-full h-16 z-50">
        <HeaderG />
      </div>
      {/* Titre */}
      <h1 className="text-3xl font-bold text-center mb-8">Rapport d'Analyse</h1>

      {/* Statistiques sur les produits */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Statistiques sur les Produits
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dataProduits} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mois" />
            <YAxis />
            <Tooltip />
            <Legend />
            {Object.keys(dataProduits[0] || {}).map((key) => (
              <Bar key={key} dataKey={key} fill="#8884d8" />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Statistiques des commerciaux */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Statistiques des Commerciaux
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dataCommerciaux} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mois" />
            <YAxis />
            <Tooltip />
            <Legend />
            {Object.keys(dataCommerciaux[0] || {}).map((key) => (
              <Bar key={key} dataKey={key} fill="#8884d8" />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RapportAnalyse;
