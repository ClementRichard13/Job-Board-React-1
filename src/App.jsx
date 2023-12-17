import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Jobs from "./Components/Jobs";

function App() {
  return (
    <>
      <Header name={"The Job Board"} />
      <Jobs />
      <Footer />
    </>
  );
}

export default App;
