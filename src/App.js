import "./App.css";
import Nav from "./components/nav";
import Main from "./components/main";
import Mainfooter from "./components/mainFooter";
import Secondpage from "./components/secondpage";
import Thirdsection from "./components/thirdpage";
import Footer from "./components/footer";
import Modal from "./components/modal";

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Mainfooter />
      <Secondpage />
      <Thirdsection />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
