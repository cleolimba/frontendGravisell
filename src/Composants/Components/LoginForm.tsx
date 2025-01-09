
import { useForm } from "react-hook-form";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from "axios";
interface FormType {
  email: string
  password: string
}
const LoginForm = () => {
  const {register, handleSubmit} = useForm<FormType>()
  const recuperationDeDonnees = (data: FormType) => {
    const {email, password} = data
    try {
      axios.post("http://localhost:3333/connexion-admin", {email, password})
      .then ((res) => {
        console.log(res.data);
      })
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <form  onSubmit={handleSubmit(recuperationDeDonnees)} >
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-medium text-gray-300 font-abhaya">
          Adresse e-mail
        </label>
        <input {...register("email")} type="email" placeholder="Votre adresse mail" className="w-96 mt-2 p-2 rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-6 relative">
        <label htmlFor="password" className="block text-lg font-medium text-gray-300 font-abhaya">
          Mot de passe
        </label>
        <div className="relative w-96 mt-2">
          <input {...register("password")} placeholder="Votre mot de passe" className="w-full p-2 rounded bg-gray-700 text-white pr-10"
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
        <Button label="Connectez-vous" variant="primary" />
        <Link to="/signup">
          <Button label="S'inscrire" variant="secondary" />
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
