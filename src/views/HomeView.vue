<template>
<div class="contain">
    <a target="_blank" :href="downloadCV" download>
        <button class="full-rounded">
        Download Resume
    </button>
    </a>
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

<style>
.contain{
    width: 100%;
    height: 74.35vh;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(0%, 30%);
}
button {
    font-size: 16px;
    position: relative;
    margin: auto;
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
a{
    text-decoration: none;
    color: #111;
}
</style>