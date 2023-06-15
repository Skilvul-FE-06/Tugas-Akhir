import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Home() {
  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);

  const handleShow = () => {
    setShowText((prevShowText) => !prevShowText);
    setShowText2(false);
  };

  const handleShow2 = () => {
    setShowText(false);
    setShowText2((prevShowText2) => !prevShowText2);
  };

  return (
    <>
      <div>
        <Button onClick={handleShow}>Klik</Button>
        <Button onClick={handleShow2}>Klik2</Button>
        {showText && <h1>Selamat Datang</h1>}
        {showText2 && <h1>Halo</h1>}
      </div>
    </>
  );
}

export default Home;
