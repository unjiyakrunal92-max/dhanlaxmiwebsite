import React from 'react';
import { Link } from 'react-router-dom';
import { Fan , Tv, Heater, GlassWater, Home, Cable } from 'lucide-react';

const CategoryCard = ({ category }) => {
  // Icon mapping
  const iconMap = {
    fan: Fan ,
    tv: Tv,
    heater: Heater,
    glassWater: GlassWater,
    home: Home,
    cable: Cable,
  };

  const IconComponent = iconMap[category.icon] || Smartphone;

  return (
    <Link to={`/products?category=${category.id}`} className="category-card">
      <div className="category-icon-wrapper">
        <IconComponent size={48} strokeWidth={1.5} />
      </div>
      <h3 className="category-name">{category.name}</h3>
    </Link>
  );
};

export default CategoryCard;