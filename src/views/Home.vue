<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Profil/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Profil from '@/components/Profil.vue'


export default {
  name: 'Home',
  components: {
    Navbar,
    Profil
    
  }
}
</script>
