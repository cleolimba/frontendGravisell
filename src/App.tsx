import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingPage from './Composants/pages/LoadingPage';
import LoginPage from './Composants/pages/LoginPage';
import SignupPage from './Composants/pages/Signup';
import ClientRegistrationPage from './Composants/pages/ClientRegistrationPage';
import CamionPage from "../src/Composants/pages/CamionPage";
import Caillasses from './Composants/pages/Caillasses';
import EnregistrementCommande from './Composants/pages/EnregistrementCommande';
import BonDeLivraison from './Composants/pages/BonDeLivraison';
import RecuDeCaisse from './Composants/pages/RecuDeCaisse';
import AutorisationDeChargement from './Composants/pages/AutorisationDeChargement';
import BonDeRecette from './Composants/pages/BonRecette';
import RapportAnalyse from './Composants/pages/RapportAnalyse';
import UserProfile from './Composants/pages/UserProfile';
import Parametre from './Composants/pages/Parametre';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/connexion" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/client" element={<ClientRegistrationPage />} />
        <Route path="/camion" element={<CamionPage />} />
        <Route path="/caillasses" element={<Caillasses />} />
        <Route path="/commande" element={<EnregistrementCommande />} />
        <Route path="/BonDeLivraison" element={<BonDeLivraison />} />
        <Route path="/caisse" element={<RecuDeCaisse />} />
        <Route path="/chargement" element={<AutorisationDeChargement />} />
        <Route path="/bonRecette" element={<BonDeRecette />} />
        <Route path="/rapportAnalyse" element={<RapportAnalyse />} />
        <Route path="/profilUtilisateur" element={<UserProfile />} />
        <Route path="/parametre" element={<Parametre />} />
      </Routes>
    </Router>
  );
}

export default App;
