function GuestBook() {
  return (
    <section id="guestbook" className="section">
      <h2>Guest Book</h2>

      <p>
        We'd love to hear from you!
      </p>

      <p>
        Leave us a message, blessing or words of encouragement.
      </p>

      <div className="schedule-card">

        <input
          type="text"
          placeholder="Your Name"
          className="input"
        />

        <textarea
          rows="5"
          placeholder="Write your message here..."
          className="textarea"
        ></textarea>

        <button className="button">
          Sign Our Guest Book ❤️
        </button>

      </div>
    </section>
  );
}

export default GuestBook; 