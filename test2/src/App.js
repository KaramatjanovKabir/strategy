import "./App.css";
import Consulting from "./Components/Consulting/Consulting";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Steps from "./Components/Steps/Steps";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Consulting />
      <Steps />
    </div>
  );
}

export default App;
