import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React JS App",
    img: "./screen.png",
    desc: "A dynamic portfolio page showcasing my software engineering projects. Built with React JS, SCSS, HTML, and NPM for a clean, modern interface to highlight my skills and experience.",
  },
  {
    id: 2,
    title: "Stock Price Predictor via Sentiment Analysis Research",
    img: "./FinResearch.png",
    desc: "Built an LSTM-based model to forecast stock prices using sentiment analysis of 650K+ news articles. Processed data with NLP models (VADER, FinBERT, DistilBERT) and used Python, TensorFlow, and pandas.",
    repo: "https://github.com/Cao-Labs/financialMedia.git", 
  },
  {
    id: 3,
    title: "Event Runner — UWHacks Hackathon",
    img: "./eventrunner.png",
    desc: "Developed a full-stack login and user authentication system in 48 hours for an event planning app. Used Node.js, React, TypeScript, and MongoDB to rapidly build the core feature.",
    repo: "https://github.com/Aiymhi/event_runner.git" ,
  },
  {
    id: 4, 
    title: "CFA Institute Research Challenge",
    img: "./cfa.png", 
    desc: "As part of a CFA Institute Research Challenge, our team's strategic analysis of Accolade (ACCD) was ranked in the top 3 for the Seattle Area. I focused on analyzing the company's ESG initiatives, including its 'green building' efforts, workforce diversity, and governance. This research highlighted how Accolade's ESG efforts enhance its appeal to investors.",
    repo: "https://docs.google.com/document/d/1s-3hSkZss3dWxvL6Src7UDL_Iw1xnwX9XnJU358NsB0/edit?usp=sharing",
  },
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Go to Repo</button>
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
