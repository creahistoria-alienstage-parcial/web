const app = Vue.createApp({
    data() {
        return {
            personajes: [
                {
                    nombre: "Till",
                    puntaje: 12
                },

                {
                    nombre: "Ivan",
                    puntaje: 15.5
                },

                {
                    nombre: "Mizi",
                    puntaje: 14
                },

                {
                    nombre: "Sua",
                    puntaje: 9.5
                },

                {
                    nombre: "Luka",
                    puntaje: 16
                },
                {
                    nombre: "Hyuna",
                    puntaje: 0
                },
                {
                    nombre: "Hyunwoo",
                    puntaje: 0
                }

            ],
            
            ocussLargo:[
                {
                    color:"rosa",
                    img:"img/pj_uss/largo-rosa.webp",
                    alt:"personaje con el pelo largo y rosa"
                },
                {
                    color:"celeste",
                    img:"img/pj_uss/largo-celeste.webp",
                    alt:"personaje con el pelo largo y celeste"
                },
                {
                    color:"negro",
                    img:"img/pj_uss/largo-negro.webp",
                    alt:"personaje con el pelo largo y negro"
                },
                {
                    color:"castano",
                    img:"img/pj_uss/largo-castano.webp",
                    alt:"personaje con el pelo largo y castano"
                },
                {
                    color: "rubio",
                    img:"img/pj_uss/largo-rubio.webp",
                    alt:"personaje con el pelo largo y rubio",
                },
                {
                    color:"pelirrojo",
                    img:"img/pj_uss/largo-pelirojo.webp",
                    alt:"personaje con el pelo largo y pelirrojo"
                }
            ],
            ocussCorto:[
                {
                    color:"rosa",
                    img:"img/pj_uss/corto-rosa.webp",
                    alt:"personaje con el pelo corto y rosa"
                },
                {
                    color:"celeste",
                    img:"img/pj_uss/corto-celeste.webp",
                    alt:"personaje con el pelo corto y celeste"
                },
                {
                    color:"negro",
                    img:"img/pj_uss/corto-negro.webp",
                    alt:"personaje con el pelo corto y negro"
                },
                {
                    color:"castano",
                    img:"img/pj_uss/corto-castano.webp",
                    alt:"personaje con el pelo corto y castano"
                },
                {
                    color: "rubio",
                    img:"img/pj_uss/corto-rubio.webp",
                    alt:"personaje con el pelo corto y rubio",
                },
                {
                    color:"pelirrojo",
                    img:"img/pj_uss/corto-pelirojo.webp",
                    alt:"personaje con el pelo corto y pelirrojo"
                }
            ],
            

            datospjuss: "",

        }

    },

    methods: {
        conseguirpj(datospj) {
            console.log('Datos form', datospj);
            this.datospjuss = datospj;

        },
        filtroMayus(valor){
            valor = valor.trim();
           return valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase()
            // return valor.toUpperCase()
        },
  

    },



});


app.component('comp-form1', {
    data() {
        return {
            nombreuss: "",
            colorPelo: " ",
            largoPelo: " ",
            mundo: " ",

            error: false,

        }
    },

    methods: {
        guardarpj: function () {
            if (this.largoPelo == " " || this.colorPelo == " " || this.mundo == " " || this.nombreuss == " ") {
                this.error = true;
            } else {
                this.$emit('datospersonaje', { largoP: this.largoPelo, colorP: this.colorPelo, mundo: this.mundo, nombrepj:this.nombreuss});
                this.error = false;
            }


        },



    },


    template:
        `
        <form v-on:submit.prevent = "guardarpj" class="d-flex justify-content-evenly">

        <div>
         <label for="nombreuss"> Nombre de tu personaje </label>
         <input type="text" id="nombreuss" v-model="nombreuss" required>
        </div>

         <div>
         <label for="largopelo"> largo del pelo </label>
         <select v-model= "largoPelo" id="largopelo" >
         <option disabled value=" "> Escoge estilo </option>
         <option value="largo"> Largo </option>
         <option value="corto"> Corto </option>
         </select>
        </div>


        <div>
        <label for="colorpelo"> Color de pelo de tu pj </label>
         <select v-model= "colorPelo" id="colorpelo">
         <option disabled value=" "> Escoge el color </option>
         <option value="rosa">rosa  </option>
         <option value="celeste">celeste  </option>
         <option value="negro">negro  </option>
         <option value="castano">castaño  </option>
         <option value="rubio">rubio  </option>
         <option value="pelirrojo">pelirrojo  </option>
        </select>
        </div>

        <div>
         <label for="mundo"> Mundo para tu historia </label>
        <select v-model= "mundo" id="mundo">
         <option disabled value=" "> mundo a elegir </option>
         <option value="original"> Original con aliens</option>
         <option value="actores"> Actores </option>
         <option value="escuela"> Escolar/Instituto </option>
         </select>
        </div>
         
         <button type="submit"> Siguiente</button>
         
         </form>
         
     <span v-show="error"> Todos los campos deben tener un valor elegido</span>
    
    `

    ,
    emits: ['datospersonaje']

})

app.component('form-aliens', {
    data() {
        return {

            puntajeOtro: 0,
            vozuss: 0,
            visualuss: 0,
            talentouss: 0,
            estaminauss: 0,
            contrincante: "",
            puntostotales: 0,
            error: false,
            finalVisible: false,

        }
    },

    methods: {
        cuentatotal: function () {

            if (this.vozuss > 5 || this.visualuss > 5 || this.talentouss > 5 || this.estaminauss > 5 || this.contrincante == "") {
                this.error = true;
            }else {
                this.puntostotales = this.vozuss + this.visualuss + this.talentouss + this.estaminauss;
                this.finalVisible=true;
                this.error = false;
            
            }

            for (const x of this.personaje) {
                console.log(x.nombre, x.puntaje)

                if (x.nombre === this.contrincante) {
                    this.puntajeOtro = x.puntaje;
                } 
            }
            
        },


    },
    props: {
        personaje: {
            type: Array,
            required: true
        },
        
    },
    template: `
    
    <div  class="d-flex justify-content-center form2">
    <form v-on:submit.prevent ="cuentatotal" novalidate class="d-flex flex-column">


        <label for="vozuss"> Nivel de tu voz </label>
        <input type="number"  name="vozuss" id="vozuss" min="0" max="5" value="0" v-model="vozuss">
    


        <label for="visualuss"> Nivel de tu apariencia </label>
        <input type="number"  name="visualuss" id="visualuss" min="0" max="5" value="0" v-model="visualuss">
    


        <label for="talentouss"> Nivel de tu talento </label>
        <input type="number"  name="talentouss" id="talentouss" min="0" max="5" value="0" v-model="talentouss">
    


        <label for="estaminauss"> Nivel de tu resistencia </label>
        <input type="number"  name="estaminauss" id="estaminauss" min="0" max="5" value="0" v-model="estaminauss" >
    


         <label for="contrincante"> Escoge tu contrincante </label>
        <select v-model= "contrincante" id="contrincante">
         <option disabled value=""> Personajes </option>
         <option> Till</option>
         <option> Ivan</option>
         <option> Mizi </option>
         <option> Sua </option>
         <option> Luka </option>
         </select>



        <button type="submit"> Siguiente</button>
        
        
        
    </form>
    <img src="img/pagina/mundo-alien.webp" alt="4 amigos juntos con ropa blanca">
    </div>
    <span v-show="error"> todos los valores deben estar entre 0-5 y un contrincante</span>

        <div v-show="finalVisible" class="finalPelea">
                            <p> Luego de haber sido obligado a entrenar cada una de sus cualidades finalmente llego el
                                día en que se subio al escenario.
                                las luces brillaban tu ristri, los nervios se sentian pero no se dejaria ganar tan
                                facilmente contra {{this.contrincante}}.
                                Aun conociendo sus habilidades luchando hasta el final, dejando su voz y su vida en
                                aquel escenario...</p>
                            <p v-if="this.puntajeOtro >= this.puntostotales">
                                Pese a sus esfuerzos y las exaustivas horas de entrenamiento su rival lo había
                                superado,
                                la musica se detuvo y un ruidos de
                                disparo se escucharon seguido de un inexplicable dolor en su corazón, viendo como todas
                                las luces se apagaban
                            </p>
                            <p v-else>Cuando sentía que la voz se le agotaba la musica se detuvo y los resultados
                                fueron visibles, había ganado y ahora
                                era el unico humano parado sobre el escenario aun con pulso</p>

        </div>

    `


})



app.component('form-actores', {
    data(){
        return{
            estadopj: "",
            ensaya:"",
            amigo:"",
            admira:"",
            error: false,
            textofinal:false,
        }
    },
    props: {
        personaje: {
            type: Array,
            required: true
        }
    },
    methods:{
        completo(){
            if (this.estadopj == "" || this.ensaya === "" || this.amigo === "" || this.admira === "") {
                this.error = true;
            } else {
                this.error = false;
                this.textofinal = true;
            }

        }
    },

    template:`

    <div class="d-flex justify-content-center form2">
    <form v-on:submit.prevent ="completo" novalidate class="d-flex flex-column">
     <label for="estadopj"> Escoge que final tuvo tu personaje en el escenario </label>
        <select v-model= "estadopj" id="estadopj">
         <option disabled value=""> Actuo la escena </option>
         <option value="vive"> aun vivo </option>
         <option value="muere"> mueriendo</option>
         </select>

         <label for="ensaya"> ¿Con quién ensaya tu personaje? </label>
         <select v-model= "ensaya" id="ensaya" >
         <option disabled value=""> Ensaya con </option>
         <option v-for="x in personaje"> {{x.nombre}}</option>
         </select>

        <label for="amigo"> ¿Con quién te llevas mejor del set? </label>
         <select v-model= "amigo" id="amigo" >
         <option disabled value=""> con... </option>
         <option v-for="x in personaje"> {{x.nombre}}</option>
         </select>

         <label for="admira"> ¿A quién quieres impresionar del set? </label>
         <select v-model= "admira" id="admira" >
         <option disabled value=""> admiro a... </option>
         <option v-for="x in personaje"> {{x.nombre}}</option>
         </select>

         <button type="submit"> Siguiente</button>
    </form>
    <img src="img/pagina/mundo-actores.webp" alt="3 amigos actores juntos con ropa cotidiana">
</div>
    <span v-show="error"> todas las casillas deben tener una opción</span>

    <div v-show="textofinal"  class="final">
        <p>Luego de otro día agotador de grabación llegaron a aquella escena final donde tu personje {{estadopj}} tu voz y cuerpo
        estaban agotados del esfuerzo, gracias a que habían practido hasta el cansancio aquella escena
        con {{ensaya}} pudiste lucirte en la producción.
        {{admira}} pudo notar tu esfuerzo y los gratificantes resultados que hasta se
        acerco a saludarte y felicitarte. Cuando se fue se acerco
        {{amigo}} con emoción porque pudiste conseguir su reconocimiento, para terminar el día
        fueron juntos a comer algo delicioso</p>
    </div>
    
    `
})

app.component('form-escuela', {
 data(){
    return{
        atencion:"",
        club:"",
        amigos:"",
        crush:"",
        malarelacion:"",
        pasatiempo:"",
        error:false,
        textofinal:false,

    }
 },
 props: {
    personaje: {
        type: Array,
        required: true
    }},

 methods:{
    completoAmigos(){
        if (this.atencion == "" || this.club === "" || this.crush === "" || this.pasatiempo === "") {
            this.error = true;
        } else {
            if(this.club == "campo"){
                this.amigos = "Ivan y Hyunwoo";
            } else if(this.club == "gimnasio" ){
                this.amigos = "Mizi";
            }else if(this.club == "el salón de musica"){
                this.amigos = "Till";
            } else if(this.club =="el salón del consejo" ){
                this.amigos = "Luka y Sua";
            } else{
                this.amigos= "Hyuna";
            }
            this.error = false;
            this.textofinal = true;
        }
    }
 },
template:`

<div class="d-flex justify-content-center form2">
    <form v-on:submit.prevent ="completoAmigos" novalidate  class="d-flex flex-column">


    <span> ¿Prestas atención en clase? </span>
    <label for="si"> si </label>
    <input type="radio" id="si" value="prestaste" v-model="atencion">

    <label for="no"> no </label>
    <input type="radio" id="no" value="no prestaste" v-model="atencion">


    <label for="club"> ¿A qué club perteneces? </label>
    <select v-model= "club" id="club" >
    <option disabled value=""> Club </option>
    <option value="campo"> Deportistas</option>
    <option value="gimnasio"> Porristas</option>
    <option value="salón de musica"> de musica</option>
    <option value="salón del consejo"> Consejo estudiantil</option>
    <option value="salon del periodico escolar"> Periodico escolar</option>
    </select>

    <label for="crush"> ¿Quién te gusta? </label>
    <select v-model= "crush" id="crush" >
    <option disabled value=""> Me gusta... </option>
    <option v-for="x in personaje"> {{x.nombre}}</option>
    </select>
    
    <label for="malarelacion"> ¿Con quién no te llevas bien? </label>
    <select v-model= "malarelacion" id="malarelacion" >
    <option disabled value=""> Con... </option>
    <option v-for="x in personaje"> {{x.nombre}}</option>
    </select>

    <label for="pasatiempo"> ¿Qué te gusta hacer en tu tiempo libre? </label>
    <select v-model= "pasatiempo" id="pasatiempo" >
    <option disabled value=""> Me gusta... </option>
    <option value="correr juntos"> correr</option>
    <option value="ir a la biblioteca"> leer</option>
    <option value="ir a una cafetería"> tomar café</option>
    <option value="ver una serie juntos"> ver series</option>
    <option value="ir al cine"> ver peliculas</option>
    <option value="tomar un helado"> el helado </option>
    <option value="ir dibujar al otro">dibujar</option>
    <option value="ir a un baile"> bailar </option>
    </select>

     <button type="submit"> Siguiente</button>

    </form>
    <img src="img/pagina/mundo-escuela.webp" alt="6 amigos juntos con ropa de la escuela">
</div>
  <span v-show="error"> todas las casillas deben tener una opción</span>

 <div v-show="textofinal"  class="final">
 <p>Fuiste a la escuela apuerado llegando algo tarde a clases a la cual {{atencion}} mucha
    atención, estas terminaron pronto ya que ensiabas ir a ver
    a tus compañeros en el{{club}}, ahí ya te estaba esperando {{amigos}} con quien pasabas gran parte del tiempo
    siendo casi una segunda familia, hacian sus actividades y les contabas como {{ malarelacion}} estuvo
    viendote mal todo él día. parecia tener algo contra ti pero
    no le diste mucha importancia, tu mente estaba en alguien más, lo que no esperabas es que a la
    salida del instuto esa persona, {{crush}} te estaba esperando
    con una calida sonrisa, te acercaste con algo de nervios escuchando lo que parecía una confesion de
    su parte y para profundizar más en aquellos sentimientos
    te invito a {{pasatiempo}} en ese momento, extendiendo la mano en tu dirección esperando tu respuesta. </p>
 </div>

`
})

app.mount('#app');


