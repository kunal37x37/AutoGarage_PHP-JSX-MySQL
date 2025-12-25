const DetailsPage = () => {
  const [garage, setGarage] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  
  // Get garage ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const garageId = urlParams.get('garageId');

  // Mock API call simulation
  React.useEffect(() => {
      const fetchGarageDetails = async () => {
          try {
              setLoading(true);
              
              // Simulate API delay
              await new Promise(resolve => setTimeout(resolve, 500));
              
              // Complete garage data (in a real app, this would be an API call)
              const garageData = {
                  "1": {
                      id: "1",
                      name: "City Auto Works",
                      location: "Andheri East",
                      city: "Mumbai",
                      pincode: "400069",
                      phone: "+91 9876543210",
                      email: "contact@cityautoworks.com",
                      openingTime: "08:00 AM",
                      closingTime: "08:00 PM",
                      services: ["Engine Repair", "Brake Service", "Oil Change", "AC Repair"],
                      rating: 4.5,
                      description: "Full-service auto repair shop with over 15 years of experience serving Mumbai. We specialize in all major and minor car repairs with genuine parts.",
                      image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                      reviews: [
                          { id: 1, user: "Rahul Sharma", rating: 5, comment: "Excellent service! Fixed my car's AC in no time." },
                          { id: 2, user: "Priya Patel", rating: 4, comment: "Good work but a bit pricey." }
                      ],
                      amenities: ["Free WiFi", "Waiting Lounge", "Coffee", "Pickup/Drop"]
                  },
                  "2": {
                      id: "2",
                      name: "Precision Motors",
                      location: "Connaught Place",
                      city: "Delhi",
                      pincode: "110001",
                      phone: "+91 9876543211",
                      email: "info@precisionmotors.com",
                      openingTime: "09:00 AM",
                      closingTime: "07:00 PM",
                      services: ["Wheel Alignment", "Battery Replacement", "CNG Installation"],
                      rating: 4.2,
                      description: "Delhi's most trusted auto service center with computerized diagnostics and expert technicians.",
                      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                      reviews: [
                          { id: 1, user: "Amit Singh", rating: 5, comment: "Best wheel alignment in Delhi!" },
                          { id: 2, user: "Neha Gupta", rating: 3, comment: "Average experience, took longer than expected." }
                      ],
                      amenities: ["Free WiFi", "Waiting Lounge"]
                  }, "3": {
                    id: "3",
                    name: "Bangalore Car Care",
                    location: "Koramangala",
                    city: "Bangalore",
                    pincode: "560034",
                    phone: "+91 9876543222",
                    email: "contact@bangalorecarcare.com",
                    openingTime: "08:30 AM",
                    closingTime: "07:30 PM",
                    services: ["Full Service", "Denting", "Painting", "Car Wash"],
                    rating: 4.7,
                    description: "Premium car care services in Bangalore's Koramangala area.",
                    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    reviews: [
                        { id: 1, user: "Arjun Rao", rating: 5, comment: "Outstanding full service." },
                        { id: 2, user: "Meera Nair", rating: 4, comment: "Good, but bit delayed." }
                    ],
                    amenities: ["Waiting Lounge", "Pickup/Drop", "Car Wash"]
                },
                "4": {
                    id: "4",
                    name: "Hyderabad Auto Experts",
                    location: "Gachibowli",
                    city: "Hyderabad",
                    pincode: "500032",
                    phone: "+91 9876543223",
                    email: "support@hyderabadautoexperts.com",
                    openingTime: "09:00 AM",
                    closingTime: "06:30 PM",
                    services: ["Transmission", "Suspension", "Wheel Alignment", "Tyre Change"],
                    rating: 4.3,
                    description: "Expert transmission and suspension service center in Hyderabad.",
                    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    reviews: [
                        { id: 1, user: "Srinivas Reddy", rating: 5, comment: "Top class transmission work." },
                        { id: 2, user: "Anjali Menon", rating: 4, comment: "Wheel alignment done nicely." }
                    ],
                    amenities: ["Free WiFi", "Waiting Lounge"]
                },
                "5": {
                    id: "5",
                    name: "Mumbai Car Service",
                    location: "Bandra West",
                    city: "Mumbai",
                    pincode: "400050",
                    phone: "+91 9876543224",
                    email: "info@mumbaicarservice.com",
                    openingTime: "08:00 AM",
                    closingTime: "07:00 PM",
                    services: ["Battery Service", "Tyre Rotation", "Car Wash", "Interior Cleaning"],
                    rating: 4.0,
                    description: "Trusted car service center in Bandra with affordable packages.",
                    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    reviews: [
                        { id: 1, user: "Karan Mehta", rating: 4, comment: "Nice car wash service." },
                        { id: 2, user: "Riya Deshmukh", rating: 4, comment: "Good battery service." }
                    ],
                    amenities: ["Waiting Lounge", "Car Wash"]
                },
                "6": {
                    id: "6",
                    name: "Delhi Auto Solutions",
                    location: "Saket",
                    city: "Delhi",
                    pincode: "110017",
                    phone: "+91 9876543225",
                    email: "delhiautosolutions@gmail.com",
                    openingTime: "09:00 AM",
                    closingTime: "08:00 PM",
                    services: ["CNG Installation", "Insurance", "Roadside Assistance", "Car Inspection"],
                    rating: 4.1,
                    description: "Your one-stop shop for CNG, insurance, and car inspection in Delhi.",
                    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    reviews: [
                        { id: 1, user: "Rohit Jain", rating: 4, comment: "Quick CNG installation." },
                        { id: 2, user: "Simran Kaur", rating: 5, comment: "Very helpful roadside assistance." }
                    ],
                    amenities: ["Insurance Services", "Waiting Lounge"]
                },
                "7": {
                    id: "7",
                    name: "Pune Auto Garage",
                    location: "Koregaon Park",
                    city: "Pune",
                    pincode: "411001",
                    phone: "+91 9876543226",
                    email: "service@puneautogarage.com",
                    openingTime: "08:30 AM",
                    closingTime: "07:00 PM",
                    services: ["General Repair", "Oil Change", "Brake Service", "AC Service"],
                    rating: 4.4,
                    description: "Reliable general car repair service center located in Pune.",
                    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    reviews: [
                        { id: 1, user: "Ankit Kulkarni", rating: 5, comment: "Very good brake service." },
                        { id: 2, user: "Sneha Joshi", rating: 4, comment: "Oil change done smoothly." }
                    ],
                    amenities: ["Free WiFi", "Pickup/Drop", "Car Wash"]
                },
                "8": {
                    id: "8",
                    name: "Chennai Car Experts",
                    location: "Adyar",
                    city: "Chennai",
                    pincode: "600020",
                    phone: "+91 9876543227",
                    email: "care@chennaicarexperts.com",
                    openingTime: "08:00 AM",
                    closingTime: "07:00 PM",
                    services: ["Engine Overhaul", "Transmission Repair", "Electrical Work", "Denting"],
                    rating: 4.6,
                    description: "Experienced car repair specialists for major engine and body work in Chennai.",
                    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    reviews: [
                        { id: 1, user: "Vikram Subramanian", rating: 5, comment: "Engine overhaul perfectly done." },
                        { id: 2, user: "Lakshmi Krishnan", rating: 4, comment: "Electrical work was neat and fast." }
                    ],
                    amenities: ["Waiting Lounge", "Free Coffee", "Car Wash"]
                }
                  // ... other garages (keep your existing data)
              };

              const selectedGarage = garageData[garageId];
              
              if (!selectedGarage) {
                  throw new Error("Garage not found");
              }
              
              setGarage(selectedGarage);
              setError(null);
          } catch (err) {
              console.error("Error fetching garage details:", err);
              setError(err.message);
          } finally {
              setLoading(false);
          }
      };

      fetchGarageDetails();
  }, [garageId]);

  if (loading) {
      return (
          <div className="details-container loading-container">
              <div className="loading-spinner">
                  <i className="fas fa-spinner fa-spin"></i>
                  <p>Loading garage details...</p>
              </div>
          </div>
      );
  }

  if (error) {
      return (
          <div className="details-container error-container">
              <div className="error-message">
                  <i className="fas fa-exclamation-triangle"></i>
                  <h2>Error Loading Garage</h2>
                  <p>{error}</p>
                  <button 
                      className="btn btn-secondary" 
                      onClick={() => window.location.href = "homepage.html"}
                  >
                      <i className="fas fa-arrow-left"></i> Back to Home
                  </button>
              </div>
          </div>
      );
  }

  if (!garage) {
      return (
          <div className="details-container">
              <h1>Garage Not Found</h1>
              <p>The requested garage does not exist.</p>
              <button 
                  className="btn btn-secondary" 
                  onClick={() => window.location.href = "homepage.html"}
              >
                  <i className="fas fa-arrow-left"></i> Back to Home
              </button>
          </div>
      );
  }

  return (
      <div className="details-container">
          {/* Garage Header with Image */}
          <div className="garage-header">
              <div className="garage-image" style={{ 
                  backgroundImage: `url(${garage.image})`,
                  height: '300px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  position: 'relative'
              }}>
                  <div className="image-overlay" style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                      padding: '1rem',
                      color: 'white'
                  }}>
                      <h1 style={{ margin: 0 }}>{garage.name}</h1>
                      <div className="rating">
                          {[1, 2, 3, 4, 5].map((star) => (
                              <i 
                                  key={star}
                                  className={`fas fa-star ${star <= Math.floor(garage.rating) ? 'filled' : ''}`}
                              ></i>
                          ))}
                          <span> ({garage.rating.toFixed(1)}/5)</span>
                          <span className="review-count"> • {garage.reviews.length} reviews</span>
                      </div>
                  </div>
              </div>
          </div>

          {/* Main Content Grid */}
          <div className="content-grid" style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '2rem',
              marginTop: '2rem'
          }}>
              {/* Left Column - Main Info */}
              <div className="main-info">
                  <div className="section">
                      <h2><i className="fas fa-info-circle"></i> About This Garage</h2>
                      <p>{garage.description}</p>
                  </div>

                  <div className="section">
                      <h2><i className="fas fa-tools"></i> Services Offered</h2>
                      <div className="services-list">
                          {garage.services.map((service, index) => (
                              <div key={index} className="service-item">
                                  <i className="fas fa-check"></i> {service}
                              </div>
                          ))}
                      </div>
                  </div>

                  <div className="section">
                      <h2><i className="fas fa-comment-alt"></i> Customer Reviews</h2>
                      <div className="reviews-container">
                          {garage.reviews.map(review => (
                              <div key={review.id} className="review-card" style={{
                                  borderBottom: '1px solid #eee',
                                  padding: '1rem 0',
                                  marginBottom: '1rem'
                              }}>
                                  <div className="review-header" style={{
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                      marginBottom: '0.5rem'
                                  }}>
                                      <strong>{review.user}</strong>
                                      <div className="review-rating">
                                          {[1, 2, 3, 4, 5].map((star) => (
                                              <i 
                                                  key={star}
                                                  className={`fas fa-star ${star <= review.rating ? 'filled' : ''}`}
                                                  style={{ fontSize: '0.8rem' }}
                                              ></i>
                                          ))}
                                      </div>
                                  </div>
                                  <p style={{ margin: 0 }}>{review.comment}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="sidebar">
                  <div className="contact-card" style={{
                      backgroundColor: '#f8f9fa',
                      borderRadius: '8px',
                      padding: '1.5rem',
                      marginBottom: '2rem'
                  }}>
                      <h3><i className="fas fa-map-marker-alt"></i> Location</h3>
                      <p>{garage.location}, {garage.city}<br />
                      {garage.pincode}</p>

                      <h3 style={{ marginTop: '1.5rem' }}><i className="fas fa-clock"></i> Hours</h3>
                      <p>{garage.openingTime} - {garage.closingTime}<br />
                      Monday - Saturday</p>

                      <h3 style={{ marginTop: '1.5rem' }}><i className="fas fa-phone"></i> Contact</h3>
                      <p>{garage.phone}<br />
                      {garage.email}</p>

                      <h3 style={{ marginTop: '1.5rem' }}><i className="fas fa-check-circle"></i> Amenities</h3>
                      <ul style={{ paddingLeft: '1.2rem', margin: '0.5rem 0' }}>
                          {garage.amenities.map((amenity, index) => (
                              <li key={index}>{amenity}</li>
                          ))}
                      </ul>
                  </div>

                  <div className="action-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <button 
                          className="btn btn-primary"
                          onClick={() => window.location.href = `booking.html?garageId=${garage.id}`}
                          style={{ width: '100%' }}
                      >
                          <i className="fas fa-calendar-alt"></i> Book Service
                      </button>
                      <button 
                          className="btn btn-secondary"
                          onClick={() => window.location.href = "homepage.html"}
                          style={{ width: '100%' }}
                      >
                          <i className="fas fa-arrow-left"></i> Back to List
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
};

// Render the component
ReactDOM.render(<DetailsPage />, document.getElementById('details-root'));