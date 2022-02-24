const app = Vue.createApp({
    data() {
        return {
            pokemons: [],
            filtre : null
        }
    },
    methods : {
        padLeadingZero(num, size){ //rajoute des 0 à gauche (pour les images)
            var x = num+"";
            while (x.length < size) x = "0" + x;
            return x;       
        },
        filterPokemon(search_poke){
            this.filtre = search_poke //on a importe le search dans le main
            console.log(this.filtre)
        }
    },
        created(){
            var self = this
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=300&offset=0'
            fetch(url)
            .then(function(response){
                return response.json();
            }).then(function(json_response){
                self.pokemons = json_response['results'] //recupere une liste de dictionnaire contenant en clé le nom et url
                for (index in self.pokemons){ //pr chaque objet de cette liste
                    let reg = self.pokemons[index]['url'].match(/https:\/\/pokeapi\.co\/api\/v2\/pokemon\/(\d+)/) //recherche l'id du pokemon 
                    let id_pokemon = reg[1] //recupere le groupe 1 ( (d) )
                    let number_image = id_pokemon //pokemon 1 à l'image 1
                    let number_image_with_zero = 0
                    number_image_with_zero = self.padLeadingZero(number_image,3)
                    self.pokemons[index]['id_pokemon'] = id_pokemon
                    self.pokemons[index]['img_url'] ='https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+number_image_with_zero+'.png'
                    
                }
                console.log(self.pokemons)
            }).catch(function(err){
                console.log('error:' + err.message)
                throw err
            })
            }
        
})
