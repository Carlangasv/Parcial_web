export default {
    data() {
      return {
        vehiculo: {
          placa: "",
          color: "",
          marca: "",
          ciudad: "",
          fechaEntrada: "",
          hora:"",
          tipo: null
        },
        tipos: [
          { text: "Seleccione el tipo", value: null },
          "Moto",
          "Carro",
          "Bicicleta",
          "Camion"
        ],
        show: true
      };
    },
    methods: {
      onSubmit() {
        console.log(vehiculo.fechaEntrada)
      },
    }
  };