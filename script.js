/*(1)*/
fetch ('https://fe23-folkuniversitetet.github.io/API/Data/pokemons.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Det uppstod ett fel:', error);
    });