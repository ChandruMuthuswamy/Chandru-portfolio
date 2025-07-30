import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialButtonProps {
  type: 'github' | 'linkedin' | 'email';
  href: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ 
  type, 
  href, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'github':
        return <Github size={22} />;
      case 'linkedin':
        return <Linkedin size={22} />;
      case 'email':
        return <Mail size={22} />;
      default:
        return <Github size={22} />;
    }
  };

  return (
    <a 
      href={href}
      className="relative w-12 h-12 bg-[#7DC9DA]/10 hover:bg-[#7DC9DA]/20 rounded-full flex items-center justify-center text-[#2E5C74] transition-all duration-300 hover:scale-110 hover:shadow-md group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      target="_blank"
      rel="noopener noreferrer"
    >
      {getIcon()}
      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2E5C74] text-white text-xs py-0.5 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-max">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    </a>
  );
};