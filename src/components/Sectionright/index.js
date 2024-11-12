import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const SectionRight = () => {
  const [sectionRight, setSectionRight] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const sectionRightRef = ref(db, "sectionRight/");
    onValue(sectionRightRef, (snapshot) => {
      const data = snapshot.val();
      setSectionRight(data);
    });
  }, []);

  return (
    <section className="profile">
      <div className="description">
        <h1>{sectionRight.title2}</h1>
        <h2>{sectionRight.expertise}</h2>
        <p>{sectionRight.skilldescription}</p>
        <a href="https://wa.me/628995531878">
          <button>Hire me</button>
        </a>
        <div className="stats">
          <p>
            <strong>{sectionRight.years}</strong> Experience
          </p>
          <p>
            <strong>{sectionRight.clients}</strong> Clients
          </p>
          <p>
            <strong>{sectionRight.satisfaction}</strong> Satisfaction
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionRight;
