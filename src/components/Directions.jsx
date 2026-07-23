function Directions() {
  return (
    <section id="directions" className="section">
      <h2>Directions</h2>

      <div className="schedule-grid">

        <div className="schedule-card">
          <h3>📍 Kingdom Hall</h3>

          <p>
            Tap the button below for directions to the wedding ceremony.
          </p>

          <a
            className="button"
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            Open Google Maps
          </a>
        </div>

        <div className="schedule-card">
          <h3>📍 Reception Venue</h3>

          <p>
            Tap the button below for directions to the reception venue.
          </p>

          <a
            className="button"
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            Open Google Maps
          </a>
        </div>

      </div>
    </section>
  );
}

export default Directions;