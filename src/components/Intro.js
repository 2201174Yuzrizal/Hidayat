import avatar1 from "./../image/1.jpeg";

const Intro = () => {
  return (
    <div className="section text-light intro">
      <div className="container text-center">
        <img className="avatar" src={avatar1} />
        <h1>Yuzrizal Hidayat</h1>
        <p>Mahasiswa Pendidikan Ilmu Komputer</p>

        <a target="_blank" href="#" className="sosial_media">
          <i className="bi bi-facebook"></i>
        </a>
        <a target="_blank" href="#" className="sosial_media">
          <i class="bi bi-instagram"></i>
        </a>
        <a target="_blank" href="#" className="sosial_media">
          <i class="bi bi-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default Intro;
