import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Scissors, Calendar, Menu, X } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const goToBooking = () => {
    setOpen(false);
    navigate("/contact#booking-system");
  };

  return (
    <>
      <style>{`
        .ember-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          background: rgba(255,255,255,.96);
          backdrop-filter: blur(16px);
          padding: 16px 0;
          border-bottom: 1px solid rgba(112, 63, 46, .1);
          box-shadow: 0 12px 30px rgba(30, 18, 14, .06);
        }

        .ember-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .ember-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .brand-icon-wrap {
          position: relative;
          color: #b85c38;
        }

        .brand-icon-wrap svg {
          transform: rotate(-45deg);
          transition: .4s ease;
        }

        .ember-brand:hover svg {
          transform: rotate(0deg);
        }

        .brand-dot {
          position: absolute;
          top: -3px;
          right: -3px;
          width: 11px;
          height: 11px;
          background: #b85c38;
          border-radius: 50%;
          animation: pulse 1.4s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(.9); opacity: .8; }
          50% { transform: scale(1.25); opacity: .45; }
          100% { transform: scale(.9); opacity: .8; }
        }

        .brand-text {
          font-family: Georgia, serif;
          font-size: 28px;
          font-weight: 800;
          color: #221714;
          letter-spacing: -1px;
        }

        .brand-text span {
          color: #b85c38;
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 34px;
        }

        .nav-item-link {
          position: relative;
          color: #221714;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          transition: .3s ease;
          padding: 6px 0;
        }

        .nav-item-link:hover,
        .nav-item-link.active {
          color: #b85c38;
        }

        .nav-item-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -5px;
          height: 2px;
          background: #b85c38;
          border-radius: 5px;
          transform: scaleX(0);
          transform-origin: center;
          transition: .3s ease;
        }

        .nav-item-link.active::after {
          transform: scaleX(1);
        }

        .book-btn {
          border: none !important;
          border-radius: 999px !important;
          padding: 11px 20px !important;
          background: #b85c38 !important;
          color: #fff !important;
          font-weight: 700 !important;
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          box-shadow: 0 12px 25px rgba(184,92,56,.22);
          transition: .3s ease;
        }

        .book-btn:hover {
          background: #93442a !important;
          transform: translateY(-2px);
        }

        .mobile-toggle {
          display: none;
          border: none;
          background: transparent;
          color: #221714;
          padding: 8px;
        }

        .mobile-menu {
          display: none;
          margin-top: 18px;
          padding: 18px;
          border-radius: 22px;
          background: #fff8f3;
          border: 1px solid rgba(184,92,56,.14);
        }

        .mobile-menu a {
          display: block;
          padding: 13px 14px;
          color: #221714;
          font-weight: 700;
          text-decoration: none;
          border-radius: 14px;
          transition: .3s ease;
        }

        .mobile-menu a:hover,
        .mobile-menu a.active {
          background: rgba(184,92,56,.1);
          color: #b85c38;
        }

        .mobile-menu .book-btn {
          width: 100%;
          justify-content: center;
          margin-top: 12px;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }

          .mobile-menu.show {
            display: block;
          }

          .brand-text {
            font-size: 23px;
          }
        }
      `}</style>

      <header className="ember-header">
        <Container>
          <div className="ember-nav-inner">
            <Link to="/" className="ember-brand" onClick={() => setOpen(false)}>
              <div className="brand-icon-wrap">
                <Scissors size={32} />
                <span className="brand-dot"></span>
              </div>

              <div className="brand-text">
                Hair <span>&</span> Lounge
              </div>
            </Link>

            <nav className="desktop-menu">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `nav-item-link ${isActive ? "active" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Button className="book-btn" onClick={goToBooking}>
                <Calendar size={17} />
                Book Now
              </Button>
            </nav>

            <button
              className="mobile-toggle"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={27} /> : <Menu size={27} />}
            </button>
          </div>

          <div className={`mobile-menu ${open ? "show" : ""}`}>
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.name}
              </NavLink>
            ))}

            <button className="book-btn" onClick={goToBooking}>
              <Calendar size={17} />
              Book Now
            </button>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;