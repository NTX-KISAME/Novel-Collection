<template>
  <div class="hero is-primary is-fullheight">
    <div class="hero-head">
      <Navbar/>
    </div>
    <!-- Backgrounds -->
    <div class="hero-video is-transparent" id="mainbg">
      <img src="../assets/bgimg/home/86_cut_005.png" id="bg-desktop" alt="bg">
    </div>
    <!-- Main Content -->
    <div id="gradient" ref="bg_overlay" hidden></div>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column has-text-centered">
            <h4 class="subtitle has-text-white is-2 mb-0 is-uppercase" style="position: relative; top: 1.5rem; opacity:0" ref="subtitle">Welcome to</h4>
            <h1 class="title has-text-white is-uppercase mt-0 mb-5" style="font-size: 7.0rem; opacity:0;" ref="title">Novelku</h1>
          </div>
        </div>
      </div>
      <!-- Button to the NEXT page -->
      <div class="btn-wrapper" @mouseenter="wrapperIn()" @click="goToList()" @mouseout="wrapperOut()">
        <button class="next-btn" ref="next-btn">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  </div>
  <!-- Novel List -->
  <div class="hero is-fullheight is-primary" ref="list">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column has-text-centered">
            <h1 class="has-text-white has-text-weight-bold is-uppercase" style="font-size: 4.5rem">Under Development</h1>
            <h1 class="has-text-white subtitle is-4">We will add once we done building this website</h1>
            <button @click="goToTop()" class="button is-white is-uppercase is-outlined">Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.btn-wrapper {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 6.5rem;
  cursor: pointer;
}
.next-btn {
  width: 6.5rem;
  position: relative;
  bottom: 0;
  margin-left: auto !important;
  margin-right: auto !important;
  background-color: transparent !important;
  border: none;
  color: white;
  font-size: 1.5rem;
}
/* BG Gradient Stuff */
#gradient {
  position: absolute;
  opacity: 0;
  height: 100vh;
  width: 100vw;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 25%, rgba(222,0,255,0) 100%);
}
#mainbg {
  animation: welcome 1.50s ease;
}
@keyframes welcome {
  0% {opacity: 0.0}
  50% {opacity: 0.0}
  100% {opacity: 0.3}
}
</style>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";
import home from "../services/animation/home";

export default {
  name: 'Home',
  components: {
    Navbar
  },
  mounted() {
    window.addEventListener('scroll', (scrol) => {
      console.log(scrol)
    });
    home.welcomeText(this.$refs.subtitle,this.$refs.title)
    home.buttonAnimation(this.$refs["next-btn"])
  },
  methods: {
    wrapperIn() {
      home.gradientAndTextIn(this.$refs.bg_overlay, this.$refs.title, this.$refs.subtitle)
    },
    wrapperOut() {
      home.gradientAndTextOut(this.$refs.bg_overlay, this.$refs.title, this.$refs.subtitle)
    },
    goToList() {
      window.scrollTo({
        top: 1000,
        left: 0,
        behavior: "smooth"
      })
    },
    goToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }
  }
}
</script>
