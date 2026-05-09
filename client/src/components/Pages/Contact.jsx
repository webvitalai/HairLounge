import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock3,
  ChevronRight,
  Calendar,
  Scissors,
  User,
  Camera,
  Info,
  Check,
  ArrowLeft,
  ChevronLeft,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const location = useLocation();

  const serviceData = {
    "Cuts & Styling": [
      { name: "Women's Cut & Blow Dry", duration: "60 mins", price: "From £55" },
      { name: "Men's Cut & Style", duration: "45 mins", price: "From £35" },
      { name: "Children's Cut (Under 12)", duration: "30 mins", price: "From £25" },
      { name: "Dry Cut / Restyle", duration: "45 mins", price: "From £45" },
      { name: "Blow Dry & Style", duration: "45 mins", price: "From £40" },
    ],
    "Colour Services": [
      { name: "Full Head Colour", duration: "90 mins", price: "From £65" },
      { name: "Root Retouch", duration: "60 mins", price: "From £55" },
      { name: "Balayage / Ombré", duration: "3 hrs", price: "From £120" },
      { name: "Full Head Highlights", duration: "150 mins", price: "From £95" },
      { name: "Toning & Glossing", duration: "45 mins", price: "From £45" },
    ],
    Treatments: [
      { name: "Deep Conditioning Treatment", duration: "30 mins", price: "From £30" },
      { name: "Keratin Smoothing", duration: "3 hrs", price: "From £150" },
      { name: "Scalp & Repair Treatment", duration: "45 mins", price: "From £45" },
    ],
    "Men's Grooming": [
      { name: "Skin Fade", duration: "45 mins", price: "From £35" },
      { name: "Hot Towel Shave", duration: "45 mins", price: "From £35" },
      { name: "Beard Trim & Shape", duration: "30 mins", price: "From £20" },
    ],
    "Bridal & Occasions": [
      { name: "Bridal Hair Trial", duration: "120 mins", price: "From £85" },
      { name: "Wedding Day Hair", duration: "150 mins", price: "From £150" },
      { name: "Occasion Styling", duration: "75 mins", price: "From £65" },
    ],
    "Not Sure? Help Me Choose": [
      { name: "Free Consultation", duration: "20 mins", price: "Free" },
      { name: "Hair Advice Appointment", duration: "30 mins", price: "Free" },
    ],
  };

  const categories = [
    ["✂️", "Cuts & Styling"],
    ["🎨", "Colour Services"],
    ["💆", "Treatments"],
    ["💈", "Men's Grooming"],
    ["👰", "Bridal & Occasions"],
    ["❓", "Not Sure? Help Me Choose"],
  ];

  const stylists = [
    { name: "Any Available", label: "Any", icon: true },
    {
      name: "Priya Sharma",
      label: "Priya",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80",
    },
    {
      name: "Sarah Mitchell",
      label: "Sarah",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    },
    {
      name: "James Okafor",
      label: "James",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=160&q=80",
    },
    {
      name: "Leila Hassan",
      label: "Leila",
      img: "https://images.unsplash.com/photo-1567532939604-b6b5b0ad2f01?auto=format&fit=crop&w=160&q=80",
    },
    {
      name: "Tom Whitfield",
      label: "Tom",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    },
    {
      name: "Anika Patel",
      label: "Anika",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
    },
  ];

  const morningSlots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"];
  const afternoonSlots = [
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
  ];

  const disabledTimes = ["12:00 PM", "3:30 PM", "7:00 PM"];
  const closedDates = [6, 13, 20, 27];
  const busyDates = [7, 14, 21, 28];

  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("Cuts & Styling");
  const [selectedService, setSelectedService] = useState(serviceData["Cuts & Styling"][0]);
  const [stylist, setStylist] = useState("Any Available");
  const [selectedDate, setSelectedDate] = useState(14);
  const [selectedTime, setSelectedTime] = useState("12:30 PM");
  const [referencePhoto, setReferencePhoto] = useState(null);
  const [referencePreview, setReferencePreview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    notes: "",
    smsReminder: true,
    emailConfirm: true,
    policy: false,
  });

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const availableServices = useMemo(() => serviceData[category] || [], [category]);

  const stepWidth = step === 1 ? "0%" : step === 2 ? "50%" : "100%";

  const canStep1 = Boolean(category && selectedService);
  const canStep2 = Boolean(stylist && selectedDate && selectedTime);
  const canConfirm =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.phone.trim() &&
    formData.email.trim() &&
    formData.policy;

  const chooseCategory = (name) => {
    setCategory(name);
    setSelectedService(serviceData[name][0]);
  };

  const chooseDate = (day) => {
    if (closedDates.includes(day)) return;
    setSelectedDate(day);
    if (disabledTimes.includes(selectedTime)) {
      setSelectedTime("");
    }
  };

  const chooseTime = (time) => {
    if (disabledTimes.includes(time)) return;
    setSelectedTime(time);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setReferencePhoto(file);
    setReferencePreview(URL.createObjectURL(file));
  };

  const resetBooking = () => {
    setStep(1);
    setCategory("Cuts & Styling");
    setSelectedService(serviceData["Cuts & Styling"][0]);
    setStylist("Any Available");
    setSelectedDate(14);
    setSelectedTime("12:30 PM");
    setReferencePhoto(null);
    setReferencePreview("");
    setSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      notes: "",
      smsReminder: true,
      emailConfirm: true,
      policy: false,
    });
  };

  const confirmBooking = (e) => {
    e.preventDefault();

    if (!canConfirm) return;

    setSubmitted(true);

    setTimeout(() => {
      document
        .getElementById("booking-system")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const whatsappText = encodeURIComponent(
    `Hi Ember & Shears, I would like to book an appointment.
Service: ${selectedService?.name}
Category: ${category}
Stylist: ${stylist}
Date: 14 April 2026 / Selected Day: ${selectedDate}
Time: ${selectedTime}
Duration: ${selectedService?.duration}
Price: ${selectedService?.price}
Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Email: ${formData.email}
SMS reminder: ${formData.smsReminder ? "Yes" : "No"}
Email confirmation: ${formData.emailConfirm ? "Yes" : "No"}
Reference photo selected: ${referencePhoto ? referencePhoto.name : "No"}
Notes: ${formData.notes}`
  );

  return (
    <>
      <style>{`
        :root{
          --accent:#f15a24;
          --accent-hover:#cc4618;
          --dark:#17100d;
          --light:#fff7f3;
          --secondary:#f3dfd3;
          --text:#2d211b;
          --muted:#8b807c;
          --whatsapp:#25D366;
        }

        body{
          background:var(--light);
          color:var(--text);
          font-family:Inter, Arial, sans-serif;
        }

        .contact-page{
          min-height:100vh;
          padding-top:76px;
          overflow:hidden;
        }

        .font-serif{font-family:Georgia,serif;}

        .hero{
          background:linear-gradient(135deg,#fff7f3,#f6e7df);
          padding:105px 0 78px;
          text-align:center;
        }

        .hero h1{
          font-size:clamp(38px,6vw,72px);
          font-weight:900;
          color:var(--dark);
        }

        .hero p{
          color:rgba(45,33,27,.7);
          font-size:19px;
        }

        .contact-card{
          background:#fff;
          border:1px solid var(--secondary);
          border-radius:30px;
          padding:32px;
          height:100%;
          text-align:center;
          box-shadow:0 12px 35px rgba(0,0,0,.05);
          transition:.3s;
        }

        .contact-card:hover{
          transform:translateY(-6px);
          box-shadow:0 20px 45px rgba(241,90,36,.12);
        }

        .contact-icon{color:var(--accent); margin-bottom:22px;}

        .contact-card h3{
          font-size:24px;
          font-weight:800;
          font-family:Georgia,serif;
        }

        .contact-action{
          color:var(--accent);
          font-size:13px;
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:1px;
          text-decoration:none;
        }

        #booking-system{scroll-margin-top:105px;}

        .booking-wrap{
          max-width:900px;
          margin:auto;
        }

        .booking-card{
          background:#fff;
          border:1px solid var(--secondary);
          border-radius:40px;
          padding:48px;
          box-shadow:0 26px 80px rgba(241,90,36,.08);
          overflow:hidden;
        }

        .step-line-wrap{
          max-width:430px;
          margin:0 auto 65px;
          position:relative;
          display:flex;
          justify-content:space-between;
        }

        .step-line{
          position:absolute;
          left:0;
          right:0;
          top:20px;
          height:3px;
          background:#f0dfd5;
          z-index:0;
        }

        .step-fill{
          position:absolute;
          left:0;
          top:20px;
          height:3px;
          background:var(--accent);
          z-index:1;
          transition:.4s;
        }

        .step-item{
          position:relative;
          z-index:2;
          text-align:center;
        }

        .step-circle{
          width:42px;
          height:42px;
          border-radius:50%;
          border:2px solid #f0dfd5;
          background:#fff;
          color:#b7aca7;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:13px;
          font-weight:900;
          margin:auto;
          transition:.3s;
        }

        .step-circle.active{
          background:var(--accent);
          border-color:var(--accent);
          color:#fff;
        }

        .step-label{
          margin-top:8px;
          font-size:11px;
          font-weight:900;
          letter-spacing:1px;
          color:#b7aca7;
          text-transform:uppercase;
        }

        .step-label.active{color:var(--accent);}

        .section-heading{
          font-size:30px;
          font-weight:900;
          text-align:center;
          margin-bottom:34px;
          color:var(--dark);
        }

        .category-btn{
          border:1px solid #efd8ca;
          background:#fff;
          min-height:92px;
          border-radius:16px;
          width:100%;
          padding:20px;
          font-weight:900;
          transition:.3s;
        }

        .category-btn:hover,
        .category-btn.active{
          background:var(--accent);
          border-color:var(--accent);
          color:#fff;
          box-shadow:0 14px 30px rgba(241,90,36,.2);
          transform:translateY(-3px);
        }

        .category-icon{
          display:block;
          font-size:26px;
          margin-bottom:8px;
        }

        .service-list-title{
          font-size:18px;
          font-weight:900;
          display:flex;
          align-items:center;
          gap:8px;
          margin:32px 0 16px;
        }

        .service-card-btn{
          width:100%;
          border:2px solid transparent;
          background:#fff7f3;
          border-radius:14px;
          padding:20px;
          margin-bottom:14px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          text-align:left;
          transition:.3s;
        }

        .service-card-btn:hover,
        .service-card-btn.active{
          border-color:var(--accent);
          background:#fff;
        }

        .selected-box{
          background:#fff7f3;
          border:1px solid #ecd6c8;
          border-radius:14px;
          padding:18px;
          text-align:center;
          margin:30px 0;
          font-weight:700;
        }

        .next-btn{
          border:none;
          background:var(--accent);
          color:#fff;
          border-radius:999px;
          padding:15px 34px;
          font-weight:900;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          transition:.3s;
          box-shadow:0 14px 30px rgba(241,90,36,.25);
        }

        .next-btn:disabled{
          background:#f1dfd2;
          color:#b8aca5;
          cursor:not-allowed;
          box-shadow:none;
        }

        .next-btn:not(:disabled):hover{
          background:var(--accent-hover);
          transform:translateY(-3px);
        }

        .back-link{
          border:none;
          background:transparent;
          color:var(--accent);
          font-weight:900;
          margin-bottom:28px;
          display:inline-flex;
          align-items:center;
          gap:8px;
        }

        .stylist-row{
          display:grid;
          grid-template-columns:repeat(7,1fr);
          gap:14px;
          margin-bottom:40px;
        }

        .stylist-btn{
          border:1px solid #efd8ca;
          background:#fff;
          border-radius:14px;
          min-height:104px;
          padding:12px;
          transition:.3s;
          font-size:12px;
          font-weight:800;
        }

        .stylist-btn.active,
        .stylist-btn:hover{
          border-color:var(--accent);
          color:var(--accent);
          box-shadow:0 12px 24px rgba(241,90,36,.08);
        }

        .stylist-img,
        .stylist-any{
          width:52px;
          height:52px;
          border-radius:50%;
          margin:0 auto 8px;
          object-fit:cover;
          background:#f8e7db;
          display:flex;
          align-items:center;
          justify-content:center;
          color:var(--accent);
        }

        .date-time-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:48px;
          align-items:start;
        }

        .calendar-box{
          background:#fff8f4;
          border:1px solid #efd8ca;
          border-radius:22px;
          padding:24px;
        }

        .calendar-top{
          display:flex;
          justify-content:space-between;
          align-items:center;
          font-weight:900;
          margin-bottom:18px;
        }

        .calendar-arrow{
          border:none;
          background:transparent;
          color:var(--dark);
        }

        .days-grid{
          display:grid;
          grid-template-columns:repeat(7,1fr);
          gap:12px;
          text-align:center;
          font-size:13px;
          font-weight:800;
        }

        .day-name{
          color:#aaa;
          font-size:11px;
          letter-spacing:1px;
        }

        .day-btn{
          border:none;
          background:transparent;
          height:32px;
          border-radius:50%;
          font-weight:800;
          position:relative;
        }

        .day-btn.active{
          background:var(--accent);
          color:#fff;
        }

        .day-btn.today{
          border:1px solid var(--accent);
        }

        .day-btn.disabled-day{
          color:#c9bdb7;
          text-decoration:line-through;
          cursor:not-allowed;
        }

        .dot{
          width:4px;
          height:4px;
          background:var(--accent);
          border-radius:50%;
          position:absolute;
          top:1px;
          left:50%;
          transform:translateX(-50%);
        }

        .time-title{
          font-size:18px;
          font-weight:900;
          display:flex;
          align-items:center;
          gap:8px;
          margin-bottom:20px;
        }

        .slot-label{
          font-size:11px;
          font-weight:900;
          color:#b6aaa5;
          letter-spacing:1px;
          text-transform:uppercase;
          margin:16px 0 10px;
        }

        .slot-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:10px;
        }

        .slot-btn{
          border:1px solid #efd8ca;
          background:#fff;
          border-radius:10px;
          padding:11px 8px;
          font-size:13px;
          font-weight:800;
          transition:.3s;
        }

        .slot-btn:hover{
          border-color:var(--accent);
        }

        .slot-btn.active{
          background:var(--accent);
          color:#fff;
          border-color:var(--accent);
        }

        .slot-btn:disabled{
          background:#f1dfd2;
          color:#bfb3ad;
          text-decoration:line-through;
          cursor:not-allowed;
        }

        .current-selection{
          border-top:1px solid #ead8cf;
          margin-top:42px;
          padding-top:24px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
        }

        .current-selection small{
          display:block;
          color:#aaa;
          font-weight:900;
          letter-spacing:1px;
          text-transform:uppercase;
        }

        .form-label-custom{
          display:block;
          font-size:12px;
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:2px;
          color:#7d7370;
          margin-bottom:8px;
        }

        .form-input,
        .form-textarea{
          width:100%;
          border:1px solid #efd8ca;
          background:#fff;
          border-radius:10px;
          outline:none;
          padding:0 16px;
        }

        .form-input{height:56px;}

        .form-textarea{
          min-height:120px;
          padding-top:16px;
          resize:none;
        }

        .form-input:focus,
        .form-textarea:focus{
          border-color:var(--accent);
        }

        .upload-box{
          border:1px dashed #efd8ca;
          border-radius:16px;
          min-height:130px;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          text-align:center;
          margin:30px 0;
          color:var(--accent);
          cursor:pointer;
          background:#fffdfb;
        }

        .upload-preview{
          width:96px;
          height:96px;
          border-radius:18px;
          object-fit:cover;
          margin-bottom:10px;
          border:2px solid var(--accent);
        }

        .check-row{
          display:flex;
          align-items:center;
          gap:12px;
          margin:16px 0;
        }

        .check-row input{
          accent-color:var(--accent);
        }

        .policy-box{
          background:#ffecc7;
          border-radius:14px;
          padding:20px;
          margin:24px 0;
        }

        .summary-box{
          border:1px solid #efd8ca;
          border-radius:18px;
          padding:28px;
          margin:28px 0;
          position:relative;
          overflow:hidden;
        }

        .summary-box::after{
          content:"";
          position:absolute;
          right:24px;
          top:24px;
          width:92px;
          height:92px;
          border-radius:50%;
          border:10px solid rgba(0,0,0,.04);
        }

        .summary-title{
          color:var(--accent);
          letter-spacing:3px;
          font-weight:900;
          font-size:12px;
          text-transform:uppercase;
          margin-bottom:22px;
        }

        .summary-row{
          display:flex;
          justify-content:space-between;
          gap:20px;
          font-size:14px;
          margin-bottom:14px;
          position:relative;
          z-index:2;
        }

        .summary-row span:first-child{
          color:#aaa;
          font-size:11px;
          letter-spacing:1px;
          text-transform:uppercase;
          font-weight:900;
        }

        .success-box{
          text-align:center;
          padding:45px 10px;
        }

        .success-icon{
          color:var(--accent);
          margin-bottom:20px;
        }

        .map-section{
          height:450px;
          position:relative;
          background:var(--secondary);
          margin-top:90px;
        }

        .map-section iframe{
          width:100%;
          height:100%;
          border:0;
          filter:grayscale(1) contrast(1.1);
        }

        .map-badge{
          position:absolute;
          left:50%;
          bottom:32px;
          transform:translateX(-50%);
          background:#fff;
          border-radius:999px;
          padding:15px 28px;
          box-shadow:0 18px 45px rgba(0,0,0,.2);
          font-weight:900;
          display:flex;
          align-items:center;
          gap:10px;
          white-space:nowrap;
        }

        .floating-whatsapp{
          position:fixed;
          right:28px;
          bottom:28px;
          width:64px;
          height:64px;
          border-radius:50%;
          background:var(--whatsapp);
          color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:999;
          box-shadow:0 15px 40px rgba(37,211,102,.4);
          animation:pulse 1.8s infinite;
        }

        @keyframes pulse{
          0%,100%{transform:scale(1)}
          50%{transform:scale(1.08)}
        }

        @media(max-width:991px){
          .stylist-row{
            grid-template-columns:repeat(4,1fr);
          }

          .date-time-grid{
            grid-template-columns:1fr;
          }
        }

        @media(max-width:768px){
          .contact-page{
            padding-top:66px;
          }

          .booking-card{
            padding:28px 18px;
            border-radius:28px;
          }

          .stylist-row{
            grid-template-columns:repeat(2,1fr);
          }

          .slot-grid{
            grid-template-columns:repeat(2,1fr);
          }

          .current-selection{
            flex-direction:column;
            align-items:flex-start;
          }

          .next-btn{
            width:100%;
          }

          .map-badge{
            width:90%;
            white-space:normal;
            justify-content:center;
            text-align:center;
          }
        }
      `}</style>

      <main className="contact-page">
        <section className="hero">
          <Container>
            <h1 className="font-serif">Get in Touch & Book Your Visit</h1>
            <p>Book online in under 60 seconds, or reach us any way you prefer.</p>
          </Container>
        </section>

        <section className="py-5" style={{ marginTop: "-40px" }}>
          <Container>
            <Row className="g-4">
              <Col lg={3} sm={6}>
                <div className="contact-card">
                  <MapPin size={34} className="contact-icon" />
                  <h3>Visit Us</h3>
                  <p className="fw-semibold">
                    441 Wilmslow Rd, Withington Manchester 
                    M204AN UK
                  </p>
                  <p className="small text-muted">5 min walk from Shoreditch High St</p>
                  <a
  href="https://www.google.com/maps/search/?api=1&query=Hair+Lounge+441+Wilmslow+Rd+Manchester+M20+4AN"
  target="_blank"
  rel="noreferrer"
  className="contact-action"
>
  Open in Google Maps
</a>
                </div>
              </Col>

              <Col lg={3} sm={6}>
                <div className="contact-card">
                  <Phone size={34} className="contact-icon" />
                  <h3>Call Us</h3>
                  <p className="fw-semibold">+44 161 445 8888</p>
                  <p className="small text-muted">Tue-Fri: 9am-8pm | Sat: 8:30am-7pm</p>
                  <a href="tel:+441614458888" className="contact-action">
                    Tap to Call
                  </a>
                </div>
              </Col>

              <Col lg={3} sm={6}>
                <div className="contact-card">
                  <MessageCircle size={34} style={{ color: "#25D366" }} />
                  <h3>WhatsApp Us</h3>
                  <p className="fw-semibold">+44 1614 458888</p>
                  <p className="small text-muted">Average reply: &lt; 1 hour</p>
                  <a
                    href="https://wa.me/4471614458888"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-action"
                    style={{ color: "#25D366" }}
                  >
                    Open WhatsApp
                  </a>
                </div>
              </Col>

              <Col lg={3} sm={6}>
                <div className="contact-card">
                  <Clock3 size={34} className="contact-icon" />
                  <h3>Opening Hours</h3>
                  <p className="fw-semibold">Tue-Fri: 9am-8pm | Sat: 8:30-7</p>
                  <p className="small text-muted">Mon: Closed</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="booking-system">
          <Container>
            <div className="booking-wrap">
              <div className="text-center mb-5">
                <h2 className="font-serif fw-bold display-5">Book Your Appointment</h2>
                <p className="fs-5 text-muted fst-italic">
                  3 simple steps. No account needed. Takes less than 60 seconds.
                </p>
              </div>

              <form className="booking-card" onSubmit={confirmBooking}>
                {!submitted && (
                  <>
                    <div className="step-line-wrap">
                      <div className="step-line"></div>
                      <div className="step-fill" style={{ width: stepWidth }}></div>

                      {[1, 2, 3].map((item) => (
                        <div className="step-item" key={item}>
                          <div className={`step-circle ${step >= item ? "active" : ""}`}>
                            {step > item ? <Check size={18} /> : item}
                          </div>
                          <div className={`step-label ${step >= item ? "active" : ""}`}>
                            Step {item}
                          </div>
                        </div>
                      ))}
                    </div>

                    {step === 1 && (
                      <>
                        <h3 className="section-heading font-serif">What can we do for you today?</h3>

                        <Row className="g-3">
                          {categories.map(([emoji, name]) => (
                            <Col lg={4} sm={6} key={name}>
                              <button
                                type="button"
                                className={`category-btn ${category === name ? "active" : ""}`}
                                onClick={() => chooseCategory(name)}
                              >
                                <span className="category-icon">{emoji}</span>
                                {name}
                              </button>
                            </Col>
                          ))}
                        </Row>

                        <div className="service-list-title">
                          <Scissors size={18} color="#f15a24" />
                          Select a service:
                        </div>

                        {availableServices.map((item) => (
                          <button
                            type="button"
                            key={item.name}
                            className={`service-card-btn ${
                              selectedService?.name === item.name ? "active" : ""
                            }`}
                            onClick={() => setSelectedService(item)}
                          >
                            <div>
                              <strong className="d-block">{item.name}</strong>
                              <small className="text-muted">{item.duration}</small>
                            </div>
                            <strong>{item.price}</strong>
                          </button>
                        ))}

                        {selectedService && (
                          <div className="selected-box">
                            Selected:{" "}
                            <span style={{ color: "#f15a24", fontWeight: 900 }}>
                              {selectedService.name}
                            </span>{" "}
                            | {selectedService.duration} | {selectedService.price}
                          </div>
                        )}

                        <div className="d-flex justify-content-end">
                          <button
                            type="button"
                            className="next-btn"
                            disabled={!canStep1}
                            onClick={() => setStep(2)}
                          >
                            Next: Choose Stylist & Time
                            <ChevronRight size={18} />
                          </button>
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <button type="button" className="back-link" onClick={() => setStep(1)}>
                          <ArrowLeft size={16} />
                          Back to Services
                        </button>

                        <h3 className="font-serif fw-bold mb-4">Who would you like?</h3>

                        <div className="stylist-row">
                          {stylists.map((item) => (
                            <button
                              type="button"
                              key={item.name}
                              className={`stylist-btn ${stylist === item.name ? "active" : ""}`}
                              onClick={() => setStylist(item.name)}
                            >
                              {item.icon ? (
                                <div className="stylist-any">
                                  <User size={26} />
                                </div>
                              ) : (
                                <img src={item.img} alt={item.name} className="stylist-img" />
                              )}
                              <span>{item.label || item.name}</span>
                            </button>
                          ))}
                        </div>

                        <div className="date-time-grid">
                          <div>
                            <h4 className="time-title">
                              <Calendar size={18} color="#f15a24" />
                              Pick a date
                            </h4>

                            <div className="calendar-box">
                              <div className="calendar-top">
                                <button type="button" className="calendar-arrow">
                                  <ChevronLeft size={18} />
                                </button>
                                <span>April 2026</span>
                                <button type="button" className="calendar-arrow">
                                  <ChevronRight size={18} />
                                </button>
                              </div>

                              <div className="days-grid mb-2">
                                {["MO", "TU", "WE", "TH", "FR", "SA", "SU"].map((d) => (
                                  <span className="day-name" key={d}>
                                    {d}
                                  </span>
                                ))}
                              </div>

                              <div className="days-grid">
                                {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                                  const closed = closedDates.includes(day);
                                  const dotted = busyDates.includes(day);

                                  return (
                                    <button
                                      type="button"
                                      key={day}
                                      disabled={closed}
                                      className={`day-btn ${
                                        selectedDate === day ? "active" : ""
                                      } ${day === 9 ? "today" : ""} ${
                                        closed ? "disabled-day" : ""
                                      }`}
                                      onClick={() => chooseDate(day)}
                                    >
                                      {dotted && <span className="dot"></span>}
                                      {day}
                                    </button>
                                  );
                                })}
                              </div>

                              <p className="small text-muted mt-4 mb-0">
                                <span style={{ color: "#f15a24" }}>•</span> Mondays are closed for deep cleaning and bridal bookings.
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="time-title">
                              <Clock3 size={18} color="#f15a24" />
                              Pick a time
                            </h4>

                            <div className="slot-label">Morning Slots</div>

                            <div className="slot-grid">
                              {morningSlots.map((slot) => (
                                <button
                                  type="button"
                                  key={slot}
                                  className={`slot-btn ${selectedTime === slot ? "active" : ""}`}
                                  onClick={() => chooseTime(slot)}
                                >
                                  {slot}
                                </button>
                              ))}
                            </div>

                            <div className="slot-label mt-4">Afternoon & Evening</div>

                            <div className="slot-grid">
                              {afternoonSlots.map((slot) => (
                                <button
                                  type="button"
                                  key={slot}
                                  disabled={disabledTimes.includes(slot)}
                                  className={`slot-btn ${selectedTime === slot ? "active" : ""}`}
                                  onClick={() => chooseTime(slot)}
                                >
                                  {slot}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="current-selection">
                          <div>
                            <small>Current Selections:</small>
                            <strong>
                              {selectedService?.name} with {stylist} on 4/{selectedDate}/2026 at {selectedTime}
                            </strong>
                          </div>

                          <button
                            type="button"
                            className="next-btn"
                            disabled={!canStep2}
                            onClick={() => setStep(3)}
                          >
                            Next: Your Details
                            <ChevronRight size={18} />
                          </button>
                        </div>
                      </>
                    )}

                    {step === 3 && (
                      <>
                        <button type="button" className="back-link" onClick={() => setStep(2)}>
                          <ArrowLeft size={16} />
                          Back to Stylist & Time
                        </button>

                        <h3 className="font-serif fw-bold mb-4">Almost done! Just a few details</h3>

                        <Row className="g-4">
                          <Col md={6}>
                            <label className="form-label-custom">First Name *</label>
                            <input
                              className="form-input"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                            />
                          </Col>

                          <Col md={6}>
                            <label className="form-label-custom">Last Name *</label>
                            <input
                              className="form-input"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                            />
                          </Col>

                          <Col md={6}>
                            <label className="form-label-custom">Mobile Number *</label>
                            <input
                              className="form-input"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="07XXX XXXXXX"
                              required
                            />
                          </Col>

                          <Col md={6}>
                            <label className="form-label-custom">Email Address *</label>
                            <input
                              className="form-input"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </Col>

                          <Col md={12}>
                            <label className="form-label-custom">Notes For Your Stylist</label>
                            <textarea
                              className="form-textarea"
                              name="notes"
                              value={formData.notes}
                              onChange={handleChange}
                              placeholder="Tell us about your hair, any concerns, or what you're hoping for..."
                            />
                          </Col>
                        </Row>

                        <label className="upload-box">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhoto}
                            style={{ display: "none" }}
                          />

                          {referencePreview ? (
                            <>
                              <img src={referencePreview} alt="Reference preview" className="upload-preview" />
                              <strong>{referencePhoto?.name}</strong>
                              <small className="text-muted">Click to change reference photo</small>
                            </>
                          ) : (
                            <>
                              <Camera size={34} />
                              <strong className="mt-2">Upload a reference photo (optional)</strong>
                              <small className="text-muted">
                                Show us what you love or your current hair — it helps us prepare.
                              </small>
                            </>
                          )}
                        </label>

                        <label className="check-row">
                          <input
                            type="checkbox"
                            name="smsReminder"
                            checked={formData.smsReminder}
                            onChange={handleChange}
                          />
                          Send me an SMS reminder (48 hours before)
                        </label>

                        <label className="check-row">
                          <input
                            type="checkbox"
                            name="emailConfirm"
                            checked={formData.emailConfirm}
                            onChange={handleChange}
                          />
                          Send me an email confirmation
                        </label>

                        <div className="policy-box">
                          <div className="d-flex gap-3">
                            <Info size={18} color="#f15a24" />
                            <div>
                              <strong>Cancellation Policy</strong>
                              <p className="small mb-3">
                                We kindly ask for 48 hours' notice for cancellations or rescheduling.
                                Late cancellations may incur a 50% charge.
                              </p>

                              <label className="check-row mb-0">
                                <input
                                  type="checkbox"
                                  name="policy"
                                  checked={formData.policy}
                                  onChange={handleChange}
                                  required
                                />
                                <strong>I have read and agree to the cancellation policy *</strong>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="summary-box">
                          <div className="summary-title">Your Booking Summary</div>

                          <div className="summary-row">
                            <span>Service</span>
                            <strong>{selectedService?.name}</strong>
                          </div>

                          <div className="summary-row">
                            <span>Stylist</span>
                            <strong>{stylist}</strong>
                          </div>

                          <div className="summary-row">
                            <span>Date</span>
                            <strong>4/{selectedDate}/2026</strong>
                          </div>

                          <div className="summary-row">
                            <span>Time</span>
                            <strong>{selectedTime}</strong>
                          </div>

                          <div className="summary-row">
                            <span>Duration</span>
                            <strong>{selectedService?.duration}</strong>
                          </div>

                          <div className="summary-row">
                            <span>Reference Photo</span>
                            <strong>{referencePhoto ? referencePhoto.name : "Not uploaded"}</strong>
                          </div>

                          <div className="summary-row">
                            <span>Estimated Cost</span>
                            <strong style={{ color: "#f15a24", fontSize: "18px" }}>
                              {selectedService?.price}
                            </strong>
                          </div>
                        </div>

                        <button type="submit" className="next-btn w-100" disabled={!canConfirm}>
                          <Check size={18} />
                          Confirm My Appointment
                        </button>
                      </>
                    )}
                  </>
                )}

                {submitted && (
                  <div className="success-box">
                    <Check size={76} className="success-icon" />

                    <h3 className="font-serif fw-bold mb-3">Appointment Request Ready</h3>

                    <p className="text-muted fs-5 mb-4">
                      Thank you {formData.firstName}. Your booking details are ready.
                      Send them to us on WhatsApp to confirm your slot.
                    </p>

                    <div className="summary-box text-start">
                      <div className="summary-title">Final Summary</div>

                      <div className="summary-row">
                        <span>Service</span>
                        <strong>{selectedService?.name}</strong>
                      </div>

                      <div className="summary-row">
                        <span>Stylist</span>
                        <strong>{stylist}</strong>
                      </div>

                      <div className="summary-row">
                        <span>Date</span>
                        <strong>4/{selectedDate}/2026</strong>
                      </div>

                      <div className="summary-row">
                        <span>Time</span>
                        <strong>{selectedTime}</strong>
                      </div>

                      <div className="summary-row">
                        <span>Name</span>
                        <strong>
                          {formData.firstName} {formData.lastName}
                        </strong>
                      </div>

                      <div className="summary-row">
                        <span>Phone</span>
                        <strong>{formData.phone}</strong>
                      </div>

                      <div className="summary-row">
                        <span>Email</span>
                        <strong>{formData.email}</strong>
                      </div>

                      <div className="summary-row">
                        <span>Reference</span>
                        <strong>{referencePhoto ? referencePhoto.name : "Not uploaded"}</strong>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                      <button type="button" className="next-btn" onClick={resetBooking}>
                        Make Another Booking
                      </button>

                      <a
                        href={`https://wa.me/441614458888?text=${whatsappText}`}
                        target="_blank"
                        rel="noreferrer"
                        className="next-btn text-decoration-none"
                        style={{ background: "#25D366" }}
                      >
                        Send on WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </Container>
        </section>

        <section className="map-section">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.895586292643!2d-2.2303079230638208!3d53.434575168118066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb247529d1a75%3A0xbc59b5e756ec8df3!2sHair%20Lounge!5e0!3m2!1sen!2s!4v1778321822490!5m2!1sen!2s"
    loading="lazy"
    title="Hair Lounge Location"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />

  <div className="map-badge">
    <MapPin size={20} style={{ color: "#f15a24" }} />
    Hair Lounge, 441 Wilmslow Rd, Manchester M20 4AN
  </div>
</section>

        <a
          href="https://wa.me/441614458888"
          className="floating-whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={32} />
        </a>
      </main>
    </>
  );
};

export default Contact;