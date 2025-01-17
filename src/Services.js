import { faBullhorn, faChartLine, faCommentsDollar, faEnvelope, faSearch, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    title: 'Advanced Marketing Solutions',
    rating: 4.5,
    reviews: 1394,
    category: 'SEO Services',
    location: 'New York',
    price: 150,
    image: service1,
  },
  {
    id: 2,
    title: 'Premier MarketingHub',
    rating: 5.0,
    reviews: 1994,
    category: 'Social Media Marketing',
    location: 'San Francisco',
    price: 175,
    image: service2,
  },
  {
    id: 3,
    title: 'DigitalWave Innovations',
    rating: 4.8,
    reviews: 2139,
    category: 'Email Marketing',
    location: 'Los Angeles',
    price: 100,
    image: service3,
  },
  {
    id: 4,
    title: 'ServicePro Excellence',
    rating: 4.7,
    reviews: 2563,
    category: 'Content Marketing',
    location: 'Toronto',
    price: 200,
    image: service4,
  },
  {
    id: 5,
    title: 'CreativeBoost Strategies',
    rating: 4.6,
    reviews: 2065,
    category: 'Consulting Services',
    location: 'Chicago',
    price: 250,
    image: service5,
  },
  {
    id: 6,
    title: 'SearchMaster Optimization',
    rating: 4.9,
    reviews: 1420,
    category: 'SEO Services',
    location: 'Chicago',
    price: 120,
    image: service6,
  },
  {
    id: 7,
    title: 'SocialGenius Expertise',
    rating: 4.8,
    reviews: 1753,
    category: 'Social Media Marketing',
    location: 'Toronto',
    price: 90,
    image: service7,
  },
  {
    id: 8,
    title: 'EmailBlaster Solutions',
    rating: 4.7,
    reviews: 1632,
    category: 'Email Marketing',
    location: 'San Francisco',
    price: 220,
    image: service8,
  },
  {
    id: 9,
    title: 'ContentKing Mastery',
    rating: 4.9,
    reviews: 1821,
    category: 'Content Marketing',
    location: 'Los Angeles',
    price: 110,
    image: service9,
  },
  {
    id: 10,
    title: 'Consult Plus Services',
    rating: 4.5,
    reviews: 1400,
    category: 'Consulting Services',
    location: 'New York',
    price: 230,
    image: service10,
  }
];


const Services = () => {
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [sortOption, setSortOption] = useState('Most Popular');

  const filterServices = useCallback(() => {
    let filtered = servicesData;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(service => selectedCategories.includes(service.category));
    }

    if (selectedLocation) {
      filtered = filtered.filter(service => service.location === selectedLocation);
    }

    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter(service => {
        if (selectedPriceRanges.includes('$50-$100') && service.price >= 50 && service.price <= 100) {
          return true;
        }
        if (selectedPriceRanges.includes('$100-$200') && service.price > 100 && service.price <= 200) {
          return true;
        }
        if (selectedPriceRanges.includes('$200+') && service.price > 200) {
          return true;
        }
        return false;
      });
    }

    if (sortOption === 'Most Popular') {
      filtered = filtered.sort((a, b) => b.reviews - a.reviews);
    } else if (sortOption === 'Highest Rated') {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'Price: Low to High') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Price: High to Low') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredServices([...filtered]);
  }, [selectedCategories, selectedLocation, selectedPriceRanges, sortOption]);

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

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  useEffect(() => {
    filterServices();
  }, [filterServices]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <span className="star-rating" aria-label={`Rating: ${rating} out of 5`}>
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} />
        ))}
        {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
      </span>
    );
  };

  return (
    <div className="services-page">
      <Navbar />
      <header className="services-header">
        <h1>Top Services</h1>
        <p>Explore our top digital marketing services</p>
      </header>
      <main className="services-content">
        <aside className="filters" aria-label="Filters for services">
          <h3>Service Categories</h3>
          <div className="button-group" role="group" aria-label="Service categories">
            <button
              className={!selectedCategories.length ? 'selected' : ''}
              onClick={() => setSelectedCategories([])}
              aria-pressed={!selectedCategories.length}
            >
              <FontAwesomeIcon icon={faSearch} /> All
            </button>
            <button
              className={selectedCategories.includes('SEO Services') ? 'selected' : ''}
              onClick={() => handleCategoryChange('SEO Services')}
              aria-pressed={selectedCategories.includes('SEO Services')}
            >
              <FontAwesomeIcon icon={faSearch} /> SEO Services
            </button>
            <button
              className={selectedCategories.includes('Social Media Marketing') ? 'selected' : ''}
              onClick={() => handleCategoryChange('Social Media Marketing')}
              aria-pressed={selectedCategories.includes('Social Media Marketing')}
            >
              <FontAwesomeIcon icon={faBullhorn} /> Social Media Marketing
            </button>
            <button
              className={selectedCategories.includes('Email Marketing') ? 'selected' : ''}
              onClick={() => handleCategoryChange('Email Marketing')}
              aria-pressed={selectedCategories.includes('Email Marketing')}
            >
              <FontAwesomeIcon icon={faEnvelope} /> Email Marketing
            </button>
            <button
              className={selectedCategories.includes('Content Marketing') ? 'selected' : ''}
              onClick={() => handleCategoryChange('Content Marketing')}
              aria-pressed={selectedCategories.includes('Content Marketing')}
            >
              <FontAwesomeIcon icon={faCommentsDollar} /> Content Marketing
            </button>
            <button
              className={selectedCategories.includes('Consulting Services') ? 'selected' : ''}
              onClick={() => handleCategoryChange('Consulting Services')}
              aria-pressed={selectedCategories.includes('Consulting Services')}
            >
              <FontAwesomeIcon icon={faChartLine} /> Consulting Services
            </button>
          </div>

          <h3>Location</h3>
          <label htmlFor="location-select" className="sr-only">Location</label>
          <select id="location-select" className="select-location" onChange={handleLocationChange}>
            <option value="">Select Location</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Toronto">Toronto</option>
            <option value="Chicago">Chicago</option>
          </select>

          <h3>Price Range</h3>
          <div role="group" aria-labelledby="price-range-group">
            <label className="price-range-label" aria-label="$50-$100 price range">
              <input type="checkbox" value="$50-$100" onChange={() => handlePriceChange('$50-$100')} /> $50-$100
            </label>
            <label className="price-range-label" aria-label="$100-$200 price range">
              <input type="checkbox" value="$100-$200" onChange={() => handlePriceChange('$100-$200')} /> $100-$200
            </label>
            <label className="price-range-label" aria-label="$200+ price range">
              <input type="checkbox" value="$200+" onChange={() => handlePriceChange('$200+')} /> $200+
            </label>
          </div>
        </aside>
        <section className="services-list-container" aria-label="List of services">
          <div className="sort-results">
            <p>{`1-10 of ${filteredServices.length} results`}</p>
            <div className="sort-options">
              <label htmlFor="sort-by">Sort by</label>
              <select id="sort-by" onChange={handleSortChange} aria-label="Sort by">
                <option value="Most Popular">Most Popular</option>
                <option value="Highest Rated">Highest Rated</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="services-list">
            {filteredServices.map(service => (
              <article key={service.id} className="service-item">
                <div className="service-image-wrapper">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <div className="service-content" style={{ padding: '20px', textAlign: 'center' }}>
                  <h2 style={{ fontSize: '1.3rem', margin: '0 0', color: '#000', fontWeight: 'bold' }}>{service.title}</h2>
                  <p className="service-category" style={{ fontSize: '1rem', color: '#333', margin: '0 0' }}>{service.category}</p>
                  <p className="service-location" style={{ fontSize: '1rem', color: '#777', margin: '0 0' }}>{service.location}</p>
                  <p className="service-price" style={{ fontSize: '1rem', color: '#000', margin: '0 0', padding: '2px 6px'}}>${service.price}</p>
                  
                  <p className="service-rating" style={{ fontSize: '1.1rem', color: 'gold', margin: '5px 0' }}>
                    {renderStars(service.rating)}
                  </p>
                  <p className="service-rating" style={{ fontSize: '0.6rem', color: '#333', margin: '0 0' }}>{service.reviews} reviews
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;