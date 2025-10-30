import React, { useState } from 'react'
import { FaSearch, FaCalendar, FaUser, FaArrowRight, FaShare, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTags, FaClock } from 'react-icons/fa'

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  // Sample blog data
  const featuredPost = {
    id: 1,
    title: "The Ultimate Guide to Choosing the Perfect Marble for Your Home",
    excerpt: "Discover how to select the ideal marble that complements your interior design while ensuring durability and longevity for your spaces.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Marble Selection",
    date: "2024-01-15",
    author: "Marble Expert",
    readTime: "8 min read",
    tags: ["Selection", "Design", "Quality"]
  }

  const blogPosts = [
    {
      id: 2,
      title: "Modern Marble Trends: What's Hot in 2024",
      excerpt: "Explore the latest marble trends taking the interior design world by storm this year.",
      image: "https://images.unsplash.com/photo-1514053026555-49ce8886ae41?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Trends",
      date: "2024-01-12",
      author: "Design Team",
      readTime: "5 min read",
      tags: ["Trends", "2024", "Innovation"]
    },
    {
      id: 3,
      title: "Caring for Your Marble Surfaces: Maintenance Tips",
      excerpt: "Learn professional tips to maintain the pristine condition of your marble surfaces for years to come.",
      image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Maintenance",
      date: "2024-01-08",
      author: "Care Experts",
      readTime: "6 min read",
      tags: ["Maintenance", "Care", "Longevity"]
    },
    {
      id: 4,
      title: "Italian vs Indian Marble: A Comprehensive Comparison",
      excerpt: "Understand the key differences between Italian and Indian marble to make an informed decision.",
      image: "https://images.unsplash.com/photo-1554743365-a80c1243316e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Comparison",
      date: "2024-01-05",
      author: "Marble Specialists",
      readTime: "10 min read",
      tags: ["Comparison", "Quality", "Origin"]
    },
    {
      id: 5,
      title: "Transforming Spaces with Marble Accent Walls",
      excerpt: "Discover creative ways to use marble accent walls to elevate your interior spaces.",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Design Ideas",
      date: "2024-01-02",
      author: "Interior Designers",
      readTime: "7 min read",
      tags: ["Design", "Accent Walls", "Transformation"]
    },
    {
      id: 6,
      title: "Sustainable Marble Sourcing: Our Eco-Friendly Approach",
      excerpt: "Learn about our commitment to sustainable and environmentally responsible marble sourcing practices.",
      image: "https://images.unsplash.com/photo-1511389026070-a14ae610a1be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Sustainability",
      date: "2023-12-28",
      author: "Sustainability Team",
      readTime: "4 min read",
      tags: ["Sustainability", "Eco-Friendly", "Responsible"]
    }
  ]

  const categories = [
    { name: "Marble Selection", count: 12 },
    { name: "Design Ideas", count: 8 },
    { name: "Maintenance", count: 6 },
    { name: "Trends", count: 10 },
    { name: "Sustainability", count: 4 },
    { name: "Installation", count: 7 }
  ]

  const popularTags = ["Marble", "Design", "Interior", "Luxury", "Home", "Trending", "Quality", "Natural Stone", "Elegance", "Modern"]

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gradient-to-br  bg-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-[#0E5543] to-[#1a7a5e] py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://c0.wallpaperflare.com/preview/728/375/731/aerial-analog-background-blog.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-[#F2E1C5] mb-4 font-['Playfair_Display']">
            Marble Insights
          </h1>
          <p className="text-xl text-[#F2E1C5]/90 mb-8 max-w-2xl mx-auto">
            Expert knowledge, trends, and inspiration from the world of premium marble
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-2xl bg-white/10 backdrop-blur-md border border-[#F2E1C5]/20 text-[#F2E1C5] placeholder-[#F2E1C5]/60 focus:outline-none focus:ring-2 focus:ring-[#F2E1C5] focus:border-transparent"
              />
              <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#F2E1C5]/60 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-[#0E5543]/10">
              <h3 className="text-2xl font-bold text-[#0E5543] mb-4 font-['Playfair_Display']">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index} className="flex justify-between items-center py-2 border-b border-[#0E5543]/10 last:border-b-0">
                    <span className="text-[#0E5543] hover:text-[#1a7a5e] cursor-pointer transition-colors">{category.name}</span>
                    <span className="bg-[#0E5543] text-[#F2E1C5] px-2 py-1 rounded-full text-sm">{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-[#0E5543]/10">
              <h3 className="text-2xl font-bold text-[#0E5543] mb-4 font-['Playfair_Display']">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <span key={index} className="bg-[#0E5543]/10 text-[#0E5543] px-3 py-1 rounded-full text-sm hover:bg-[#0E5543] hover:text-[#F2E1C5] transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-[#0E5543] to-[#1a7a5e] rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold text-[#F2E1C5] mb-2 font-['Playfair_Display']">Stay Updated</h3>
              <p className="text-[#F2E1C5]/90 mb-4">Get the latest marble insights delivered to your inbox</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#F2E1C5]/20 text-[#F2E1C5] placeholder-[#F2E1C5]/60 focus:outline-none focus:ring-2 focus:ring-[#F2E1C5]"
                />
                <button className="w-full bg-[#F2E1C5] text-[#0E5543] py-3 rounded-xl font-semibold ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <div className="mb-12">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#0E5543]/10">
                <div className="relative h-96">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="bg-[#F2E1C5] text-[#0E5543] px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Playfair_Display']">
                      {featuredPost.title}
                    </h2>
                    <div className="flex items-center text-white/80 text-sm mb-4">
                      <FaCalendar className="mr-2" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <FaUser className="mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <FaClock className="mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <p className="text-white/90 mb-6">{featuredPost.excerpt}</p>
                    <button className="bg-[#F2E1C5] text-[#0E5543] px-6 py-3 rounded-xl font-semibold hover:bg-[#F2E1C5]/90 transition-colors flex items-center gap-2">
                      Read Article <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Posts Grid */}
            <div>
              <h2 className="text-3xl font-bold text-[#0E5543] mb-8 font-['Playfair_Display']">Recent Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white  overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#0E5543]/10 group">
                    <div className="relative h-48">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#0E5543] text-[#F2E1C5] px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#0E5543] mb-3 font-['Playfair_Display'] group-hover:text-[#1a7a5e] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <FaCalendar className="mr-1" />
                            {post.date}
                          </span>
                          <span className="flex items-center">
                            <FaClock className="mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.map((tag, index) => (
                            <span key={index} className="bg-[#F2E1C5] text-[#0E5543] px-2 py-1 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <button className="bg-white text-black flex items-center gap-2 text-sm font-semibold">
                          Read More <FaArrowRight className="text-xs" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
    
      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default BlogsPage