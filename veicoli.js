let pagina = document.querySelector("body");
//superclasse
class Veicoli {
    constructor(marca, modello, prezzo, velocitaMax, tipologia){
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.velocitaMax = velocitaMax;
        this.tipologia = tipologia;
    }
//Veicoli->auto
}
class Auto extends Veicoli{
    constructor(marca, modello, prezzo, velocitaMax, tipologia, numeroPorte){
        super(marca, modello, prezzo, velocitaMax, tipologia);
        this.numeroPorte = numeroPorte;
    }
}
//Veicoli->moto
class Moto extends Veicoli{
    constructor(marca, modello, prezzo, velocitaMax, tipologia, cc){
        super(marca, modello, prezzo, velocitaMax, tipologia);
        this.cc = cc;
    }
}
//Veicoli->Auto->fiat
const fiat = new Auto("Fiat", "Panda", 12000, 160, "Auto", 5);
//Veicoli->Auto->tesla
const tesla = new Auto("Tesla", "Model 3", 45000, 250, "Auto", 3);
//Veicoli->Auto->mercedes
const mercedes = new Auto("Mercedes Benz", "Classe A", 30000, 220, "Auto", 5);
//Veicoli->Auto->bmw
const bmw = new Auto("BMW", "Serie 3", 40000, 240, "Auto", 5);
//Veicoli->Auto->audi
const audi = new Auto("Audi", "A 4", 35000, 230, "Auto", 5);

//Veicoli->Moto->Kawasaki
const kawasaki = new Moto ("Kawasaki", "Ninja H2", 30000, 299, "Motociclo", 998);
//Veicoli->Moto->Ducati
const ducati = new Moto ("Ducati", "Panigale V4", 25000, 299, "Motociclo", 1103);
//Veicoli->Moto->Suzuki
const suzuki = new Moto ("Suzuki", "GSX-R1000R", 17000, 299, "Motociclo", 999);
//Veicoli->Moto->Harley
const harley = new Moto ("Harley Davidson", "Iron 883", 12000, 180, "Motociclo", 883);
//Veicoli->Moto->Triumph
const triumph = new Moto ("Triumph", "Street Triple RS", 13000, 225, "Motociclo", 765);

//classi in array
let autoArray = [fiat, tesla, mercedes, bmw, audi];
let motoArray = [kawasaki, ducati, suzuki, harley, triumph];

//creo tabella auto
function generoTabellaAuto (autoArray){
    //titoli tabella
    let tableHtml = `<h1>Tabella Auto</h1><table><th>marca</th><th>modello</th><th>prezzo</th><th>hp max</th><th>tipologia</th><th>nr.porte</th>`;
//ogni elemento auto in tabella con foreach
    autoArray.forEach(element => {
        tableHtml += `<tr><td>${element.marca}</td><td>${element.modello}</td><td>${element.prezzo}</td><td>${element.velocitaMax}</td><td>${element.tipologia}</td><td>${element.numeroPorte}</td></tr>`;
    });
    //chiudo table
        tableHtml += `</table>`

        return tableHtml;
};
const tableHtml = generoTabellaAuto(autoArray);

//creo tabella moto
function generoTabellaMoto (motoArray){
    //titoli tabella
    let tableHtml2 = `<h1>Tabella Moto</h1><table><th>marca</th><th>modello</th><th>prezzo</th><th>hp max</th><th>tipologia</th><th>cc</th>`;
//ogni elemento moto in tabella con foreach
    motoArray.forEach(element => {
        tableHtml2 += `<tr><td>${element.marca}</td><td>${element.modello}</td><td>${element.prezzo}</td><td>${element.velocitaMax}</td><td>${element.tipologia}</td><td>${element.cc}</td></tr>`;
    });
    //chiudo table
        tableHtml2 += `</table>`

        return tableHtml2;
};
const tableHtml2 = generoTabellaMoto(motoArray);

pagina.innerHTML = tableHtml + tableHtml2;




