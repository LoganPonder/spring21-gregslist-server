import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";


function _draw() {
  let houses = ProxyState.houses;
  let template = "";
  houses.forEach((house) => {
    template += house.Template;
  });
  document.getElementById("houses").innerHTML = template;
}

export default class HousesController {
    constructor() {
        ProxyState.on('houses', _draw);

        this.getHouses();
    }

    async getHouses() {
        try {
            await housesService.getHouses();
        } catch(error) {
            console.log(error);
        }
    }

    async createHouse() {
        try {
            console.log("controller create house");
          window.event.preventDefault();
          const form = window.event.target;

          let newHouse = {
            price: form.price.value,
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            year: form.year.value,
            levels: form.levels.value,
            description: form.description.value,
            imgUrl: form.imgUrl.value,
          };

          await housesService.createHouse(newHouse);
          form.reset();
            $("#new-house-form").modal("hide");
        } catch (error) {
            console.log(error);
        }
    }

    async deleteHouse(id) {
        try {
            await housesService.deleteHouse(id);
        } catch(error) {
            console.log(error);
        }
    }

    async bid(id) {
        try {
            await housesService.bid(id);
        } catch(error) {
            console.log(error);
        }
    }
}