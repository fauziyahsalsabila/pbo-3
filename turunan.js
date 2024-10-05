class Kapal {
    constructor(nama, jenis, panjang, lebar) {
      this.nama = nama;
      this.jenis = jenis;
      this.panjang = panjang;
      this.lebar = lebar;
    }
    infoKapal() {
      return `${this.nama} memiliki jenis kapal ${this.jenis} yang berukuran ${this.panjang} x ${this.lebar} m.`;
    }
  }
  class kapalPenumpaang extends Kapal{
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
      super(nama, jenis, panjang, lebar);
      this.kapasitasPenumpang = kapasitasPenumpang; 
    }
    infoKapal() {
      return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }
  }
  //turunan subclass//
  class kecepatanKapal extends kapalPenumpaang {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang, kecepatanmax){
        super(nama, jenis, panjang, lebar, kapasitasPenumpang);
        this.kecepatanmax = kecepatanmax;
    }
    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kecepatan maksimum ${this.kecepatanmax} knot.`;
      }
    }
    //turunan superclass//
    class kerusakanKapal extends Kapal {
        constructor (nama, jenis, panjang, lebar, rusak){
            super(nama, jenis, panjang, lebar);
            this.rusak = rusak;
        }
        infoKapal(){
            return`${super.infoKapal()} Kapal ini mengalami kerusakan bagian ${this.rusak}.`;
        }
    }
//const kapalFery = new kapalPenumpaang("Budi Ono", "Fery", 200, 100, 500, 70);

const kapalFery = new kecepatanKapal("Budi Ono", "Fery", 200, 100, 500, 70);

//const kapalFery = new kerusakanKapal("Budi Ono", "Fery", 200, 100, "jangkar");
console.log(kapalFery.infoKapal());
  