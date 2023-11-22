import avatar2 from "./../image/1.jpeg";

const AboutMe = () => {
  return (
    <div className="abo">
      <div className="section2">
        <div className="row">
          <div className="col-6 text-center">
            <img className="avatar" src={avatar2} />
          </div>
          <div className="col-lg-6">
            <h1>ABOUT ME</h1>
            <p>
              Halloo teman-teman, perkenalkan saya Yuzrizal Hidayat panggil aja
              Yuz atau bisa juga dipanggil Zal saya berumur hampir genap 20
              tahun pada tanggal 28 April nanti, saat ini saya sedang menempuh
              pendidikan di Universitas Pendidikan Indonesia program studi
              Pendidikan Ilmu Komputer
            </p>
            <p>
              saya adalah anak ke-2 dari tiga bersaudara, saya memiliki
              cita-cita yang sama dengan ayah saya yaitu sebagai seorang guru.
              jika ditanya mengapa saya ingin menjadi seorang guru, karena saya
              ingin berguna bagi negara ini dengan mendidik tunas bangsa. segitu
              saja perkenalan tentang saya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
