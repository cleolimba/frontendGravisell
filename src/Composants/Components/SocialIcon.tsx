import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // Correct pour typer les icônes FontAwesome

type SocialIconProps = {
  link: string;
  icon: IconProp; // Utilisez IconProp pour que TypeScript reconnaisse correctement l'icône
};

const SocialIcon: React.FC<SocialIconProps> = ({ link, icon }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 text-2xl hover:text-blue-500 transition-colors"
  >
    <FontAwesomeIcon icon={icon} />
  </a>
);

export default SocialIcon;
