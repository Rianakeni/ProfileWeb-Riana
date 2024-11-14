import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const SectionLeft = () => {
  const [sectionLeft, setSectionLeft] = useState({});
  const [exp, setExp] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const sectionLeftRef = ref(db, "sectionLeft/");
    onValue(sectionLeftRef, (snapshot) => {
      const data = snapshot.val();
      setSectionLeft(data);
    });
  }, []);

  useEffect(() => {
    const db = getDatabase();
    const expRef = ref(db, "exp/");
    onValue(expRef, (snapshot) => {
      const data = snapshot.val();
      setExp(data);
    });
  }, []);

  return (
    <aside className="services">
      <div className="text-left">
        <h1>{sectionLeft.title3}</h1>
        <ul>
          {exp.map((item) => (
            <ul>
              <li>
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </li>
            </ul>
          ))}
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
