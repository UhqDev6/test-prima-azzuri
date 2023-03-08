
  const himpunanBilangan = [83, 1, 78, 26, 67, 54, 49, 7, 36, 99, 26, 19, 15, 7, 21, 39, 7, 2, 8];
  console.log(himpunanBilangan);

  // soal pertama
  const jumlah= himpunanBilangan.length;
  console.log(`Jumlah anggota dalam sebuah himpunan asli: ${jumlah}`);

  // soal kedua
  const nilaiTerkecil = Math.min(...himpunanBilangan);
  console.log(`Nilai terkecil himpunan bilangan asli: ${nilaiTerkecil}`);

  // soal ketiga
  const nilaiTerbesar = Math.max(...himpunanBilangan);
  console.log(`Nilai terbesar himpunan bilangan asli: ${nilaiTerbesar}`);

  // soal keempat
  const nilaiSama = [];
  himpunanBilangan.forEach((anggota) => {
    if (himpunanBilangan.indexOf(anggota) !== himpunanBilangan.lastIndexOf(anggota) && !nilaiSama.includes(anggota)) {
      nilaiSama.push(anggota);
    }
  });
  console.log(`Anggota dengan nilai angka yang sama dan lebih dari satu: ${nilaiSama}`);

  // soal kelima
  const himpunan = himpunanBilangan.filter((anggota) => {
    return himpunanBilangan.indexOf(anggota) !== himpunanBilangan.lastIndexOf(anggota);
  }).sort();
  console.log(`Urutan anggota dengan nilai angka sama dan lebih dari satu: ${himpunan}`);

  // soal keenam
  let nilaiGanjil = 0;
  let nilaiGenap = 0;
  himpunanBilangan.forEach((anggota) => {
    if (anggota % 2 === 0) {
      nilaiGenap++;
    } else {
      nilaiGanjil++;
    }
  });
  console.log(`Jumlah bilangan ganjil: ${nilaiGanjil}`);
  console.log(`Jumlah bilangan genap: ${nilaiGenap}`);


  // soal ketujuh
  const kelompokBilangan = {
    himpunanGanjil: [],
    himpunanGenap: [],
  };
    himpunanBilangan.forEach((anggota) => {
    if (anggota % 2 === 0) {
      kelompokBilangan.himpunanGanjil.push(anggota);
    } else {
      kelompokBilangan.himpunanGenap.push(anggota);
      }
    });
    console.log(`Kelompok bilangan ganjil: ${kelompokBilangan.himpunanGanjil}`);
    console.log(`Kelompok bilangan genap: ${kelompokBilangan.himpunanGenap}`);


export default function Home() {
  return (
    <div className='container'>
      <h1>HELLO HASIL PADA CONSOLE, </h1>
    </div>
  );
};
