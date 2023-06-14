import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ComplaintContext } from "../context/ComplaintContext";

function FormKeluhan() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const { addData } = useContext(ComplaintContext);
  const dataKota = [
    { kota: "Jakarta Barat" },
    { kota: "Jakarta Timur" },
    { kota: "Jakarta Selatan" },
    { kota: "Jakarta Pusat" },
    { kota: "Jakarta Utara" },
    { kota: "Kep. Seribu" },
    { kota: "Bogor" },
    { kota: "Kab. Bogor" },
    { kota: "Depok" },
    { kota: "Tangerang" },
    { kota: "Tangerang Selatan" },
    { kota: "Kab. Tangerang" },
    { kota: "Bekasi" },
    { kota: "Kab. Bekasi" },
  ];

  const sortedDataKota = dataKota.sort((a, b) => a.kota.localeCompare(b.kota));

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      nama: nama,
      alamat: alamat,
      kota: kota,
      keluhan: keluhan,
    };

    addData(newData);

    setNama("");
    setAlamat("");
    setKota("");
    setKeluhan("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNama">
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" name="nama" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Masukkan Nama" required />
        </Form.Group>

        <Form.Group controlId="formAlamat">
          <Form.Label>Alamat</Form.Label>
          <Form.Control type="text" name="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Masukkan Alamat" required />
        </Form.Group>

        <Form.Group controlId="formKota">
          <Form.Label>Kota</Form.Label>
          <Form.Control as="select" name="kota" value={kota} onChange={(e) => setKota(e.target.value)} required>
            <option value="">Pilih Kota</option>
            {sortedDataKota.map((item, index) => (
              <option key={index} value={item.kota}>
                {item.kota}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formKeluhan">
          <Form.Label>Keluhan</Form.Label>
          <Form.Control as="textarea" name="keluhan" value={keluhan} onChange={(e) => setKeluhan(e.target.value)} placeholder="Masukkan Keluhan" rows={4} required />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Kirim
        </Button>
      </Form>
    </>
  );
}

export default FormKeluhan;
