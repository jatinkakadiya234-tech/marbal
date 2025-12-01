import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Import sandstone images
import beigeSandstone from "../../assets/Sandstone/Beige Sandstone.jpg";
import chocolateSandstone from "../../assets/Sandstone/Chocolate Sandstone.jpg";
import greySandstone from "../../assets/Sandstone/Grey Sandstone.jpg";
import gwaliorWhiteMint from "../../assets/Sandstone/gwalior-mint-sandstone-500x500.webp";
import jaisalmerYellow from "../../assets/Sandstone/jaisalmer yellow sandstone.jpg";
import jodhpurPink from "../../assets/Sandstone/JODHPUR PINK Snadstone.jpg";
import kotaBlue from "../../assets/Sandstone/kota blue.jpg";
import merryGoldSandstone from "../../assets/Sandstone/merry-gold-500x500.webp";
import rainbowSandstone from "../../assets/Sandstone/rainbow-1.jpg";
import redSandstone from "../../assets/Sandstone/Red Sandstone.jpg";
import teakwoodSandstone from "../../assets/Sandstone/Teakwood-Sandstone.jpg";

const sandstoneProducts = [
  { id: 61, name: "Beige Sandstone", image: beigeSandstone },
  { id: 62, name: "Chocolate Sandstone", image: chocolateSandstone },
  { id: 63, name: "Grey Sandstone", image: greySandstone },
  { id: 64, name: "Gwalior White Mint", image: gwaliorWhiteMint },
  { id: 65, name: "Jaisalmer Yellow", image: jaisalmerYellow },
  { id: 66, name: "Jodhpur Pink", image: jodhpurPink },
  { id: 67, name: "Kota Blue", image: kotaBlue },
  { id: 68, name: "Merry Gold Sandstone", image: merryGoldSandstone },
  { id: 69, name: "Rainbow Sandstone", image: rainbowSandstone },
  { id: 70, name: "Red Sandstone", image: redSandstone },
  { id: 71, name: "Teakwood Sandstone", image: teakwoodSandstone },
];

export default function Sandstone() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlides = Math.ceil(sandstoneProducts.length / 4);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0E5543]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A7A62]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 mt-10">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E5543] mb-4"
              style={{
                fontFamily: "Arial, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.1em",
              }}
            >
              Natural Sandstone Collection
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-6 w-20" />
            <p
              className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto"
              style={{
                fontFamily: "Arial, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.1em",
              }}
            >
              Discover our authentic sandstone collection, perfect for creating
              timeless architectural beauty with natural elegance.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sandstoneProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white  shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 border border-gray-100"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#0E5543] shadow-lg"
                          style={{
                            fontFamily: "Arial, sans-serif",
                            fontWeight: "300",
                            letterSpacing: "0.1em",
                          }}>
                      Premium
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 backdrop-blur-sm text-[#0E5543] px-4 py-2 rounded-full text-sm font-semibold hover:bg-white transition-colors"
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontWeight: "300",
                              letterSpacing: "0.1em",
                            }}>
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 text-center group-hover:text-[#0E5543] transition-colors duration-300"
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontWeight: "300",
                        letterSpacing: "0.1em",
                      }}>
                    {product.name}
                  </h3>
                  <div className="mt-3 flex justify-center">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Sandstone Content */}
        <div className="mt-20 mb-16">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] bg-clip-text text-transparent">Sandstone Exporter</span> in India | Rishabh Green Marbles
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#0E5543] to-transparent w-24"></div>
              <div className="w-2 h-2 bg-[#0E5543] rounded-full mx-3"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#0E5543] to-transparent w-24"></div>
            </div>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              Rishabh Green Marbles is a premier sandstone exporter in India, offering high-quality Indian sandstones with reliable shipping networks. We take pride in exporting premium-quality productions of Rajasthan, a trusted manufacturing unit of Indian sandstones.
            </p>
          </div> */}

          <div className="text-center mb-16 mt-10">
            <div className="text-center mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E5543] mb-4"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.1em",
                }}
              >
                Sandstone Exporter in India Rishabh Green Marbles
              </h2>
              <div className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-6 w-20" />
              <p
                className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.1em",
                }}
              >
                Rishabh Green Marbles is a premier sandstone exporter in India,
                offering high-quality Indian sandstones with reliable shipping
                networks.
              </p>
            </div>
          </div>

          {/* Premier Worldwide Exporter */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.1em",
                }}>
              Premier Worldwide Exporter of{" "}
              <span className="text-[#0E5543]">Indian Sandstone</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{
                     fontFamily: "Arial, sans-serif",
                     fontWeight: "300",
                     letterSpacing: "0.1em",
                   }}>
                  Rishabh Green Marbles has successfully established itself as
                  the premier exporter of Indian Sandstone globally. We serve
                  clients across the globe with unwavering commitment and
                  durability.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{
                     fontFamily: "Arial, sans-serif",
                     fontWeight: "300",
                     letterSpacing: "0.1em",
                   }}>
                  The major reason behind global expansion is our
                  state-of-the-art export techniques necessary for maintaining a
                  diverse clientele. With top-class shipping networks, we export
                  sandstone in bulk quantities through customized procurement
                  facilities.
                </p>
              </div>
              <div className="bg-[#0E5543]/5 rounded-xl p-6">
                <h4 className="font-semibold text-lg text-gray-900 mb-3"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "300",
                      letterSpacing: "0.1em",
                    }}>
                  Customer-Centric Approach
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{
                     fontFamily: "Arial, sans-serif",
                     fontWeight: "300",
                     letterSpacing: "0.1em",
                   }}>
                  Since we are the best sandstone exporter in India for over
                  years now, our shipping strategy is customer-centric. We
                  understand what is best for you and deliver it accordingly.
                </p>
              </div>
            </div>
          </div>

          {/* Sandstone Varieties & Collection */}
          <div className="bg-gradient-to-br from-[#0E5543]/5 to-[#1A7A62]/5 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.1em",
                }}>
              Our Sandstone{" "}
              <span className="text-[#0E5543]">Varieties & Collection</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{
                     fontFamily: "Arial, sans-serif",
                     fontWeight: "300",
                     letterSpacing: "0.1em",
                   }}>
                  Our collection of Indian Sandstone consists of a variety of
                  bold characters like Mint, Teak Wood, and Rainbow etc. These
                  are the finest collection at Rishabh Green Marbles with
                  different colors and textures for every design.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{
                     fontFamily: "Arial, sans-serif",
                     fontWeight: "300",
                     letterSpacing: "0.1em",
                   }}>
                  Whether you seek our collection in different sizes or for
                  different surfaces, we deal in comprehensive varieties.
                  Moreover, we also have premium options available in different
                  colors such as grey, red, beige, and chocolate.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-lg text-gray-900 mb-3"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "300",
                      letterSpacing: "0.1em",
                    }}>
                  Global Success
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{
                     fontFamily: "Arial, sans-serif",
                     fontWeight: "300",
                     letterSpacing: "0.1em",
                   }}>
                  While our major focus is on Indian Sandstone, we also offer
                  bestselling varieties to ensure global success.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                    <span className="text-gray-600 text-sm"
                          style={{
                            fontFamily: "Arial, sans-serif",
                            fontWeight: "300",
                            letterSpacing: "0.1em",
                          }}>
                      Mint Sandstone
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                    <span className="text-gray-600 text-sm"
                          style={{
                            fontFamily: "Arial, sans-serif",
                            fontWeight: "300",
                            letterSpacing: "0.1em",
                          }}>
                      Teak Wood Sandstone
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                    <span className="text-gray-600 text-sm"
                          style={{
                            fontFamily: "Arial, sans-serif",
                            fontWeight: "300",
                            letterSpacing: "0.1em",
                          }}>
                      Rainbow Sandstone
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Rishabh Green Marble's Collection */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.1em",
                }}>
              Why Choose{" "}
              <span className="text-[#0E5543]">Rishabh Green Marble's</span>{" "}
              Collection?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm"
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "300",
                          letterSpacing: "0.1em",
                        }}>UAE</span>
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "300",
                      letterSpacing: "0.1em",
                    }}>
                  Global Trust
                </h4>
                <p className="text-gray-600 text-sm"
                   style={{
                     fontFamily: "Arial, sans-serif",
                     fontWeight: "300",
                     letterSpacing: "0.1em",
                   }}>
                  Trusted in UAE, Qatar, Saudi Arabia alongside Europe through
                  advanced export facilities.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xs"
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "300",
                          letterSpacing: "0.1em",
                        }}>Direct</span>
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "300",
                      letterSpacing: "0.1em",
                    }}>
                  Direct Relationships
                </h4>
                <p className="text-gray-600 text-sm"
                   style={{
                     fontFamily: "Arial, sans-serif",
                     fontWeight: "300",
                     letterSpacing: "0.1em",
                   }}>
                  We maintain direct relationships with people for transparency
                  and effective communication.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xs"
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "300",
                          letterSpacing: "0.1em",
                        }}>Multi</span>
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "300",
                      letterSpacing: "0.1em",
                    }}>
                  Complete Solutions
                </h4>
                <p className="text-gray-600 text-sm"
                   style={{
                     fontFamily: "Arial, sans-serif",
                     fontWeight: "300",
                     letterSpacing: "0.1em",
                   }}>
                  Best marble and granite exporter in India, offering complete
                  expert solutions.
                </p>
              </div>
            </div>
          </div>

          {/* How Sandstones Transform Spaces */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#1A7A62]/5 to-[#0E5543]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "300",
                    letterSpacing: "0.1em",
                  }}>
                Know how our{" "}
                <span className="text-[#0E5543]">Sandstones Transform</span>{" "}
                every Space
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{
                     fontFamily: "Arial, sans-serif",
                     fontWeight: "300",
                     letterSpacing: "0.1em",
                   }}>
                  In today's time, our sandstones can transform ordinary spaces
                  into remarkable environments through versatile applications.
                  Our exports not only occupy space but redefine visuals through
                  sophisticated sandstone varieties.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{
                     fontFamily: "Arial, sans-serif",
                     fontWeight: "300",
                     letterSpacing: "0.1em",
                   }}>
                  From intimate to commercial settings, our marbles, granite and
                  sandstones, etc. maintain strength and durability. As the best
                  sandstone exporter in India, we transform spaces like, floors,
                  walls, kitchen settings, etc.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "300",
                    letterSpacing: "0.1em",
                  }}>
                Specialized{" "}
                <span className="text-[#0E5543]">Transformation Services</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm"
                     style={{
                       fontFamily: "Arial, sans-serif",
                       fontWeight: "300",
                       letterSpacing: "0.1em",
                     }}>
                    Specialize in transforming every little detail through
                    export services
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm"
                     style={{
                       fontFamily: "Arial, sans-serif",
                       fontWeight: "300",
                       letterSpacing: "0.1em",
                     }}>
                    Customized sandstone solutions for curating existing
                    environments
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm"
                     style={{
                       fontFamily: "Arial, sans-serif",
                       fontWeight: "300",
                       letterSpacing: "0.1em",
                     }}>
                    Elevate spaces with modern details and sophisticated
                    varieties
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.1em",
                }}>
              Contact us today for Quality{" "}
              <span className="text-yellow-300">Indian Sandstones</span>
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto"
               style={{
                 fontFamily: "Arial, sans-serif",
                 fontWeight: "300",
                 letterSpacing: "0.1em",
               }}>
              Ready to source premium and high-quality Indian Sandstones for
              transforming your space through modern details? Associating with
              Rishabh Green Marbles can help you gain customized solutions for
              smart spaces.
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-semibold mb-2"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "300",
                      letterSpacing: "0.1em",
                    }}>
                  Bulk Quantities Available
                </h4>
                <p className="text-sm opacity-90"
                   style={{
                     fontFamily: "Arial, sans-serif",
                     fontWeight: "300",
                     letterSpacing: "0.1em",
                   }}>
                  Contact us for quality Indian Sandstones in bulk quantities as
                  we are just a message away.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-semibold mb-2"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "300",
                      letterSpacing: "0.1em",
                    }}>
                  Global Shipping Solutions
                </h4>
                <p className="text-sm opacity-90"
                   style={{
                     fontFamily: "Arial, sans-serif",
                     fontWeight: "300",
                     letterSpacing: "0.1em",
                   }}>
                  Best marble exporter company in India, offering global and
                  personalized shipping solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.1em",
                }}>
              Create Timeless Architecture
            </h2>
            <p className="text-lg mb-6 opacity-90"
               style={{
                 fontFamily: "Arial, sans-serif",
                 fontWeight: "300",
                 letterSpacing: "0.1em",
               }}>
              Get expert guidance on sandstone selection for your architectural
              projects
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-[#0E5543] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
              style={{
                fontFamily: "Arial, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.1em",
              }}
            >
              Get Architecture Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
