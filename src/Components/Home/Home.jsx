import { Code2, Rocket, Users, Zap, Shield, LineChart } from 'lucide-react';
import './Home.css';

const features = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Modern Technology",
    description: "Built with cutting-edge tech stack for optimal performance"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Fast Development",
    description: "Quick turnaround without compromising quality"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "User-Centric",
    description: "Focused on delivering the best user experience"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "High Performance",
    description: "Optimized for speed and efficiency"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Reliable",
    description: "Built with security best practices"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Scalable Solutions",
    description: "Grows with your business needs"
  }
];

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-heading">
              Transform Your Digital Vision Into Reality
            </h1>
            <p className="hero-description">
              We create innovative digital solutions that help businesses thrive in the modern world. 
              Experience excellence in every pixel.
            </p>
            <button className="hero-button">
              Get Started
            </button>
          </div>
          <div className="hero-image-container">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              alt="Digital Innovation"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-heading">
          Why Choose Us
        </h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-heading">
            Ready to Start Your Project?
          </h2>
          <p className="cta-description">
            Join hundreds of satisfied clients who have transformed their digital presence with us.
          </p>
          <button className="cta-button">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;