import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
             our restaurant, food isn't just a necessity — it’s a passion.
Founded by Sangu, our journey began with a simple vision: to create a place where delicious meals, fresh ingredients, and a warm atmosphere come together to create an unforgettable dining experience.

Sangu’s love for food and dedication to quality inspired every aspect of our restaurant — from the carefully crafted menu to the friendly service you receive.

Whether you're stopping by for a quick bite or sharing a meal with loved ones, we’re committed to serving wholesome, satisfying dishes that bring joy to every table.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;