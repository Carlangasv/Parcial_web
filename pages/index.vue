<template>
  <div class="container">
    <div>
      <h1 class="title">Bienvenido al sistema de administracion</h1>
          <b-button block href="Registro" variant="primary" class="btn">Administrar vehiculos</b-button>
          <br />
          <b-button block href="listar" variant="primary" class="btn" v-if="!localExist">Ver vehiculos</b-button>
          <br />
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      localExist: false
    }
  },mounted(){
    if (localStorage == undefined){
        this.localExist = true
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-image: url("../images/Back.jpg");
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-size: 50px;
  color: white;
  text-align: start;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.btn{
  color:black;
  
}

</style>
