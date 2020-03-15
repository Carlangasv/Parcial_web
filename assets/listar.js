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
            var tipo = item.tipo
            let fechaActual = new Date(2020, 3, 14, 3, 30)
            let fechaEntrada = (item.fechaEntrada).toString().split("-")
            let horaT = (item.hora).toString()
            let hora2 = horaT.split(":")
            let fechaAct = new Date(parseInt(fechaEntrada[0]), parseInt(fechaEntrada[1]), parseInt(fechaEntrada[2]))
            let difFechas = Math.round((fechaActual.getTime() - fechaAct.getTime()) / (1000 * 60 * 60))
            console.log("fa", fechaActual.getFullYear(), "ma", fechaActual.getMonth(), "ha", fechaActual.getDay(), "hora", fechaAct.getHours())
            console.log("fs", fechaAct.getFullYear(), "ms", fechaAct.getMonth(), "hs", fechaAct.getDay(), "hora", fechaAct.getHours())
            console.log("diff", difFechas)
            let difHoras = Math.abs(fechaActual.getHours() - fechaAct.getHours())
            let difMinutos = fechaActual.getMinutes() < 30 ? 0 : 1
            console.log("fe", difFechas, "ho", difHoras, "mi", difMinutos)
            var fecha1 = moment("2016-10-01 05:30:00", "YYYY-MM-DD HH:mm:ss");
            var fecha2 = moment("2016-10-03 07:30:00", "YYYY-MM-DD HH:mm:ss");
            var diff = fecha2.diff(fecha1, 'h'); // Diff in hours
            console.log(diff);
            switch (tipo) {
                case 'Moto':
                    var deuda = 4000 * (difHoras + difMinutos + difFechas);
                    alert("la deuda es de ", deuda)
                    console.log(deuda)
                    break;
                case 'Carro':
                    var deuda = 8000 * (difHoras + difMinutos + difFechas);
                    console.log(deuda)
                    alert("la deuda es de ", deuda)
                    break;
                case 'Camion':
                    var deuda = 21000 * (difHoras + difMinutos + difFechas);
                    console.log(deuda)
                    alert("la deuda es de ", deuda)
                    break;
                case 'Bicicleta':
                    var deuda = 2000 * (difHoras + difMinutos + difFechas);
                    console.log(deuda)
                    alert("la deuda es de ", deuda)
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
