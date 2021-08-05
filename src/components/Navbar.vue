<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
     <div class="container">
          <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
           <router-link class="nav-link" to="/">Profil</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/Pendidikan">Pendidikan</router-link>
          </li>
         <li class="nav-item">
              <router-link class="nav-link" to="/Usaha">Usaha</router-link>
          </li>
          
           <li class="nav-item">
              <router-link class="nav-link" to="/Hubungisaya">Hubungisaya</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
     </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>