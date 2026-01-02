import "./skills.scss";
import { motion } from "framer-motion";
const Skills = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="hidden"
      whileInView="visible"
    >
      <h2>MySkills</h2>
      <motion.div className="skills-container" variants={variants}>
        <motion.div className="skill" variants={variants}>
          <img src="skills/html.webp" alt="" />
        </motion.div>
        <motion.div className="skill" variants={variants}>
          <img src="skills/css.webp" alt="" />
        </motion.div>
        <motion.div className="skill" variants={variants}>
          <img src="skills/js.webp" alt="" />
        </motion.div>
        <motion.div className="skill" variants={variants}>
          <img src="skills/bootstrap.webp" alt="" />
        </motion.div>
        <motion.div className="skill" variants={variants}>
          <img src="skills/sass.webp" alt="" />
        </motion.div>
        <motion.div className="skill" variants={variants}>
          <img src="skills/tailwind.webp" alt="" />
        </motion.div>
        <motion.div className="skill" variants={variants}>
          <img src="skills/typescript.webp" alt="" />
        </motion.div>
        <motion.div className="skill" variants={variants}>
          <img src="skills/react.webp" alt="" />
        </motion.div>
        <motion.div className="skill" variants={variants}>
          <img src="skills/next.webp" alt="" />
        </motion.div>
        <motion.div className="skill" variants={variants}>
          <img src="skills/mui.png" alt="" />
        </motion.div>
        <motion.div className="skill" variants={variants}>
          <img src="skills/reactquery.webp" alt="" />
        </motion.div>
        <motion.div className="skill" variants={variants}>
          <img src="skills/bash.webp" alt="" />
        </motion.div>
        <motion.div className="skill" variants={variants}>
          <img src="skills/github.webp" alt="" />
        </motion.div>
        <motion.div className="skill" variants={variants}>
          <img src="skills/motion.png" alt="" />
        </motion.div>
        <motion.div className="skill" variants={variants}>
          <img src="skills/linux.webp" alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
