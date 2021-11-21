async function getFoxPics() {
    const foxPics = await fetch (
        "https://randomfox.ca/floof/");
    const foxContainer = document.querySelector(".fox-images")
    const jsonfoxs = await foxPics.json();
    const foxPic = document.createElement("img")
    foxPic.src = jsonfoxs.image
    foxPic.height= "400";
    foxPic.width= "600";
    foxContainer.append(foxPic);
    return jsonfoxs; 
}
const foxButton = document.querySelector(".button");
foxButton.addEventListener("click", () => getFoxPics());
// getFoxPics()