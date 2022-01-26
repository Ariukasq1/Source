import React from "react";
import Slider from "react-slick";

const HomeSlider = ({ sliders }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {sliders.map((item, ind) => {
        const { image, body, position_of_text, background_color } =
          item.acf || {};
        return (
          <div key={ind}>
            <div
              className="homeSlider"
              style={{
                background: image ? `url(${image})` : background_color,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: `${body.font_color}`,
              }}
            >
              <div
                className="sliderText"
                style={{ textAlign: `${position_of_text}` }}
                data-aos="fade-down"
                data-aos-easing="ease"
                data-aos-delay="0"
              >
                <h1>{body.text}</h1>
                <p
                  style={{
                    paddingLeft: position_of_text === "right" ? "40%" : "0",
                  }}
                >
                  {body.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default HomeSlider;
