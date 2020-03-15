export default {
    data() {
        return {
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
        }
    }, mounted() {
        this.getLocalStorage()
    }, methods: {
        calcularCosto({ item }) {
            let vehi = this.lista_vehiculos.find(
                vehiculo => vehiculo.placa == item.placa
            )
            var fechaAct = new Date();

            let fech = vehi.fechaEntrada.split("-")
            let hor = vehi.hora.split(":")
            let fecha = new Date(fech[0],(fech[1] - 1),fech[2]
            ,hor[0],hor[1]);
            var tiempo = Math.round((fechaAct.getTime() - fecha.getTime())/(1000*60*60));
            switch (item.tipo) {
                case 'Moto':
                    var deuda = 4000 * (tiempo);
                    alert("Tardo "+tiempo+" horas y la deuda es de "+deuda)
                    break;
                case 'Carro':
                    var deuda = 8000 * (tiempo);
                    alert("Tardo "+tiempo+" horas y la deuda es de "+deuda)
                    break;
                case 'Camion':
                    var deuda = 21000 * (tiempo);
                    alert("Tardo "+tiempo+" horas y la deuda es de "+deuda)
                    break;
                case 'Bicicleta':
                    var deuda = 2000 * (tiempo);
                    alert("Tardo "+tiempo+" horas y la deuda es de "+deuda)
                    break;
            }

        }, saveLocalStorage() {
            localStorage.setItem("vehiculo", JSON.stringify(this.lista_vehiculos));
        },
        getLocalStorage() {
            if (localStorage.getItem("vehiculo")) {
                this.lista_vehiculos = JSON.parse(localStorage.getItem("vehiculo"));
            }
        }
    }
}
