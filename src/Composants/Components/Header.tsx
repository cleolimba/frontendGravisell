import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Déconnexion...');
    navigate('/');
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-black text-white pr-28 pl-28">
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <img
            src="/logo/logo2 1.png"
            alt="GraviSell Logo"
            className="w-16 h-10"
            onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/80')}
          />
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center text-sm font-medium bg-blue-950 hover:bg-blue-700 text-white px-2 py-2 rounded">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </header>
      <hr className="border-gray-300" />
    </div>
    
  );
};

export default Header;
