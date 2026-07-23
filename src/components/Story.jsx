import { motion } from "framer-motion";

function Story() {
  return (
    <section id="story" className="section">
      <h2>Our Story ❤️</h2>

      <div className="story-container">

        <motion.div
          className="story-card"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src={`${import.meta.env.BASE_URL}story/first-conversation-1.jpg`} alt="First conversation" />

          <h3>2021 — Our First Hello 👋</h3>

          <p>
            We first met briefly in 2021. It was only a simple hello, and
            although nothing more happened at the time, Jehovah was quietly
            preparing a beautiful future for us.
          </p>
        </motion.div>

        <motion.div
          className="story-card"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src={`${import.meta.env.BASE_URL}story/first-conversation-2.jpg`} alt="Instagram conversation" />

          <h3>August–September 2025 💬</h3>

          <p>
            In August we reconnected on Instagram. Our conversations quickly
            became something special, and in September we officially started
            dating. From the very beginning, we both knew we were looking for
            marriage and hoped to build a life together serving Jehovah.
          </p>
        </motion.div>

        <motion.div
          className="story-card"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src={`${import.meta.env.BASE_URL}story/airport-1.jpg`} alt="Airport meeting" />

          <h3>January 2026 ✈️</h3>

          <p>
            We finally met again in person in Zambia. During my visit,
            Kafumba also met Auntie Prisca and Auntie Noreen at the airport
            before I returned to the UK. It was a special moment for all of us.
          </p>
        </motion.div>

        <motion.div
          className="story-card"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src={`${import.meta.env.BASE_URL}story/family-meeting-1.jpg`} alt="Family meeting" />

          <h3>April 2026 🤝</h3>

          <p>
            Our families officially met. Nsalamu was paid and the bride price
            negotiations were led by Uncle Kaseke and Uncle Mwali as the
            Shibukombes. It was a joyful day that brought both families closer
            together.
          </p>
        </motion.div>

        <motion.div
          className="story-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Our Foundation ❤️</h3>

          <p>
            We both love Jehovah, are baptised Christians, and share the same
            goal of putting Him first in our marriage. We encourage one another
            spiritually, enjoy serving together in the ministry, and treasure
            our families. We thank Jehovah for bringing our paths together and
            can't wait to begin this new chapter as husband and wife.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Story;