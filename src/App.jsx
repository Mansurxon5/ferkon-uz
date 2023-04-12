import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import Aos from "aos";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { EffectCoverflow, Pagination } from "swiper";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Container-Fluid w-full min-h-screen overflow-hidden">
      <Navbar />
      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/partnor" element={<Partnor />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <div className="boxxing w-full min-h-screen bg-cover bg-center rounded-xl bg-[url('https://ferkon.netlify.app/static/media/header.df10d1caaa4955da73c1.png')]">
        <div
          className="theme w-full min-h-screen bg-black/70 flex flex-col justify-center items-center gap-4"
          data-aos="zoom-in"
        >
          <h1 className="text-white text-5xl font-bold">
            ЧП “Fer Kon Textile”
          </h1>
          <p className="w-[500px] text-center text-white">
            Производим качественную гофрокартоны и бумажные конусы из макулатуры
            не рекомендованной к использованию.
          </p>
        </div>
      </div>
      <div className="About w-full min-h-[70vh] bg-white relative flex items-center flex-col">
        <div
          className="image-container flex justify-center absolute mx-auto top-[-25%] aos-init"
          data-aos="zoom-in"
        >
          <img
            src="	https://ferkon.netlify.app/image/about/1.png"
            className="w-[450px] min-h-[200px]"
            alt=""
          />
          <img
            src="	https://ferkon.netlify.app/image/about/2.png"
            alt=""
            className="w-[250px] min-h-[200px]"
          />
          <img
            src="	https://ferkon.netlify.app/image/about/3.png"
            alt=""
            className="w-[250px] min-h-[200px]"
          />
        </div>
        <div className="textile w-full min-h-[50vh] mt-[200px] flex justify-center items-center">
          <div className="text-container w-[85%] min-h-[50vh] flex">
            <div
              className="text w-1/2 flex flex-col gap-5 justify-center min-h-[50vh] "
              data-aos="fade-right"
            >
              <div className="px-2 border-l-[3px] text-4xl font-bold border-l-orange-400">
                О нас
              </div>
              <p>
                ЧП «Fer Kon Textile» работает на рынке вторичных ресурсов с
                2002г.
              </p>
              <div>
                За 20 лет наша компания зарекомендовала себя, как надежный
                партнер. За это время наша компания сотрудничала с более чем 50
                компаниями.
              </div>
            </div>
            <div
              className="img w-1/2 min-h-[50vh] flex justify-center items-center"
              data-aos="fade-left"
            >
              <img
                src="https://ferkon.netlify.app/static/media/photo.eff3b77261b4d1504748.png"
                alt=""
                className="h-[43vh] object-cover rounded-md w-[90%]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="product w-full min-h-[80vh] bg-[#F0F0F0] mt-4 mb-4">
        <div className="w-[45%] flex justify-center items-center min-h-[15vh]">
          <div className="px-2 border-l-[3px] text-4xl font-bold border-l-orange-400">
            Наши продукты
          </div>
        </div>
        <header className="flex justify-center items-center gap-5">
          <div
            className="item w-[200px] min-h-[320px] bg-white rounded-md pb-2"
            data-aos="zoom-in-up"
          >
            <div className="w-full relative">
              <img
                src="https://ferkon.netlify.app/image/products/1.png"
                alt=""
                className="h-[250px] w-full object-cover rounded-md"
              />
              <div
                className="w-full h-[3vh] bottom-[.01px] bg-[#FF7D4E] absolute"
                id="item"
              ></div>
            </div>
            <div className="w-full  min-h-[12vh] flex flex-col justify-center items-center gap-1">
              <h2 className="text-lg font-bold">Гофрокартоны</h2>
              <button className="border border-[#8b8b8b] rounded-md text-[#8b8b8b] hover:bg-[#FF7D4E] hover:text-white duration-300 hover:border-none w-[90%] text-sm py-1">
                ЗАКАЗАТЬ
              </button>
            </div>
          </div>
          <div
            className="item w-[200px] min-h-[320px] bg-white rounded-md pb-2"
            data-aos="zoom-in-up"
          >
            <div className="w-full relative">
              <img
                src="https://ferkon.netlify.app/image/products/2.png"
                alt=""
                className="h-[250px] w-full object-cover rounded-md"
              />
              <div
                className="w-full h-[3vh] bottom-[.01px] bg-[#FF7D4E] absolute"
                id="item"
              ></div>
            </div>
            <div className="w-full  min-h-[12vh] flex flex-col justify-center items-center gap-1">
              <h2 className="text-lg font-bold">Бумажный конус</h2>
              <button className="border border-[#8b8b8b] rounded-md text-[#8b8b8b] hover:bg-[#FF7D4E] hover:text-white duration-300 hover:border-none w-[90%] text-sm py-1">
                ЗАКАЗАТЬ
              </button>
            </div>
          </div>
          <div
            className="item w-[200px] min-h-[320px] bg-white rounded-md pb-2"
            data-aos="zoom-in-up"
          >
            <div className="w-full relative">
              <img
                src="https://ferkon.netlify.app/image/products/3.png"
                alt=""
                className="h-[250px] w-full object-cover rounded-md"
              />
              <div
                className="w-full h-[3vh] bottom-[.01px] bg-[#FF7D4E] absolute"
                id="item"
              ></div>
            </div>
            <div className="w-full  min-h-[12vh] flex flex-col justify-center items-center gap-1">
              <h2 className="text-lg font-bold">Бумажный конус</h2>
              <button className="border border-[#8b8b8b] rounded-md text-[#8b8b8b] hover:bg-[#FF7D4E] hover:text-white duration-300 hover:border-none w-[90%] text-sm py-1">
                ЗАКАЗАТЬ
              </button>
            </div>
          </div>
          <div
            className="item w-[200px] min-h-[320px] bg-white rounded-md pb-2"
            data-aos="zoom-in-up"
          >
            <div className="w-full relative">
              <img
                src="https://ferkon.netlify.app/image/products/4.png"
                alt=""
                className="h-[250px] w-full object-cover rounded-md"
              />
              <div
                className="w-full h-[3vh] bottom-[.01px] bg-[#FF7D4E] absolute"
                id="item"
              ></div>
            </div>
            <div className="w-full  min-h-[12vh] flex flex-col justify-center items-center gap-1">
              <h2 className="text-lg font-bold">Бумажный рулон</h2>
              <button className="border border-[#8b8b8b] rounded-md text-[#8b8b8b] hover:bg-[#FF7D4E] hover:text-white duration-300 hover:border-none w-[90%] text-sm py-1">
                ЗАКАЗАТЬ
              </button>
            </div>
          </div>
        </header>
      </div>
      <div className="gallery">
        <div className="w-[45%] flex justify-center items-center min-h-[15vh]">
          <div className="px-2 border-l-[3px] text-4xl font-bold border-l-orange-400">
            Фотогалерея
          </div>
        </div>
        <div className="w-full">
          <Swiper
            className="swiper-images w-[70%]"
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            navigation={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            loop={true}
            spaceBetween={30}
            pagination={{ pagination: true, clickable: true }}
            modules={[EffectCoverflow, Pagination]}
          >
            <SwiperSlide className="swiper-slide">
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                // className="w-[200px] h-[300px]"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                // className="w-[200px] h-[300px]"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                // className="w-[200px] h-[300px]"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                // className="w-[200px] h-[300px]"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                className="w-[200px] h-[300px]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="w-full min-h-[50vh]">
        <div className="w-[45%] flex justify-center items-center min-h-[15vh]">
          <div className="px-2 border-l-[3px] text-4xl font-bold border-l-orange-400">
            Свяжитесь с нами
          </div>
        </div>
        <div className="w-[80%]">
          <div className="left flex flex-col gap-5 pl-[130px]">
            <div className="flex gap-10 items-center">
              <SlLocationPin className="text-xl" />
              <span>Ферганская обл. г. Фергана, ул. Шароф Рашидова, 1</span>
            </div>
            <div className="flex items-center gap-10">
              <FiPhone className="text-xl" />
              <div className="flex flex-col">
                <a href="Tel:+99890 580 58 78">+99890 580 58 78</a>
                <a href="Tel:+99890 301 70 60">+99890 301 70 60</a>
                <a href="Tel:+99899 995 20 00">+99899 995 20 00</a>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <TbTruckDelivery className="text-xl" />
              <span>Ферганская обл. г. Фергана, ул. Шароф Рашидова, 1</span>
            </div>
          </div>
          <div className="right">
            <div style={{ height: "100vh", width: "100%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10951302.680898618!2d50.75889833789629!3d47.92365684089219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a1d3b8a26b%3A0x27d5a00b9ecc0d36!2sFer%20Kon%20Textile!5e0!3m2!1sru!2s!4v1681303207634!5m2!1sru!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
