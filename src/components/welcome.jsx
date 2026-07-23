import { motion } from "framer-motion";

function Welcome() {
  return (
    <motion.section
      id="welcome"
      className="section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>Welcome</h2>

      <p>
        We are delighted to celebrate our special day with our family and
        friends.
      </p>

      <p>
        Your love, prayers and support have brought us to this beautiful
        moment, and we are truly grateful that you will be part of our wedding
        celebration.
      </p>
    </motion.section>
  );
}

export default Welcome;