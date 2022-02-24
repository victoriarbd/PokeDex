app.component('list-pokemon', {
    props: {
      pokemons: {
        type : Array,
        required : true,
      },
      filtre: {
        type : String,
        required : false,
      }
    },
    template: 
    /*html*/
    `
    <div class = "container-fluid">
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
      <div v-for="pokemon in filter_list"
      :key="pokemons.id_pokemon" style="text-align: center;" class="col pokemoncard">      
          <img v-bind:src="pokemon.img_url" class="image-poke"/>
          <!-- Button trigger modal -->
          <button v-on:click="getCarac(pokemon.id_pokemon, pokemon.url, pokemon.img_url, pokemon.name)" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Details
          </button>
        <!-- details pokemon !-->
        <pokemon-detail :abilities="abilities"></pokemon-detail>
        <p class="idpokemon">
          {{pokemon.id_pokemon}}
        </p>
        <br/>
        <p class ="namepokemon">
          {{pokemon.name}}
        </p> 
      </div>
    </div>
  </div>

    `,
    data() {
      return {
         abilities : {},
      }
    },
    methods: {
        getCarac(id, url, url_image, name){ //récupère height, weight, types, abilities
            var self = this
            console.log(url)
            fetch(url)
            .then(function(response){
                return response.json();
            }).then(function(json_response){
                self.abilities["abilities"] = json_response['abilities']
                self.abilities['id'] = id
                self.abilities['name'] = name
                self.abilities['url_image'] = url_image
                self.abilities["height"] = json_response["height"]
                self.abilities['weight'] = json_response["weight"]
                self.abilities['types'] =json_response['types']
                console.log(self.abilities)
            }).catch(function(err){
                console.log('error:' + err.message)
                throw err
            })
        },

    },
    computed : {
      filter_list(){
        if (this.filtre != null){
          return this.pokemons.filter(p => { //pr chaque pokemon dans la liste de pokemons
            return (p.name.toLowerCase().indexOf(this.filtre.toLowerCase()) > -1) || (p.id_pokemon.toLowerCase().indexOf(this.filtre.toLowerCase()) > -1) 
          })
        }else{
          return this.pokemons
        }
      }
    }
  })