let txtname = document.getElementById('txtname'),
     pokemonName = document.getElementById('pokemonName'),
     img = document.getElementById('img'),
     idPoke = document.getElementById('idPoke'),
     types = document.getElementById('types'),
     baseExperience = document.getElementById('baseExperience'),
     hp = document.getElementById('hp'),
     attack = document.getElementById('attack'),
     defense = document.getElementById('defense'),
     specialAttack = document.getElementById('specialAttack'),
     barhp = document.getElementById('barhp'),
     barattack = document.getElementById('barattack'),
     bardefense = document.getElementById('bardefense'),
     barspecial = document.getElementById('barspecial')

     

function searchPokemon(){
     const baseUrl1 ='https://pokeapi.co/api/v2/pokemon/'
     if(txtname.value > 898 || txtname.value === ''){
          alert("Insira um ID menor que 898 ou preencha o campo!")
          txtname.value = ''
     }else{
          fetch(`${baseUrl1}${txtname.value.toLowerCase()}`).then( response => {
               return response.json()
           })
           .then( data => {
              
              //EXPERIENCE
              baseExperience.innerHTML = `<strong>${data.base_experience}</strong>XP`
              //LIFE
              hp.innerHTML = `<strong>${data.stats[0].base_stat}</strong>HP`
              barhp.style.width = `${data.stats[0].base_stat + 20}px`
              //ATTACK
              attack.innerHTML = `<strong>${data.stats[1].base_stat}</strong>`
              barattack.style.width = `${data.stats[1].base_stat + 20}px`
              //DEFENSE
              defense.innerHTML = `<strong>${data.stats[2].base_stat}</strong>`
              bardefense.style.width = `${data.stats[2].base_stat + 20}px`
              //SPECIAL ATTACK
              specialAttack.innerHTML = `<strong>${data.stats[3].base_stat}</strong>`
              barspecial.style.width = `${data.stats[3].base_stat + 20}px`
              //TYPE
               types.innerHTML = data.types[0].type.name
              //NAME
               pokemonName.innerHTML = data.name
              //IMAGE
               img.src = `${data.sprites.front_default}`
                 //change border of image
               if(types.innerHTML == 'grass'){
                img.style.borderColor = 'green'
               }else if(types.innerHTML == 'electric'){
                img.style.borderColor = 'yellow'
               }else if(types.innerHTML == 'ghost'){
                img.style.borderColor = '#550f70'
               }else if(types.innerHTML == 'water'){
                img.style.borderColor = '#0a88db'
               }else if(types.innerHTML == 'rock'){
                img.style.borderColor = '#3a1c09'
               }else if(types.innerHTML == 'fire'){
                img.style.borderColor = '#EF5350'
               }else if(types.innerHTML == 'ground'){
                img.style.borderColor = '#7c7000'
               }else if(types.innerHTML == 'normal'){
                img.style.borderColor = '#999999'
               }else if(types.innerHTML == 'poison'){
                img.style.borderColor = '#c401ff'
               }else if(types.innerHTML == 'psychic'){
                img.style.borderColor = '#ff00b3'
               }else if(types.innerHTML == 'dark'){
                img.style.borderColor = '#201f20'
               }else if(types.innerHTML == 'fighting'){ //236
                img.style.borderColor = '#201f20'
               }else if(types.innerHTML == 'ice'){
                img.style.borderColor = '#59beb6'
               }else if(types.innerHTML == 'flying'){
                    img.style.borderColor = '#7446aa'
               }else if(types.innerHTML == 'fairy'){
                    img.style.borderColor = '#ac006a'
               }else if(types.innerHTML == 'dragon'){
                    img.style.borderColor = '#326824'
               }else if(types.innerHTML == 'steel'){
                    img.style.borderColor = '#505050'
               }else if(types.innerHTML == 'bug'){
                    img.style.borderColor = '#960000'
               }
               //ID
              idPoke.innerHTML = data.id
              if(data.id < 10){
                return idPoke.innerHTML = `#00${data.id}`
               }else if(data.id < 100){
                return idPoke.innerHTML = `#0${data.id}`
               }else{
                return idPoke.innerHTML = `#${data.id}`
               }
               
               
          }).catch( err => {
               let message = 'Pokemon não encontrado'
               console.log(err.message)
          })
           txtname.value = ''
     }

     
}
     