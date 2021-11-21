async function getDogPics() {
    const dogPics = await fetch (
        "https://dog.ceo/api/breeds/image/random");
    const dogContainer = document.querySelector(".dog-images");
    const jsondogs = await dogPics.json();
    const dogPic = document.createElement("img")
    console.log(jsondogs.message)
    dogPic.src = jsondogs.message
    dogPic.height= "400"
    dogPic.width= "600"
    dogContainer.append(dogPic);
    return jsondogs;
}
getDogPics()