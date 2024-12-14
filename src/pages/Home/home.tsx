/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Carousel,
  Card,
} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "../../assets/KGLOGO.png";
import KgDigital from "../../assets/KgDigital.jpg";
import slideImg1 from "../../assets/swiperImg/slideImage1.jpg";
import slideImg2 from "../../assets/swiperImg/slideImage2.jpg";
import slideImg3 from "../../assets/swiperImg/slideImage3.jpg";
import slideImg4 from "../../assets/swiperImg/slideImage4.jpg";
import slideImg5 from "../../assets/swiperImg/slideImage5.jpg";
import slideImg6 from "../../assets/swiperImg/slideImage6.jpg";
import Video from "../../assets/dummy.mp4";
import "./home.css";
const HomeScreen = () => {
  const swiperRef = useRef<any>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Navbar expand="xxl" className="introHead" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width={100}
              height={80}
              className="d-inline-block align-top mobHeadImg"
              alt="kglogo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xxl" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="justify-content-end flex-grow-1 pe-3"
              navbarScroll
              // variant="underline"
              defaultActiveKey="/"
              style={{ textAlign: "justify" }}
            >
              <Nav.Item>
                <Nav.Link href="/" className="nav-link-custom">
                  HOME
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/About Page" className="nav-link-custom">
                  ABOUT
                </Nav.Link>
              </Nav.Item>
              <NavDropdown
                title="SERVICES"
                className="nav-link-custom"
                id="offcanvasNavbarDropdown-expand-xxl"
              >
                <NavDropdown.Item href="/Service">Pre-Wedding Shoot</NavDropdown.Item>
                <NavDropdown.Item href="/Service">
                Engagement Photoshoot
                </NavDropdown.Item>
                <NavDropdown.Item href="/Service">Post-wedding Shoot</NavDropdown.Item>
                <NavDropdown.Item href="/Service">Puberty Photoshoot</NavDropdown.Item>
                <NavDropdown.Item href="/Service">Parenthood Shoot</NavDropdown.Item>
                <NavDropdown.Item href="/Service">Baby Shower</NavDropdown.Item>
                <NavDropdown.Item href="/Service">Baby Shoot</NavDropdown.Item>
                <NavDropdown.Item href="/Service">Get-together Photoshoot</NavDropdown.Item>
                <NavDropdown.Item href="/Service">Commercial Photoshoot</NavDropdown.Item>
                <NavDropdown.Item href="/Service">Corporate Events</NavDropdown.Item>
                <NavDropdown.Item href="/Service">Special Occasion Photoshoot</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="/Service">
                Parenthood Shoot
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href="/Portfolio" className="nav-link-custom">
                  PORTFOLIO
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Button variant="warning" className="nav-link-custom btnStyle">
              ENQIURE
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel fade controls={false} indicators={false}>
        <Carousel.Item interval={2000}>
          <div className="caroImg" />
          <Carousel.Caption>
            <h2 className="headCouTxt">
              <span className="spanCou">NOSTALGIC,</span> LIVE IT AGAIN{" "}
              <span className="spanCou">MOMENTS</span>
            </h2>
            <p className="headCouTxt-right">
              FOR COUPLES WHO CRAVE
              <br /> ARTISTRY, CONNECTION, AND <br />
              AN UNFORGETTABLE EXPERIENCE
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="caroImg2" />
          <Carousel.Caption>
            <h2 className="headCouTxt">
              <span className="spanCou">NOSTALGIC,</span> LIVE IT AGAIN{" "}
              <span className="spanCou">MOMENTS</span>
            </h2>
            <p className="headCouTxt-right">
              FOR COUPLES WHO CRAVE
              <br /> ARTISTRY, CONNECTION, AND <br />
              AN UNFORGETTABLE EXPERIENCE
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="caroImg3" />
          <Carousel.Caption>
            <h2 className="headCouTxt">
              <span className="spanCou">NOSTALGIC,</span> LIVE IT AGAIN{" "}
              <span className="spanCou">MOMENTS</span>
            </h2>
            <p className="headCouTxt-right">
              FOR COUPLES WHO CRAVE
              <br /> ARTISTRY, CONNECTION, AND <br />
              AN UNFORGETTABLE EXPERIENCE
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="secCon">
        <div className="marquee">
          <div className="marquee-slide">
            <span className="marqueeHead">KG PHOTOGRAPHY</span>
          </div>
          <div className="marquee-slide">
            <span className="marqueeHead">KG PHOTOGRAPHY</span>
          </div>
        </div>
        <div className="secImgCon">
          <div className="tilted-image">
            <img src={KgDigital} width="1200" height="800" alt="kgDigital" />
          </div>
          <div className="txtCon">
            <h1 className="secTitleTxt">kg photography</h1>
            <div className="content-txt">
              <h1>Artistic Storytelling Crafted for YOU!</h1>
              <br />
              <p>
                Welcome to KG Photography, where your precious moments are
                transformed into timeless treasures, capturing the essence of
                love, joy, and togetherness.
                <br />
                <br />
                We are a passionate and professional photography brand,
                dedicated to delivering stunning visuals that reflect your
                unique story and emotions.
                <br />
                <br />
                At KG Photography, we celebrate life's most cherished moments,
                ensuring every frame tells a heartfelt story of your journey in
                its true splendor.
              </p>
            </div>
            <Button variant="secondary">LEARN MORE</Button>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="heading">Wedding Stories</h1>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={2000}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slideImg1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideImg2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideImg3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideImg4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideImg5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideImg6} alt="slide_image" />
          </SwiperSlide>
          <button onClick={handlePrev} className="custom-prev-btn">
            &#10094;
          </button>
          <button onClick={handleNext} className="custom-next-btn">
            &#10095;
          </button>
        </Swiper>
        <div className="view">
          <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
          <h1 className="thirdHead">Welcome to KG Photography.</h1>
        </div>
      </div>
      <div>
        <video
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="service-container">
        <h1 className="heading">Explore Services</h1>
        <div>
          <Slider {...settings}>
            <div className="serviceCard">
              <Card>
                <img src={slideImg1} alt="kglogo" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="serviceCard">
              <Card>
                <img src={slideImg1} alt="kglogo" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="serviceCard">
              <Card>
                <img src={slideImg1} alt="kglogo" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="serviceCard">
              <Card>
                <img src={slideImg1} alt="kglogo" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Slider>
        </div>
      </div>
      
    </div>
  );
};

export default HomeScreen;
