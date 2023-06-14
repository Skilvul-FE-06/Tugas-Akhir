import { useContext } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormKeluhan from "../components/FormKeluhan";

function Pengaduan() {
  return (
    <>
      <Container>
        <FormKeluhan />
      </Container>
    </>
  );
}

export default Pengaduan;
