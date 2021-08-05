<template>
<div>
    <Navbar />
<div class="row">
      <div class="col">
          
          <h2>Kuliah: Universitas Catur Insan Cendekia Cirebon <br> Semester: 6 </h2> 
         
          <button class="btn btn-lg btn-success"> Submit</button>
          

      </div>
      <div class="col">
          <img src="../assets/image/Pendidikan.png" width="100%">

      </div>
  </div>
</div>
 
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'


export default {
  name: 'Pendidikan',
  components: {
    Navbar
    
  }
}
</script>

<style>

</style>