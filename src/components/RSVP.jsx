function RSVP() {
  return (
    <section id="rsvp" className="section">
      <h2>RSVP</h2>

      <p>
        We would be honoured to celebrate our special day with you.
      </p>

      <form className="rsvp-form">

        <input
          type="text"
          placeholder="Your Full Name"
        />

        <input
          type="number"
          placeholder="Number of Guests"
        />

        <select>
          <option>Will you attend?</option>
          <option>Yes, I'll be there ❤️</option>
          <option>Regretfully, I can't attend</option>
        </select>

        <textarea
          rows="5"
          placeholder="Leave us a message..."
        ></textarea>

        <button type="submit">
          Send RSVP 💍
        </button>

      </form>
    </section>
  );
}

export default RSVP;