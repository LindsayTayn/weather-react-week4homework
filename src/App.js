import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        This project is made by Lindsay and is Opensourced on{" "}
        <a
          href="https://github.com/LindsayTayn/weather-react-week4homework"
          target="blank"
        >
          Github
        </a>
      </p>
    </div>
  );
}
