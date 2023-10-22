import Slider from "react-slick";

export const SimpleSlider = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true, // 마지막 슬라이드 다음에 처음으로 돌아가기
    // autoplay: true, // 자동 넘기기
    // autoplaySpeed: 3000,
    pauseOnHover: true, // 슬라이드 위에 올렸을때 멈춤
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <Slider {...settings}>{children}</Slider>;
};
