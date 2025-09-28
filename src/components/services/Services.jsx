import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          “Technology is best when it brings people together.” – Matt Mullenweg
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/plu-logo.gif" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Aiym</motion.b> Aibekova
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Computer Science</motion.b> Student.
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>About Me</h2>
          <p>       I am growing my skill set around software engineering, data analytics, and cloud computing.
My interests include <b>product management, machine learning, women’s empowerment</b> in STEM, and helping communities use technology for <b>real-world impact</b>. I am seeking analyst or engineering internships for positive change.

 </p>
 
        </motion.div> */}
        <motion.div
  className="box"
  whileHover={{ background: "lightgray", color: "black" }}
>
  <h2>About Me</h2>
  <p>
    I am growing my skill set around software engineering, data analytics, and cloud computing.
    My interests include <b>product management, machine learning, women’s empowerment</b> in STEM, and helping communities use technology for <b>real-world impact</b>. I am seeking SWE/PM/analyst internships for positive change.
  </p>
  <a
    href="/AiymAibekova_Resume.pdf"
    download
    style={{
      display: "inline-block",
      padding: "10px 24px",
      borderRadius: "8px",
      background: "#23236A",
      color: "white",
      fontWeight: "bold",
      textDecoration: "none",
      margin: "20px 0"
    }}
  >
    Download My Resume (PDF)
  </a>
  
  
</motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Education</h2>
          <p> Pacific Lutheran University, 
Bachelor of Science (Honors) in Computer Science | 
Minors: Applied Mathematics, Data Science 
| GPA: 3.7/4.0 <br />
          </p>
          <div style={{ display: "flex", gap: "16px", margin: "18px 0", alignItems: "center" }}>
  <img src="/plu-logo.gif" alt="Pacific Lutheran University" width="120" height="52"/>
</div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Coursework</h2>
          <p>
                  Data Structures, Linear Algebra, Discrete Maths, Data Science, Artificial Intelligence,
      Computer Organization, Web Programming, Privacy & Surveillance, Micro/Macro Economics

          </p>
          <div style={{ display: "flex", gap: "16px", margin: "18px 0", alignItems: "center" }}>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="32" height="32"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="32" height="32" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" width="32" height="32"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" width="32" height="32" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" width="32" height="32"/>

</div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Values</h2>
          <p>
      Community Building, Inclusion, Sustainability, Mentorship, Finance, Research, Growth Mindset, Traveling
          </p>
          <div style={{ display: "flex", gap: "16px", margin: "18px 0", alignItems: "center" }}>
  <span role="img" aria-label="community">🤝</span>
  <span role="img" aria-label="inclusion">🌎</span>
  <span role="img" aria-label="sustainability">🌱</span>
  <span role="img" aria-label="mentorship">🎓</span>
  <span role="img" aria-label="research">🔬</span>
  <span role="img" aria-label="growth">📈</span>
  <span role="img" aria-label="travel">✈️</span>
</div> 
<div style={{ display: "flex", gap: "16px", margin: "18px 0", alignItems: "center" }}>
  <a
    href="https://www.linkedin.com/in/aiym-aibekova-457033287/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      verticalAlign: "middle"
    }}
  >
    <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
    alt="LinkedIn"
    width="30"
    height="30"
    style={{ verticalAlign: "middle" }}
  />   <span style={{
      letterSpacing: "0.02em",
      paddingLeft: "2px"
    }}>
      <b>Connect</b> on <b>LinkedIn</b>
    </span>
</a> 
</div>


{/* <a
  href="https://www.linkedin.com/in/aiym-aibekova-457033287/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-flex",              // <-- Use inline-flex for icon+text
    alignItems: "center",
    gap: "10px",
    padding: "10px 24px",
    borderRadius: "8px",
    background: "#23236A",
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
    margin: "20px 0",
    minWidth: "220px",                   // Optional: set or increase as needed
    whiteSpace: "nowrap",
  }}
>
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
    alt="LinkedIn"
    width="30"
    height="30"
    style={{ verticalAlign: "middle" }}
  />
  Connect on LinkedIn
</a> */}



        </motion.div>
        
        
        

        
      </motion.div>
    </motion.div>
  );
};

export default Services;
