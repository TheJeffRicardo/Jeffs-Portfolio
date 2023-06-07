<template>
    <div class="footer-content">
        <div class="footer-bottom">
            <h3>Thank You very Much</h3>
            <ul class="socials">
                <li> 
                    <a href="https://github.com/TheJeffRicardo?tab=repositories"><i class="bi bi-github"></i></a>
                </li>
                <li> 
                    <a href="https://www.linkedin.com/messaging/thread/new/"><i class="bi bi-linkedin"></i></a>
                </li>
                <li>
                    <a href="https://discord.com/channels/@me"><i class="bi bi-discord"></i></a>
                </li>
            </ul>
            <p>Copyright &copy; {{current}} by Konke Malindi
            All Rights Reserved
        </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footer-',
    data(){
        return {
            current : new Date().getFullYear()
        }
    }
}
</script>
<style scoped>
footer{
    height: auto;
    width: 100vw;
    font-family: "Open Sans";
    padding-top: 40px;
    color: #fff;
}
.footer-content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-color: #111;
}
.footer-content h3{
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 3rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.footer-content p{
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
}
.socials{
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 2.1rem 1rem 0;
}
.socials li{
    margin: 0 10px;
}
.socials a{
    text-decoration: none;
    color: #fff;
}
.socials a i{
    font-size: 1.4rem;
    transition: color 0.15s ease;
}
.socials a i:hover{
    color: #0E8388;
}
.footer-bottom{
    background-color: #222;
    width: 80vw;
    padding: 20px 0;
    text-align: center;
}
.footer-bottom p{
    font-size: 14px;
    word-spacing: 2px;
    text-transform: capitalize;
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
@media only screen and (max-width: 1050px){
    .footer-bottom{
    width: 85vw;
}
}
@media only screen and (max-width: 300px){
    .footer-bottom{
    width: 195vw;
}
}
</style>