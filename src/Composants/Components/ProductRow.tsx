import React from "react";

interface ProductRowProps {
  produit: string;
  tare: string;
  poidsBrut: string;
  poidsNet: string;
  resteALivrer: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductRow: React.FC<ProductRowProps> = ({
  produit,
  tare,
  poidsBrut,
  poidsNet,
  resteALivrer,
  handleChange,
}) => {
  return (
    <div className="grid grid-cols-5 gap-4 text-center py-2">
      <input
        type="text"
        name="produit"
        value={produit}
        onChange={handleChange}
        className="bg-gray-800 text-white px-2 py-1 rounded"
      />
      <input
        type="text"
        name="tare"
        value={tare}
        onChange={handleChange}
        className="bg-gray-800 text-white px-2 py-1 rounded"
      />
      <input
        type="text"
        name="poids_brut"
        value={poidsBrut}
        onChange={handleChange}
        className="bg-gray-800 text-white px-2 py-1 rounded"
      />
      <input
        type="text"
        name="poids_net"
        value={poidsNet}
        onChange={handleChange}
        className="bg-gray-800 text-white px-2 py-1 rounded"
      />
      <input
        type="text"
        name="reste_a_livrer"
        value={resteALivrer}
        onChange={handleChange}
        className="bg-gray-800 text-white px-2 py-1 rounded"
      />
    </div>
  );
};

export default ProductRow;
