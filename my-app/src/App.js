import "./App.css";
import EventsClass from "./components/EventsClass.js";
import EventsFunctional from "./components/EventsFunctional.js";

function App() {
  return <div className="App">
      <EventsFunctional />
      <EventsClass />
  </div>;
}

export default App;