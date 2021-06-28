import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
//image for first slider
import dresses from "../../public/dresses.jpg";
import sneakers from "../../public/sneakers.png";
import news from "../../public/news.jpg";

// images for second slider
import index_slider_2_img_1 from "../../public/index_slider_2_img_1.png";
import index_slider_2_img_2 from "../../public/index_slider_2_img_2.jpg";
import index_slider_2_img_3 from "../../public/index_slider_2_img_3.png";
import index_slider_2_img_4 from "../../public/index_slider_2_img_4.png";
import index_slider_2_img_5 from "../../public/index_slider_2_img_5.png";
import index_slider_2_img_6 from "../../public/index_slider_2_img_6.png";
import index_slider_2_img_7 from "../../public/index_slider_2_img_7.png";
import index_slider_2_img_8 from "../../public/index_slider_2_img_8.png";

//first slider
function FirstSlider(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
    >
      <div className="pr-4">
        <Image src={dresses} width={200} height={200} layout="responsive" />
        <Detail
          name={"saye"}
          detail={"Recycled sneakers-modolo '89 vegan ..."}
          price={"$120"}
        />
      </div>
      <div className="pr-4">
        <Image src={sneakers} width={200} height={200} layout="responsive" />
        <Detail
          name={"maye"}
          detail={"Recycled sneakers-modolo '89 vegan ..."}
          price={"$120"}
        />
      </div>
      <div className="pr-4">
        <Image src={news} width={200} height={200} layout="responsive" />
        <Detail
          name={"taye"}
          detail={"Recycled sneakers-modolo '89 vegan ..."}
          price={"$120"}
        />
      </div>
      <div className="pr-4">
        <Image src={dresses} width={200} height={200} layout="responsive" />
        <Detail
          name={"baye"}
          detail={"Recycled sneakers-modolo '89 vegan ..."}
          price={"$120"}
        />
      </div>
      <div className="pr-4">
        <Image src={news} width={200} height={200} layout="responsive" />
        <Detail
          name={"saye"}
          detail={"Recycled sneakers-modolo '89 vegan ..."}
          price={"$120"}
        />
      </div>
      <div className="pr-4">
        <Image src={dresses} width={200} height={200} layout="responsive" />
        <Detail
          name={"saye"}
          detail={"Recycled sneakers-modolo '89 vegan ..."}
          price={"$120"}
        />
      </div>
    </Carousel>
  );
}

// Detail of each image in first slider
function Detail(props) {
  return (
    <div>
      <li>{props.name}</li>
      <li className="text-muted">{props.detail}</li>

      <div className="d-flex justify-content-between " style={{ width: "95%" }}>
        <p>{props.price} </p>
        <div>
          <span className="pl-2" aria-label="Natural">
            <img
              alt="natural icon"
              className="no-rotation "
              src="https://d134ahucujhb7v.cloudfront.net/packs/media/images/icons/natural-6fdc2c7e6d3d3b7d5788c9ecc1ebe5f2.svg"
            />
          </span>
          <span className="pl-2" aria-label="Organic">
            <img
              alt="bio icon"
              className="no-rotation "
              src="https://d134ahucujhb7v.cloudfront.net/packs/media/images/icons/bio-ec4e8ee47f2ff6392542b0698f7d46cd.svg"
            />
          </span>

          <span className="pl-2" aria-label="Vegan">
            <img
              alt="vegan icon"
              className="no-rotation "
              src="https://d134ahucujhb7v.cloudfront.net/packs/media/images/icons/vegan-06a4552dac374d98f48b36ae45078431.svg"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

//second slider
function SecondSlider(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
    >
      <div className="pr-4">
        <Image
          src={index_slider_2_img_1}
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="pr-4">
        <Image
          src={index_slider_2_img_2}
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="pr-4">
        <Image
          src={index_slider_2_img_3}
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="pr-4">
        <Image
          src={index_slider_2_img_4}
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="pr-4">
        <Image
          src={index_slider_2_img_5}
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="pr-4">
        <Image
          src={index_slider_2_img_6}
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="pr-4">
        <Image
          src={index_slider_2_img_7}
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="pr-4">
        <Image
          src={index_slider_2_img_8}
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
    </Carousel>
  );
}

//exports here all files
module.exports = {
  FirstSlider,
  SecondSlider,
};
