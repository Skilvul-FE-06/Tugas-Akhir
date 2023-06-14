import { useState } from "react";
import { Button } from "react-bootstrap";

function Home() {
  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);

  const handleShow = () => {
    setShowText(!showText);
  };

  const handleShow2 = () => {
    setShowText2(!showText2);
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
