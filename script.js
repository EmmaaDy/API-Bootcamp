/*(1)*/
fetch ('https://fe23-folkuniversitetet.github.io/API/Data/pokemons.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        data.forEach(function(pokemon) {
            console.log(pokemon.name);
          });
        })
    .catch(error => {
        console.error('Det uppstod ett fel:', error);
    });