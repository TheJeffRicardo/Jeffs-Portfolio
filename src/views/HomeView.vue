<template>
<div class="contain">
    <div class="content">
        <div class="wrapper">
            <span class="first-text">I'm a</span>
            <ul class="sec-text">
                <li><span>Innovative</span></li>
                <li><span>Designer</span></li>
                <li><span>Fullstack</span></li>
                <li><span>Developer</span></li>
            </ul>
        </div>
        <p>A man once asked me, "What is it you'd like to learn?"
            <br>
            I would answer back by saying, "What can you teach me" <br>
            He smiled and said, "Good answer"
        </p>
        <a target="_blank" :href="downloadCV" download>
            <button class="full-rounded">
                Download Resume
            </button>
        </a>
    </div>
    <img src="https://i.postimg.cc/7Z5qQDYh/hd-face-cartoon-1-removebg-preview.png" alt="Photo of me" class="feature-img">
</div>
</template>

<script>
export default {
name: 'home',
data() {
    return {
        downloadCV: 'https://drive.google.com/file/d/1vcBnoHsigT2KwFBf8A03ktoJGLdgNO2Z/view?usp=share_link'
    }
    }
}
</script>

<style scoped>
.contain{
    height: 70.5vh;
    box-sizing: border-box;
    /* text-align: center; */
}
.content{
    margin-top: 18%;
    margin-left: 4%;
    max-width: 600px;
}
.wrapper {
    display: flex;
}
.wrapper .first-text {
    font-size: 60px;
    margin-left: 10%;
}
.wrapper .sec-text{
    height: 90px;
    line-height: 90px;
    overflow: hidden;
}
.sec-text li{
    position: relative;
    font-size: 60px;
    color: aquamarine;
    top: 0;
    list-style: none;
    text-shadow: 0 0 10px aquamarine;
    animation: slide 12s steps(4) infinite;
}
@keyframes slide{
    100% {
        top: -360px;
    }
}
.sec-text li span{
    position: relative;
}
.sec-text li span::before{
    content: '';
    position: absolute;
    left: 0%;
    width: 400px;
    height: 90px;
    border-left: 2px solid aquamarine;
    text-align: left;
    background-color: #111;
    animation: typing 1.5s steps(10) infinite alternate;
}
.content p{
    color: #fff;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bold;
    text-align: center;
    width: 70%;
    margin: auto;
    height: 25vh;
}
a{
    text-decoration: none;
    color: #111;
}
button {
    font-size: 16px;
    position: relative;
    margin-left: 32%;
    padding: 1em 2.5em 1em 2.5em;
    border: none;
    background: #fff;
    transition: all 0.08s ease-in-out;
    box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.1);
}

button:active {
    transform: scale(0.95);
}

button:hover {
    transform: scale(1.05);
    background-color: #0E8388;
    color: #fff;
}

.full-rounded {
    border-radius: 2rem;
}
.feature-img{
    width: 530px;
    position: absolute;
    bottom: 10%;
    left: 60%;
    filter: contrast(145%) blur(8px);
    transition: 0.3s ease-in;
    cursor: pointer;
}
.feature-img:hover{
    filter: contrast(145%) blur(0px);
}
@keyframes typing{
    100% {
        left: 100%;
        margin: 0 -35px 0 35px;
    }
}
@media only screen and (max-width: 1050px){
    .content{
    margin-left: -3%;
}
    .feature-img{
    width: 430px;
    bottom: 20%;
    left: 60%;
}
}
@media only screen and (max-width: 300px){
    .content{
    margin-left: 0%;
}
    .feature-img{
    display: none;
}
.wrapper .first-text {
    font-size: 1.6rem;
    margin-top: 10%;
    margin-left: 8%;
}
.sec-text li{
    font-size: 1.8rem;
}
.sec-text li span::before{
    height: 45px;
    top: -15%;
}
.content p{
    color: #fff;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bold;
    text-align: center;
    width: 70%;
    margin-left: 35px;
}
button {
    font-size: 0.8rem;
    margin-top: 25%;
    margin-left: 15%;
    padding: 1em 2.5em 1em 2.5em;
}
}


@media (min-width: 301px) and (max-width: 450px){
    .content{
    margin-left: 5%;
}
    .feature-img{
    display: none;
}
.wrapper .first-text {
    font-size: 1.6rem;
    margin-top: 8.9%;
    margin-left: 8%;
}
.sec-text li{
    font-size: 1.8rem;
}
.sec-text li span::before{
    height: 45px;
    top: -15%;
}
.content p{
    text-align: center;
    width: 70%;
    margin-left: 8%;
}
button {
    font-size: 0.8rem;
    margin-top: 25%;
    margin-left: 15%;
    padding: 1em 2.5em 1em 2.5em;
}
}



@media (min-width: 451px) and (max-width: 700px){
    .content{
    margin-left: 5%;
}
.feature-img{
    width: 70%;
    margin-left: -18%;
}
.wrapper .first-text {
    font-size: 2rem;
    margin-top: 4.8%;
    margin-left: 2%;
}
.sec-text li{
    font-size: 2rem;
}
.sec-text li span::before{
    height: 45px;
    top: -15%;
}
.content p{
    text-align: center;
    width: 50%;
    margin-left: 4%;
}
button {
    font-size: 0.8rem;
    margin-top: 7%;
    margin-left: 10%;
    padding: 1em 2.5em 1em 2.5em;
}
}

</style>