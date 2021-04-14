import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";

class HousesService {
    async getHouses() {
        let res = await api.get('houses');
        ProxyState.houses = res.data.map(h => new House(h));
    }

    async createHouse(newHouse) {
        console.log('createhouse in service');
        let res = await api.post('houses', newHouse);
        console.log(res.data);
        res.data.id = res.data._id
        let house = new House(res.data);
        ProxyState.houses = [...ProxyState.houses, house];
    }

    async deleteHouse(id) {
        await api.delete('houses/' + id);
        ProxyState.houses = ProxyState.houses.filter(h => h.id !== id);
    }

    async bid(id) {
        let car = ProxyState.houses.find(c => c.id == id);
        car.price += 10000;
        await api.put('houses/' + id, car);
        ProxyState.houses = ProxyState.houses;
    }
}


export const housesService = new HousesService();