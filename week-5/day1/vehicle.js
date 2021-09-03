console.log('tie fighter')
const dataContainer= document.querySelector(".mainContainer")





async function getVehicle() {
    const vehicles = await fetch (`https://swapi.dev/api/vehicles/`)
    const data= await vehicles.json();
    console.log(data)

 for (const vehicle of data.results) {
    console.log(vehicle.results);
    const name = document.createElement("h3");
    const vehicleData = document.createElement("ul");
    const model = document.createElement("li");
    const type = document.createElement("li");
    const speed = document.createElement("li");
        name.innerHTML = vehicle.name;
        vehicleData.innerHTML = "Specs:";
        model.innerText = vehicle.model;
        type.innerHTML = vehicle.vehicle_class;
        speed.innerHTML = vehicle.max_atmosphering_speed;
        name.append(vehicleData);
        vehicleData.append(model, type, speed);

        dataContainer.append(name);
    // }
 }
}
const button = document.querySelector(".button");
button.addEventListener("click", () => getVehicle());