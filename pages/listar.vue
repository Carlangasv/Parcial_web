<template>
  <b-card title="Listado de todos los vehiculos">
    <b-table striped hover :items="lista_vehiculos">
      <template v-slot:cell(acciones)="row">
        <b-button size="sm" @click="calcularCosto(row)" class="mr-2">Dar salida</b-button>
      </template>
    </b-table>
  </b-card>
</template>

<script src="../assets/listar.js"></script>

<style>
</style>