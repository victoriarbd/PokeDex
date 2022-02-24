app.component('search-pokemon', {
    data() {
        return {
           search_poke : '',
        }
      },
    template: 
    /*html*/
    `
        <input v-model="search_poke" name="search" id="search_poke" placeholder="Search...">
        <button type="button" class="btn btn-outline-primary">Search</button>
    `,
    
    watch : {
        search_poke(search_poke){ //en para le v-model
            this.$emit('tapping-pokemon', search_poke)
            console.log(search_poke)
        }
    }
  })