<template>
  <div class="container">
    <div>
      <h1 class="title">Bienvenido al sistema de administracion</h1>
      <div>
        <b-card title="Sistema de administración" sub-title="Seleccione una opción">
          <b-button block href="Registro" variant="primary">Administrar vehiculos</b-button>
          <br />
          <b-button block href="#" variant="primary">Ver vehiculos</b-button>
          <br />
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
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
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-size: 50px;
  color: #35495e;
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
</style>
