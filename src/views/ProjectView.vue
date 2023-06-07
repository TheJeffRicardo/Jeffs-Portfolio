<template>
  <h1 class="project-text">Projects</h1>
<div class="body">
  <section>
    <div id="carouselExampleFade" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" v-for="items in firstCar" :key="items">
          <div class="profile-card">
            <img :src=items.image alt="" class="profile-card-image">
            <div class="card-head">
              <img :src=items.image alt="" class="card-head-image">
              <div class="hover-content">
                <h4>{{items.name}}</h4>
                <p>{{items.details}}</p>
                <div class="social-link">
                  <a :href=items.netlify><i class="bi bi-google"></i></a>
                  <a :href=items.github><i class="bi bi-github"></i></a>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h4>{{items.name}}</h4>
              <p>Hover Me</p>
            </div>
          </div>
        </div>
        
        <div class="carousel-item" v-for="items in projects" :key="items">
          <div class="profile-card">
            <img :src=items.image alt="" class="profile-card-image">
            <div class="card-head">
              <img :src=items.image alt="" class="card-head-image">
              <div class="hover-content">
                <h4>{{items.name}}</h4>
                <p>{{items.details}}</p>
                <div class="social-link">
                  <a :href=items.netlify><i class="bi bi-google"></i></a>
                  <a :href=items.github><i class="bi bi-github"></i></a>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h4>{{items.name}}</h4>
              <p>Hover Me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span><i class="bi bi-arrow-left-circle-fill" aria-hidden="true"></i></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span><i class="bi bi-arrow-right-circle-fill" aria-hidden="true"></i></span>
      <span class="visually-hidden">Next</span>
    </button>
    </section>
</div>
</template>  
<script>
export default {
  name: 'project',
  data() {
    return {
      firstCar: [
        {
        name: "Calculator",
        details: "This was the very first Javascript project we had, it was tough in the beginning but I managed to pull through, applied what I learned and created my Jeffalator",
        image: "https://i.postimg.cc/MTp5ChWL/Screenshot-3.png",
        github: "https://github.com/TheJeffRicardo/Calculator.git",
        netlify: "https://jeffscalculator.netlify.app/"
      }
      ],
      projects: [
      {
        name: "First Portfolio",
        details: "This was the very first Porfolio I have every done using only HTML and CSS, it was fun, playing around with different ideas and giving me the platform to choose what every layout and design I want.",
        image: "https://i.postimg.cc/3wnCFngF/Screenshot-4.png",
        github: "https://github.com/TheJeffRicardo/Portfolio.git",
        netlify: "https://konkejeffportfolio.netlify.app/"
      },
      {
        name: "Victoria's Secret",
        details: "This was a website I made for all the ladies out there, if ever they thought this world was full of inconvience, they thought wrong because this website caters to all women out there",
        image: "https://i.postimg.cc/qRqcbywV/Screenshot-5.png",
        github: "https://github.com/TheJeffRicardo/Victoria-Secret.git",
        netlify: "https://victoria-secret-specials-by-konkejeff.netlify.app/"
      },
      {
        name: "The Milky Way",
        details: "This was a pair project where there was a backender and a frontender, I was the frontender and I made the designs and frontend functionalites. Reason we went with this sites was because we wanted to make a sites that could cater for ice-cream lovers like myself",
        image: "https://i.postimg.cc/VN64TxsV/Screenshot-6.png",
        github: "https://github.com/TheJeffRicardo/The-Milky-Way.git",
        netlify: "https://vuefrontend-4b346.web.app/"
      },
      {
        name: "Vue Portfolio",
        details: "This portfolio was made when I experienced the transition from normal HTML CSS and Javascript to Vuejs. I made a few changes to the original but it was relatively the same layout.",
        image: "https://i.postimg.cc/Xvzx0sp7/Screenshot-8.png",
        github: "https://github.com/TheJeffRicardo/vuePortfolio.git",
        netlify: "https://vueportfolio-by-konkejrmalindi.web.app/"
      },
      {
        name: "My Budget",
        details: "This was a Personal Development project we had to do as a team, I did the sign in and login forms and layout. This project helped exposed me to working on a team and know my individual role as part of that. I understand that that's how the industry goes so it helped and will help me in future as well",
        image: "https://i.postimg.cc/vZtKKLvB/open-banking-1200-1662083126.jpg",
        github: "https://github.com/SethJKallis/vue-budget"
      },
      {
        name: "The Wrestling Express",
        details: "I am a big professional wrestling fan so this site meant everything to me. It was really fun to build and fairly difficult to design because I don't know how to build my personal preferences, but this site helped me tap into myself and truly express myself",
        image: "https://i.postimg.cc/3rp1PC7Y/Screenshot-9.png",
        github: "https://github.com/TheJeffRicardo/The-Wrestling-Express.git",
        netlify: "https://the-wrestling-express.web.app/"
      },
    ],
    };
  },
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 0.3s;
}
.body{
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111;
}
.project-text{
  color: #fff;
  padding-top: 20px;
  font-size: 55px;
  text-transform: capitalize;
  text-align: center;
  text-decoration: underline #00E7FF;
}
.profile-card{
  position: relative;
  min-width: 450px;
  height: 600px;
  overflow: hidden;
  border-radius: 10px;
}
.profile-card-image{
  opacity: 0.3;
}
.card-head {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
}
.card-head-image{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
}
.hover-content{
  position: absolute;
  inset: 0;
  background: #000000ee;
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  opacity: 0;
  border-radius: 7px;
}

.hover-content h4{
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 20px;
  transform: translateY(50px);
}
.hover-content p{
  font-weight: 200;
  line-height: 1.5;
  font-size: 18px;
  margin-bottom: 20px;
  transform: translateY(70px);
}
.hover-content .social-link{
  font-size: 26px;
  transform: translateY(90px);
}
.card-head:hover .hover-content {
  opacity: 1;
}
.card-head h4,
.card-head p,
.card-head .social-link{
  opacity: 0;
}
.card-head:hover h4,
.card-head:hover p,
.card-head:hover .social-link{
  opacity: 1;
  transform: translateY(0);
}
.hover-content .social-link i{
  margin: 0 10px;
  cursor: pointer;
  transition: 0.15s;
}
.hover-content .social-link i:hover{
  opacity: 0.75;
  color: #00E7FF;
}
.social-link a {
  color: #fff;
}
.card-body{
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
.card-body h4{
  font-size: 30px;
  color: #fff;
}
.card-body p{
  font-size: 18px;
  color: #fff;
  opacity: 0.6;
}
.carousel-control-prev {
  margin-left: 20%;
}
.carousel-control-prev i{
  font-size: 2rem;
  margin-left: 50%;
}
.carousel-control-next i{
  font-size: 2rem;
}
@media only screen and (max-width: 1050px){
  .profile-card-image{
    display: none;
  }
}
@media only screen and (max-width: 300px){
  .carousel-control-next i{
    margin-left: 900%;
}
}

</style>