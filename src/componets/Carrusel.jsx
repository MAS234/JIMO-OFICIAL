import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiper.css"

// Imagenes 
import Elefante from "../assets/hornitoElefante (Medium).jpg";
import Aceites from "../assets/aceites (Medium).jpg";
import Difusores from "../assets/difusores (Medium).jpg";
import Velas from "../assets/velas (Medium).jpg";
import Perfuminas from "../assets/perfumina (Medium).jpg";
import PerfuminasEsotericas from "../assets/esotericas (Medium).jpg";
import HornitoCopa from "../assets/hornitoCopa (Medium).jpg";
import HornitoBuda from "../assets/hornitoBuda (Medium).jpg";
import HornitoTorre from "../assets/HornitoTorre (Medium).jpg";
import HornitoAbierto from "../assets/hornitoAbierto (Medium).jpg";
import HornitoGris from "../assets/hornitoGris (Medium).jpg";
import HornitoRosa from "../assets/hornitoRosa (Medium).jpg"



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function Carrusel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        
      >

        
        <SwiperSlide >
          <p className="text-center text-white">Hornito Elefante</p>
          <img src={Elefante} />
        </SwiperSlide>
        <SwiperSlide>
        <p className="text-center text-white">Perfuminas Esotericas</p>
          <img src={PerfuminasEsotericas}/>
        </SwiperSlide>
        <SwiperSlide>
        <p className="text-center text-white">Perfuminas</p>
          <img src={Perfuminas}/>
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-center text-white">Difusores</p>
          <img src={Difusores} />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-center text-white">Aceites Esenciales</p>
          <img src={Aceites} />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-center text-white">Velas</p>
          <img src={Velas}/>
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-center text-white">Hornito Buda</p>
          <img src={HornitoBuda}/>
        </SwiperSlide>
        <SwiperSlide>
        <p className="text-center text-white">Hornito Copa</p>
        <img src={HornitoCopa}/>
        </SwiperSlide>
        <SwiperSlide>
        <p className="text-center text-white">Hornito Abierto</p>
          <img src={HornitoAbierto}/>
        </SwiperSlide>
        <SwiperSlide>
        <p className="text-center text-white">Hornito Gris</p>
          <img src={HornitoGris}/>
        </SwiperSlide>
        <SwiperSlide>
        <p className="text-center text-white">Hornito Torre</p>
          <img src={HornitoTorre}/>
        </SwiperSlide>
        <SwiperSlide>
        <p className="text-center text-white">Hornito Rosa</p>
          <img src={HornitoRosa}/>
        </SwiperSlide>

  

      </Swiper>
    </>
  );
}

export default Carrusel;
