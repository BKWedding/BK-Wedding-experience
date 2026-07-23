import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <img
          src={`${import.meta.env.BASE_URL}couple.jpg`}
          alt="Bupe & Kafumba"
          className="hero-image"
        />

        <h1>💍 Bupe & Kafumba 💍</h1>

        <h2>We're Getting Married!</h2>

        <p>
          <strong>Saturday, 8 August 2026</strong>
        </p>

        <p>Lusaka, Zambia</p>

        <a href="#welcome" className="button">
          Celebrate With Us 💗
        </a>
      </div>
    </motion.section>
  );
}

export default Hero;