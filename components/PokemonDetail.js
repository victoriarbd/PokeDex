app.component('pokemon-detail', {
    props: {
        abilities : {
            type : Object,
            required : true
        }
      },
      template: 
      /*html*/
      `
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">{{abilities.name}}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img v-bind:src="abilities.url_image" class="image-pre"/>
              <p>
                <br>
                Height : {{abilities.height}}
                <br>
                Weight : {{abilities.weight}}
                <p v-for="type in abilities.types">
                  Type : {{type.type.name}}
                </p>
                <p v-for="abilitie in abilities.abilities">
                  Abilitie : {{abilitie.ability.name}}
                </p>
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>          
        
      `
})
