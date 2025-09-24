import React, { useState } from 'react';

export default function Help() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: '#F2E1C5' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0E5543' }}>
            How Can We Help You?
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#0E5543', opacity: 0.8 }}>
            Have questions about marble care? We're here to help! Send us a message and we'll respond as soon as possible.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2" style={{ borderColor: '#0E5543' }}>
            <h2 className="text-2xl font-semibold mb-6" style={{ color: '#0E5543' }}>Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: '#0E5543' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#0E5543', color: '#0E5543' }}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: '#0E5543' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#0E5543', color: '#0E5543' }}
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1" style={{ color: '#0E5543' }}>
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#0E5543', color: '#0E5543' }}
                >
                  <option value="">Select a subject</option>
                  <option value="cleaning">Cleaning Questions</option>
                  <option value="stains">Stain Removal</option>
                  <option value="sealing">Sealing Advice</option>
                  <option value="maintenance">General Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: '#0E5543' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#0E5543', color: '#0E5543' }}
                  placeholder="Describe your question or issue in detail..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg font-semibold transition duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#0E5543', color: '#F2E1C5' }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* FAQ Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2" style={{ borderColor: '#0E5543' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#0E5543' }}>Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div className="border-b pb-3" style={{ borderColor: '#0E5543' }}>
                  <h3 className="font-semibold" style={{ color: '#0E5543' }}>How often should I seal my marble?</h3>
                  <p className="text-sm mt-1" style={{ color: '#0E5543', opacity: 0.8 }}>
                    Most marble surfaces should be sealed every 6-12 months, depending on usage.
                  </p>
                </div>
                
                <div className="border-b pb-3" style={{ borderColor: '#0E5543' }}>
                  <h3 className="font-semibold" style={{ color: '#0E5543' }}>Can I use vinegar to clean marble?</h3>
                  <p className="text-sm mt-1" style={{ color: '#0E5543', opacity: 0.8 }}>
                    No, vinegar is acidic and can etch marble surfaces. Use pH-neutral cleaners instead.
                  </p>
                </div>
                
                <div className="border-b pb-3" style={{ borderColor: '#0E5543' }}>
                  <h3 className="font-semibold" style={{ color: '#0E5543' }}>How do I remove stains from marble?</h3>
                  <p className="text-sm mt-1" style={{ color: '#0E5543', opacity: 0.8 }}>
                    For organic stains, use a poultice. For oil-based stains, consult a professional.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold" style={{ color: '#0E5543' }}>Is marble suitable for kitchen countertops?</h3>
                  <p className="text-sm mt-1" style={{ color: '#0E5543', opacity: 0.8 }}>
                    Yes, but it requires careful maintenance and regular sealing to prevent damage.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2" style={{ borderColor: '#0E5543' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#0E5543' }}>Contact Information</h2>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#0E5543' }}>
                    <svg className="w-4 h-4" fill="#F2E1C5" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#0E5543' }}>Phone</p>
                    <p style={{ color: '#0E5543', opacity: 0.8 }}>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#0E5543' }}>
                    <svg className="w-4 h-4" fill="#F2E1C5" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#0E5543' }}>Email</p>
                    <p style={{ color: '#0E5543', opacity: 0.8 }}>help@marblecare.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#0E5543' }}>
                    <svg className="w-4 h-4" fill="#F2E1C5" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#0E5543' }}>Address</p>
                    <p style={{ color: '#0E5543', opacity: 0.8 }}>123 Stone Street, Marble City, MC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border-2 text-center" style={{ borderColor: '#0E5543' }}>
          <h2 className="text-2xl font-semibold mb-2" style={{ color: '#0E5543' }}>Emergency Marble Care</h2>
          <p className="mb-4" style={{ color: '#0E5543', opacity: 0.8 }}>
            For urgent marble damage or staining emergencies, call our hotline:
          </p>
          <div className="text-2xl font-bold" style={{ color: '#0E5543' }}>1-800-MARBLE-HELP</div>
          <p className="text-sm mt-2" style={{ color: '#0E5543', opacity: 0.7 }}>Available 24/7 for emergency consultations</p>
        </div>
      </div>
    </div>
  );
}