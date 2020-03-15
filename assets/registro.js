export default {
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const maxDate = new Date(today)
    return {
      max: maxDate,
      inEdition: false,
      vehiculo: {
        tipo: "Moto",
        placa: "KDE75C",
        color: "Negra",
        marca: "Akt",
        ciudad: "Medellin",
        fechaEntrada: "2019-12-12",
        hora: "11:30:00",
        acciones: true
      }, lista_vehiculos: [
        {
          tipo: "Moto",
          placa: "KDE75C",
          color: "Negra",
          marca: "Akt",
          ciudad: "Medellin",
          fechaEntrada: "2019-12-12",
          hora: "11:30:00",
          acciones: true
        }
      ],
      tipos: [
        { text: "Seleccione el tipo", value: null },
        "Moto",
        "Carro",
        "Bicicleta",
        "Camion"
      ],
    };
  }, mounted() {
    this.vehiculo = {
      tipo: null,
      placa: "",
      color: "",
      marca: "",
      ciudad: "",
      fechaEntrada: "",
      hora: "",
      acciones: true
    }, this.getLocalStorage()
  }, methods: {
    onSubmit() {
      if (this.vehiculo.fechaEntrada == "") {
        alert("Seleccione una fecha valida")
      } else if (this.vehiculo.hora == "") {
        alert("Seleccione una hora valida")
      } else if (this.validar(this.vehiculo)) {
        alert("la placa ya esta registrada")
      } else {
        alert("Vehiculo agregado")
        this.lista_vehiculos.push(this.vehiculo);
        this.vehiculo = {
          tipo: null,
          placa: "",
          color: "",
          marca: "",
          ciudad: "",
          fechaEntrada: "",
          hora: "",
          acciones: true
        }
        this.saveLocalStorage(),
          this.getLocalStorage()
      };

    },
    validar(item) {
      for (let c = 0; c < this.lista_vehiculos.length; c++) {
        if (this.lista_vehiculos[c].placa == item.placa) {
          return true
        }
      }
    },
    saveLocalStorage() {
      localStorage.setItem("vehiculo", JSON.stringify(this.lista_vehiculos));
    },
    getLocalStorage() {
      if (localStorage.getItem("vehiculo")) {
        this.lista_vehiculos = JSON.parse(localStorage.getItem("vehiculo"));
      }
    }, loadVehi({ item }) {
      let user = this.lista_vehiculos.find(vehiculo => vehiculo.placa == item.placa);
      this.inEdition = true;
      this.vehiculo = Object.assign({}, user);
      this.saveLocalStorage();

    }, deleteVehi({ item }) {
      let position = this.lista_vehiculos.findIndex(vehiculo => vehiculo.placa == item.placa);
      this.lista_vehiculos.splice(position, 1);
      this.saveLocalStorage();
    }, updateUser() {
      let position = this.lista_vehiculos.findIndex(
        vehiculo => vehiculo.placa == this.vehiculo.placa
      );
      if (this.validar(this.vehiculo)) {
        alert("Esta placa ya existe")
      } else {
        this.lista_vehiculos.splice(position, 1, this.vehiculo);
        this.vehiculo = {
          placa: "",
          color: "",
          marca: "",
          ciudad: "",
          fechaEntrada: "",
          hora: "",
          tipo: null,
          acciones: true
        };
        this.saveLocalStorage();
        this.inEdition = false;
      }
    
    }
  }
};