import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Clock3,
  Menu,
  Minus,
  Plus,
  ShoppingBag,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import './styles.css';

const oilImage = 'https://afrolems.files.wordpress.com/2013/06/palm-oil-for-cooking-nigerian-food.jpg';
const bottleImage = 'https://www.truepalmoil.com/cdn/shop/files/TruePalmOil014.jpg?v=1699953711&width=1445';

const products = [
  { id: '75cl', name: 'Zoe Palm Oil', size: '75 cl bottle', detail: 'GTIN 6156000479101', tag: 'Everyday bottle', tone: 'orange' },
  { id: '1l', name: 'Zoe Palm Oil', size: '1 litre bottle', detail: 'GTIN 6156000479118', tag: 'Family bottle', tone: 'green' },
  { id: 'wholesale', name: 'Zoe for your shop', size: 'Wholesale supply', detail: 'For resellers & distributors', tag: 'Stock Zoe', tone: 'cream' },
];

const recipes = [
  { title: 'Sunday Ofada', time: '45 min', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85', note: 'Smoky pepper sauce, the way weekends should taste.' },
  { title: 'Palm-oil stew', time: '35 min', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85', note: 'A rich, glossy base for rice, yam and plantain.' },
  { title: 'Pepper soup night', time: '30 min', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85', note: 'Deep flavour and plenty of warmth in one pot.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState({ family: 1 });
  const [selectedRecipe, setSelectedRecipe] = useState(0);
  const [notice, setNotice] = useState('');

  const cartItems = products.filter((product) => cart[product.id]);
  const cartCount = Object.values(cart).reduce((sum, amount) => sum + amount, 0);

  const updateCart = (productId, change) => {
    setCart((current) => {
      const next = Math.max(0, (current[productId] || 0) + change);
      const updated = { ...current };
      if (next === 0) delete updated[productId];
      else updated[productId] = next;
      return updated;
    });
  };

  const addToCart = (product) => {
    updateCart(product.id, 1);
    setNotice(`${product.name} added to your basket.`);
    setTimeout(() => setNotice(''), 2600);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <div className="announcement"><Sparkles size={14} /> Quality. Fresh. Clean. Natural. Native. <span>Call / WhatsApp 09036417185</span></div>

      <header className="site-header">
        <button className="mobile-menu" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={22} /></button>
        <button className="brand-mark" onClick={() => scrollTo('top')} aria-label="Zoe home">
          <span className="brand-sun">Z</span><span>ZOE</span>
        </button>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'}>
          <button className="close-menu" onClick={() => setMenuOpen(false)}><X size={20} /></button>
          <button onClick={() => scrollTo('shop')}>Shop oil</button>
          <button onClick={() => scrollTo('story')}>Our story</button>
          <button onClick={() => scrollTo('recipes')}>Cook with Zoe</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>
        <div className="header-actions">
          <button className="icon-button hide-mobile" aria-label="Account"><CircleUserRound size={21} /></button>
          <button className="cart-button" onClick={() => setCartOpen(true)}><ShoppingBag size={18} /><span>Basket</span><b>{cartCount}</b></button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">ZOE PALM OIL · NAFDAC A8-109270L</p>
            <h1>Natural palm oil for <em>proper food.</em></h1>
            <p className="hero-lede">Fresh, clean native palm oil with the rich colour, aroma and taste Nigerian kitchens know and love.</p>
            <div className="hero-buttons">
              <button className="button button-dark" onClick={() => scrollTo('shop')}>Shop the pantry <ArrowRight size={17} /></button>
              <button className="text-button" onClick={() => scrollTo('story')}>Why Zoe <ArrowDownRight size={17} /></button>
            </div>
            <div className="hero-proof"><div className="avatars"><span>75</span><span>1L</span><span>NG</span></div><p><strong>75cl + 1 litre</strong><br />available for your kitchen</p></div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
            <div className="floating-note"><span className="note-dot" /> Gently shake before use</div>
            <div className="hero-bottle" aria-label="Zoe Palm Oil bottle illustration">
              <div className="bottle-cap" /><div className="bottle-neck" /><div className="bottle-body"><div className="bottle-label"><span>NATURAL</span><strong>ZOE</strong><small>PALM OIL</small><i>Fresh · Clean · Native</i></div></div>
            </div>
            <div className="hero-image-card"><img src={oilImage} alt="Palm oil being poured into a bowl" /><span>Made for<br /><strong>proper food.</strong></span></div>
            <div className="sun-stamp"><Star size={13} fill="currentColor" /><span>PURE<br />PALM<br />GOODNESS</span></div>
          </div>
        </section>

        <section className="ticker" aria-label="Zoe values">
          <div>QUALITY</div><span>✦</span><div>FRESH</div><span>✦</span><div>CLEAN</div><span>✦</span><div>NATURAL NATIVE PALM OIL</div><span>✦</span><div>QUALITY</div>
        </section>

        <section className="intro-section content-width" id="story">
          <div className="section-kicker"><span>01</span><span>Why Zoe</span></div>
          <div className="intro-grid"><h2>Rich colour. <em>Native taste.</em></h2><div><p className="large-copy">Zoe Palm Oil is made for soups, stews, frying and the everyday Nigerian kitchen—with the unmistakable taste and aroma of natural native palm oil.</p><button className="text-button" onClick={() => scrollTo('process')}>See the Zoe standard <ArrowRight size={17} /></button></div></div>
        </section>

        <section className="feature-band" id="process">
          <div className="feature-photo"><img src={bottleImage} alt="Palm oil bottle and fresh kitchen ingredients" /><div className="photo-caption">From palm fruit<br />to your kitchen.</div></div>
          <div className="feature-copy"><p className="eyebrow light">THE ZOE STANDARD</p><h2>Pure palm fruit.<br /><em>Honest flavour.</em></h2><p>Every bottle starts with palm fruit and is made to keep the natural colour, aroma and taste people look for in native palm oil.</p><div className="standard-list"><div><span>01</span><strong>Palm fruit</strong><small>The only listed ingredient</small></div><div><span>02</span><strong>Shake before use</strong><small>Gently shake the bottle first</small></div><div><span>03</span><strong>Store with care</strong><small>Keep in a cool, dry place</small></div></div></div>
        </section>

        <section className="shop-section content-width" id="shop">
          <div className="section-heading"><div><div className="section-kicker"><span>02</span><span>Find your bottle</span></div><h2>Choose your <em>size.</em></h2></div><p>75cl for everyday cooking.<br />1 litre for bigger pots.</p></div>
          <div className="product-grid">{products.map((product) => <article className={`product-card ${product.tone}`} key={product.id}><div className="product-card-top"><span className="product-tag">{product.tag}</span><button className="round-arrow" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to enquiry`}><Plus size={18} /></button></div><div className="product-pack"><div className="mini-cap" /><div className="mini-bottle"><div className="mini-label"><strong>ZOE</strong><span>PALM OIL</span></div></div></div><div className="product-meta"><div><h3>{product.name}</h3><p>{product.size}</p></div><strong>Enquire</strong></div><button className="product-add" onClick={() => addToCart(product)}>Add to enquiry <ArrowRight size={15} /></button></article>)}</div>
        </section>

        <section className="recipe-section" id="recipes">
          <div className="content-width recipe-layout"><div className="recipe-copy"><div className="section-kicker light-kicker"><span>03</span><span>From our kitchen</span></div><h2>What are you<br /><em>cooking?</em></h2><p>Good oil is only the beginning. Find a few Zoe-worthy ways to make your next meal memorable.</p><div className="recipe-controls"><button onClick={() => setSelectedRecipe((selectedRecipe + recipes.length - 1) % recipes.length)} aria-label="Previous recipe"><ChevronLeft size={18} /></button><span>0{selectedRecipe + 1} <i>/ 0{recipes.length}</i></span><button onClick={() => setSelectedRecipe((selectedRecipe + 1) % recipes.length)} aria-label="Next recipe"><ChevronRight size={18} /></button></div></div><div className="recipe-card"><img src={recipes[selectedRecipe].image} alt={recipes[selectedRecipe].title} /><div className="recipe-overlay"><div><span><Clock3 size={14} /> {recipes[selectedRecipe].time}</span><h3>{recipes[selectedRecipe].title}</h3><p>{recipes[selectedRecipe].note}</p></div><button className="round-arrow light-arrow" aria-label="View recipe"><ArrowUpRightIcon /></button></div></div></div>
        </section>

        <section className="social-section content-width"><div className="social-heading"><div><div className="section-kicker"><span>04</span><span>From Instagram</span></div><h2>Follow <em>@zoepalmoil</em></h2></div><a className="text-button" href="https://www.instagram.com/zoepalmoil/" target="_blank" rel="noreferrer">View the profile <span className="social-mark">◎</span></a></div><div className="social-grid"><div className="social-tile tile-green"><span>Quality.<br />Fresh.<br />Clean.</span><strong>@zoepalmoil</strong></div><div className="social-tile tile-image"><img src={oilImage} alt="Palm oil cooking inspiration" /><span>Natural native palm oil</span></div><div className="social-tile tile-orange"><span>For soups,<br />stews &amp; more.</span><strong>Call / WhatsApp ↗</strong></div><div className="social-tile tile-dark"><span>ZOE</span><small>PALM OIL · LAGOS</small></div></div></section>

        <section className="contact-section" id="contact"><div className="content-width contact-inner"><div><p className="eyebrow light">CALL OR WHATSAPP</p><h2>Go and buy<br /><em>Zoe Palm Oil.</em></h2></div><div><p>For stockists, resellers and home orders, reach the Zoe team directly.</p><a className="button button-light" href="https://wa.me/23481097149157?text=Hello%20Zoe%20Palm%20Oil%2C%20I%27d%20like%20to%20order." target="_blank" rel="noreferrer">WhatsApp 08109749157 <ArrowUpRightIcon /></a><p className="contact-phones">Also: 09036417185</p></div></div></section>
      </main>

      <footer className="site-footer"><div className="brand-mark footer-brand"><span className="brand-sun">Z</span><span>ZOE</span></div><p>Quality. Fresh. Clean. Natural. Native.</p><div className="footer-links"><button onClick={() => scrollTo('shop')}>Products</button><button onClick={() => scrollTo('story')}>About Zoe</button><a href="https://www.instagram.com/zoepalmoil/" target="_blank" rel="noreferrer">Instagram</a></div><small>© Zoe Palm Oil. Made in Nigeria.</small></footer>

      {notice && <div className="toast"><Check size={18} /> {notice}</div>}
      {cartOpen && <div className="drawer-backdrop" onClick={() => setCartOpen(false)}><aside className="cart-drawer" onClick={(event) => event.stopPropagation()}><div className="drawer-header"><div><p className="eyebrow">YOUR ENQUIRY</p><h2>Ready to <em>order.</em></h2></div><button className="icon-button" onClick={() => setCartOpen(false)} aria-label="Close enquiry"><X size={21} /></button></div>{cartItems.length === 0 ? <div className="empty-cart"><ShoppingBag size={36} /><p>Your enquiry list is waiting for its first Zoe bottle.</p><button className="button button-dark" onClick={() => { setCartOpen(false); scrollTo('shop'); }}>View products</button></div> : <><div className="cart-items">{cartItems.map((product) => <div className="cart-item" key={product.id}><div className={`cart-thumb ${product.tone}`}><div className="mini-bottle"><div className="mini-label"><strong>ZOE</strong><span>PALM OIL</span></div></div></div><div className="cart-item-info"><h3>{product.name}</h3><p>{product.size} · {product.detail}</p><div className="quantity"><button onClick={() => updateCart(product.id, -1)}><Minus size={14} /></button><span>{cart[product.id]}</span><button onClick={() => updateCart(product.id, 1)}><Plus size={14} /></button></div></div></div>)}</div><div className="cart-total"><span>Order list</span><strong>{cartCount} item{cartCount === 1 ? '' : 's'}</strong></div><a className="button button-dark checkout-button" href="https://wa.me/23481097149157?text=Hello%20Zoe%20Palm%20Oil%2C%20I%27d%20like%20to%20order." target="_blank" rel="noreferrer">Send on WhatsApp <ArrowRight size={17} /></a><p className="delivery-note">Call 09036417185 or 08109749157 to order.</p></>}</aside></div>}
    </div>
  );
}

function ArrowUpRightIcon() { return <ArrowRight size={17} style={{ transform: 'rotate(-45deg)' }} />; }

createRoot(document.getElementById('root')).render(<App />);
