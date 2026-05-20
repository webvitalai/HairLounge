import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <style>{`

      .ember-footer{
        background:
        radial-gradient(circle at top left, rgba(184,92,56,.14), transparent 30%),
        linear-gradient(135deg,#15110f,#1d1714,#120f0d);
        color:#fff;
        padding:90px 0 30px;
        overflow:hidden;
        border-top:4px solid #b85c38;
      }

      .footer-brand{
        display:flex;
        align-items:center;
        gap:7px;
        text-decoration:none;
        margin-bottom:26px;
        width:max-content;
      }

      .footer-logo-wrap{
        width:86px;
        height:74px;
        min-width:86px;

        display:flex;
        align-items:center;
        justify-content:center;

        background:transparent !important;
        border:none !important;
        box-shadow:none !important;
        border-radius:0 !important;
        overflow:visible;
      }

      .footer-logo-img{
        width:100%;
        height:100%;
        object-fit:contain;
        display:block;

        background:transparent !important;
        border:none !important;
        box-shadow:none !important;

        filter:
          brightness(1.08)
          contrast(1.18)
          saturate(1.12)
          drop-shadow(0 5px 10px rgba(0,0,0,.35));

        transition:.35s ease;
      }

      .footer-brand:hover .footer-logo-img{
        transform:scale(1.06);
      }

      .brand-title{
        font-size:30px;
        font-weight:900;
        color:#fff;
        font-family:Georgia,serif;
        letter-spacing:-1px;
        line-height:1;
        margin-left:-3px;
        white-space:nowrap;
      }

      .brand-title span{
        color:#b85c38;
      }

      .footer-tagline{
        color:#d9b8a7;
        font-size:18px;
        font-style:italic;
        margin-bottom:18px;
      }

      .footer-desc{
        color:rgba(255,255,255,.58);
        line-height:1.9;
        max-width:360px;
      }

      .footer-heading{
        font-size:24px;
        font-weight:800;
        margin-bottom:30px;
        font-family:Georgia,serif;
      }

      .footer-links{
        display:flex;
        flex-direction:column;
        gap:18px;
      }

      .footer-links a{
        color:rgba(255,255,255,.6);
        text-decoration:none;
        transition:.3s;
        width:max-content;
      }

      .footer-links a:hover{
        color:#b85c38;
        transform:translateX(6px);
      }

      .hours-list{
        display:flex;
        flex-direction:column;
        gap:15px;
      }

      .hours-item{
        display:flex;
        justify-content:space-between;
        gap:20px;
        color:rgba(255,255,255,.6);
      }

      .hours-highlight{
        color:#b85c38;
        font-weight:700;
      }

      .contact-list{
        display:flex;
        flex-direction:column;
        gap:22px;
      }

      .contact-item{
        display:flex;
        gap:14px;
        align-items:flex-start;
        color:rgba(255,255,255,.6);
      }

      .contact-item a{
        color:rgba(255,255,255,.6);
        text-decoration:none;
        transition:.3s;
      }

      .contact-item a:hover{
        color:#b85c38;
      }

      .contact-icon{
        color:#b85c38;
        flex-shrink:0;
        margin-top:2px;
      }

      .socials{
        display:flex;
        gap:14px;
        margin-top:35px;
      }

      .social-btn{
        width:46px;
        height:46px;
        border-radius:50%;
        border:1px solid rgba(255,255,255,.14);
        display:flex;
        align-items:center;
        justify-content:center;
        color:#fff;
        transition:.35s;
        text-decoration:none;
      }

      .social-btn:hover{
        background:#b85c38;
        border-color:#b85c38;
        transform:translateY(-4px);
      }

      .footer-bottom{
        margin-top:70px;
        padding-top:28px;
        border-top:1px solid rgba(255,255,255,.08);
      }

      .bottom-inner{
        display:flex;
        align-items:center;
        justify-content:space-between;
        flex-wrap:wrap;
        gap:20px;
        color:rgba(255,255,255,.42);
        font-size:14px;
      }

      .made-love{
        display:flex;
        align-items:center;
        gap:6px;
      }

      .heart{
        color:#b85c38;
      }

      @media(max-width:991px){

        .footer-column{
          margin-bottom:45px;
        }

        .footer-logo-wrap{
          width:78px;
          height:68px;
          min-width:78px;
        }

        .brand-title{
          font-size:27px;
          margin-left:-3px;
        }

      }

      @media(max-width:768px){

        .footer-brand{
          gap:6px;
        }

        .footer-logo-wrap{
          width:70px;
          height:60px;
          min-width:70px;
        }

        .brand-title{
          font-size:24px;
          margin-left:-2px;
        }

        .footer-heading{
          font-size:22px;
        }

        .bottom-inner{
          flex-direction:column;
          text-align:center;
        }

      }

      @media(max-width:430px){

        .footer-brand{
          gap:5px;
        }

        .footer-logo-wrap{
          width:62px;
          height:54px;
          min-width:62px;
        }

        .brand-title{
          font-size:21px;
          letter-spacing:-.6px;
          margin-left:-2px;
        }

      }

      @media(max-width:360px){

        .footer-logo-wrap{
          width:56px;
          height:50px;
          min-width:56px;
        }

        .brand-title{
          font-size:19px;
        }

      }

      `}</style>

      <footer className="ember-footer">

        <Container>

          <Row className="g-5">

            {/* BRAND */}

            <Col lg={4} md={6} className="footer-column">

              <a href="/" className="footer-brand">

                <div className="footer-logo-wrap">
                  <img
                    src="/Images/Logo.png"
                    alt="Hair & Lounge Logo"
                    className="footer-logo-img"
                  />
                </div>

                <div className="brand-title">
                  Hair <span>&</span> Lounge
                </div>

              </a>

              <div className="footer-tagline">
                "Where Every Cut Tells a Story"
              </div>

              <p className="footer-desc">
                Manchester's most welcoming hair studio,
                providing expert cuts, colour and styling
                in a cozy modern atmosphere.
              </p>

            </Col>

            {/* LINKS */}

            <Col lg={2} md={6} className="footer-column">

              <div className="footer-heading">
                Quick Links
              </div>

              <div className="footer-links">

                <a href="/">Home</a>
                <a href="/services">Services</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/contact">Book Appointment</a>

              </div>

            </Col>

            {/* HOURS */}

            <Col lg={3} md={6} className="footer-column">

              <div className="footer-heading">
                Opening Hours
              </div>

              <div className="hours-list">

                <div className="hours-item hours-highlight">
                  <span>Monday</span>
                  <span>Closed</span>
                </div>

                <div className="hours-item">
                  <span>Tue - Fri</span>
                  <span>9AM - 8PM</span>
                </div>

                <div className="hours-item">
                  <span>Saturday</span>
                  <span>8:30AM - 7PM</span>
                </div>

                <div className="hours-item">
                  <span>Sunday</span>
                  <span>10AM - 5PM</span>
                </div>

              </div>

            </Col>

            {/* CONTACT */}

            <Col lg={3} md={6} className="footer-column">

              <div className="footer-heading">
                Contact Info
              </div>

              <div className="contact-list">

                <div className="contact-item">

                  <MapPin
                    size={18}
                    className="contact-icon"
                  />

                  <span>
                    441 Wilmslow Rd, Withington 
                    Manchester M20 4AN UK
                  </span>

                </div>

                <div className="contact-item">

                  <Phone
                    size={18}
                    className="contact-icon"
                  />

                  <a href="tel:+441614458888">
                    +44 161 445 8888
                  </a>

                </div>

                <div className="contact-item">

                  <Mail
                    size={18}
                    className="contact-icon"
                  />

                  <a href="mailto:hello@hairlounge.co.uk">
                    hello@hairlounge.co.uk
                  </a>

                </div>

                <div className="contact-item">

                  <MessageCircle
                    size={18}
                    className="contact-icon"
                  />

                  <a href="https://wa.me/441614458888">
                    +44 1614 458888
                  </a>

                </div>

              </div>

              {/* SOCIALS */}

              <div className="socials">

                {/* Instagram */}
                <a href="#" className="social-btn" aria-label="Instagram">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                  </svg>

                </a>

                {/* Facebook */}
                <a href="#" className="social-btn" aria-label="Facebook">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z"/>
                  </svg>

                </a>

                {/* TikTok */}
                <a href="#" className="social-btn" aria-label="TikTok">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89v-3.44a6.32 6.32 0 1 0 6.32 6.32V7.5a8.33 8.33 0 0 0 3.84 1.15V5.21a4.85 4.85 0 0 1-.05 1.48z"/>
                  </svg>

                </a>

              </div>

            </Col>

          </Row>

          {/* FOOTER BOTTOM */}

          <div className="footer-bottom">

            <div className="bottom-inner">

              <div>
                © 2026 Hair Lounge.
                All rights reserved.
              </div>

              <div className="made-love">
                Made with
                <span className="heart">♥</span>
                in East London
              </div>

            </div>

          </div>

        </Container>

      </footer>
    </>
  );
};

export default Footer;