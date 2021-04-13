import { carsService } from "../services/CarsService";
import BaseController from "../utils/BaseController";

export class CarsController extends BaseController {
  constructor() {
    super('/api/cars')
    this.router
      .get("/", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit) // ...../api/cars/_____
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let data = await carsService.getAll(req.query)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await carsService.getById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await carsService.create(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      // change whatever is in the url to be the id on the body
      req.body.id = req.params.id
      let data = await carsService.edit(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      let data = await carsService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}