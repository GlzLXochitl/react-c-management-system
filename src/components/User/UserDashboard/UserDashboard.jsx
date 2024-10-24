import React from "react";

import ajedrez from "./images/ajedrez.jpeg";
import basquet from "./images/basquet.jpeg";
import eexports from "./images/eexports.jpg";
import fut from "./images/fut.jpeg";
import medioAmbiente from "./images/medioAmbiente.jpeg";
import tae from "./images/tae.JPG";
import voli from "./images/voli.jpeg";

function UserDashboard() {
  return (
    <div className="main-body">
      <div className="offer">
        <div className="logoStyle">
          <img
            className="offer-img"
            src="/images/utmalogoorientacion.png"
            alt=""
          />
        </div>
        <div className="container-center">
        <div className="offer-text col-md-10">
          <h1 className="title-change-password-disposition title-register-style">
            ¡Descubre tu pasión más allá del aula!
          </h1>
          <h4 className="subtitle-register-style">
            La Universidad Tecnológica Metropolitana te invita a participar en
            nuestros talleres extracurriculares, deportivos y culturales. Estos
            talleres están diseñados para ayudarte a explorar nuevas
            habilidades, desarrollar talentos y disfrutar al máximo tu vida
            universitaria.
          </h4>
        </div>
      </div>
      </div>




      



      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 carousel-img"
              src={ajedrez}
              alt="Ajedrez"
            />
            <div className="carousel-caption d-none d-md-block carousel-text-style">
              <h2>Ajedrez</h2>
              <p>
                Desafía tu mente y participa en emocionantes torneos de ajedrez.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src={basquet}
              alt="Basquetbol"
            />
            <div className="carousel-caption d-none d-md-block carousel-text-style">
              <h2>Basquetbol</h2>
              <p>Forma parte de nuestro dinámico equipo de basquetbol.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src={eexports}
              alt="E-Sports"
            />
            <div className="carousel-caption d-none d-md-block carousel-text-style">
              <h2>E-Sports</h2>
              <p>Compite y destaca en nuestros torneos de e-sports.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src={fut}
              alt="Fútbol"
            />
            <div className="carousel-caption d-none d-md-block carousel-text-style">
              <h2>Fútbol</h2>
              <p>Únete a nuestro apasionado equipo de fútbol.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src={medioAmbiente}
              alt="Medio Ambiente"
            />
            <div className="carousel-caption d-none d-md-block carousel-text-style">
              <h2>Medio Ambiente</h2>
              <p>
                Contribuye a nuestras iniciativas de conservación ambiental.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src={tae}
              alt="Taekwondo"
            />
            <div className="carousel-caption d-none d-md-block carousel-text-style">
              <h2>Taekwondo</h2>
              <p>
                Desarrolla tus habilidades y disciplina en nuestro equipo de
                taekwondo.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src={voli}
              alt="Voleibol"
            />
            <div className="carousel-caption d-none d-md-block carousel-text-style">
              <h2>Voleibol</h2>
              <p>Únete a nuestro equipo de voleibol y juega con pasión.</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default UserDashboard;
