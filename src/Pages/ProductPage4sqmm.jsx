import "./ProductPage.css";
import { useLocation } from "react-router-dom";
import wireImage from "../assets/images/4sqmm.png";
import {
  FaShieldAlt,
  FaTag,
  FaPalette,
  FaRuler,
  FaBox,
  FaBolt,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeadset,
  FaTools,
} from "react-icons/fa";

function ProductPage4sqmm() {
  const location = useLocation();

  let wireColor = "Red";

  if (location.pathname.includes("black")) {
    wireColor = "Black";
  } else if (location.pathname.includes("yellow")) {
    wireColor = "Yellow";
  } else if (location.pathname.includes("blue")) {
    wireColor = "Blue";
  }

  return (
    <div className="product-page">
      <header className="header">
        <h1 className="brand-title">⚡ FINOLEX WIRES & CABLES</h1>

        <p className="brand-tagline">Trusted. Tested. Reliable.</p>
      </header>
      {/* PRODUCT IMAGE */}
      <div className="image-wrapper">
        <img src={wireImage} alt="Finolex Wire" className="product-image" />
      </div>
      {/* GENUINE BADGE */}
      <div className="verify-badge">
        <FaShieldAlt />
        <span>100% Genuine | Original Finolex Product</span>
      </div>
      {/* TITLE */}
      <h1 className="product-title">Premium Quality Wire 4 Sq MM - {wireColor}</h1>
      <p className="product-subtitle">Electrical Wire | Trusted & Tested | Residential & Commercial Use</p>
      {/* INFO CARD */}
      <div className="info-card">
        <div className="info-row">
          <FaTag className="icon" />
          <div>
            <strong>Brand :</strong> Finolex
          </div>
        </div>

        <div className="info-row">
          <FaPalette className="icon" />
          <div>
            <strong>Color :</strong> {wireColor}
          </div>
        </div>

        <div className="info-row">
          <FaRuler className="icon" />
          <div>
            <strong>Wire Size :</strong> 4 Sq MM
          </div>
        </div>

        <div className="info-row">
          <FaBox className="icon" />
          <div>
            <strong>Length :</strong> 180 Meter
          </div>
        </div>

        <div className="info-row">
          <FaBolt className="icon" />
          <div>
            <strong>Type :</strong> Finolex Flame Retardant (FR) PVC Insulated Industrial Cable
          </div>
        </div>
      </div>
      {/* PRODUCT FEATURES */}
      <section className="section">
        <h2>Product Features</h2>

        <ul className="feature-list">
          <li>
            <FaCheckCircle className="feature-icon" />
            100% Pure Copper Conductor For Optimal Conductivity
          </li>

          <li>
            <FaCheckCircle className="feature-icon" />
            ISI Certified And Tested For Safety Standards
          </li>

          <li>
            <FaCheckCircle className="feature-icon" />
            Premium PVC Insulation For Durability
          </li>

          <li>
            <FaCheckCircle className="feature-icon" />
            Suitable For Both Indoor And Outdoor Applications
          </li>

          <li>
            <FaCheckCircle className="feature-icon" />
            Color-Coded For Easy Identification
          </li>

          <li>
            <FaCheckCircle className="feature-icon" />
            Heat And Moisture Resistant
          </li>
        </ul>
      </section>
      {/* DESCRIPTION */}
      <section className="section">
        <h2>Description</h2>

        <p className="description">
          Premium Quality Wire – Trusted And Tested. This is a 100% genuine Finolex product, crafted with precision and durability in mind. Backed by
          rigorous quality checks, our wire meets industry standards for safety and performance.
        </p>

        <p className="description">
          Trusted by thousands of customers, it is suitable for residential, commercial and industrial applications. Whether you are wiring a new
          space or upgrading old connections, this wire delivers reliable conductivity and long-lasting performance.
        </p>
      </section>
      {/* KEY FEATURES */}
      <section className="section">
        <h2>Key Features</h2>

        <ul className="feature-list">
          <li>
            <FaCheckCircle className="feature-icon" />
            ISI Certified
          </li>

          <li>
            <FaCheckCircle className="feature-icon" />
            Safe And Reliable
          </li>

          <li>
            <FaCheckCircle className="feature-icon" />
            Original Packaging With Finolex Logo
          </li>

          <li>
            <FaCheckCircle className="feature-icon" />
            Long-Lasting Performance
          </li>

          <li>
            <FaCheckCircle className="feature-icon" />
            Fire Resistant Construction
          </li>
        </ul>
      </section>
      {/* CUSTOMER SUPPORT */}
      <section className="section customer-service">
        <h2>Customer Support</h2>

        <p>
          <FaPhoneAlt />
          <strong>Phone:</strong> +91-20-27506200
        </p>

        <p>
          <FaHeadset />
          <strong>Customer Care:</strong> 1800-209-0166
        </p>

        <p>
          <FaTools />
          <strong>Electrician Help:</strong> 1800-300-11999
        </p>

        <p>
          <FaEnvelope />
          sales@finolex.com
        </p>

        <p>
          <FaMapMarkerAlt />
          26-27, Mumbai-Pune Road, Pimpri, Pune - 411018
        </p>
      </section>
    </div>
  );
}

export default ProductPage4sqmm;
