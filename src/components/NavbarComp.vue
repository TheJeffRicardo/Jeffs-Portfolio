<template>
    <div class="container">
        <!-- Profile -->
        <div class="profile">
            <img src="https://i.postimg.cc/26kXYWQ0/Jeff-Ricardo.png" class="w-50" alt="Jeff">
            <h1>Navigation <br> Section</h1>
        </div>

        <!-- Navbar -->
        <nav>
            <ul>
                <li><router-link to="/"><i class="bi bi-house-door-fill"></i></router-link></li>
                <li><router-link to="/about"><i class="bi bi-clipboard-fill"></i></router-link></li>
                <li><router-link to="/project"><i class="bi bi-box-arrow-in-right"></i></router-link></li>
                <li><router-link to="/testimonial"><i class="bi bi-book-half"></i></router-link></li>
                <li> <router-link to="/contact"><i class="bi bi-envelope-at-fill"></i></router-link></li>
            </ul>
        </nav> 
</div>  
</template>
<script>
export default {
    
}
</script>
<style scoped>
.container{
    position: fixed;
    font-family: Poppins;
   height: 100vh;
   width: 300px;
   background: #222;
   overflow-y: auto;
   left: 0;
   top: 0;
   transition: 0.4s;
   z-index: 99;
}
.container .profile{
   text-align: center;
   margin: 10px 0;
}
.container .profile img{
   border-radius: 10%;
   border: 2px solid #111;
}
.container .profile h1{
   color: white;
   font-size: 30px;
}
.container .profile .icons a{
   display: inline-block;
   width: 36px;
   height: 36px;
   border-radius: 50%;
   text-align: center;
   line-height: 37px;
   background-color: white;
   font-size: 18px;
   margin: 5.5px;
   margin-top: 10.5px;
   transition: 0.2s;
}
.container .profile .icons a:hover{
   background-color: grey;
}
.container nav{
    margin-top: 40px;
    text-align: left;
}
.container nav ul li{
    list-style: none;
    text-decoration: none;
}
.container nav ul li a{
    display: inline-block;
    text-decoration: none;
    padding: 7px px;
    margin: 10px 0;
    font-size: 22px;
    font-weight: 400;
    color: lightgray;
    cursor: pointer;
    letter-spacing: 0.6px;
    position: relative;
}
.container nav ul li a:after{
    position: absolute;
    margin-left: 10%;
    content: "";
    width: 0px;
    height: 100%;
    transition: 0.3s;
}
.container nav ul li:hover{
    color: #777;
}
.container nav ul li a{
    color: #ffffff;
}
.container nav ul li a:hover:after{
    width: 70px;
}
.container nav ul li:nth-child(1) a:after{
    background-color: transparent;
    content: "Home";
    content-visibility: hidden;
}
.container nav ul li:nth-child(2) a:after{
    background-color: transparent;
    content: "About";
    content-visibility: hidden;
}
.container nav ul li:nth-child(3) a:after{
    background-color: transparent;
    content: "Projects";
    content-visibility: hidden;
}
.container nav ul li:nth-child(4) a:after{
    background-color: transparent;
    content: "Testimonial";
    content-visibility: hidden;
}
.container nav ul li:nth-child(5) a:after{
    background-color: transparent;
    content: "Contact";
    content-visibility: hidden;
}

.container nav ul li:nth-child(3) a:hover:after{
    width: 95px;
}
.container nav ul li:nth-child(4) a:hover:after{
    width: 130px;
}
.container nav ul li:nth-child(5) a:hover:after{
    width: 100px;
}

.container nav ul li:nth-child(1) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Home";
    width: 70px;
}
.container nav ul li:nth-child(2) a.router-link-exact-active:after {
    background-color: transparent;
    content: "About";
    width: 70px;
}
.container nav ul li:nth-child(3) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Projects";
    width: 100px;
}
.container nav ul li:nth-child(4) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Testimonial";
    width: 130px;
}
.container nav ul li:nth-child(5) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Contact";
    width: 100px;
}
@media only screen and (max-width: 1050px){
    .container{
        width: 15vw;
        padding-bottom: 69%;
        overflow: hidden;
    }
    .container .profile h1{
        font-size: 20px;
    }   
    .container nav ul li a:after{
        margin-left: 10%;
    }
    .container nav ul{
    padding-left: 0.15rem;
}
}
@media only screen and (max-width: 300px){
    .container{
        width: 15vw;
        padding-bottom: 100%;
        height: 100%;
        overflow: hidden;
    }
    .container .profile h1{
        font-size: 0px;
    }   
    .container .profile img{
        min-width: 50px;
        margin-left: -12px;
        border: 0px;
}
    .container nav ul{
    padding-left: 0.1rem;
}
.container nav ul li a{
    font-size: 1rem;
}

.container nav ul li:nth-child(1) a:hover:after{
    width: 0px;
}
.container nav ul li:nth-child(2) a:hover:after{
    width: 0px;
}
.container nav ul li:nth-child(3) a:hover:after{
    width: 0px;
}
.container nav ul li:nth-child(4) a:hover:after{
    width: 0px;
}
.container nav ul li:nth-child(5) a:hover:after{
    width: 0px;
}

.container nav ul li:nth-child(1) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Home";
    width: 0px;
}
.container nav ul li:nth-child(2) a.router-link-exact-active:after {
    background-color: transparent;
    content: "About";
    width: 0px;
}
.container nav ul li:nth-child(3) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Projects";
    width: 0px;
}
.container nav ul li:nth-child(4) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Testimonial";
    width: 0px;
}
.container nav ul li:nth-child(5) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Contact";
    width: 0px;
}
}


@media (min-width: 301px) and (max-width: 450px){
    .container .profile img{
        min-width: 50px;
        margin-left: -7px;
        border: 0px;
    }
    .container .profile h1{
        font-size: 0.6rem;
        margin-left: -2px;
}
    .container nav ul{
    padding-left: 0.5rem;
}
.container nav ul li a{
    font-size: 1rem;
}

.container nav ul li:nth-child(1) a:hover:after{
    width: 0px;
}
.container nav ul li:nth-child(2) a:hover:after{
    width: 0px;
}
.container nav ul li:nth-child(3) a:hover:after{
    width: 0px;
}
.container nav ul li:nth-child(4) a:hover:after{
    width: 0px;
}
.container nav ul li:nth-child(5) a:hover:after{
    width: 0px;
}

.container nav ul li:nth-child(1) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Home";
    width: 0px;
}
.container nav ul li:nth-child(2) a.router-link-exact-active:after {
    background-color: transparent;
    content: "About";
    width: 0px;
}
.container nav ul li:nth-child(3) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Projects";
    width: 0px;
}
.container nav ul li:nth-child(4) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Testimonial";
    width: 0px;
}
.container nav ul li:nth-child(5) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Contact";
    width: 0px;
}
}



@media (min-width: 451px) and (max-width: 700px){
    .container .profile img{
        min-width: 75px;
        margin-left: 0px;
        border: 0px;
    }
    .container .profile h1{
        font-size: 0.8rem;
        margin-left: 12px;
}
    .container nav ul{
    padding-left: 1.5rem;
}
.container nav ul li a{
    font-size: 1rem;
}

.container nav ul li:nth-child(1) a:hover:after{
    width: 0px;
}
.container nav ul li:nth-child(2) a:hover:after{
    width: 0px;
}
.container nav ul li:nth-child(3) a:hover:after{
    width: 0px;
}
.container nav ul li:nth-child(4) a:hover:after{
    width: 0px;
}
.container nav ul li:nth-child(5) a:hover:after{
    width: 0px;
}

.container nav ul li:nth-child(1) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Home";
    width: 0px;
}
.container nav ul li:nth-child(2) a.router-link-exact-active:after {
    background-color: transparent;
    content: "About";
    width: 0px;
}
.container nav ul li:nth-child(3) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Projects";
    width: 0px;
}
.container nav ul li:nth-child(4) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Testimonial";
    width: 0px;
}
.container nav ul li:nth-child(5) a.router-link-exact-active:after {
    background-color: transparent;
    content: "Contact";
    width: 0px;
}
}


@media (min-width: 451px) and (max-width: 700px){
    
}

</style>