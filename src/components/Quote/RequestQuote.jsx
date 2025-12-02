import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiPhone, FiMapPin, FiMessageSquare } from 'react-icons/fi';

const RequestQuote = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    productType: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Quote request submitted successfully!');
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-[#0E5543] mb-6"
        >
          <FiArrowLeft size={20} />
          <span>Back</span>
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Request Quote</h1>
            <p className="text-gray-600">Get a personalized quote for your stone requirements</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="relative">
                <FiUser className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E5543] focus:border-transparent"
                />
              </div>

              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E5543] focus:border-transparent"
                />
              </div>

              <div className="relative">
                <FiPhone className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E5543] focus:border-transparent"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E5543] focus:border-transparent"
                />
              </div>

              <div className="relative">
                <FiMapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  name="location"
                  placeholder="Project Location *"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E5543] focus:border-transparent"
                />
              </div>

              <div>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E5543] focus:border-transparent"
                >
                  <option value="">Select Product Type *</option>
                  <option value="marble">Marble</option>
                  <option value="granite">Granite</option>
                  <option value="sandstone">Sandstone</option>
                  <option value="surata-green">Surata Green</option>
                  <option value="forestgreen">ForestGreen</option>
                  <option value="spider-green">Spider Green</option>
                  <option value="r-green">R Green</option>
                </select>
              </div>

            </div>

            <div>
              <input
                type="text"
                name="quantity"
                placeholder="Quantity/Area (sq ft) *"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E5543] focus:border-transparent"
              />
            </div>

            <div className="relative">
              <FiMessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
              <textarea
                name="message"
                placeholder="Additional Requirements/Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E5543] focus:border-transparent resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
              style={{backgroundColor:"#0E5543"}}
                type="submit"
                className="flex-1 bg-[#0E5543]  text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0E5543]/90 transition-colors"
              >
                Submit Quote Request
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;