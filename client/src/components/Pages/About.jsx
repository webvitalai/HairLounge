import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
} from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import {
  Calendar,
  ChevronRight,
  Globe,
  MessageCircle,
  Heart,
} from "lucide-react";

import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
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

  const goToContact = () => {
    navigate("/contact");
  };

  const values = [
    {
      icon: <Globe size={42} />,
      title: "Inclusive by Nature",
      desc: "Every hair type, every texture, every person. We celebrate diversity because East London does too.",
    },
    {
      icon: <MessageCircle size={42} />,
      title: "Honest & Transparent",
      desc: "No hidden prices. No hard selling. Just honest advice and the best service we can give.",
    },
    {
      icon: <Heart size={42} />,
      title: "Community First",
      desc: "We're part of this neighbourhood. We know our clients by name, and that's exactly how we like it.",
    },
  ];

  const team = [
    {
      name: "Priya Sharma",
      role: "Creative Director",
      experience: "14 years",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      skills: ["Creative cuts", "Bridal styling", "Treatments"],
      quote:
        "Trained in London and Milan. Obsessed with a perfectly placed fringe.",
    },
    {
      name: "Sarah Mitchell",
      role: "Senior Colourist",
      experience: "10 years",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      skills: ["Balayage", "Colour correction", "Toning"],
      quote: "If it involves bleach and creativity, call me.",
    },
    {
      name: "James Okafor",
      role: "Master Barber & Stylist",
      experience: "9 years",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
      skills: ["Textured hair", "Fades", "Afro styles"],
      quote: "Every curl pattern tells a story.",
    },
    {
      name: "Leila Hassan",
      role: "Colour Technician",
      experience: "6 years",
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0ad2f01?auto=format&fit=crop&q=80&w=400",
      skills: ["Highlights", "Root retouch", "Glossing"],
      quote:
        "I once did 12 balayages in one day. Still smiling.",
    },
    {
      name: "Tom Whitfield",
      role: "Men's Specialist",
      experience: "7 years",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      skills: ["Skin fades", "Classic cuts", "Hot towel shave"],
      quote:
        "Old school barbering meets new school style.",
    },
    {
      name: "Anika Patel",
      role: "Junior Stylist",
      experience: "3 years",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
      skills: ["Blow dries", "Treatments", "Styling"],
      quote:
        "Still learning every day — and loving every second of it.",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1534774592507-488885376ad3?auto=format&fit=crop&q=80&w=600",
  ];

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

        .about-page{
          overflow:hidden;
          padding-top:76px;
        }

        .font-serif{
          font-family:Georgia,serif;
        }

        .hero-section{
          height:55vh;
          position:relative;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
        }

        .hero-section img{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .hero-overlay{
          position:absolute;
          inset:0;
          background:linear-gradient(
            to bottom,
            rgba(251,245,241,.8),
            rgba(251,245,241,.4),
            rgba(251,245,241,1)
          );
        }

        .hero-content{
          position:relative;
          z-index:2;
          text-align:center;
        }

        .hero-title{
          font-size:clamp(52px,8vw,96px);
          font-weight:900;
          color:var(--dark);
        }

        .hero-subtitle{
          font-size:20px;
          max-width:760px;
          margin:auto;
          color:rgba(45,33,27,.75);
        }

        .section-padding{
          padding:100px 0;
        }

        .story-image{
          position:relative;
          border-radius:36px;
          overflow:hidden;
          aspect-ratio:4/5;
          box-shadow:0 30px 60px rgba(0,0,0,.12);
        }

        .story-image img{
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .quote-card{
          position:absolute;
          right:30px;
          bottom:30px;
          background:#fff;
          padding:24px;
          border-radius:24px;
          max-width:240px;
          box-shadow:0 20px 40px rgba(0,0,0,.12);
        }

        .quote-card p:first-child{
          color:var(--accent);
          font-style:italic;
          font-size:18px;
          font-family:Georgia,serif;
        }

        .main-btn{
          border:none !important;
          background:var(--accent) !important;
          color:#fff !important;
          border-radius:999px !important;
          padding:15px 36px !important;
          font-weight:700 !important;
          display:inline-flex !important;
          align-items:center !important;
          justify-content:center !important;
          gap:10px !important;
          transition:.3s;
          box-shadow:0 14px 30px rgba(184,92,56,.18);
        }

        .main-btn:hover{
          background:var(--accent-hover) !important;
          transform:translateY(-3px);
        }

        .values-section{
          background:var(--secondary);
        }

        .value-card{
          background:#fff;
          padding:45px;
          border-radius:36px;
          height:100%;
          transition:.35s;
        }

        .value-card:hover{
          transform:translateY(-8px);
          box-shadow:0 25px 50px rgba(184,92,56,.08);
        }

        .accent-icon{
          color:var(--accent);
          margin-bottom:24px;
        }

        .glass-card{
          background:rgba(255,255,255,.7);
          backdrop-filter:blur(14px);
          border-radius:40px;
          padding:45px;
          text-align:center;
          transition:.45s;
          border:1px solid rgba(255,255,255,.4);
          height:100%;
        }

        .glass-card:hover{
          background:#fff;
          transform:translateY(-8px);
          box-shadow:0 30px 60px rgba(184,92,56,.08);
        }

        .team-img-wrap{
          position:relative;
          width:170px;
          height:170px;
          margin:auto auto 35px;
        }

        .team-img{
          width:100%;
          height:100%;
          border-radius:50%;
          object-fit:cover;
          border:5px solid rgba(184,92,56,.15);
          filter:grayscale(100%);
          transition:.5s;
        }

        .glass-card:hover .team-img{
          filter:grayscale(0%);
          border-color:var(--accent);
        }

        .exp-badge{
          position:absolute;
          bottom:0;
          right:0;
          background:var(--accent);
          color:#fff;
          padding:8px 16px;
          border-radius:999px;
          font-size:11px;
          font-weight:700;
          text-transform:uppercase;
          letter-spacing:1px;
        }

        .skill-badge{
          background:var(--light);
          border:1px solid var(--secondary);
          color:rgba(45,33,27,.7);
          border-radius:999px;
          font-size:10px;
          font-weight:700;
          letter-spacing:1px;
          padding:8px 14px;
          text-transform:uppercase;
        }

        .outline-btn{
          width:100%;
          border:2px solid var(--accent);
          background:transparent;
          color:var(--accent);
          border-radius:999px;
          padding:14px 26px;
          font-weight:700;
          transition:.3s;
        }

        .outline-btn:hover{
          background:rgba(184,92,56,.06);
        }

        .gallery-box{
          border-radius:36px;
          overflow:hidden;
          height:100%;
        }

        .gallery-box img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:1s;
        }

        .gallery-box:hover img{
          transform:scale(1.1);
        }

        .stats-section{
          background:var(--dark);
        }

        .stat-number{
          font-size:64px;
          font-weight:900;
          color:var(--accent);
          font-family:Georgia,serif;
        }

        .cta-section{
          background:var(--secondary);
        }

        .outline-main{
          border:2px solid var(--accent);
          background:transparent;
          color:var(--accent);
          border-radius:999px;
          padding:15px 36px;
          font-weight:800;
          transition:.3s;
        }

        .outline-main:hover{
          background:var(--accent);
          color:#fff;
        }

        @media(max-width:768px){

          .about-page{
            padding-top:66px;
          }

          .section-padding{
            padding:70px 0;
          }

          .quote-card{
            display:none;
          }

          .hero-title{
            font-size:54px;
          }

          .stat-number{
            font-size:48px;
          }

        }
      `}</style>

      <div className="about-page">

        <section className="hero-section">
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1920"
            alt="Salon"
          />

          <div className="hero-overlay"></div>

          <Container className="hero-content">

            <div className="d-flex justify-content-center align-items-center gap-2 small text-uppercase fw-bold mb-4 text-muted">
              <Link to="/" className="text-decoration-none text-muted">
                Home
              </Link>

              <ChevronRight size={16} />

              <span className="text-dark">
                About Us
              </span>
            </div>

            <h1 className="hero-title font-serif mb-4">
              Our Story
            </h1>

            <p className="hero-subtitle font-serif fst-italic">
              A little salon with a big heart, rooted in the soul
              of East London.
            </p>

          </Container>
        </section>

        <section className="section-padding">
          <Container>

            <Row className="align-items-center g-5">

              <Col lg={6}>

                <div className="story-image">

                  <img
                    src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800"
                    alt="Interior"
                  />

                  <div className="quote-card">
                    <p>
                      "The best salon vibes in Shoreditch."
                    </p>

                    <p className="fw-bold small mt-3 mb-0">
                      — Timeout London
                    </p>
                  </div>

                </div>

              </Col>

              <Col lg={6}>

                <h2 className="display-4 fw-bold font-serif mb-5">
                  Born in Shoreditch, Built on Passion
                </h2>

                <div className="fs-5 text-muted d-flex flex-column gap-4">

                  <p>
                    Ember & Shears opened its doors in 2017
                    with one simple idea — that everyone
                    deserves to feel great about their hair.
                  </p>

                  <p>
                    What started as a small studio on
                    Redchurch Street has grown into one of
                    East London's most loved salons.
                  </p>

                  <p>
                    We're not a chain. We're not a franchise.
                    We're a team of passionate stylists who
                    genuinely love what we do — and it shows.
                  </p>

                </div>

                <Button className="main-btn mt-5" onClick={goToBooking}>
                  <Calendar size={20} />
                  Book Now
                </Button>

              </Col>

            </Row>

          </Container>
        </section>

        <section className="values-section section-padding">

          <Container>

            <div className="text-center mb-5">

              <h2 className="display-5 fw-bold font-serif">
                What We Stand For
              </h2>

            </div>

            <Row className="g-4">

              {values.map((value, index) => (
                <Col md={4} key={index}>

                  <div className="value-card">

                    <div className="accent-icon">
                      {value.icon}
                    </div>

                    <h3 className="font-serif fw-bold mb-4">
                      {value.title}
                    </h3>

                    <p className="text-muted fs-5">
                      {value.desc}
                    </p>

                  </div>

                </Col>
              ))}

            </Row>

          </Container>

        </section>

        <section className="section-padding">

          <Container>

            <div className="text-center mb-5">

              <h2 className="display-4 fw-bold font-serif mb-3">
                The Ember & Shears Family
              </h2>

              <p className="fs-5 text-muted">
                Every one of us brings something different.
              </p>

            </div>

            <Row className="g-4">

              {team.map((member, index) => (
                <Col lg={4} md={6} key={index}>

                  <div className="glass-card">

                    <div className="team-img-wrap">

                      <img
                        src={member.image}
                        alt={member.name}
                        className="team-img"
                      />

                      <div className="exp-badge">
                        {member.experience}
                      </div>

                    </div>

                    <h3 className="font-serif fw-bold">
                      {member.name}
                    </h3>

                    <p className="text-uppercase small fw-bold text-danger mb-4">
                      {member.role}
                    </p>

                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">

                      {member.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          bg=""
                          className="skill-badge"
                        >
                          {skill}
                        </Badge>
                      ))}

                    </div>

                    <p className="fst-italic text-muted mb-5">
                      "{member.quote}"
                    </p>

                    <button
                      className="outline-btn"
                      onClick={goToBooking}
                    >
                      <Calendar
                        size={18}
                        className="me-2"
                      />
                      Book Now
                    </button>

                  </div>

                </Col>
              ))}

            </Row>

          </Container>

        </section>

        <section className="section-padding">

          <Container>

            <div className="text-center mb-5">

              <h2 className="display-4 fw-bold font-serif mb-3">
                A Space Made for You
              </h2>

              <p className="fs-5 text-muted">
                Step in, hang your coat, and let us take it
                from here.
              </p>

            </div>

            <Row className="g-4" style={{ minHeight: "600px" }}>

              <Col md={4}>
                <div className="gallery-box h-100">
                  <img src={gallery[0]} alt="" />
                </div>
              </Col>

              <Col md={4}>

                <div className="d-flex flex-column gap-4 h-100">

                  <div className="gallery-box flex-fill">
                    <img src={gallery[1]} alt="" />
                  </div>

                  <div className="gallery-box flex-fill">
                    <img src={gallery[2]} alt="" />
                  </div>

                </div>

              </Col>

              <Col md={4}>
                <div className="gallery-box h-100">
                  <img src={gallery[3]} alt="" />
                </div>
              </Col>

            </Row>

            <p className="text-center fs-5 fst-italic text-muted mt-5 font-serif">
              Our Shoreditch studio is designed to feel like a
              home away from home.
            </p>

          </Container>

        </section>

        <section className="stats-section section-padding">

          <Container>

            <Row className="g-5 text-center">

              {[
                ["500+", "Clients Served"],
                ["8 Years", "In Shoreditch"],
                ["12", "Expert Stylists"],
                ["4.9★", "Google Rating"],
              ].map((stat, index) => (
                <Col lg={3} xs={6} key={index}>

                  <div className="stat-number">
                    {stat[0]}
                  </div>

                  <p className="text-white-50 text-uppercase small">
                    {stat[1]}
                  </p>

                </Col>
              ))}

            </Row>

          </Container>

        </section>

        <section className="cta-section section-padding">

          <Container className="text-center">

            <h2 className="display-4 fw-bold font-serif mb-4">
              Come Say Hello
            </h2>

            <p
              className="fs-4 text-muted mb-5 mx-auto"
              style={{ maxWidth: "760px" }}
            >
              Walk-ins welcome when available, or book your
              spot online in 60 seconds.
            </p>

            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">

              <Button className="main-btn" onClick={goToBooking}>
                <Calendar size={20} />
                Book Now
              </Button>

              <button
                className="outline-main"
                onClick={goToContact}
              >
                Get in Touch
              </button>

            </div>

          </Container>

        </section>

      </div>
    </>
  );
};

export default About;