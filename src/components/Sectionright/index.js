const SectionRight = () => {
  return (
    <section className="profile">
      <h2>Natalie Sihombing</h2>
      <div className="profile-picture">
        <img src="profile.jpg" alt="Profile Picture" />
      </div>
      <div className="description">
        <h3>Web Specialist based in Jakarta</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>Hire me</button>
        <div className="stats">
          <p>
            <strong>13 Years</strong> Experience
          </p>
          <p>
            <strong>256+</strong> Clients
          </p>
          <p>
            <strong>99.8%</strong> Satisfaction
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionRight;
