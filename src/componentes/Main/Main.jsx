import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../public/images/136415B4-7DCF-4478-85D3-1F5275FF9DCD.png";
import img2 from "../../../public/images/1b82f072-8563-4a29-b4da-af54a294fe54.png";
import img3 from "../../../public/images/1E3491D5-37B8-4499-8D7A-09D6CD683954.png";
import img4 from "../../../public/images/9FABD4BF-AEDC-4A33-B012-4750EECD8D51.png";
import "./main.css";

function Main() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <main className="container-main">
      <div className="decoration">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={img1} alt="Image 1" />
          </div>
          <div>
            <img src={img2} alt="Image 2" />
          </div>
          <div>
            <img src={img3} alt="Image 3" />
          </div>
          <div>
            <img src={img4} alt="Image 4" />
          </div>
        </Slider>
      </div>
    </main>
  );
}

export default Main;
