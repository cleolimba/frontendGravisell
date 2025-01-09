import SocialIcon from './SocialIcon';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const WelcomeSection = () => (
  <div className="flex-1 flex flex-col justify-center items-start px-8 md:px-16">
    <h1 className="text-5xl font-bold mb-10 flex text-justify font-abhaya">
      BIENVENUE<br />
      GraviSell
    </h1>
    
    <p className="text-gray-300 mb-6 font-abhaya text-justify">
      Simplifiez et optimisez vos ventes de pierres avec notre application intuitive. 
      Accédez rapidement à toutes vos données en un clic.
    </p>
    <div className="flex space-x-6 mt-4">
      <SocialIcon link="https://facebook.com" icon={faFacebookF} />
      <SocialIcon link="https://x.com" icon={faTwitter} />
      <SocialIcon link="https://instagram.com" icon={faInstagram} />
      <SocialIcon link="https://linkedin.com" icon={faLinkedinIn} />
      <SocialIcon link="https://youtube.com" icon={faYoutube} />
    </div>
  </div>
);

export default WelcomeSection;
