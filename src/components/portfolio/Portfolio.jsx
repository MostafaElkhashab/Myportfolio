import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "E-Commerce Website",
    img: "/eommerce.png",
    desc: "Developed a fully responsive e-commerce platform with dynamic product listings and seamless user navigation.",
    tech: [
      "React",
      "Vite",
      "Bootstrap",
      "Framer Motion",
      "Netlify",
      "Formik",
      "Yup",
      "Stripe",
      "Tanstack Query",
    ],
    link: "https://fresh-cart-e-commerrce.netlify.app/",
  },
  {
    id: 2,
    title: "Recipe App",
    img: "/mealify.png",
    desc: "A responsive recipe application that allows users to explore a wide variety of meals with detailed information. The app fetches real-time data from a public API and displays recipes with ingredients,",
    tech: ["Html", "Css", "Js", "REST API"],
    link: "https://mealify-melalify.netlify.app/",
  },
  {
    id: 3,
    title: "Coloshop",
    img: "/coloshop.png",
    desc: "A modern e-commerce front-end application inspired by real online shopping platforms. Coloshop focuses on creating an attractive and intuitive user interface for browsing products.",
    tech: ["React", "Vite", "Bootstrap", "Framer Motion", "Netlify"],
    link: "https://dulcet-cat-15e1eb.netlify.app/",
  },
  {
    id: 4,
    title: "IT Hosting Website",
    img: "/website.png",
    desc: "A professional landing page for an IT hosting service that showcases hosting plans, features, and services in a visually appealing way. The project focuses on clean layout, modern design.",
    tech: ["Html", "Css", "Js", "Bootstrap"],
    link: "https://mellifluous-heliotrope-f30764.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <section id="Portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="badges">
              {item.tech &&
                item.tech.map((t, i) => (
                  <span className="badge" key={i}>
                    {t}
                  </span>
                ))}
            </div>
            <a href={item.link} target="_blank" rel="noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
