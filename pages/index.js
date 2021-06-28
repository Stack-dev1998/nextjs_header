import Image from "next/image";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import BigScreenHeader from "../components/common/bigScreenHeader";
import SmallScreenHeader from "../components/common/smallScreenHeader";
import { FirstSlider, SecondSlider } from "../components/index/sliders";
import style from "../styles/index.module.css";

// imported images
import index_image_1 from "../public/index_image_1.jpeg";
import index_image_2 from "../public/index_image_2.jpg";
import index_image_3 from "../public/index_image_3.jpg";

import news from "../public/news.jpg";
import sneakers from "../public/sneakers.png";
import dresses from "../public/dresses.jpg";

import marque from "../public/marque_img.jpg";
import join_movement from "../public/join_movement_img.png";

export default function Home() {
  return (
    <div>
      <div className="big_screen_header">
        <BigScreenHeader />
      </div>
      <div className="small_screen_header">
        <SmallScreenHeader />
      </div>

      <MainImage />

      <SomeTextAfterMainImage />
      <br></br>

      <Container fluid={true} className="mt-4 pt-4 mb-4 pb-4">
        <FirstSlider />
      </Container>

      <Container fluid={true} className={style.what_we_think_section}>
        <p
          className=" mt-4 pt-4 "
          style={{ fontSize: "28px", fontWeight: "500" }}
        >
          And what do we think of ...?
        </p>
        <a href="#" className="text-dark float-right">
          <u>See all our reviews</u>
        </a>
        <br></br>
        <br></br>
        <SecondSlider />
      </Container>

      <RandomImages />
      <br></br>

      <AfterRandomImagesSection />

      <CombinedImages />

      <BrandMovementSection />
      <br></br>
      <br></br>

      <JoinMovemnet />
      <br></br>
      <br></br>
      <br></br>
      <OutStore />
      <br></br>
      <br></br>
      <br></br>
      <Delivery />
      <br></br>
      <br></br>
      <br></br>
      <Container fluid={true} className="d-flex pt-4 vh-100 bg-light">
        <div style={{ width: "60%" }} className="d-flex">
          <div style={{ width: "50%" }}>
            <p style={{ fontSize: "27px" }}>About</p>
            <p> Our charter </p>
            <p>The project</p>
            <p> The team </p>
            <p> The media</p>
            <p>Our ethical brands</p>
            <p>Hurry</p>
          </div>
          <div style={{ width: "50%" }}>
            <p style={{ fontSize: "27px" }}>Help & Information</p>

            <p> Help and contact </p>
            <p>Delivery Returns & Refunds</p>
            <p> The size guide </p>
            <p> Your opinion matters </p>
            <p>Our ethical brands</p>
            <p>Join WeDressFair</p>
          </div>
        </div>
        <div style={{ width: "40%" }}>
          <p style={{ fontSize: "27px" }}>Follow us</p>
          <div className="d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-facebook mr-3 ml-3"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </div>
          <br></br>
          <p className="text-justify">
            On WeDressFair, discover ethical and eco-responsible fashion brands,
            which place respect for workers and the environment at the center of
            their concerns. Find eco-responsible and ethical clothing made from
            organic, natural or recycled materials, made in France, Europe, or
            in certified factories.<br></br> Our mission ? Help you find clothes
            that match your style and values. The team's dream? That you never
            have to choose between one or the other again.
          </p>
        </div>
      </Container>
    </div>
  );
}

//Main iamge with captions and buttons
function MainImage() {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${style.main_image}`}
    >
      <div className="text-white text-center w-50">
        <h1>70 fashion brands involved</h1>
        <h4 className="mt-4 mb-4">
          Eco-responsible clothing: organic, ethical and ecological for fairer
          fashion
        </h4>
        <div className="d-flex justify-content-between">
          <button
            className="btn pl-2 pr-2 "
            style={{
              width: "130px",
              borderRadius: "0px",
              backgroundColor: "#F5F5F5",
              fontWeight: "600",
            }}
          >
            Women
          </button>
          <button
            className="btn pl-2 pr-2 "
            style={{
              width: "130px",
              borderRadius: "0px",
              backgroundColor: "#F5F5F5",
              fontWeight: "600",
            }}
          >
            Man
          </button>
        </div>
      </div>
    </div>
  );
}

// some text after main image
function SomeTextAfterMainImage() {
  return (
    <div>
      <div
        className="mx-auto  bg-white p-4"
        style={{ marginTop: "-60px", width: "65%" }}
      >
        <h2 className="mb-3">What is truly responsible fashion ?</h2>
        <p className="text-justify">
          The "eco-responsible" argument is more easily put forward than put
          into practice ... Our mission ? Unravel the true from the false,
          decipher the green jargon, and select the most committed brands for
          ethical and ecological fashion.
        </p>
        <a href="#" className="text-dark">
          <u className="text-muted">Read our selection charter </u>
        </a>
      </div>

      <Container fluid={true}>
        <p style={{ fontSize: "28px", fontWeight: "500" }}>
          Our selection of organic clothing
        </p>
        <a href="#" className="text-dark float-right">
          <u>See the novelties</u>
        </a>
      </Container>
    </div>
  );
}

//Randmon images means left and right
function RandomImages() {
  return (
    <Container className="mt-4 pt-4" fluid={true}>
      <Row className="pl-4 pr-4">
        <Col className="">
          <div className="w-100 float-left">
            <Image
              src={index_image_1}
              width={500}
              height={500}
              layout={"responsive"}
            />
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row className="pl-4 pr-4 ">
        <Col className="">
          <div className="w-100 float-left">
            <h2 className=" mb-4">Clothing Made in Germany</h2>
            <p className="text-justify">
              Want to support Made in France at Christmas? Discover our brands
              which are helping to relocate the textile industry in France
            </p>
            <Button variant={"dark"} className="btn-block p-2">
              Discover the selection
            </Button>
          </div>
        </Col>
        <Col className="">
          <div className="w-100 float-right">
            <Image
              src={index_image_2}
              width={500}
              height={500}
              layout={"responsive"}
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="pl-4 pr-4">
          <div className="w-100 float-left">
            <Image
              src={index_image_3}
              width={500}
              height={500}
              layout={"responsive"}
            />
            <h2 className="mt-3 mb-4">Organic clothing for women</h2>
            <p className="text-justify">
              Skirts, jeans and t-shirts have one thing in common: they are made
              from organic cotton. Translation ? Organic cotton is grown without
              pesticides or insecticides, for a reduced impact on surrounding
              ecosystems, workers, and your skin.
            </p>
            <Button variant={"dark"} className="btn-block p-2">
              Discover our organic clothing
            </Button>
          </div>
        </Col>
        <Col>
          <div className="w-100 float-right">
            <h2 className="mt-3 mb-4">
              3 steps to recognize an eco-responsible garment
            </h2>
            <p className="text-justify">
              Have you ever hesitated to buy a so-called eco-responsible
              garment, because you doubted that it really is? Here are 3 steps
              to follow to distinguish the true from the false. A tip: do not
              cut the sewn label!
            </p>
            <Button variant={"dark"} className="btn-block p-2">
              Read the article
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

//After random images secti1on
function AfterRandomImagesSection() {
  return (
    <Container className="clearfix " fluid={true}>
      <div className="d-flex justify-content-between vh-100 align-items-center">
        <div className="d-flex  align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-tree mr-4 "
            viewBox="0 0 16 16"
          >
            <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z" />
          </svg>
          <div>
            <h4>Organic clothing</h4>
            <p> clothing Fashion is recoverable, find our selection.</p>
            <a href="#" className="text-dark">
              <u>Discover</u>
            </a>
          </div>
        </div>

        <div className="d-flex  align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-recycle mr-4"
            viewBox="0 0 16 16"
          >
            <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
          </svg>
          <div>
            <h4>Recycled clothing</h4>
            <p> In compliance with organic farming standards.</p>
            <a href="#" className="text-dark">
              <u>Discover</u>
            </a>
          </div>
        </div>

        <div className="d-flex  align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-flower2 mr-4"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a4 4 0 0 0 4-4 4 4 0 0 0 0-8 4 4 0 0 0-8 0 4 4 0 1 0 0 8 4 4 0 0 0 4 4zm3-12c0 .073-.01.155-.03.247-.544.241-1.091.638-1.598 1.084A2.987 2.987 0 0 0 8 5c-.494 0-.96.12-1.372.331-.507-.446-1.054-.843-1.597-1.084A1.117 1.117 0 0 1 5 4a3 3 0 0 1 6 0zm-.812 6.052A2.99 2.99 0 0 0 11 8a2.99 2.99 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a6.833 6.833 0 0 1-.647-.487zm-3.56.617a3.001 3.001 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084.02.091.03.174.03.247a3 3 0 1 1-6 0c0-.073.01-.155.03-.247.544-.242 1.091-.638 1.598-1.084zm-.816-4.721A2.99 2.99 0 0 0 5 8c0 .794.308 1.516.812 2.052a6.83 6.83 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
          <div>
            <h4>Natural clothing</h4>
            <p> Our selection of items in natural fibers.</p>
            <a href="#" className="text-dark">
              <u>Discover</u>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

function CombinedImages() {
  return (
    <Container
      fluid={true}
      className="vh-100 bg-light d-flex justify-content-between align-items-center"
    >
      <div className="w-25">
        <h3 className="mb-3">All our categories</h3>
        <p>Make your choice through our different categories.</p>
        <Button variant={"dark"} className="btn-block">
          See the novelties
        </Button>
      </div>
      <div className="w-50">
        <div className="d-flex">
          <div style={{ width: "33.33%", height: "25%" }}>
            <Image
              src={dresses}
              width={200}
              height={200}
              layout={"responsive"}
            />
          </div>
          <div style={{ width: "33.33%", height: "25%" }}>
            <Image
              src={index_image_1}
              width={200}
              height={200}
              layout={"responsive"}
            />
          </div>
          <div style={{ width: "33.33%", height: "25%" }}>
            <Image
              src={sneakers}
              width={200}
              height={200}
              layout={"responsive"}
            />
          </div>
        </div>

        <div className="d-flex">
          <div style={{ width: "33.33%", height: "25%" }}>
            <Image
              src={index_image_2}
              width={200}
              height={200}
              layout={"responsive"}
            />
          </div>
          <div style={{ width: "33.33%", height: "25%" }}>
            <Image src={news} width={200} height={200} layout={"responsive"} />
          </div>
          <div style={{ width: "33.33%", height: "25%" }}>
            <Image
              src={index_image_3}
              width={200}
              height={200}
              layout={"responsive"}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function BrandMovementSection() {
  return (
    <Container fluid={true} className="vh-100 mt-4 pt-4">
      <h3>Brand of the moment</h3>
      <br></br>
      <div style={{ position: "relative" }}>
        <img src={marque} style={{ width: "70%", height: "80vh" }} />
        <div
          className="bg-light mt-auto mb-auto "
          style={{
            position: "absolute",
            top: "0",
            bottom: "0",
            right: "20px",
            height: "65%",
            width: "40%",
            padding: "50px",
          }}
        >
          <h5>AVN</h5>
          <p className="text-justify">
            The AVN men's wardrobe is the promise of locally made clothes, in
            quality materials, with simple but effective cuts. AVN is also
            essentials that last, clothes that age with us and gain character.
          </p>
          <Button variant={"dark"} className="btn-block">
            Discover our selection
          </Button>
        </div>
      </div>
    </Container>
  );
}

function JoinMovemnet() {
  return (
    <Container
      fluid={true}
      className="vh-75 bg-light d-flex justify-content-between"
    >
      <div style={{ width: "57%" }} className="p-4">
        <p
          style={{
            fontSize: "30px",
            borderBottom: "2px solid black",
            width: "300px",
          }}
        >
          Join the movement
        </p>
        <br></br>
        <br></br>
        <p>Sign up and get 10% off your first order</p>
        <br></br>
        <div className="p-4">
          <input
            className="form-check-input"
            type="radio"
            name="women"
            id="women"
          />
          <label className="form-check-label pr-4" for="women">
            Women
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="man"
            id="man"
          />
          <label className="form-check-label" for="man">
            Man
          </label>
        </div>
        <div className="input-group mb-3">
          <Form.Control
            type="text"
            className="form-control"
            placeholder="Enter your e-mail"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button className="input-group-append  bg-dark" id="basic-addon2">
            Register
          </Button>
        </div>
        <Form.Text className="text-muted">
          By clicking on 'Subscribe' you agree to our
          <u> Terms and Conditions </u> and our
          <u> Privacy and Cookies Policy . </u>
        </Form.Text>
      </div>
      <div style={{ width: "40%" }} className=" bg-success">
        <Image
          src={join_movement}
          width={800}
          height={650}
          layout={"responsive"}
        />
      </div>
    </Container>
  );
}

function OutStore() {
  return (
    <Container fluid={true} className=" d-flex justify-content-between">
      <div className="w-50">
        <img
          class=" ls-is-cached lazyloaded"
          alt="Shop drawing"
          src="https://d134ahucujhb7v.cloudfront.net/packs/media/images/store-36d1479099c39d823317ea10fd9f2101.svg"
        />
      </div>
      <div style={{ width: "35%" }}>
        <p style={{ fontSize: "27px" }}>Our store in Lyon</p>
        <div className="w-100 d-flex justify-content-between">
          <div>
            <p style={{ fontSize: "20px" }}>Address</p>
            <p>
              4 Rue des Capucins,<br></br> 69001 Lyon
            </p>
            <br></br>
            <br></br>
            <p style={{ fontSize: "20px" }}>E-mail</p>
            <p>Hello@wedressfair.fr</p>
          </div>
          <div>
            <p style={{ fontSize: "20px" }}>Hours</p>
            <p>
              Tue-Fri: 1:00 p.m. - 7:30 p.m.<br></br> Sat: 11:00 a.m. - 7:30
              p.m.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Delivery() {
  return (
    <Container fluid={true} className=" d-flex justify-content-between">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-house-door"
          viewBox="0 0 16 16"
        >
          <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
        </svg>
        <h5>Our charter</h5>
        <p>A strict and committed selection</p>
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-alarm"
          viewBox="0 0 16 16"
        >
          <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
          <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
        </svg>
        <h5> Free returns </h5>
        <p>30 days to change your mind</p>
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-truck"
          viewBox="0 0 16 16"
        >
          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
        </svg>
        <h5> Free delivery </h5>
        <p>From 120 € of purchase (France)</p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-credit-card-2-back"
          viewBox="0 0 16 16"
        >
          <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
          <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
        </svg>
        <h5> Secure payment </h5>
        <p> By credit card or Paypal</p>
      </div>
    </Container>
  );
}
