// src/api/produits.ts
import api from './index';

// Fonction pour récupérer la liste des produits
export const fetchUser = async () => {
  const response = await api.get('/produits');
  return response.data;
};

// Fonction pour ajouter un nouveau produit
export const createUser = async (data: { nom: string; description: string; prix: number }) => {
  const response = await api.post('/produits', data);
  return response.data;
};
