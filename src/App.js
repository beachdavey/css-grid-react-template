import './styles.css';
import Header from "./Components/Header"
import FormContainer from "./Components/FormContainer"
import LeftBox from "./Components/LeftBox"
import RightBox from "./Components/RightBox"
import Footer from "./Components/Footer"



function App() {
  return (
    <div className="gridContainer">
      <Header />
      <LeftBox />
      <FormContainer />
      <RightBox />
      <Footer />
    </div>
  );
}

export default App;
