import React from "react";
import { userData } from "../../../mocks/data.js";

import facebook from "./images/facebook.png";
import tiktok from "./images/tiktok.png";

function Footer() {
  const { footer } = userData;

  console.log(userData);

  return (
    <div className="footer-complet-contact">
      <div className="container">
        <div className="row distance-row">
          <div className="distans col-md-10 col-lg-8 col-xl-6 mb-md-0 mb-4">
            <div className="logotype" id="footer-logo">
              <div>
                <img
                  src="images/utmaLogotype.png"
                  width="40px"
                  height="40px"
                  alt=""
                />
              </div>
              <div className="nameLogotype">
                <div className="utma">{footer.utma}</div>
              </div>
            </div>
          </div>
          <div className="contact-disposition uper col-md-10 col-lg-8 col-xl-4 mb-md-0 mb-4">
            <div>
              <i className="fas fa-phone me-3"></i>
              <span className="details">Dirección:</span>
              <div>{footer.ubication}</div>
            </div>
            <div>
              <i className="fas fa-print me-3"></i>
              <span className="details">Teléfono:</span>
              <div>{footer.phone}</div>
            </div>
          </div>
        </div>
        <div className="redes">
          <ul className="nav col-md-6 justify-content-center list-unstyled d-flex">
            <li>
              <a href="https://utma.edu.mx" target="blank">
                <img
                  className="utma-footer"
                  src="images/utmaLogotype.png"
                  alt="UTMA"
                />{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/UTMABiS/?locale=es_LA"
                target="blank"
              >
                <img
                  className="utma-footer"
                  src={facebook}
                  alt="Facebook"
                />{" "}
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@utmetropolitana" target="blank">
                <img
                  className="utma-footer"
                  src={tiktok}
                  alt="TikTok"
                />{" "}
              </a>
            </li>
            {/* university chatbot number
                <li>
                  <a href="#!" target="blank">
                    <img className="utma-footer" src="images/whatsapp.png" alt="WhatsApp" /> 
                  </a>
                </li>
                */}
          </ul>
        </div>
        <div className="Copyright">
          <div className="col-md-6 d-flex align-items-center justify-content-center list-unstyled d-flex">
            {/*<span className="mb-3 mb-md-0 text-muted">{footer.copyright}</span> /* copyright */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;