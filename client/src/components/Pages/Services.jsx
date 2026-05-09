import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import {
  Calendar,
  Clock3,
  ChevronRight,
  Scissors,
  Sparkles,
  Info,
  MessageCircle,
} from "lucide-react";

import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const goToBooking = () => {
    navigate("/contact#booking-system");
  };

  const categories = [
    "All",
    "Cuts & Styling",
    "Colour",
    "Treatments",
    "Men's",
    "Bridal",
  ];

  const services = [
    {
      title: "Women's Cut & Blow Dry",
      category: "Cuts & Styling",
      duration: "60 mins",
      price: "£55",
      description: "Precision cut tailored to your face shape and lifestyle.",
      icon: <Scissors size={24} />,
    },
    {
      title: "Men's Cut & Style",
      category: "Men's",
      duration: "45 mins",
      price: "£35",
      description:
        "Clean, sharp cuts or textured styles — whatever suits you best.",
      icon: <Scissors size={24} />,
    },
    {
      title: "Children's Cut (Under 12)",
      category: "Cuts & Styling",
      duration: "30 mins",
      price: "£25",
      description: "Gentle and stylish cuts for our younger clients.",
      icon: <Scissors size={24} />,
    },
    {
      title: "Dry Cut / Restyle",
      category: "Cuts & Styling",
      duration: "45 mins",
      price: "£45",
      description: "A precision cut on dry hair for ultimate shape control.",
      icon: <Scissors size={24} />,
    },
    {
      title: "Blow Dry & Style",
      category: "Cuts & Styling",
      duration: "45 mins",
      price: "£40",
      description: "Professional wash and blow dry for any occasion.",
      icon: <Scissors size={24} />,
    },
    {
      title: "Full Head Colour",
      category: "Colour",
      duration: "90 mins",
      price: "£65",
      description: "Complete transformation or matching your natural shade.",
      icon: <Sparkles size={24} />,
    },
    {
      title: "Root Retouch",
      category: "Colour",
      duration: "60 mins",
      price: "£55",
      description: "Keep your colour fresh by targeting regrowth.",
      icon: <Sparkles size={24} />,
    },
    {
      title: "Balayage / Ombré",
      category: "Colour",
      duration: "3 hrs",
      price: "£120",
      description: "Sun-kissed, natural-looking colour painted by hand.",
      icon: <Sparkles size={24} />,
    },
    {
      title: "Full Head Highlights",
      category: "Colour",
      duration: "150 mins",
      price: "£95",
      description: "Classic technique for dimension and brightness.",
      icon: <Sparkles size={24} />,
    },
    {
      title: "Toning & Glossing",
      category: "Colour",
      duration: "45 mins",
      price: "£45",
      description: "Refresh your shade and add incredible shine.",
      icon: <Sparkles size={24} />,
    },
    {
      title: "Deep Conditioning Treatment",
      category: "Treatments",
      duration: "30 mins",
      price: "£30",
      description: "Hydrating mask to restore health and shine.",
      icon: <Scissors size={24} />,
    },
    {
      title: "Keratin Smoothing",
      category: "Treatments",
      duration: "3 hrs",
      price: "£150",
      description: "Eliminate frizz and cut down styling time.",
      icon: <Scissors size={24} />,
    },
    {
      title: "Skin Fade",
      category: "Men's",
      duration: "45 mins",
      price: "£35",
      description: "Precision clipper work for a sharp, clean fade.",
      icon: <Scissors size={24} />,
    },
    {
      title: "Hot Towel Shave",
      category: "Men's",
      duration: "45 mins",
      price: "£35",
      description: "Traditional relaxation and a perfectly close shave.",
      icon: <Scissors size={24} />,
    },
    {
      title: "Bridal Hair Trial",
      category: "Bridal",
      duration: "120 mins",
      price: "£85",
      description: "Detailed consultation and styling rehearsal.",
      icon: <Scissors size={24} />,
      consultation: true,
    },
    {
      title: "Bridal Hair Wedding Day",
      category: "Bridal",
      duration: "150 mins",
      price: "£150",
      description: "On-the-day styling to make you feel incredible.",
      icon: <Scissors size={24} />,
    },
  ];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <>
      <style>{`
        :root{
          --accent:#b85c38;
          --accent-hover:#93442a;
          --dark:#1f1713;
          --light:#fbf5f1;
          --secondary:#f1e6df;
          --text:#2d211b;
        }

        body{
          background:var(--light);
          font-family:Inter,sans-serif;
        }

        .services-page{
          overflow:hidden;
        }

        .font-serif{
          font-family:Georgia,serif;
        }

        .hero-section{
          min-height:50vh;
          display:flex;
          align-items:center;
          justify-content:center;
          position:relative;
          overflow:hidden;
          background:linear-gradient(135deg,#fbf5f1,#f1e6df);
          padding-top:90px;
        }

        .hero-bg{
          position:absolute;
          inset:0;
          background:url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920");
          background-size:cover;
          background-position:center;
          opacity:.08;
        }

        .section-title{
          font-size:clamp(42px,6vw,72px);
          font-weight:900;
          color:var(--dark);
        }

        .section-subtitle{
          color:rgba(45,33,27,.7);
          max-width:760px;
          margin:auto;
          font-size:18px;
        }

        .main-btn{
          background:var(--accent) !important;
          border:none !important;
          border-radius:999px !important;
          padding:14px 34px !important;
          font-weight:700 !important;
          display:inline-flex !important;
          align-items:center !important;
          justify-content:center !important;
          gap:10px !important;
          color:#fff !important;
          transition:.3s;
          box-shadow:0 10px 30px rgba(184,92,56,.2);
          text-decoration:none;
        }

        .main-btn:hover{
          background:var(--accent-hover) !important;
          transform:translateY(-3px);
          color:#fff !important;
        }

        .sticky-filter{
          position:sticky;
          top:76px;
          z-index:50;
          backdrop-filter:blur(10px);
          background:rgba(255,255,255,.85);
          border-top:1px solid var(--secondary);
          border-bottom:1px solid var(--secondary);
        }

        .filter-btn{
          border:2px solid var(--secondary);
          background:#fff;
          color:var(--text);
          border-radius:999px;
          padding:10px 24px;
          font-weight:600;
          transition:.3s;
          white-space:nowrap;
        }

        .filter-btn:hover{
          border-color:var(--accent);
        }

        .filter-btn.active{
          background:var(--accent);
          border-color:var(--accent);
          color:#fff;
          box-shadow:0 10px 20px rgba(184,92,56,.18);
        }

        .service-card{
          background:#fff;
          border-radius:28px;
          padding:34px;
          border:1px solid var(--secondary);
          transition:.35s;
          height:100%;
          box-shadow:0 8px 30px rgba(0,0,0,.04);
        }

        .service-card:hover{
          transform:translateY(-8px);
          box-shadow:0 20px 40px rgba(184,92,56,.08);
        }

        .icon-wrap{
          width:60px;
          height:60px;
          border-radius:18px;
          background:var(--light);
          color:var(--accent);
          display:flex;
          align-items:center;
          justify-content:center;
          transition:.3s;
        }

        .service-card:hover .icon-wrap{
          background:var(--accent);
          color:#fff;
        }

        .service-title{
          font-size:28px;
          font-weight:800;
          color:var(--dark);
          margin-bottom:14px;
        }

        .service-desc{
          color:rgba(45,33,27,.7);
          min-height:52px;
        }

        .service-meta{
          border-top:1px solid var(--light);
          padding-top:22px;
          margin-top:22px;
        }

        .price{
          color:var(--accent);
          font-size:24px;
          font-weight:900;
        }

        .info-box{
          background:var(--secondary);
          border-radius:32px;
          padding:34px;
        }

        .info-icon{
          width:72px;
          height:72px;
          border-radius:22px;
          background:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          color:var(--accent);
          box-shadow:0 8px 20px rgba(0,0,0,.06);
        }

        .cta-box{
          background:var(--accent);
          border-radius:36px;
          padding:70px 40px;
          position:relative;
          overflow:hidden;
          color:#fff;
        }

        .cta-scissor{
          position:absolute;
          top:-20px;
          right:-20px;
          opacity:.12;
          transform:rotate(12deg);
        }

        .whatsapp-btn{
          background:#fff;
          color:var(--accent);
          border:none;
          border-radius:999px;
          padding:14px 30px;
          font-weight:800;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          text-decoration:none;
          transition:.3s;
        }

        .whatsapp-btn:hover{
          transform:translateY(-3px);
          color:var(--accent);
        }

        .outline-btn{
          border:2px solid #fff;
          background:transparent;
          color:#fff;
          border-radius:999px;
          padding:14px 30px;
          font-weight:700;
          transition:.3s;
        }

        .outline-btn:hover{
          background:rgba(255,255,255,.1);
        }

        @media(max-width:768px){
          .sticky-filter{
            top:66px;
          }

          .service-title{
            font-size:24px;
          }

          .cta-box{
            padding:50px 25px;
          }
        }
      `}</style>

      <div className="services-page">
        <section className="hero-section">
          <div className="hero-bg"></div>

          <Container className="position-relative text-center">
            <div className="d-flex justify-content-center align-items-center gap-2 text-uppercase small fw-bold mb-4 text-muted">
              <Link to="/" className="text-decoration-none text-muted">
                Home
              </Link>

              <ChevronRight size={16} />

              <span className="text-dark">Services</span>
            </div>

            <h1 className="section-title font-serif mb-4">Our Services</h1>

            <p className="section-subtitle font-serif fst-italic mb-5">
              Expert hair care for every hair type, every person, every
              occasion.
            </p>

            <Button className="main-btn" onClick={goToBooking}>
              <Calendar size={20} />
              Book Now
            </Button>
          </Container>
        </section>

        <div className="sticky-filter py-4 mb-5">
          <Container fluid>
            <div className="d-flex gap-3 overflow-auto px-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </Container>
        </div>

        <Container>
          <Row className="g-4">
            {filteredServices.map((service, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="service-card">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div className="icon-wrap">{service.icon}</div>

                    <div className="d-flex flex-column align-items-end gap-2">
                      {service.consultation && (
                        <Badge
                          bg=""
                          style={{
                            background: "#f8d9c7",
                            color: "#b85c38",
                            fontSize: "10px",
                            letterSpacing: "1px",
                          }}
                        >
                          Consultation
                        </Badge>
                      )}

                      <Badge
                        bg=""
                        style={{
                          background: "#f1e6df",
                          color: "#1f1713",
                          fontSize: "10px",
                          letterSpacing: "1px",
                        }}
                      >
                        {service.category}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="service-title font-serif">{service.title}</h3>

                  <p className="service-desc">{service.description}</p>

                  <div className="service-meta d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div className="d-flex align-items-center gap-2 text-muted">
                      <Clock3 size={16} />
                      <span>{service.duration}</span>
                    </div>

                    <div className="price">{service.price}</div>
                  </div>

                  <Button
                    className="main-btn w-100 mt-4 justify-content-center"
                    onClick={goToBooking}
                  >
                    <Calendar size={18} />
                    Book Now
                  </Button>
                </div>
              </Col>
            ))}
          </Row>

          <div className="mt-5 pt-5">
            <div className="info-box">
              <div className="d-flex flex-column flex-md-row align-items-center gap-4">
                <div className="info-icon">
                  <Info size={34} />
                </div>

                <p className="mb-0 text-muted fs-5 fst-italic">
                  All prices shown are starting prices and may vary based on
                  hair length, thickness, and condition. Your stylist will
                  always confirm the final price during your consultation — no
                  surprises, ever.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 py-5">
            <div className="cta-box text-center">
              <div className="cta-scissor">
                <Scissors size={180} />
              </div>

              <h2 className="font-serif fw-bold display-5 mb-4">
                Not sure which service is right for you?
              </h2>

              <p className="fs-5 opacity-75 mb-5">
                Chat with us on WhatsApp and we'll help you choose.
              </p>

              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <a
                  href="https://wa.me/447700900456"
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-btn"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>

                <button className="outline-btn" onClick={goToBooking}>
                  <Calendar size={20} className="me-2" />
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Services;