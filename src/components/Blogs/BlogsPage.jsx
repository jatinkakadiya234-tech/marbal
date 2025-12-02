import React, { useEffect, useState } from 'react'
import { FaSearch, FaCalendar, FaUser, FaArrowRight, FaShare, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTags, FaClock } from 'react-icons/fa'
import Apihelper from '../../services/Apihelper'

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [Bloge, setBloge] = useState([])

  const categories = [
    { name: "Green Marble Guide", count: 1 },
    { name: "Marble Selection", count: 12 },
    { name: "Design Ideas", count: 8 },
    { name: "Maintenance", count: 6 },
    { name: "Trends", count: 10 },
    { name: "Sustainability", count: 4 },
    { name: "Installation", count: 7 }
  ]

  const popularTags = ["Indian green marble", "green marble manufacturers in India", "green marble suppliers in India", "leading marble company in India", "Marble", "Design", "Interior", "Luxury", "Home", "Trending", "Quality", "Natural Stone", "Elegance", "Modern"]

  const filteredPosts = Bloge && Bloge.length > 0 ? Bloge.filter((post) =>
    (post.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (post.description || "").toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  const featuredPost = Bloge && Bloge.length > 0 ? Bloge[0] : null;

  async function getAllBlogs() {
    try {
      const response = await Apihelper.getallblogs();
      console.log(response.data);
      setBloge(response?.data || []);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllBlogs();
  }, [])

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
            {featuredPost && (
              <div className="mb-12">
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#0E5543]/10">
                  <div className="relative h-96">
                    <img 
                      src={featuredPost.image || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="bg-[#F2E1C5] text-[#0E5543] px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                        {featuredPost.category || 'Blog'}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Playfair_Display']">
                        {featuredPost.title}
                      </h2>
                      <div className="flex items-center text-white/80 text-sm mb-4">
                        <FaCalendar className="mr-2" />
                        <span className="mr-4">{new Date(featuredPost.createdAt || featuredPost.date).toLocaleDateString()}</span>
                        <FaUser className="mr-2" />
                        <span className="mr-4">{featuredPost.author || 'Admin'}</span>
                        <FaClock className="mr-2" />
                        <span>5 min read</span>
                      </div>
                      <p className="text-white/90 mb-6">{featuredPost.description || featuredPost.excerpt}</p>
                      <button className="bg-[#F2E1C5] text-[#0E5543] px-6 py-3 rounded-xl font-semibold hover:bg-[#F2E1C5]/90 transition-colors flex items-center gap-2">
                        Read Article <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Recent Posts Grid */}
            <div>
              <h2 className="text-3xl font-bold text-[#0E5543] mb-8 font-['Playfair_Display']">Recent Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.length > 0 ? filteredPosts.slice(1).map((post) => (
                  <div key={post._id || post.id} className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#0E5543]/10 group">
                    <div className="relative h-48">
                      <img 
                        src={post.image || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#0E5543] text-[#F2E1C5] px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category || 'Blog'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#0E5543] mb-3 font-['Playfair_Display'] group-hover:text-[#1a7a5e] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.description || post.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <FaCalendar className="mr-1" />
                            {new Date(post.createdAt || post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <FaClock className="mr-1" />
                            5 min read
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {(post.tags || ['Blog']).slice(0, 2).map((tag, index) => (
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
                )) : (
                  <div className="col-span-2 text-center py-12">
                    <p className="text-gray-500 text-lg">Loading blogs...</p>
                  </div>
                )}
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