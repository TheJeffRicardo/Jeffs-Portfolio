<template>
  <Navbar></Navbar>
  <transition name="fade" mode="out-in">
    <router-view class="overall" data-aos="fade-up"/>
  </transition>
  <Footer></Footer>
</template>

<script>
import Navbar from "@/components/NavbarComp.vue"
import Footer from "@/components/FooterComp.vue"

export default {
  components: {
    Navbar,
    Footer
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
  margin-left: 19.1%;
  overflow-x: hidden;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active, .fade-leave-active{
  transition: all .3s ease;
}
::-webkit-scrollbar{
  width: 1.2rem;
}
::-webkit-scrollbar-track{
  background-color: #222;
}
::-webkit-scrollbar-thumb{
  background-color: #0E7188;
  border-radius: 10px;
  transition: 0.1s ease-in-out;
}
::-webkit-scrollbar-thumb:hover{
  background-color: #0E8188;
}
@keyframes change{
  0%{
    background-position: top;
  }
  50%{
    background-position: bottom;
  }
} 
@media only screen and (max-width: 1050px){
    #app{
      margin-left: 14.9%;
    }
}
@media only screen and (max-width: 300px){
    #app{
      margin-left: 14.9%;
      width: 189%;
    }
}
</style>