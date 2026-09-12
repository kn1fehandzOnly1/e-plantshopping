import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        name: "Snake Plant",
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=600&q=80",
        description: "Produces oxygen at night and removes toxins such as formaldehyde and benzene.",
        cost: "$15"
      },
      {
        name: "Spider Plant",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
        description: "Filters carbon monoxide and xylene, resilient and easy to propagate.",
        cost: "$12"
      },
      {
        name: "Peace Lily",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80",
        description: "Elegant white blooms that break down harmful gases like ammonia and acetone.",
        cost: "$18"
      },
      {
        name: "Boston Fern",
        image: "https://images.unsplash.com/photo-1596724808381-80a56113b28b?auto=format&fit=crop&w=600&q=80",
        description: "Natural humidifier with feather-like fronds that clean indoor air.",
        cost: "$14"
      },
      {
        name: "Rubber Plant",
        image: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?auto=format&fit=crop&w=600&q=80",
        description: "Glossy broad leaves that absorb airborne contaminants and balance humidity.",
        cost: "$20"
      },
      {
        name: "Aloe Vera",
        image: "https://images.unsplash.com/photo-1567689265664-1c48de61db0b?auto=format&fit=crop&w=600&q=80",
        description: "Purifies air and produces soothing therapeutic gel for skincare and minor burns.",
        cost: "$10"
      }
    ]
  },
  {
    category: "Aromatic & Fragrant Plants",
    plants: [
      {
        name: "English Lavender",
        image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80",
        description: "Calming sweet floral fragrance that promotes restful sleep and reduces stress.",
        cost: "$16"
      },
      {
        name: "Star Jasmine",
        image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=600&q=80",
        description: "Intensely fragrant star-shaped white blossoms that bring a garden scent inside.",
        cost: "$22"
      },
      {
        name: "Rosemary",
        image: "https://images.unsplash.com/photo-1515586000433-a5bc720b3603?auto=format&fit=crop&w=600&q=80",
        description: "Invigorating herbal pine aroma that sharpens memory and culinary flavor.",
        cost: "$14"
      },
      {
        name: "Spearmint",
        image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80",
        description: "Refreshing crisp aroma that naturally deters pests and enhances beverages.",
        cost: "$10"
      },
      {
        name: "Lemon Balm",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80",
        description: "Zesty citrus scented foliage that uplifts mood and brews delicious teas.",
        cost: "$12"
      },
      {
        name: "Eucalyptus",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80",
        description: "Clean menthol fragrance that clears sinuses and creates a spa-like ambience.",
        cost: "$18"
      }
    ]
  },
  {
    category: "Low Maintenance & Hardy Plants",
    plants: [
      {
        name: "ZZ Plant",
        image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80",
        description: "Virtually indestructible, thrives in low light and requires minimal watering.",
        cost: "$24"
      },
      {
        name: "Golden Pothos",
        image: "https://images.unsplash.com/photo-1596724810850-8b06691c951c?auto=format&fit=crop&w=600&q=80",
        description: "Trailing heart-shaped variegated vine that grows quickly in almost any condition.",
        cost: "$13"
      },
      {
        name: "Cast Iron Plant",
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
        description: "Named for its extreme durability against neglect, low light, and temperature changes.",
        cost: "$26"
      },
      {
        name: "Chinese Evergreen",
        image: "https://images.unsplash.com/photo-1616690710400-a16d146927c5?auto=format&fit=crop&w=600&q=80",
        description: "Striking patterned leaves that tolerate dry air and low indoor light effortlessly.",
        cost: "$19"
      },
      {
        name: "English Ivy",
        image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80",
        description: "Classic cascading evergreen vine that thrives on trellises or hanging planters.",
        cost: "$11"
      },
      {
        name: "Heartleaf Philodendron",
        image: "https://images.unsplash.com/photo-1617173944883-6ffbd35d584d?auto=format&fit=crop&w=600&q=80",
        description: "Graceful climber with lush green heart leaves, perfect for shelves and desks.",
        cost: "$17"
      }
    ]
  }
];

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Dynamic total items in cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Check if plant is in cart to sync button state
  const isPlantInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName) || !!addedToCart[plantName];
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    if (e) e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
  };

  return (
    <div className="product-list-wrapper">
      {/* Navigation Bar - displayed on both Product List and Cart view */}
      <nav className="navbar">
        <div className="nav-brand" onClick={onHomeClick} title="Go to Home">
          <img
            src="https://cdn-icons-png.flaticon.com/512/628/628283.png"
            alt="Paradise Nursery Logo"
            className="brand-logo"
          />
          <div className="brand-text">
            <h1 className="brand-name">Paradise Nursery</h1>
            <span className="brand-tagline">Where Greenery Meets Serenity</span>
          </div>
        </div>

        <div className="nav-links">
          <button
            className="nav-link-btn"
            onClick={onHomeClick}
            title="Return to Landing Page"
          >
            🏠 Home
          </button>
          <button
            className={`nav-link-btn ${!showCart ? 'active' : ''}`}
            onClick={handlePlantsClick}
            title="View Plants Catalog"
          >
            🌿 Plants
          </button>
          <button
            className={`nav-link-btn cart-btn ${showCart ? 'active' : ''}`}
            onClick={handleCartClick}
            title="View Shopping Cart"
          >
            <div className="cart-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cart-svg-icon"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              <span className="cart-badge-count">{totalQuantity}</span>
            </div>
            <span className="cart-btn-label">Cart</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {showCart ? (
          <CartItem onContinueShopping={() => setShowCart(false)} />
        ) : (
          <div className="product-catalog-container">
            <div className="catalog-hero-header">
              <h2>Our Houseplant Collection</h2>
              <p>Hand-picked greenery to purify your air, calm your senses, and revitalize your space.</p>
            </div>

            {plantsArray.map((categoryObj, catIdx) => (
              <section className="category-section" key={catIdx}>
                <div className="category-header">
                  <h3 className="category-title">{categoryObj.category}</h3>
                  <span className="category-count">{categoryObj.plants.length} Varieties</span>
                </div>

                <div className="plants-grid">
                  {categoryObj.plants.map((plant, plantIdx) => {
                    const inCart = isPlantInCart(plant.name);
                    return (
                      <div className="plant-card" key={plantIdx}>
                        <div className="plant-image-container">
                          <img
                            src={plant.image}
                            alt={plant.name}
                            className="plant-image"
                            loading="lazy"
                          />
                          <span className="plant-price-badge">{plant.cost}</span>
                        </div>

                        <div className="plant-card-body">
                          <h4 className="plant-title">{plant.name}</h4>
                          <p className="plant-desc">{plant.description}</p>
                          
                          <button
                            className={`add-to-cart-btn ${inCart ? 'disabled' : ''}`}
                            onClick={() => handleAddToCart(plant)}
                            disabled={inCart}
                          >
                            {inCart ? '✓ Added to Cart' : '🛒 Add to Cart'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default ProductList;
