console.log('Luke I am your father')
const dataContainer= document.querySelector(".flip-card-back")

async function getCharacters() {
    const characters = await fetch (`https://swapi.dev/api/people/`)
    const data= await characters.json();
    // console.log(data.results[0].name)
    // const characterData = document.createElement("p");
    // characterData.innerHtml = (data.results);
    // dataContainer.append(characterData);
    for (const character of data.results) {
    console.log(character.name)
    const name = document.createElement("h3")
    const characterInfo = document.createElement("ul")
    const height = document.createElement("li")
    const birth = document.createElement("li")
        name.innerHTML = character.name;
        characterInfo.innerHTML = "Info";
        height.innerHTML = character.height;
        birth.innerHTML = character.homeworld;
        name.append(characterInfo);
        characterInfo.append(height, birth)
        dataContainer.append(name)
        
    }

}
 getCharacters()