import React, { useState } from "react";
import Nav from "./nav";
import Main from "./main";
import Mainfooter from "./mainFooter";
import Secondpage from "./secondpage";
import Thirdsection from "./thirdpage";
import Footer from "./footer";
import Modal from "./modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>
        <Nav setShowModal={setShowModal} />
        <Main />
        <Mainfooter />
        <Secondpage />
        <Thirdsection />
        <Footer />
      </div>
      {showModal && <Modal open />}
    </>
  );
};

export default Home;
