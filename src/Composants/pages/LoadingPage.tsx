import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const [progress, setProgress] = useState(50);
  const navigate = useNavigate();

  useEffect(() => {

    // Simule la progression du chargement
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate('/connexion');
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/imgs/imgAccueil.png)' }}
    >
      <div className="absolute top-4 left-4 right-4 bottom-4 rounded-md bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
        <img
          src="/logo/logo2 1.png"
          alt="Logo"
          className="w-48 sm:w-48 mb-2"
          onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/80')}
        />

        <div className="w-[80%] max-w-44 sm:w-48 bg-white rounded-full h-4 mb-4">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
