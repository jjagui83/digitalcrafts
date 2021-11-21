async function getCharacters() {
    const characters = await fetch (`https://swapi.dev/api/people/`)
    const data= await characters.json();
    // console.log(data.results[0].name)
    // const characterData = document.createElement("p");
    // characterData.innerHtml = (data.results);
    // dataContainer.append(characterData)
}