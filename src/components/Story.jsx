import { motion } from "framer-motion";

function Story() {
  return (
    <section id="story" className="section">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2>❤️ Our Journey Together ❤️</h2>

        <p className="story-intro">
          Every beautiful journey has a beginning.
          Ours started with a simple hello and, by Jehovah's blessing,
          grew into a friendship, a relationship and finally the decision
          to spend the rest of our lives together.

          <br /><br />

          We are grateful for every step of our journey and are delighted
          to share it with you.
        </p>

      </motion.div>

      <div className="story-container">

        <motion.div
          className="story-card"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <h3>👋 2021 — Our First Hello</h3>

          <p>
            Our paths first crossed in 2021.
            At the time it was simply a brief "hello,"
            and we went our separate ways,
            never imagining what Jehovah had in store for us.

            <br /><br />

            Looking back now,
            we can clearly see that this was the beginning
            of a beautiful journey.
          </p>

        </motion.div>

        <motion.div
          className="story-card"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <h3>💬 August – September 2025</h3>

          <div className="story-gallery">

            <img
              src={`${import.meta.env.BASE_URL}story/first-conversation-1.jpg`}
              alt="First Instagram conversation"
            />

            <img
              src={`${import.meta.env.BASE_URL}story/first-conversation-2.jpg`}
              alt="Instagram conversation"
            />

          </div>

          <p>
            In August 2025 we reconnected on Instagram.

            <br /><br />

            What began as a simple conversation soon became something
            very special.

            By September we officially started dating.

            <br /><br />

            From the very beginning we both shared the same desire—
            to honour Jehovah and build a happy marriage together.

            We knew we wanted a relationship that would always keep
            Jehovah at its centre.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default Story;