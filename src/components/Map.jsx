import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchPosition, setSearchPosition] = useSearchParams();
  const lag = searchPosition.get("lat");
  const lng = searchPosition.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      position{lag}, {lng}
    </div>
  );
}

export default Map;
