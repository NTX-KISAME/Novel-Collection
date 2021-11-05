<template>
  <div class="navbar is-fixed-top is-primary" role="navigation" id="nav-desk">
    <div class="container mt-4">
      <div class="navbar-brand">
        <div class="navbar-item">
          <router-link to="/" class="has-text-white has-text-weight-bold is-uppercase logo-text" id="logo">Novelku</router-link>
        </div>
      </div>
      <!-- Right Menu -->
      <div class="navbar-end">
        <!-- Github -->
        <div class="navbar-item" id="r-menu1">
          <a class="has-text-white" href="//github.com/AriKusuma09"><i class="fab fa-github"></i></a>
        </div>
        <!-- Instagram -->
        <div class="navbar-item" id="r-menu2">
          <a class="has-text-white" href="//www.instagram.com/kaagarkuwa_09/"><i class="fab fa-instagram"></i></a>
        </div>
        <!-- Discord -->
        <div class="navbar-item" id="r-menu3">
          <a class="has-text-white" href="//res.cloudinary.com/datasave/image/upload/v1636086170/Data/web/novelku/about/discord/auth1_llkoze.png"><i class="fab fa-discord"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style>
#nav-desk {
  animation: navIn 0.65s ease;
}
@keyframes navIn {
  from {
    transform: translateY(-8rem);
  }
  to {
    transform: translateY(0);
  }
}
.logo-text {
  font-size: 3rem;
}
#logo {
  position: absolute;
}
/* Github */
#r-menu1:hover {
  animation: github 0.125s ease forwards;
}
/* Instagram */
#r-menu2:hover {
  animation: Instagram 0.125s ease forwards;
}
#r-menu2 > a > i:hover {
  animation: InstagramText 0.125s ease forwards;
}
/* Discord */
#r-menu3:hover {
  animation: Discord 0.125s ease forwards;
}
#r-menu3 > a > i:hover {
  animation: DiscordText 0.125s ease forwards;
}
#logo:hover {
  animation: zoomLogo 0.250s ease forwards;
}
/* Shadow Effect (Github) */
@keyframes github {
  to {
    text-shadow: 0 0 5px white;
  }
}
/* Shadow Effect (IG) */
@keyframes Instagram {
  to {
    text-shadow: 0 0 5px #d637e8;
  }
}
/* Text Effect (IG) */
@keyframes InstagramText {
  to {
    color: #D637E8FF;
  }
}
/* Shadow Effect (Discord)*/
@keyframes Discord {
  to {
    text-shadow: 0 0 5px #155bdc;
  }
}
/* Text Effect (Discord) */
@keyframes DiscordText {
  to {
    color: #155bdc;
  }
}
/* Logo Zoom Effect */
@keyframes zoomLogo {
 from {
   font-size: 3.00rem;
 } to {
  font-size: 3.20rem;
    }
}
</style>
