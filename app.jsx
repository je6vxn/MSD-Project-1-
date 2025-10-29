import React, { useState } from 'react';
import { ShoppingCart, Phone, MapPin, Clock, ChefHat } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    products: [],
    quantity: 1,
    type: 'Dum'
  });

  const [cart, setCart] = useState([]);

  const foodItems = [
    { 
      id: 1, 
      name: 'Biriyanis', 
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600',
      description: 'Aromatic rice with tender meat and authentic spices',
      price: 250
    },
    { 
      id: 2, 
      name: 'Thalis', 
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600',
      description: 'Complete meal with rice, curries, and sides',
      price: 180
    },
    { 
      id: 3, 
      name: 'Mandis', 
      image: 'https://images.unsplash.com/photo-1633945274605-562d9e88008c?w=600',
      description: 'Traditional Arabian rice dish with roasted meat',
      price: 300
    }
  ];

  const productTypes = ['Dum', 'Fry Piece', 'Lolipop', 'Rambo', 'Wings', 'Tandoori', 'Mixed', 'Arabian'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProductSelect = (e) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({
      ...prev,
      products: options
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.products.length === 0) {
      alert('Please select at least one product');
      return;
    }
    
    alert(🎉 Order Placed Successfully!\n\n📋 Order Summary:\n👤 Name: ${formData.name}\n📍 Address: ${formData.address}\n📞 Phone: ${formData.phone}\n🍽 Items: ${formData.products.join(', ')}\n📦 Quantity: ${formData.quantity}\n🔥 Type: ${formData.type}\n\n💰 Payment: Cash on Delivery\n⏰ Delivery Time: 30-45 minutes);
    
    setFormData({
      name: '',
      address: '',
      phone: '',
      products: [],
      quantity: 1,
      type: 'Dum'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 via-orange-600 to-red-700 text-white shadow-2xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ChefHat className="w-10 h-10" />
              <div>
                <h1 className="text-4xl font-bold tracking-tight">Flavours of Biryani</h1>
                <p className="text-orange-100 text-sm mt-1">Near Vignan University • Authentic Taste</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm">10 AM - 11 PM</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <nav className="flex gap-6">
              <a href="#menu" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">Menu</a>
              <a href="#order" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">Order Now</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">About</a>
            </nav>
            <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full">
              <ShoppingCart className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-semibold">Free Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Menu Section */}
        <div id="menu" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Specialties</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Indulge in authentic flavors crafted with premium ingredients and traditional recipes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foodItems.map(item => (
              <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    ₹{item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      30-45 min
                    </span>
                    <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full hover:from-red-700 hover:to-orange-700 transition-all font-semibold shadow-md">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Form Section */}
        <div id="order" className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Place Your Order</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">Fill in the details and get your food delivered hot and fresh</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Delivery Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Complete delivery address"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Select Dishes</label>
                  <select
                    name="products"
                    multiple
                    value={formData.products}
                    onChange={handleProductSelect}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors min-h-[120px]"
                  >
                    <option value="Biriyanis">Biriyanis - ₹250</option>
                    <option value="Thalis">Thalis - ₹180</option>
                    <option value="Mandis">Mandis - ₹300</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Preparation Style</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors bg-white"
                >
                  {productTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold py-4 px-6 rounded-xl hover:from-red-700 hover:to-orange-700 transform hover:scale-[1.02] transition-all shadow-lg text-lg"
              >
                Place Order • Cash on Delivery
              </button>

              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 mt-4">
                <p className="text-sm text-gray-700 text-center">
                  🚚 <strong>Free Delivery</strong> • 💵 Cash on Delivery Only • ⏰ Delivery in 30-45 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ChefHat className="w-6 h-6" />
                Flavours of Biryani
              </h3>
              <p className="text-gray-400 text-sm">Serving authentic biryani and traditional dishes near Vignan University since 2020.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Near Vignan University, Guntur</p>
                <p className="flex items-center gap-2"><Clock className="w-4 h-4" /> Open: 10 AM - 11 PM</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Menu</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Order Now</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Flavours of Biryani. All rights reserved. | Cash on Delivery Only</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
