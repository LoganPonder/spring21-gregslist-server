import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class HousesService {
  async getAll(query = {}) {
    return await dbContext.Houses.find(query);
  }

  async getById(id) {
    let data = await dbContext.Houses.findOne({ _id: id });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async create(body) {
    return await dbContext.Houses.create(body);
  }
  async edit(body) {
    // FindOneAndUpdate takes the find object, then the update, then says return the post updated object
    let data = await dbContext.Houses.findOneAndUpdate({ _id: body.id }, body, {
      new: true,
    });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async delete(id) {
    let data = await dbContext.Houses.findOneAndDelete({ _id: id });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return "Successfully Deleted";
  }
}

export const housesService = new HousesService();
