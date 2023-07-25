import React from "react";
import showCaseImage1 from "../assets/img/bg-showcase-1.jpg";
import showCaseImage2 from "../assets/img/bg-showcase-2.jpg";
import showCaseImage3 from "../assets/img/bg-showcase-3.jpg";

const ImageShowCase = () => {
  console.log(showCaseImage1);
  const ImageShowCaseData = [
    {
      id: 1,
      img: showCaseImage1,
      heading: "Fully Responsive Design",
      description:
        "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
    {
      id: 2,
      img: showCaseImage2,
      heading: "Updated For Bootstrap 5",
      description:
        " Newly improved, and full of great utility classNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    },
    {
      id: 3,
      img: showCaseImage3,
      heading: "Easy to Use & Customize",
      description:
        "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    },
  ];
  return (
    <section className="showcase">
      <div className="container-fluid p-0">
        {ImageShowCaseData.map((item, index) =>
          item.id === 1 || item.id === 3 ? (
            <div className="row g-0" key={index}>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>{item.heading}</h2>
                <p className="lead mb-0">{item.description}</p>
              </div>
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
            </div>
          ) : (
            <div className="row g-0" key={index}>
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              {/* <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>{item.heading}</h2>
                <p className="lead mb-0">{item.description}</p>
              </div> */}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ImageShowCase;
