<template>
  <div>
    <div class="container">
      <b-card title="Ingrese los datos">
        <b-form @submit="onSubmit()" action="javascript:void(0)" >
          <b-form-group label="Tipo vehiculo:" label-for="tipo">
            <b-form-select id="tipo" v-model="vehiculo.tipo" :options="tipos" required v-if="!inEdition"></b-form-select>
          </b-form-group>
          <b-form-group label="Ingrese la placa:" label-for="placa">
            <b-form-input
              id="placa"
              v-model="vehiculo.placa"
              required
              placeholder="Ingrese la placa"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Ingrese el color:" label-for="color">
            <b-form-input
              id="color"
              v-model="vehiculo.color"
              required
              placeholder="Ingrese el color"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Ingrese la marca:" label-for="marca">
            <b-form-input
              id="marca"
              v-model="vehiculo.marca"
              required
              placeholder="Ingrese la marca"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Ingrese la ciudad de la placa:" label-for="ciudad">
            <b-form-input
              id="ciudad"
              v-model="vehiculo.ciudad"
              required
              placeholder="Ingrese la ciudad"
            ></b-form-input>
          </b-form-group>
          <label for="fecha">Ingrese la fecha de registro</label>
          <b-form-datepicker
            :max="max"
            id="fechar"
            v-model="vehiculo.fechaEntrada"
            class="mb-2"
            placeholder="ingrese la fecha"
          ></b-form-datepicker>
          <b-form-group label="Ingrese la hora de entrada:" label-for="hora">
            <b-form-timepicker
              id="hora"
              placeholder="ingrese la hora"
              v-model="vehiculo.hora"
              locale="en"
            ></b-form-timepicker>
          </b-form-group>
          <b-button type="submit" variant="primary" v-if="!inEdition">Agregar vehiculo</b-button>
          <b-button @click="updateUser()" block variant="danger" v-else>Actualizar vehiculo</b-button>
        </b-form>
        <b-table striped hover :items="lista">
          <template v-slot:cell(acciones)="row">
            <b-button size="sm" @click="loadUser(row)" class="mr-2">Modificar</b-button>
            <b-button size="sm" @click="deleteUser(row)" class="mr-2">Eliminar</b-button>
          </template>
        </b-table>
      </b-card>
    </div>
  </div>
    
</template>

<script src="assets/registro.js/"></script>
<style>
.container {
  margin: 30px;
}
</style>