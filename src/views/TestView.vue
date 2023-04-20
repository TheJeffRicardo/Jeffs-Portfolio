<template>
  <div class="hero">
    <h1>Testimonials</h1>
    <div class="test-row">
      <div class="test-col">
        <div class="user-img">
          <img src="https://i.postimg.cc/yx1dTQWT/DSC-3517.jpg" class="w-75" alt="">
        </div>
        <div class="user-text">
          <p>Konke is a very open minded individual, who is determined to do what is expected of him.</p>
          <h3>Lindokuhle</h3>
          <p>Colleague/<span>Web Developer</span></p>
        </div>
      </div>
      <div class="test-col">
        <div class="user-imgs">
          <img src="https://i.postimg.cc/28dGyVfR/C11-Brandon-Swinton-1.jpg" class="w-75" alt="">
        </div>
        <div class="user-texts">
          <p>KonkeJeff RicardoMalindi is one of the most intelligent people I know.He is always helpful whenever he is called upon</p>
          <h3>Brandon</h3>
          <p>Colleague/<span>Web Developer</span></p>
        </div>
      </div>
      <div class="test-col">
        <div class="user-img">
          <img src="https://i.postimg.cc/ZKqQG8ds/DSC-3520.jpg" class="w-75" alt="">
        </div>
        <div class="user-text">
          <p>KonkeJeff RicardoMalindi is, a very energetic and friendly, which makes him easy to approach.He is always willing to help out whenever there is a problem that needs fixing which.</p>
          <h3>Sakhe</h3>
          <p>Colleague/<span>Web Developer</span></p>
        </div>
      </div>
      <div class="test-col">
        <div class="user-imgs">
          <img src="https://i.postimg.cc/1zFfRVLD/DSC-3597.jpg" class="w-75" alt="">
        </div>
        <div class="user-texts">
          <p>KonkeJeff RicardoMalindi is not afraid to voice his opinion or ask a difficult question in order to make progress on an issue. He is dedicated and creates a supportive environment for everyone around him.</p>
          <h3>Deno</h3>
          <p>Colleague/<span>Web Developer</span></p>
        </div>
      </div>
      <div class="test-col">
        <div class="user-img">
          <img src="https://i.postimg.cc/sf79HvxQ/C11-1.jpg" class="w-75" alt="">
        </div>
        <div class="user-text">
          <p>Konke is a hard working colleague who gives his all to any project that he is currently busy with. He gets along with everyone and can light up any room he walks into with his bright and bubbly personality.</p>
          <h3>Timothy</h3>
          <p>Colleague/<span>Web Developer</span></p>
        </div>
      </div>
      <div class="test-col">
        <div class="user-imgs">
          <img src="https://i.postimg.cc/1zPjtYB9/DSC-3581.jpg" class="w-75" alt="">
        </div>
        <div class="user-texts">
          <p>I would say Konke is a person who's character is so lively that you will feel the energy. I think Konke will bring the required characteristics to a company to be a successful and hard-working employee.</p>
          <h3>Meezaan</h3>
          <p>Colleague/<span>Web Developer</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'testimonial'
}
</script>

<style scoped>
.hero{
  width: 100%;
  height: 400vh;
  position: relative;
}
.hero h1{
  text-align: center;
  padding-top: 80px;
  font-size: 40px;
  color: #fff;
  text-decoration: underline #00E7FF;
}
.test-col{
  width: 800px;
  height: 400px;
  position: relative;
  margin-bottom: 5%;
}
.user-img{
  padding: 40px;
  position: absolute;
  top: 0;
  /* right: 100px; */
  height: 100%;
  width: 94.9%;
}
.user-imgs{
  padding: 40px;
  position: absolute;
  top: 0;
  margin-left: 57.5%;
  height: 100%;
  width: 94.9%;
}
.user-img img{
  border-radius: 10px;
}
.user-imgs img{
  border-radius: 10px;
}
.user-text{
  background: #2d3a59;
  width: 520px;
  height: 270px;
  position: absolute;
  left: 65%;
  top: 53.5%;
  transform: translateY(-50%);
  border-radius: 10px;
  color: #d3d4d6;
  padding: 45px;
  box-sizing: border-box;
  z-index: 2;
}
.user-text p{
  font-size: 18px;
  line-height: 24px;
}
.user-text p span{
  color: #00E7FF;
}
.user-text h3{
  margin: 35px 0 50x;
  color: #fff;
}
.user-texts{
  background: #2d3a59;
  width: 520px;
  height: 270px;
  position: absolute;
  left: 6%;
  top: 53.5%;
  transform: translateY(-50%);
  border-radius: 10px;
  color: #d3d4d6;
  padding: 45px;
  box-sizing: border-box;
  z-index: 2;
}
.user-texts p{
  font-size: 18px;
  line-height: 24px;
}
.user-texts p span{
  color: aqua;
}
.user-texts h3{
  margin: 35px 0 5px;
  color: #fff;
}
</style>