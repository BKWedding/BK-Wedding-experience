function Gallery() {
  const image = `${import.meta.env.BASE_URL}couple.jpg`;

  return (
    <section id="gallery" className="section">
      <h2>Gallery</h2>

      <p>Some of our favourite moments together ❤️</p>

      <div className="gallery-grid">
        <img src={image} alt="Bupe and Kafumba" />
        <img src={image} alt="Bupe and Kafumba" />
        <img src={image} alt="Bupe and Kafumba" />
        <img src={image} alt="Bupe and Kafumba" />
        <img src={image} alt="Bupe and Kafumba" />
        <img src={image} alt="Bupe and Kafumba" />
      </div>
    </section>
  );
}

export default Gallery;