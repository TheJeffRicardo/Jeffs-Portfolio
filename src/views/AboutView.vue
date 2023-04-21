<template>
 <div class="about-section">
  <section class="about">
    <div class="main">
        <div class="backdrop" v-for="item in photo" :key="item">
          <img :src=item.image alt="Photo of Me" class="main">
        </div>
    <div class="about-text">
      <h1>About Me</h1>
      <h5>Web <span>Developer</span></h5>
      <p>My name is Konke Malindi but you can call me JeffRicardo. I was born on the 2nd February 2004,
            born and raised in the township Eersterivier 7100 Cape Town.
            I am a developer becuase I've always been able to do one thing,Create,and through
            creation I found coding and really enjoyed it,but....that's not enough though.
            I wanted to explore the art of creation by indulging in what,why and how to code.I always thought
            you have to push one button then the computer will do the rest but there is a lot
            that goes into coding.So through learning this I set a path to learn what,why and how is coding
            until I have truly gained to skills to create,or better,to code.</p>
    </div>

    </div>
  </section>

  <h1 class="resume">Resume</h1>
  <div class="container">
    <div class="timeline">
    <ul>
      <li>
        <div class="timeline-content">
          <img src="https://i.postimg.cc/c4R5rj6y/download-1.png" class="w-50" alt="Photo">
          <h3 class="date">2010-2016</h3>
          <h1>Stratford Primary School</h1>
          <p>This was the beginning of my schooling career, this was also where I discovered my interests and my imagination. Passed every grade.</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <img src="https://i.postimg.cc/9FbX0D9s/302565645-443275894493438-5262069900878957603-n.png" class="w-50" alt="Photo">
          <h3 class="date">2017-2018</h3>
          <h1>WeCode24</h1>
          <p>This was a high school course that was introduced to us in Grade 8 and I was the first to join. It was a Python course in which most of the code learned we/I applied it to making a game. Graduated after a year with a Certificate.</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <img src="https://i.postimg.cc/QMT7MLxc/images.jpg" class="w-50" alt="Photo">
          <h3 class="date">2017-2021</h3>
          <h1>Malibu High School</h1>
          <p>This was my high school career where I truly dicovered myself and what my vaules are. Passed every Grade.</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <img src="https://i.postimg.cc/NMnTWNs7/logo.png" class="w-50" alt="Photo">
          <h3 class="date">2022-2022</h3>
          <h1>CodeTelligence</h1>
          <p>This course was one I entered before entering another one. This course was my introduction to the skeleton, clothes and movements of coding. This course taught me the basics of coding and the importance of self learning. They taught me HTML, CSS and Python. I was there for 4 weeks</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <img src="https://i.postimg.cc/rpskGctt/LIFE-CHOICES-ICON-ON-GREEN.jpg" class="w-50" alt="Photo">
          <h3 class="date">2022-2023</h3>
          <h1>Life Choices</h1>
          <p>This was the course in which I was taught the basics of HTML, CSS, Javascript, MySQL, Nodejs and Vuejs. This course not only taught me the coding fundamentals, they taught me more about myself and what I'm capable of. I passed all my modules and graduated</p>
        </div>
      </li>
    </ul>
  </div>
</div>
    <div class="skill">
      <h1>Skills</h1>

      <li>
        <h3>HTML</h3>
        <span class="bar"><span class="html"></span></span>
      </li>
      <li>
        <h3>CSS</h3>
        <span class="bar"><span class="css"></span></span>
      </li>
      <li>
        <h3>Javascript</h3>
        <span class="bar"><span class="javascript"></span></span>
      </li>
      <li>
        <h3>Bootstrap</h3>
        <span class="bar"><span class="bootstrap"></span></span>
      </li>
      <li>
        <h3>Vuejs</h3>
        <span class="bar"><span class="vuejs"></span></span>
      </li>
      <li>
        <h3>Nodejs</h3>
        <span class="bar"><span class="nodejs"></span></span>
      </li>
      <li>
        <h3>MySQL</h3>
        <span class="bar"><span class="mysql"></span></span>
      </li>
      <li>
        <h3>UI/UX</h3>
        <span class="bar"><span class="uix"></span></span>
      </li>
  </div>
 </div>
</template>

<script>
export default {
  name: 'about',
  data() {
      return {
        photo: [
          {
            image: "https://i.postimg.cc/bNzqryCD/DSC-3528-Photo-Room-png-Photo-Room.png", 
          },
        ],
        photos: [
          {
            image: "https://i.postimg.cc/G3x3Yxq2/IMG-0817-removebg-preview.png", 
          },
          {
            image: "https://i.postimg.cc/656Wh4mh/IMG-0838-removebg-preview.png", 
          },
          {
            image: "https://i.postimg.cc/6QZtQr8B/IMG-0867-removebg-preview.png", 
          },
        ]
      }
    }
}
</script>

<style scoped>
*{
  font-family: 'Josefin Sans', sans-serif;
}
.about-section{
  height: 540vh;
}
.about{
  padding: 78px 0px;
}
.about .main{
  filter: contrast(115%);
  margin: auto;
}
.about .main img{
  width: 40vw;
  background-image: url('https://i.postimg.cc/Fzj6qyGK/vecteezy-blue-gold-modern-corner-border-abstract-decorative-frame-20639751-268-1.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 800px;
}
.about-text{
  width: 550px;
}
.main{
  width: 1130px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.about-text h1{
  color: #fff;
  font-size: 80px;
  text-transform: capitalize;
  margin-bottom: 20px;
  text-align: start;
  text-decoration: underline #00E7FF;
}
.about-text h5{
  color: #fff;
  font-size: 25px;
  text-transform: capitalize;
  margin-bottom: 25px;
  letter-spacing: 2px;
}
span{
  color: #00E7FF;
}
.about-text p{
  color: aliceblue;
  letter-spacing: 1px;
  line-height: 28px;
  font-size: 18px;
  margin-bottom: 45px;
}
.resume{
  text-decoration: underline #00E7FF;
}
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  background-color: #111;
}
.timeline {
  width: 80%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline ul {
  list-style: none;
}
.timeline ul li {
  padding: 20px;
  background-color: #1e1f22;
  color: white;
  border-radius: 10px;
  margin-bottom: 20px;
}
.timeline ul li:last-child {
  margin-bottom: 0;
}
.timeline ul li:nth-child(odd)::before {
    transform: translate(50%, -50%);
    right: -30px;
    top: 50%;
}
.timeline ul li:nth-child(even)::before {
    transform: translate(50%, -50%);
    right: -30px;
    top: 50%;
}
.timeline-content h1 {
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 10px;
  color: #F0F0F0;
}
.timeline-content p {
  font-size: 16px;
  line-height: 30px;
  font-weight: 300;
  text-align: center;
}
.timeline-content .date {
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 2px;
}
.timeline-content img{
  border-radius: 50%;
  margin-left: 22.8%;
}

/* Progress bar */
h1{
  text-align: center;
  font-weight: bold;
}
h3{
  margin: 5px;
}
.skill{
  width: 500px;
  margin: 60px auto;
  color: #fff;
  padding: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.skill h1{
  text-decoration: none;
}
.skill li{
  margin: 20px 0;
  padding: 10px;
  list-style: none;
}
.bar{
  background: #353b48;
  display: block;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.bar:hover{
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.bar span{
  height: 20px;
  float: left;
  background: linear-gradient(135deg, rgba(236, 0, 140, 1)0%, rgba(252, 103, 103, 1)100%);
}
.html{
  width: 90%;
  animation: html 3s;
}
.css{
  width: 80%;
  animation: css 3s;
}
.javascript{
  width: 40%;
  animation: javascript 3s;
}
.bootstrap{
  width: 70%;
  animation: bootstrap 3s;
}
.vuejs{
  width: 50%;
  animation: vuejs 3s;
}
.nodejs{
  width: 40%;
  animation: vuejs 3s;
}
.mysql{
  width: 60%;
  animation: vuejs 3s;
}
.uix{
  width: 40%;
  animation: uix 3s;
}

@keyframes html{
  0%{
    width: 0%;
  }
  100%{
    width: 90%;
  }
}
@keyframes css{
  0%{
    width: 0%;
  }
  100%{
    width: 80%;
  }
}
@keyframes javascript{
  0%{
    width: 0%;
  }
  100%{
    width: 40%;
  }
}
@keyframes bootstrap{
  0%{
    width: 0%;
  }
  100%{
    width: 70%;
  }
}
@keyframes vuejs{
  0%{
    width: 0%;
  }
  100%{
    width: 50%;
  }
}
@keyframes nodejs{
  0%{
    width: 0%;
  }
  100%{
    width: 40%;
  }
}
@keyframes mysql{
  0%{
    width: 0%;
  }
  100%{
    width: 60%;
  }
}
@keyframes uix{
  0%{
    width: 0%;
  }
  100%{
    width: 40%;
  }
}

@media only screen and (min-width: 768px) {
  .timeline:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: gray;
  }
  .timeline ul li {
    width: 50%;
    position: relative;
    margin-bottom: 50px;
  }
  .timeline ul li:nth-child(odd) {
    float: left;
    clear: right;
    transform: translateX(-30px);
    border-radius: 20px 0px 20px 20px;
  }
  .timeline ul li:nth-child(even) {
    float: right;
    clear: left;
    transform: translateX(30px);
    border-radius: 0px 20px 20px 20px;
  }
  .timeline ul li::before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: gray;
    top: 0px;
  }
  .timeline ul li:nth-child(odd)::before {
    transform: translate(50%, -50%);
    right: -30px;
  }
  .timeline ul li:nth-child(even)::before {
    transform: translate(-50%, -50%);
    left: -30px;
  }
  .timeline-content .date {
    position: absolute;
    top: -30px;
  }
  .timeline ul li:hover::before {
    background-color: aqua;
  }
}
</style>