import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BACKEND_URL from "../../config";

const LoginForm = () => {
  const navigate = useNavigate();
  const recuperationDeDonnees = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log(`${BACKEND_URL}/connexion`, formData)
    try {
      const response= axios.post(`${BACKEND_URL}/connexion`, formData)
        .then((res) => {
          console.log(res.data, response);
          navigate(`/client`);
        })
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <form onSubmit={recuperationDeDonnees} >
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-medium text-gray-300 font-abhaya">
          Adresse e-mail
        </label>
        <input id="email" name="email" type="email" placeholder="Votre adresse mail" className="w-96 mt-2 p-2 rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-6 relative">
        <label htmlFor="password" className="block text-lg font-medium text-gray-300 font-abhaya">
          Mot de passe
        </label>
        <div className="relative w-96 mt-2">
          <input id="password" name="password" placeholder="Votre mot de passe" className="w-full p-2 rounded bg-gray-700 text-white pr-10"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-blue-800 hover:text-blue-600">
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4 ml-4 pr-20">
        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="ml-2 text-sm">Souviens-toi de moi</label>
        </div>
        <a href="#" className="text-sm text-blue-500">Mot de passe oublié</a>
      </div>
      
      <div className="flex flex-grow gap-8 mt-8 mb-8">
        <Button type="submit" label="Connectez-vous" variant="primary" />
        <Link to="/signup">
          <Button label="S'inscrire" variant="secondary" />
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
