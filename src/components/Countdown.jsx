import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Countdown() {
  const weddingDate = new Date("August 8, 2026 00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (difference % (1000 * 60 * 60)) /
          (1000 * 60)
      ),
      seconds: Math.floor(
        (difference % (1000 * 60)) / 1000
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const cardAnimation = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
      },
    }),
  };

  return (
    <motion.section
      id="countdown"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2>⏳ Countdown to Our Big Day ⏳</h2>

      <p className="countdown-subtitle">
        We can't wait to celebrate this special day with our family and friends.
      </p>

      <div className="countdown-grid">

        <motion.div
          className="count-card"
          variants={cardAnimation}
          custom={0}
        >
          <h1>{timeLeft.days}</h1>
          <p>Days</p>
        </motion.div>

        <motion.div
          className="count-card"
          variants={cardAnimation}
          custom={1}
        >
          <h1>{timeLeft.hours}</h1>
          <p>Hours</p>
        </motion.div>

        <motion.div
          className="count-card"
          variants={cardAnimation}
          custom={2}
        >
          <h1>{timeLeft.minutes}</h1>
          <p>Minutes</p>
        </motion.div>

        <motion.div
          className="count-card"
          variants={cardAnimation}
          custom={3}
        >
          <h1>{timeLeft.seconds}</h1>
          <p>Seconds</p>
        </motion.div>

      </div>

      <p className="quote">
        ❤️ Love never fails. ❤️
      </p>

      <p className="scripture">
        — 1 Corinthians 13:8
      </p>

      <p className="wedding-date">
        📅 Saturday, 8 August 2026 • Lusaka, Zambia
      </p>
    </motion.section>
  );
}

export default Countdown;