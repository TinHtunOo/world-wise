import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../Context/CityContext";
function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length) {
    return <Message message="Add your first city by clicking on the map." />;
  }

  const countries = cities?.reduce((arr, city) => {
    if (!arr.map((el) => el.name).includes(city.country)) {
      return [...arr, { name: city.country, emoji: city.emoji }];
    } else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.name} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
