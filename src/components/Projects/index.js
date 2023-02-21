import React from "react";
import Avatar from "../../assets/images/avatar.webp";
// https://swiperjs.com/demos

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

import "./style.css";

function Projects() {
  const data = [
    {
      src: Avatar,
      url: "#!",
    },
    {
      src: Avatar,
      url: "#!",
    },
    {
      src: Avatar,
      url: "#!",
    },
    {
      src: Avatar,
      url: "#!",
    },
    {
      src: Avatar,
      url: "#!",
    },
    {
      src: Avatar,
      url: "#!",
    },
  ];
  return (
    <section id="projects">
      <div className="project-heading">
        <h3>Recent Projects</h3>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.url + index}>
            <div className="project-box" key={item.url + index}>
              <a href={item.url}>
                <img src={item.src} alt="project" />
                <div className="p-overlays">
                  <strong>Outserved Reports</strong>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="github-btn">
        <a href="" className="btn-link">
          My github
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  );
}

export default Projects;
