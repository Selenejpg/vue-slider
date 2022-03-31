//Partiamo da un array di immagini
var app = new Vue({
    el: '#root',
    data: {
        index:0,

        immagini: [
            './1_Gsq1yHsb3cV2JKuj5c_SoQ.jpeg',
            './luca-bravo-o453m2liufs-unsplash-1.jpeg',
            './NIK95.lead_.GettyImages_1037349126.jpg', 
            './Sudafrica_fynbos_1.webp'
        ]
    },
    //Al click delle freccette "sinistra" e "destra" lo slider cambierà l'immagine visibile passando alla successiva oppure alla precedente.
    methods: {
        avanti: function () {
            this.index += 1 ;
            if (this.index > (this.immagini.length - 1)) {
                this.index = 0;
            }
        },
        indietro: function () {
            this.index -= 1 ;
            if (this.index < 0) {
                this.index = (this.immagini.length - 1);
            }
        }
    }
    
})