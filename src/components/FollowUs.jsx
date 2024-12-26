
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const FollowUs = () => {
  const platforms = [
    {
      name: 'Instagram',
      color: 'bg-gradient-to-r from-pink-500 to-purple-500',
      icon: <FaInstagram size={24} />,
      link: 'https://www.instagram.com',
    },
    {
      name: 'Facebook',
      color: 'bg-blue-600',
      icon: <FaFacebook size={24} />,
      link: 'https://www.facebook.com',
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Follow Us On</h2>
      <div className="flex justify-center gap-6">
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 px-6 py-4 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition duration-300 ${platform.color}`}
          >
            {platform.icon}
            <span>{platform.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
