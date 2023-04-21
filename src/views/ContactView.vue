<template>
    <section class="contact">
        <div class="content">
            <h2>Contact Me</h2>
            <p>If there is anything you wish to relay to me, feel free to use this page to do so. <br> Have yourself a very good day</p>
        </div>
    <div class="flex">
        <div class="container">
        <div class="contactInfo">
            <div class="box">
                <div class="icon"><i class="bi bi-building-fill-add"></i></div>
                <div class="text">
                    <h3>Address</h3>
                    <p>Heather Park,<br>Eersterivier 7100,<br>Cape Town</p>
                </div>
            </div>
            <div class="box">
                <div class="icon"><i class="bi bi-telephone-inbound-fill"></i></div>
                <div class="text">
                    <h3>Phone</h3>
                    <p>063-112-1713</p>
                </div>
            </div>
            <div class="box">
                <div class="icon"><i class="bi bi-envelope-at-fill"></i></div>
                <div class="text">
                    <h3>Email</h3>
                    <p>konkemalindi@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
     <div class="hero">
        <form action="https://formspree.io/f/mnqrvwql" method="POST">
            <div class="row">
                <div class="input-group">
                    <input type="text" id="name" required>
                    <label for="name" class="label">Your Name</label>
                </div>
                <div class="input-group">
                    <input type="text" id="number" required>
                    <label for="number" class="label">Phone No.</label>
                </div>
            </div>
            <input type="hidden" name="_subject" value="New Email ALERT!!!">
            <input type="hidden" name="_template" value="table">
            <input type="hidden" name="_autoresponse" value="Thank you for you message,I'll try to get back at you as soon as I can">
            <div class="input-group">
                <input type="email" id="email" required>
                <label for="email"> Email Id</label>
            </div>
            <div class="input-group">
                <textarea id="message" rows="8" required></textarea>
                <label for="message"> Your Message</label>
            </div>
            <!-- <input type="hidden" name="_next" value="http://127.0.0.1:5500/thankyou.html"> -->
            <button type="submit"> Send</button>
        </form>
    </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style scoped>
.contact {
    position: relative;
    min-height: 100vh;
    padding: 20px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.contact .content{
    max-width: 800px;
    text-align: center;
}
.contact .content h2{
    font-size: 36px;
    font-weight: 500;
    color: #fff;
    text-decoration: underline #00E7FF;
    font-family: 'Josefin Sans' sans-serif;
}
.contact .content p{
    font-weight: 300;
    color: #fff;
    width: 50%;
    margin: auto;
}
.contact .flex{
    display: flex;
    width: 100%;
    margin-top: 50px;
}
.container .contactInfo{
    width: 50%;
    display: flex;
    flex-direction: column;
}
.container .contactInfo .box{
    position: relative;
    padding: 20px 0;
    display: flex;
}
.container .contactInfo .box .icon{
    min-width: 60px;
    height: 60px;
    background-color: #fff;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 22px;
}
.container .contactInfo .box .text{
    display: flex;
    margin-left: 20px;
    font-size: 16px;
    color: #fff;
    flex-direction: column;
    font-weight: 300;
}
.container .contactInfo .box .text h3{
    font-weight: 500;
    color: #00E7FF;
}
.hero
{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
form
{
    width: 90%;
    max-width: 600px;
}
.input-group
{
    margin-bottom: 30px;
    position: relative;
}
input, textarea
{
    width: 100%;
    padding: 10px;
    outline: 0;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    background: transparent;
    font-size: 15px;
}
label
{
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px;
    color: #fff;
    cursor: text;
    transition: 0.2s;
}
button
{
    padding: 10px 0;
    color: #fff;
    outline: none;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
}
button:hover
{
    background-color: #fff;
    color: black;
    transition: 0.25s
}
input:focus~label,
input:valid~label,
textarea:focus~label,
textarea:valid~label
{
    top: -35px;
    font-size: 14px;
    color: #00E7FF;
}
.row
{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.row .input-group
{
    flex-basis: 48%;
}
.row .label
{
    padding-left: 7%;
}
</style>