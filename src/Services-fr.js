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
import FooterFR from './components/Footer-fr';
import NavbarFR from './components/Navbar-fr';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Solutions de Marketing Avancées',
    rating: 4.5,
    reviews: 1394,
    category: 'Services SEO',
    location: 'New York',
    price: 150,
    image: service1,
  },
  {
    id: 2,
    title: 'Premier MarketingHub',
    rating: 5.0,
    reviews: 1994,
    category: 'Marketing Réseaux Sociaux',
    location: 'San Francisco',
    price: 175,
    image: service2,
  },
  {
    id: 3,
    title: 'DigitalWave Innovations',
    rating: 4.8,
    reviews: 2139,
    category: 'Marketing par Email',
    location: 'Los Angeles',
    price: 100,
    image: service3,
  },
  {
    id: 4,
    title: 'ServicePro Excellence',
    rating: 4.7,
    reviews: 2563,
    category: 'Marketing de Contenu',
    location: 'Toronto',
    price: 200,
    image: service4,
  },
  {
    id: 5,
    title: 'CreativeBoost Strategies',
    rating: 4.6,
    reviews: 2065,
    category: 'Services de Conseil',
    location: 'Chicago',
    price: 250,
    image: service5,
  },
  {
    id: 6,
    title: 'SearchMaster Optimization',
    rating: 4.9,
    reviews: 1420,
    category: 'Services SEO',
    location: 'Chicago',
    price: 120,
    image: service6,
  },
  {
    id: 7,
    title: 'SocialGenius Expertise',
    rating: 4.8,
    reviews: 1753,
    category: 'Marketing Réseaux Sociaux',
    location: 'Toronto',
    price: 90,
    image: service7,
  },
  {
    id: 8,
    title: 'EmailBlaster Solutions',
    rating: 4.7,
    reviews: 1632,
    category: 'Marketing par Email',
    location: 'San Francisco',
    price: 220,
    image: service8,
  },
  {
    id: 9,
    title: 'ContentKing Mastery',
    rating: 4.9,
    reviews: 1821,
    category: 'Marketing de Contenu',
    location: 'Los Angeles',
    price: 110,
    image: service9,
  },
  {
    id: 10,
    title: 'Consult Plus Services',
    rating: 4.5,
    reviews: 1400,
    category: 'Services de Conseil',
    location: 'New York',
    price: 230,
    image: service10,
  }
];

const ServicesFR = () => {
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [sortOption, setSortOption] = useState('Les Plus Populaires');

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

    if (sortOption === 'Les Plus Populaires') {
      filtered = filtered.sort((a, b) => b.reviews - a.reviews);
    } else if (sortOption === 'Les Mieux Notés') {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'Prix: Du Plus Bas Au Plus Élevé') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Prix: Du Plus Élevé Au Plus Bas') {
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
      <span className="star-rating" aria-label={`Évaluation : ${rating} sur 5`}>
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} />
        ))}
        {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
      </span>
    );
  };

  return (
    <div className="services-page">
      <NavbarFR />
      <header className="services-header">
        <h1>Nos Meilleurs Services</h1>
        <p>Explorez nos meilleurs services de marketing digital</p>
      </header>
      <main className="services-content">
        <aside className="filters" aria-label="Filtres pour les services">
          <h3>Catégories de Services</h3>
          <div className="button-group" role="group" aria-label="Catégories de services">
            <button
              className={!selectedCategories.length ? 'selected' : ''}
              onClick={() => setSelectedCategories([])}
              aria-pressed={!selectedCategories.length}
            >
              <FontAwesomeIcon icon={faSearch} /> Tous
            </button>
            <button
              className={selectedCategories.includes('Services SEO') ? 'selected' : ''}
              onClick={() => handleCategoryChange('Services SEO')}
              aria-pressed={selectedCategories.includes('Services SEO')}
            >
              <FontAwesomeIcon icon={faSearch} /> Services SEO
            </button>
            <button
              className={selectedCategories.includes('Marketing Réseaux Sociaux') ? 'selected' : ''}
              onClick={() => handleCategoryChange('Marketing Réseaux Sociaux')}
              aria-pressed={selectedCategories.includes('Marketing Réseaux Sociaux')}
            >
              <FontAwesomeIcon icon={faBullhorn} /> Marketing Réseaux Sociaux
            </button>
            <button
              className={selectedCategories.includes('Marketing par Email') ? 'selected' : ''}
              onClick={() => handleCategoryChange('Marketing par Email')}
              aria-pressed={selectedCategories.includes('Marketing par Email')}
            >
              <FontAwesomeIcon icon={faEnvelope} /> Marketing par Email
            </button>
            <button
              className={selectedCategories.includes('Marketing de Contenu') ? 'selected' : ''}
              onClick={() => handleCategoryChange('Marketing de Contenu')}
              aria-pressed={selectedCategories.includes('Marketing de Contenu')}
            >
              <FontAwesomeIcon icon={faCommentsDollar} /> Marketing de Contenu
            </button>
            <button
              className={selectedCategories.includes('Services de Conseil') ? 'selected' : ''}
              onClick={() => handleCategoryChange('Services de Conseil')}
              aria-pressed={selectedCategories.includes('Services de Conseil')}
            >
              <FontAwesomeIcon icon={faChartLine} /> Services de Conseil
            </button>
          </div>

          <h3>Localisation</h3>
          <label htmlFor="location-select" className="sr-only">Localisation</label>
          <select id="location-select" className="select-location" onChange={handleLocationChange}>
            <option value="">Sélectionner la Localisation</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Toronto">Toronto</option>
            <option value="Chicago">Chicago</option>
          </select>

          <h3>Gamme de Prix</h3>
          <div role="group" aria-labelledby="price-range-group">
            <label className="price-range-label" aria-label="Gamme de prix $50-$100">
              <input type="checkbox" value="$50-$100" onChange={() => handlePriceChange('$50-$100')} /> $50-$100
            </label>
            <label className="price-range-label" aria-label="Gamme de prix $100-$200">
              <input type="checkbox" value="$100-$200" onChange={() => handlePriceChange('$100-$200')} /> $100-$200
            </label>
            <label className="price-range-label" aria-label="Gamme de prix $200+">
              <input type="checkbox" value="$200+" onChange={() => handlePriceChange('$200+')} /> $200+
            </label>
          </div>
        </aside>
        <section className="services-list-container" aria-label="Liste des services">
          <div className="sort-results">
            <p>{`1-10 sur ${filteredServices.length} résultats`}</p>
            <div className="sort-options">
              <label htmlFor="sort-by">Trier par</label>
              <select id="sort-by" onChange={handleSortChange} aria-label="Trier par">
                <option value="Les Plus Populaires">Les Plus Populaires</option>
                <option value="Les Mieux Notés">Les Mieux Notés</option>
                <option value="Prix: Du Plus Bas Au Plus Élevé">Prix: Du Plus Bas Au Plus Élevé</option>
                <option value="Prix: Du Plus Élevé Au Plus Bas">Prix: Du Plus Élevé Au Plus Bas</option>
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
                  <p className="service-rating" style={{ fontSize: '0.6rem', color: '#333', margin: '0 0' }}>{service.reviews} avis
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <FooterFR />
    </div>
  );
};

export default ServicesFR;
