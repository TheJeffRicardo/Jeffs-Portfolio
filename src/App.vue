<template>
  <Navbar></Navbar>
  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>
</template>

<script>
import Navbar from "@/components/NavbarComp.vue"

export default {
  components: {
    Navbar
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #feffff;
  background-color: #111;
  margin-left: 19.773%;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active, .fade-leave-active{
  transition: all .3s ease;
}
@keyframes change{
  0%{
    background-position: top;
  }
  50%{
    background-position: bottom;
  }
} 
</style>