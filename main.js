// Descrizione
// Partendo da un array di immagini, realizziamo uno slider con Vue.js come da mockup
// Al click delle freccette "sinistra" e "destra" lo slider cambierà l'immagine visibile passando alla successiva oppure alla precedente.
// Consigli
// Ricordiamoci come visualizzare un singolo elemento alla volta di un array
// Attenzione
// Quando le immagini terminano, lo slider ricomincerà dalla prima
// Bonus
// applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente ( riguardare la documentazione su i lifecycle hooks )
// Al click su un pallino verrà visualizzata l'immagine di riferimento associata ( il terzo pallino sarà associato alla terza immagine e così via..)

var app = new Vue(
    {
        el: "#banana",
        data: {
            immagggini:[
                'https://source.unsplash.com/random/?shoes',
                'https://source.unsplash.com/random/?fruits',
                'https://source.unsplash.com/random/?city',
                'https://source.unsplash.com/random'
            ],

            contatore: 0
        },
        
        methods: {
            imgSlide: function(){
                this.contatore += 1;

                if (this.contatore > (this.immagggini.length - 1)){
                    this.contatore = 0;
                }
                
            },
        },
    }
)