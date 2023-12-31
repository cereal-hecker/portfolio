import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Skill from "../../components/skill";

function About() {
  const { ref } = useInView({
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [-300, 700]);

  return (
    <>
      <div className="h-screen mx-28">
        <p className="text-8xl mb-8 text-dark-purple font-bold">ABOUT</p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="mb-10">
              I like diving deep into coding and design to bring ideas to life
              through web and app development. <br />
              <br />
              Behind the screen though, you'll catch me worshipping cats and
              coffee-ing my way through it all ☕💻🐾 <br />
              <br />
              Oh, and I lovee music! (Arctic Monkeys, please take my soul).
              Check out my spotify!
            </p>
            <motion.img
              ref={ref}
              src="/images/the-about-cat.png"
              alt="the about cat"
              className="h-[200px] w-[200px]"
              style={{ x }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div>
            <Skill
              heading="Programming"
              content="C • C++ • Python • JavaScript • TypeScript"
            />
            <Skill
              heading="Web"
              content="ReactJS • NextJS • Tailwind CSS • Bootstrap"
            />
            <Skill heading="App" content="Expo" />
            <Skill
              heading="Database"
              content="MySQL • MongoDB • Mongoose • Postgres"
            />
            <Skill heading="Design" content="Figma" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
