import React from 'react';
import { Github, Linkedin, Mail, User, Users, Briefcase, AtSign } from 'lucide-react';

interface ProfilePreviewProps {
  type: 'github' | 'linkedin' | 'email';
  data: any;
  position?: string;
}

export const ProfilePreview: React.FC<ProfilePreviewProps> = ({ 
  type,
  data,
  position = 'top-20 left-20'
}) => {
  const renderGithubPreview = () => (
    <div className="p-4">
      <div className="flex gap-4 items-center mb-4">
        <img 
          src={data.avatar}
          alt={data.username}
          className="w-14 h-14 rounded-full object-cover border-2 border-white"
        />
        <div>
          <h3 className="font-bold text-[#2B2B2B]">{data.username}</h3>
          <p className="text-[#2B2B2B]/70 text-sm">{data.bio}</p>
        </div>
      </div>
      <div className="flex gap-4 text-sm">
        <p className="flex items-center gap-1">
          <Users size={16} className="text-[#2E5C74]" /> {data.followers} Followers
        </p>
        <p className="flex items-center gap-1">
          <User size={16} className="text-[#2E5C74]" /> {data.following} Following
        </p>
      </div>
      <a 
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-center bg-[#2E5C74] text-white py-1.5 rounded text-sm hover:bg-[#2E5C74]/90 transition-colors"
      >
        View GitHub Profile
      </a>
    </div>
  );

  const renderLinkedinPreview = () => (
    <div className="p-4">
      <div className="flex gap-4 items-center mb-4">
        <img 
          src={data.avatar}
          alt={data.username}
          className="w-14 h-14 rounded-full object-cover border-2 border-white"
        />
        <div>
          <h3 className="font-bold text-[#2B2B2B]">{data.username}</h3>
          <p className="text-[#2B2B2B]/70 text-sm flex items-center gap-1">
            <Briefcase size={14} /> {data.position}
          </p>
        </div>
      </div>
      <p className="text-sm flex items-center gap-1 text-[#2B2B2B]/70">
        <Users size={16} className="text-[#2E5C74]" /> {data.connections}+ connections
      </p>
      <a 
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-center bg-[#0077B5] text-white py-1.5 rounded text-sm hover:bg-[#0077B5]/90 transition-colors"
      >
        View LinkedIn Profile
      </a>
    </div>
  );

  const renderEmailPreview = () => (
    <div className="p-4">
      <div className="flex gap-4 items-center mb-4">
        <img 
          src={data.avatar}
          alt="Profile"
          className="w-14 h-14 rounded-full object-cover border-2 border-white"
        />
        <div>
          <h3 className="font-bold text-[#2B2B2B]">Email Contact</h3>
          <p className="text-[#2B2B2B]/70 text-sm flex items-center gap-1">
            <AtSign size={14} /> {data.address}
          </p>
        </div>
      </div>
      <a 
        href={`mailto:${data.address}?subject=${data.subject}`}
        className="block mt-4 text-center bg-[#7DC9DA] text-white py-1.5 rounded text-sm hover:bg-[#2E5C74] transition-colors"
      >
        Send Email
      </a>
    </div>
  );

  const getPreviewContent = () => {
    switch (type) {
      case 'github':
        return renderGithubPreview();
      case 'linkedin':
        return renderLinkedinPreview();
      case 'email':
        return renderEmailPreview();
      default:
        return null;
    }
  };

  return (
    <div className={`fixed ${position} bg-white rounded-lg shadow-lg z-50 w-64 animate-fadeIn`}>
      {getPreviewContent()}
    </div>
  );
};