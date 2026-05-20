import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Calendar, Menu, X } from "lucide-react";
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
          -webkit-backdrop-filter: blur(16px);
          padding: 10px 0;
          border-bottom: 1px solid rgba(112, 63, 46, .1);
          box-shadow: 0 12px 30px rgba(30, 18, 14, .06);
        }

        .ember-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
        }

        .ember-brand {
          display: flex;
          align-items: center;
          gap: 7px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .brand-logo-wrap {
          width: 86px;
          height: 74px;
          min-width: 86px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          overflow: visible;
        }

        .brand-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;

          background: transparent !important;
          border: none !important;
          box-shadow: none !important;

          filter:
            brightness(1.08)
            contrast(1.18)
            saturate(1.12)
            drop-shadow(0 4px 8px rgba(34, 23, 20, .16));

          transition: .35s ease;
        }

        .ember-brand:hover .brand-logo-img {
          transform: scale(1.06);
        }

        .brand-text {
          font-family: Georgia, serif;
          font-size: 29px;
          font-weight: 800;
          color: #221714;
          letter-spacing: -1px;
          line-height: 1;
          white-space: nowrap;
          margin-left: -3px;
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
          justify-content: center !important;
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
          box-shadow: 0 14px 30px rgba(30, 18, 14, .08);
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

        @media (max-width: 992px) {
          .desktop-menu {
            gap: 22px;
          }

          .ember-brand {
            gap: 6px;
          }

          .brand-logo-wrap {
            width: 78px;
            height: 68px;
            min-width: 78px;
          }

          .brand-text {
            font-size: 26px;
            margin-left: -3px;
          }
        }

        @media (max-width: 768px) {
          .ember-header {
            padding: 9px 0;
          }

          .desktop-menu {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }

          .mobile-menu.show {
            display: block;
          }

          .brand-logo-wrap {
            width: 70px;
            height: 60px;
            min-width: 70px;
          }

          .brand-text {
            font-size: 23px;
            margin-left: -2px;
          }
        }

        @media (max-width: 430px) {
          .ember-brand {
            gap: 5px;
          }

          .brand-logo-wrap {
            width: 62px;
            height: 54px;
            min-width: 62px;
          }

          .brand-text {
            font-size: 20px;
            letter-spacing: -0.6px;
            margin-left: -2px;
          }

          .mobile-toggle {
            padding: 5px;
          }
        }

        @media (max-width: 360px) {
          .brand-logo-wrap {
            width: 56px;
            height: 50px;
            min-width: 56px;
          }

          .brand-text {
            font-size: 18px;
          }
        }
      `}</style>

      <header className="ember-header">
        <Container>
          <div className="ember-nav-inner">
            <Link to="/" className="ember-brand" onClick={() => setOpen(false)}>
              <div className="brand-logo-wrap">
                <img
                  src="/Images/Logo.png"
                  alt="Hair & Lounge Logo"
                  className="brand-logo-img"
                />
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
              type="button"
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