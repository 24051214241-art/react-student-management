import { useState, useEffect } from "react";
import "./App.css";

function Clock() {
  const [waktu, setWaktu] = useState(new Date());

  useEffect(() => {
    // jalankan interval: perbarui waktu setiap 1 detik
    const interval = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    // cleanup: bersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  const jam = waktu.toLocaleTimeString("en-GB"); // format 24 jam
  const tanggal = waktu.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="clock">
      <div className="clock-time">{jam}</div>
      <div className="clock-date">{tanggal}</div>
    </div>
  );
}

function App() {
  const [mahasiswa, setMahasiswa] = useState([
    {
      nim: "2301001",
      nama: "Andi Saputra",
      noHp: "081234567801",
      email: "andi@mail.com",
      alamat: "Surabaya",
      programStudi: "Informatika",
      tahunMasuk: 2023,
    },
    {
      nim: "2301002",
      nama: "Budi Santoso",
      noHp: "081234567802",
      email: "budi@mail.com",
      alamat: "Malang",
      programStudi: "Sistem Informasi",
      tahunMasuk: 2023,
    },
    {
      nim: "2301003",
      nama: "Citra Amelia",
      noHp: "081234567803",
      email: "citra@mail.com",
      alamat: "Lumajang",
      programStudi: "Informatika",
      tahunMasuk: 2023,
    },
    {
      nim: "2401001",
      nama: "Dinda Putri",
      noHp: "081234567804",
      email: "dinda@mail.com",
      alamat: "Jember",
      programStudi: "Manajemen",
      tahunMasuk: 2024,
    },
    {
      nim: "2401002",
      nama: "Eko Pratama",
      noHp: "081234567805",
      email: "eko@mail.com",
      alamat: "Kediri",
      programStudi: "Informatika",
      tahunMasuk: 2024,
    },
  ]);

  return (
    <div className="container">
      <header className="header">
        <h1>Student Management</h1>
        <h2>Daftar Data Mahasiswa</h2>
      </header>

      <div className="info-bar">
        <p className="total">
          Jumlah Mahasiswa: <strong>{mahasiswa.length}</strong>
        </p>
        <Clock />
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama</th>
              <th>No. HP</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Prodi</th>
              <th>Tahun</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((mhs) => (
              <tr key={mhs.nim}>
                <td>{mhs.nim}</td>
                <td>{mhs.nama}</td>
                <td>{mhs.noHp}</td>
                <td className="email">{mhs.email}</td>
                <td>{mhs.alamat}</td>
                <td>{mhs.programStudi}</td>
                <td>{mhs.tahunMasuk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
