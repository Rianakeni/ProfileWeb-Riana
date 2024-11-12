import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const SectionLeft = () => {
  const [sectionLeft, setSectionLeft] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const sectionLeftRef = ref(db, "sectionLeft/");
    onValue(sectionLeftRef, (snapshot) => {
      const data = snapshot.val();
      setSectionLeft(data);
    });
  }, []);

  return (
    <aside className="services">
      <div className="text-left">
        <h1>{sectionLeft.title3}</h1>
        <ul>
          <li>
            <h4>{sectionLeft.Experience1}</h4>
            <p>{sectionLeft.experience1Desc}</p>
          </li>
          <li>
            <h4>{sectionLeft.Experience2}</h4>
            <p>{sectionLeft.experience2Desc}</p>
          </li>
          <li>
            <h4>{sectionLeft.Experience3}</h4>
            <p>{sectionLeft.experience3Desc}</p>
          </li>
          <div className="line"></div>
          <div className="organisation">
            <h4>{sectionLeft.subtitle}</h4>
            <p>{sectionLeft.organisation1}</p>
            <p>{sectionLeft.organisation2}</p>
            <p>{sectionLeft.organisation3}</p>
            <p></p>
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default SectionLeft;
