const Contact = () => {
  return (
    <div className="contact-container">
      <h1>My Contact</h1>
      <div className="contact-info">
        <p>Email: yuzrizalhidayat28@gmail.com</p>
        <p>Telepon: 089525903630</p>
        <p>Alamat: Jl. Jatihandap Gg.III no.92</p>
      </div>
      <div className="contact-form">
        <h2>Formulir Kontak</h2>
        <form>
          <label htmlFor="nama">Nama:</label>
          <input type="text" id="nama" name="nama" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="pesan">Pesan:</label>
          <textarea id="pesan" name="pesan" rows="4" required />

          <button type="submit">Kirim</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
