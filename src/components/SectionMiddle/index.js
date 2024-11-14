import { useEffect, useState, CSSProperties } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import BeatLoader from "react-spinners/BeatLoader";
import "../../App.css";
import { Fade } from "react-awesome-reveal";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Sectionmiddle = () => {
  const [sectionMiddle, setSectionMiddle] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const sectionMiddleRef = ref(db, "sectionMiddle/");
    onValue(sectionMiddleRef, (snapshot) => {
      const data = snapshot.val();
      setSectionMiddle(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {!loading && (
        <Fade>
          <div className="profile-picture">
            <img
              src={`data:image/jpeg;base64, ${sectionMiddle.images}`}
              alt="ProfilePicture"
            />
          </div>
        </Fade>
      )}
      {loading && (
        <BeatLoader
          loading={loading}
          cssOverride={override}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
};

export default Sectionmiddle;
