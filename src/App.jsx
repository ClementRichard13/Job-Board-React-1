import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Jobs from "./Components/Jobs";

function App() {
  // const tab = [<p>Bonjour</p>, <p>hi</p>, <p>hello</p>];
  // const tabNum = [1, 2, 3, 4, 5];

  // const newTab = tabNum.map((elem) => elem * 2);

  // console.log(newTab);

  const tabObj = [
    { name: "Bob", age: 26 },
    { name: "Rob", age: 45 },
    { name: "Tiwin", age: 54 },
    { name: "Cersei", age: 39 },
  ];

  return (
    <>
      <Header name={"The Job Board"} />
      <Jobs />
      <Footer />
      {tabObj.map((elem, index) => {
        return (
          <p key={index}>
            Bonjour je suis {elem.name} et j'ai {elem.age} ans
          </p>
        );
      })}
    </>
  );
}

export default App;
