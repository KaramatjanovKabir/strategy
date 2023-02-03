import "./App.css";
import About from "./Components/About/About";
import Consulting from "./Components/Consulting/Consulting";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Progress from "./Components/Progress/Progress";
import Steps from "./Components/Steps/Steps";
import Image from "./Components/Image1/Image";
import Image2 from "./Components/Image2/Image2";
import BLogs from "./Components/Blogs/BLogs";
import Solution from "./Components/Solution/Solution";
import Coaching from "./Components/Coaching/Coaching";
import Company from "./Components/Company/Company";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Consulting />
      <Steps />
      <Progress />
      <Image />
      <About />
      <Image2 />
      <BLogs />
      <Solution />
      <Coaching />
      <Company />
      <Form />
    </div>
  );
}

export default App;
