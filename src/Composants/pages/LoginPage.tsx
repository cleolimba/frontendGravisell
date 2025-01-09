import Header from "../Components/Header";
import LoginForm from "../Components/LoginForm";
import WelcomeSection from "../Components/WelcomeSection";

const LoginPage = () => (
  <div className="min-h-screen bg-black text-white">
    <Header />

    {/* Contenu principal divisé en deux sections */}
    <div className="pt-20 flex flex-col lg:flex-row items-center justify-between w-full h-screen px-8">
      <div className="lg:w-1/2 pb-24 flex flex-col justify-center items-center text-center p-8">
        <WelcomeSection />
      </div>

      {/* Section de connexion */}
      <div className="flex-1 flex flex-col justify-center items-center px-8 md:px-16">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-6 font-abhaya text-center">Se connecte</h2>
          <LoginForm />
          <p className="mt-4 text-xs text-center text-gray-400 font-abhaya mr-8 ml-8 pr-8">
            En cliquant sur "Se connecter", vous acceptez les <a href="#" className="text-blue-500">Conditions d'utilisation</a> | <a href="#" className="text-blue-500">Politique de confidentialité</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default LoginPage;
