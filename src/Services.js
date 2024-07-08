import React, { useCallback, useEffect, useState } from 'react';
import service1 from './assets/service1.jpg';
import service10 from './assets/service10.jpg';
import service2 from './assets/service2.jpg';
import service3 from './assets/service3.jpg';
import service4 from './assets/service4.jpg';
import service5 from './assets/service5.jpg';
import service6 from './assets/service6.jpg';
import service7 from './assets/service7.jpg';
import service8 from './assets/service8.jpg';
import service9 from './assets/service9.jpg';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Marketing Solutions',
    rating: 4.5,
    reviews: 1394,
    category: 'SEO Services',
    location: 'New York',
    price: '$$',
    image: service1,
  },
  {
    id: 2,
    title: 'MarketingHub',
    rating: 5.0,
    reviews: 1994,
    category: 'Social Media Marketing',
    location: 'San Francisco',
    price: '$$',
    image: service2,
  },
  {
    id: 3,
    title: 'DigitalWave',
    rating: 4.8,
    reviews: 2139,
    category: 'Email Marketing',
    location: 'Los Angeles',
    price: '$',
    image: service3,
  },
  {
    id: 4,
    title: 'ServicePro',
    rating: 4.7,
    reviews: 2563,
    category: 'Content Marketing',
    location: 'Toronto',
    price: '$$',
    image: service4,
  },
  {
    id: 5,
    title: 'CreativeBoost',
    rating: 4.6,
    reviews: 2065,
    category: 'Consulting Services',
    location: 'Chicago',
    price: '$$$',
    image: service5,
  },
  {
    id: 6,
    title: 'SearchMaster',
    rating: 4.9,
    reviews: 1420,
    category: 'SEO Services',
    location: 'Chicago',
    price: '$$',
    image: service6,
  },
  {
    id: 7,
    title: 'SocialGenius',
    rating: 4.8,
    reviews: 1753,
    category: 'Social Media Marketing',
    location: 'Toronto',
    price: '$',
    image: service7,
  },
  {
    id: 8,
    title: 'EmailBlaster',
    rating: 4.7,
    reviews: 1632,
    category: 'Email Marketing',
    location: 'San Francisco',
    price: '$$$',
    image: service8,
  },
  {
    id: 9,
    title: 'ContentKing',
    rating: 4.9,
    reviews: 1821,
    category: 'Content Marketing',
    location: 'Los Angeles',
    price: '$',
    image: service9,
  },
  {
    id: 10,
    title: 'ConsultPlus',
    rating: 4.5,
    reviews: 1400,
    category: 'Consulting Services',
    location: 'New York',
    price: '$$$',
    image: service10,
  }
];

const Services = () => {
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const filterServices = useCallback(() => {
    let filtered = servicesData;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(service => selectedCategories.includes(service.category));
    }

    if (selectedLocation) {
      filtered = filtered.filter(service => service.location === selectedLocation);
    }

    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter(service => selectedPriceRanges.includes(service.price));
    }

    setFilteredServices(filtered);
  }, [selectedCategories, selectedLocation, selectedPriceRanges]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handlePriceChange = (priceRange) => {
    setSelectedPriceRanges(prev => {
      if (prev.includes(priceRange)) {
        return prev.filter(price => price !== priceRange);
      } else {
        return [...prev, priceRange];
      }
    });
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  useEffect(() => {
    filterServices();
  }, [filterServices]);

  return (
    <div className="services-page">
      <Navbar />
      <div className="services-header">
        <h1>Top Services</h1>
        <p>Explore our top digital marketing services</p>
      </div>
      <div className="services-content">
        <div className="filters">
          <h3>Service Categories</h3>
          <button onClick={() => setSelectedCategories([])}>All</button>
          <button onClick={() => handleCategoryChange('SEO Services')}>SEO Services</button>
          <button onClick={() => handleCategoryChange('Social Media Marketing')}>Social Media Marketing</button>
          <button onClick={() => handleCategoryChange('Email Marketing')}>Email Marketing</button>
          <button onClick={() => handleCategoryChange('Content Marketing')}>Content Marketing</button>
          <button onClick={() => handleCategoryChange('Consulting Services')}>Consulting Services</button>
          
          <h3>Location</h3>
          <select className="select-location" onChange={handleLocationChange}>
            <option value="">Select Location</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Toronto">Toronto</option>
            <option value="Chicago">Chicago</option>
          </select>
          
          <h3>Price Range</h3>
          <label className="price-range-label">
            <input type="checkbox" value="$" onChange={() => handlePriceChange('$')} /> $50-$100
          </label>
          <label className="price-range-label">
            <input type="checkbox" value="$$" onChange={() => handlePriceChange('$$')} /> $100-$200
          </label>
          <label className="price-range-label">
            <input type="checkbox" value="$$$" onChange={() => handlePriceChange('$$$')} /> $200+
          </label>
        </div>
        <div className="services-list">
          {filteredServices.map(service => (
            <div key={service.id} className="service-item">
              <img src={service.image} alt={service.title} />
              <h2>{service.title}</h2>
              <p>Rating: {service.rating} | Reviews: {service.reviews}</p>
              <p>Category: {service.category}</p>
              <p>Location: {service.location}</p>
              <p>Price: {service.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
