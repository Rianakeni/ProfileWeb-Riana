// import profile from "../../assets/img/profile.jpg";

const SectionRight = () => {
  return (
    <section className="profile">
      {/* <div className="profile-wrapper">
        <div className="profile-picture">
          <img src={profile} alt="Profile Picture" />
        </div>
      </div> */}
      <div className="description">
        <h1>Riana Keni</h1>
        <h2>Data Analyst</h2>
        <p>
          Spesialis data yang mahir dalam menggali tren, pola, dan cerita dari
          data kompleks
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
