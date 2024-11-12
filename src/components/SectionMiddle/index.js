import profile from "../../assets/img/profile.png";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Sectionmiddle = () => {
  const [sectionMiddle, setSectionMiddle] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const sectionMiddleRef = ref(db, "sectionMiddle/");
    onValue(sectionMiddleRef, (snapshot) => {
      const data = snapshot.val();
      setSectionMiddle(data);
    });
  }, []);

  return (
    <div>
      <div className="profile-picture">
        <img
          src={`data:image/jpeg;base64, ${sectionMiddle.images}`}
          alt="ProfilePicture"
        />
      </div>
    </div>
  );
};

export default Sectionmiddle;
