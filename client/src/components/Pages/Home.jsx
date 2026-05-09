import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  Star,
  Scissors,
  Sparkles,
  Heart,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import "bootstrap/dist/css/bootstrap.min.css";

const InstagramIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
  </svg>
);

const Home = () => {
  const navigate = useNavigate();

  const goToBooking = () => {
    navigate("/contact#booking-system");
  };

  const goToContactTop = () => {
    navigate("/contact");
  };

  const services = [
    {
      title: "Cuts & Styling",
      price: "From £35",
      image:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Colour & Highlights",
      price: "From £65",
      image:
        "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Treatments & Care",
      price: "From £40",
      image:
        "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Men's Grooming",
      price: "From £25",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600",
    },
  ];

  const team = [
    {
      name: "Priya Sharma",
      role: "Creative Director",
      desc: "Creative cuts, bridal styling and treatment specialist",
      insta: "@priyastyles",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Sarah Mitchell",
      role: "Senior Colourist",
      desc: "Balayage, colour correction and toning specialist",
      insta: "@sarah_colours",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "James Okafor",
      role: "Master Barber & Stylist",
      desc: "Textured hair, fades and afro styles specialist",
      insta: "@james_cuts",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const instaImages = [
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400",
  ];

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        :root {
          --accent: #b85c38;
          --accent-hover: #93442a;
          --dark: #1e1512;
          --light-bg: #fbf5f1;
          --secondary: #f3e7df;
          --text: #2a1d18;
        }

        body {
          margin: 0;
          font-family: Inter, Arial, sans-serif;
          background: var(--light-bg);
          color: var(--text);
        }

        .home-page {
          overflow: hidden;
          padding-top: 76px;
        }

        .font-serif {
          font-family: Georgia, serif;
        }

        .hero-section {
          min-height: 90vh;
          background:
            linear-gradient(rgba(30,21,18,.48), rgba(30,21,18,.62)),
            url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          text-align: center;
          color: #fff;
          position: relative;
        }

        .hero-content {
          max-width: 980px;
          margin: auto;
        }

        .hero-title {
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 900;
          line-height: 1.05;
          margin-bottom: 26px;
        }

        .shimmer-text {
          background: linear-gradient(90deg, #ffffff, #f1b08c, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 22px;
          max-width: 760px;
          margin: 0 auto 40px;
          color: rgba(255,255,255,.9);
        }

        .main-btn {
          border: none !important;
          border-radius: 999px !important;
          background: var(--accent) !important;
          color: #fff !important;
          padding: 15px 32px !important;
          font-weight: 700 !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 10px !important;
          box-shadow: 0 14px 30px rgba(184,92,56,.25);
          transition: .3s;
          text-decoration: none;
        }

        .main-btn:hover {
          background: var(--accent-hover) !important;
          transform: translateY(-3px);
          color: #fff !important;
        }

        .outline-btn {
          border: 2px solid var(--accent);
          color: var(--accent);
          background: transparent;
          border-radius: 999px;
          padding: 14px 32px;
          font-weight: 700;
          transition: .3s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .outline-btn:hover {
          background: rgba(184,92,56,.1);
          color: var(--accent);
        }

        .hero-stats {
          margin-top: 60px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 24px;
          color: rgba(255,255,255,.82);
          font-weight: 600;
        }

        .hero-stats span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .scroll-icon {
          position: absolute;
          bottom: 35px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--accent);
          animation: bounce 1.6s infinite;
          cursor: pointer;
        }

        @keyframes bounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 10px); }
        }

        .section-padding {
          padding: 95px 0;
        }

        .soft-section {
          background: var(--secondary);
        }

        .feature-card,
        .service-card,
        .team-card,
        .review-card {
          background: #fff;
          border-radius: 28px;
          padding: 32px;
          height: 100%;
          box-shadow: 0 12px 35px rgba(30,21,18,.07);
          transition: .35s;
        }

        .feature-card:hover,
        .service-card:hover,
        .team-card:hover,
        .review-card:hover {
          transform: translateY(-8px);
        }

        .icon-accent {
          color: var(--accent);
          margin-bottom: 18px;
        }

        .section-title {
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 900;
          margin-bottom: 16px;
          color: var(--dark);
        }

        .section-subtitle {
          font-size: 19px;
          color: rgba(42,29,24,.65);
          max-width: 720px;
          margin: auto;
        }

        .service-card {
          padding: 0;
          overflow: hidden;
        }

        .service-img {
          height: 270px;
          overflow: hidden;
        }

        .service-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .6s;
        }

        .service-card:hover img {
          transform: scale(1.1);
        }

        .service-body {
          padding: 26px;
        }

        .price {
          color: var(--accent);
          font-weight: 900;
          margin-bottom: 16px;
        }

        .service-link {
          color: var(--dark);
          text-decoration: none;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .service-link:hover {
          color: var(--accent);
        }

        .dark-section {
          background: var(--dark);
          color: #fff;
        }

        .dark-section .section-title {
          color: #fff;
        }

        .benefit-title,
        .stat-number {
          color: var(--accent);
        }

        .stat-number {
          font-size: 44px;
          font-family: Georgia, serif;
          font-weight: 900;
        }

        .glass {
          background: rgba(255,255,255,.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,.6);
        }

        .team-img {
          width: 132px;
          height: 132px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid rgba(184,92,56,.18);
          margin-bottom: 22px;
        }

        .team-role,
        .team-insta {
          color: var(--accent);
          font-weight: 700;
        }

        .review-stars {
          color: var(--accent);
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-bottom: 12px;
        }

        .quote-mark {
          position: absolute;
          top: 10px;
          left: 24px;
          font-size: 72px;
          color: rgba(184,92,56,.12);
          font-family: Georgia, serif;
        }

        .review-card {
          position: relative;
          text-align: center;
        }

        .insta-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }

        .insta-item {
          aspect-ratio: 1 / 1;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
        }

        .insta-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .45s;
        }

        .insta-overlay {
          position: absolute;
          inset: 0;
          background: rgba(184,92,56,.45);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: .3s;
          color: #fff;
        }

        .insta-item:hover img {
          transform: scale(1.12);
        }

        .insta-item:hover .insta-overlay {
          opacity: 1;
        }

        .cta-section {
          background: var(--accent);
          color: #fff;
          text-align: center;
          padding: 95px 0;
        }

        .cta-title {
          font-size: clamp(42px, 6vw, 72px);
          font-weight: 900;
          margin-bottom: 24px;
        }

        .dark-btn {
          background: var(--dark);
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 20px 50px;
          font-size: 20px;
          font-weight: 900;
          box-shadow: 0 16px 35px rgba(30,21,18,.28);
          transition: .3s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
        }

        .dark-btn:hover {
          transform: translateY(-3px);
          background: #120d0b;
          color: #fff;
        }

        @media(max-width: 992px) {
          .insta-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media(max-width: 576px) {
          .home-page {
            padding-top: 66px;
          }

          .hero-section {
            min-height: 82vh;
          }

          .hero-subtitle {
            font-size: 18px;
          }

          .hero-stats {
            gap: 14px;
            font-size: 13px;
          }

          .section-padding {
            padding: 70px 0;
          }

          .insta-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <main className="home-page">
        <section className="hero-section">
          <Container>
            <div className="hero-content">
              <h1 className="hero-title font-serif">
                <span className="shimmer-text d-block">East London's Most</span>
                <span>Welcoming Hair Studio</span>
              </h1>

              <p className="hero-subtitle">
                Expert cuts, colour & care for everyone — right in the heart of
                Shoreditch.
              </p>

              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Button className="main-btn" onClick={goToBooking}>
                  <Calendar size={20} />
                  Book Now
                </Button>

                <Link to="/services" className="outline-btn">
                  Explore Our Services
                </Link>
              </div>

              <div className="hero-stats">
                <span>
                  <Star size={16} fill="currentColor" /> 4.9/5 Google Rating
                </span>
                <span>500+ Happy Clients</span>
                <span>Open 7 Days*</span>
                <span>Award-Winning Team</span>
              </div>

              <p className="mt-3 small opacity-75">
                *Monday: Closed — available for bridal bookings only
              </p>
            </div>
          </Container>

          <ChevronDown
            className="scroll-icon"
            size={36}
            onClick={() =>
              document
                .getElementById("features-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </section>

        <section id="features-section" className="soft-section section-padding">
          <Container>
            <Row className="g-4">
              <Col md={4}>
                <div className="feature-card">
                  <Scissors size={38} className="icon-accent" />
                  <h3 className="font-serif fw-bold">Expert Stylists</h3>
                  <p className="mb-0 text-muted">
                    Skilled in all hair types and textures.
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <div className="feature-card">
                  <Sparkles size={38} className="icon-accent" />
                  <h3 className="font-serif fw-bold">Premium Products</h3>
                  <p className="mb-0 text-muted">
                    We only use products we genuinely believe in.
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <div className="feature-card">
                  <Heart size={38} className="icon-accent" />
                  <h3 className="font-serif fw-bold">You First, Always</h3>
                  <p className="mb-0 text-muted">
                    Every client gets our full attention.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section-padding">
          <Container>
            <div className="text-center mb-5">
              <h2 className="section-title font-serif">What We Do Best</h2>
              <p className="section-subtitle font-serif fst-italic">
                From a quick trim to a full transformation
              </p>
            </div>

            <Row className="g-4">
              {services.map((item, index) => (
                <Col lg={3} sm={6} key={index}>
                  <div className="service-card">
                    <div className="service-img">
                      <img src={item.image} alt={item.title} />
                    </div>

                    <div className="service-body">
                      <h3 className="font-serif fw-bold">{item.title}</h3>
                      <p className="price">{item.price}</p>

                      <Link to="/services" className="service-link">
                        View Service
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            <div className="text-center mt-5">
              <Button className="main-btn" onClick={goToBooking}>
                <Calendar size={20} />
                Book Now
              </Button>
            </div>
          </Container>
        </section>

        <section className="dark-section section-padding">
          <Container>
            <div className="text-center mb-5">
              <h2 className="section-title font-serif">
                Why Our Clients Keep Coming Back
              </h2>
            </div>

            <Row className="g-5 mb-5">
              {[
                [
                  "🕐",
                  "Book in 60 Seconds",
                  "Our 3-step booking system is simple and fast.",
                ],
                [
                  "👥",
                  "Choose Your Stylist",
                  "Pick the stylist you trust with your hair.",
                ],
                [
                  "📱",
                  "Reminders Included",
                  "We text and email you before your appointment.",
                ],
                [
                  "💫",
                  "All Hair Types Welcome",
                  "Straight, wavy, curly, coily — we love them all.",
                ],
              ].map((item, index) => (
                <Col lg={3} md={6} key={index}>
                  <div>
                    <span className="fs-1 d-block mb-3">{item[0]}</span>
                    <h3 className="benefit-title font-serif fw-bold">
                      {item[1]}
                    </h3>
                    <p className="text-white-50">{item[2]}</p>
                  </div>
                </Col>
              ))}
            </Row>

            <hr className="border-light opacity-25 my-5" />

            <Row className="g-4 text-center">
              {[
                ["500+", "Clients Served"],
                ["8 Years", "In Shoreditch"],
                ["12 Stylists", "Expert Team"],
                ["4.9★", "Google Rating"],
              ].map((item, index) => (
                <Col lg={3} xs={6} key={index}>
                  <div className="stat-number">{item[0]}</div>
                  <p className="text-white-50 small text-uppercase">
                    {item[1]}
                  </p>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="section-padding">
          <Container>
            <div className="text-center mb-5">
              <h2 className="section-title font-serif">
                The Hands Behind the Magic
              </h2>
              <p className="section-subtitle">
                A team of passionate stylists who genuinely love what they do.
              </p>
            </div>

            <Row className="g-4">
              {team.map((member, index) => (
                <Col md={4} key={index}>
                  <div className="team-card glass text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-img"
                    />

                    <h3 className="font-serif fw-bold">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="text-muted fst-italic">"{member.desc}"</p>
                    <p className="team-insta">{member.insta}</p>

                    <button className="outline-btn w-100" onClick={goToBooking}>
                      Book with {member.name.split(" ")[0]}
                    </button>
                  </div>
                </Col>
              ))}
            </Row>

            <div className="text-center mt-5">
              <Link to="/about" className="service-link">
                Meet The Full Team
                <ArrowRight size={16} />
              </Link>
            </div>
          </Container>
        </section>

        <section className="soft-section section-padding">
          <Container>
            <div className="text-center mb-5">
              <h2 className="section-title font-serif">
                Don't Just Take Our Word For It
              </h2>
              <p className="section-subtitle">Real clients, real experiences</p>
            </div>

            <div className="review-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={26} fill="currentColor" />
              ))}
            </div>

            <p className="text-center fs-5 fw-bold mb-5">
              4.9/5 | Based on 247 reviews
            </p>

            <Row className="g-4">
              {[
                [
                  "Sarah transformed my hair — I walked out feeling like a completely different person. Booking was so easy too!",
                  "Emma R., Bethnal Green",
                ],
                [
                  "James is an absolute wizard with textured hair. First salon in London where I felt truly understood.",
                  "Marcus T., Hackney",
                ],
                [
                  "Came for a trim, left with a full transformation. The vibe in this salon is just incredible.",
                  "Aisha K., Shoreditch",
                ],
              ].map((review, index) => (
                <Col md={4} key={index}>
                  <div className="review-card">
                    <span className="quote-mark">"</span>
                    <p className="fs-5 fst-italic position-relative">
                      {review[0]}
                    </p>
                    <p className="fw-bold mb-0">— {review[1]} ⭐⭐⭐⭐⭐</p>
                  </div>
                </Col>
              ))}
            </Row>

            <div className="text-center mt-5">
              <a
                href="https://www.google.com/search?q=Ember+and+Shears+reviews"
                target="_blank"
                rel="noreferrer"
                className="outline-btn"
              >
                Read More Reviews on Google
              </a>
            </div>
          </Container>
        </section>

        <section className="section-padding">
          <Container fluid style={{ maxWidth: "1440px" }}>
            <div className="text-center mb-5">
              <h2 className="font-serif fw-bold">Follow Our Work</h2>
              <p className="price">@emberandshears</p>
            </div>

            <div className="insta-grid">
              {instaImages.map((img, index) => (
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="insta-item"
                  key={index}
                >
                  <img src={img} alt="Hair inspiration" />

                  <div className="insta-overlay">
                    <InstagramIcon size={34} />
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-5">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="dark-btn"
              >
                <InstagramIcon size={20} /> Follow Us on Instagram
              </a>
            </div>
          </Container>
        </section>

        <section className="cta-section">
          <Container>
            <h2 className="cta-title font-serif">
              Ready for Your Best Hair Day?
            </h2>

            <p className="fs-5 mb-5 opacity-75">
              Book your appointment in under 60 seconds. No account needed.
            </p>

            <button className="dark-btn mb-4" onClick={goToContactTop}>
              Book Now
            </button>

            <div className="d-flex flex-wrap justify-content-center gap-4 opacity-75">
              <span>📍 47 Redchurch Street, Shoreditch</span>
              <span>📞 +44 20 7946 0823</span>
              <span>💬 WhatsApp Us</span>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Home;