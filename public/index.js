const Home = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ardhi Harry</title>

    <!-- icon -->
    <link rel="icon" href="https://drive.google.com/uc?export=view&id=1Z9S0ibagaf2KIGM1UiKdJq6yuxRWCmKk" type="image/icon type">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer"/>

    <!-- Style -->
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');

      body, h3 {
        margin: 0;
        padding: 0;
      }
      
      body {
        font-family: 'Montserrat', sans-serif;
      }
      
      a {
        text-decoration: none;
      }
      
      li {
        list-style: none;
      }
      
      header .header {
        width: 100%;
        height: 50px;
        background-color: #BD92F8;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      header .header h3 {
        font-size: 1.5em;
        text-transform: uppercase;
        font-weight: 700;
        color: white;
      }
      
      header .hero {
        width: 100%;
        height: 350px;
        background-color: #292A37;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      
      header .hero img {
        width: 150px;
        border-radius: 50%;
      }
      
      header .hero h4 {
        font-size: 1em;
        text-transform: uppercase;
        color: white;
      }
      
      header .hero h4 span.profile {
        padding: 0 5px;
      }
      
      main {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-top: 25px;
      }
      
      main .content {
        max-width: 500px;
      }
      
      main .content article#about {
        text-align: justify;
      }
      
      main .content article#about p {
        color: #6D6D73;
        font-weight: 500;
      }
      
      main aside section#personal-info h1 {
        font-size: 24px;
        font-weight: 700;
      }
      
      main aside section#personal-info p {
        font-weight: 500;
      }
      
      main aside section#personal-info p span.personal-info {
        color: #6D6D73;
      }
      
      main aside section#social-media h1 {
        font-size: 24px;
        font-weight: 700;
        margin-top: 50px;
      }
      
      main aside section#social-media ul {
        padding-left: 0;
      }
      
      main aside section#social-media ul li {
        display: inline;
        padding-right: 1rem;
      }
      
      main aside section#social-media ul li a {
        font-size: 30px;
        filter: grayscale(80%);
      }
      
      main aside section#social-media ul li a:hover {
        filter: grayscale(0);
        transition: .4s ease-in-out;
      }
      
      footer {
        width: 100%;
        text-align: center;
        margin-top: 3em;
        /* position: absolute;
        bottom: 0; */
        padding: .5rem;
        background-color: #ad77f8;
        color: white;
        font-weight: 500;
      }
    </style>
  </head>
  <body>
    <!-- Header -->
    <header>
      <div class="header">
        <h3>My Profile</h3>
      </div>

      <div class="hero">
        <img src="https://drive.google.com/uc?export=view&id=1Z9S0ibagaf2KIGM1UiKdJq6yuxRWCmKk" alt="Profile">
        <h4>Mahasiswa <span class="profile">|</span> Programmer</h4>
      </div>
    </header>
    <!-- End of Header -->

    <!-- Main -->
    <main>
      <div class="content">
        <article id="about">
          <h1>Tentang Saya</h1>
          <p>Perkenalkan, nama saya Ardhi Harry Setiawan. Saya memiliki minat di bidang teknologi informasi. Sejak kecil, saya sudah tertarik dengan teknologi dan terus mengembangkan minat di bidang teknologi. Sekarang, saya sedang menempuh kuliah di Universitas Muhammadiyah Jember dan mengambil jurusan teknik informatika.</p>

          <p>Selain kuliah, saya memiliki beberapa hobi. Salah satunya adalah bermain game. Saya menghabiskan waktu luang dengan bermain game untuk melepas penat. Selain itu, saya juga senang menghabiskan waktu dengan coding. Saya menganggap coding sebagai hal yang menantang dan bisa memberikan kepuasan tersendiri ketika berhasil menyelesaikan suatu proyek. Kadang-kadang saya juga membaca buku sebagai salah satu cara untuk meningkatkan pengetahuan.</p>

          <p>Dalam bidang karir, saya memiliki cita-cita untuk menjadi fullstack developer. Namun, seiring dengan perkembangan waktu, saya mulai lebih tertarik dengan menjadi backend developer. Saya menganggap bahwa menjadi backend developer memberikan tantangan yang lebih menantang dan memungkinkan untuk mengembangkan keterampilan lebih dalam di bidang teknologi informasi.</p>

          <p>Secara keseluruhan, saya adalah seorang mahasiswa yang aktif di bidang teknologi informasi dan memiliki minat yang besar di dalamnya. saya memiliki beberapa hobi yang saya senangi, dan memiliki cita-cita untuk menjadi seorang backend developer yang handal dan sukses di bidangnya.</p>
        </article>
      </div>
      
      <aside>
        <section id="personal-info">
          <h1>Personal Information</h1>

          <p><span class="personal-info">Age: </span>24 years old</p>
          <p><span class="personal-info">Phone: </span>+62 811 367 84 38</p>
          <p><span class="personal-info">Email: </span>ardhiharry@gmail.com</p>
        </section>

        <section id="social-media">
          <h1>Social Media</h1>

          <ul>
            <li>
              <a href="#"><i class="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin"></i></a>
            </li>
          </ul>
        </section>
      </aside>
    </main>
    <!-- End of Main -->

    <!-- Footer -->
    <footer>
      <p>&#169; <span id="year"></span> Ardhi Harry | My Profile</p>
    </footer>
    <!-- End of Footer -->


    <script>
      const date = new Date()
      document.getElementById('year').innerText = date.getFullYear()
    </script>
  </body>
  </html>
`

export default Home;