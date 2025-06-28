import { FaTools, FaSnowflake, FaWrench, FaHome, FaBuilding, FaExclamationTriangle, FaClipboardCheck, FaWind } from 'react-icons/fa';

function ServiceCard({ title, description, className = "", delay = 0 }) {
  // Select icon based on service title
  const getIcon = (title) => {
    switch(title) {
      case 'AC Repair':
        return <FaWrench className="text-3xl text-blue-500" />;
      case 'Maintenance':
        return <FaTools className="text-3xl text-blue-500" />;
      case 'Installation':
        return <FaSnowflake className="text-3xl text-blue-500" />;
      case 'Residential AC Repair':
        return <FaHome className="text-3xl text-blue-500" />;
      case 'Commercial AC Service':
        return <FaBuilding className="text-3xl text-blue-500" />;
      case 'Emergency Repairs':
        return <FaExclamationTriangle className="text-3xl text-blue-500" />;
      case 'Preventive Maintenance':
        return <FaClipboardCheck className="text-3xl text-blue-500" />;
      case 'Duct Cleaning':
        return <FaWind className="text-3xl text-blue-500" />;
      default:
        return <FaWrench className="text-3xl text-blue-500" />;
    }
  };

  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <div className={`relative overflow-hidden bg-gray-100 rounded-xl shadow-neumorph p-6 sm:p-8 hover:shadow-neumorph-button transition-all duration-300 w-full animate-fade-in-up ${delayClass} ${className}`}>
      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 shadow-neumorph group-hover:shadow-neumorph-button transition-all duration-300">
            {getIcon(title)}
          </div>
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;