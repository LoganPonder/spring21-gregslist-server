export default class House {
    constructor({ price, bedrooms, bathrooms, year, description, imgUrl, id, levels}) {
        this.id = id
        this.price = price
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.year = year
        this.levels = levels
        this.description = description
        this.imgUrl = imgUrl
    }

    get Template() {
        return `
        <div class="col-md-4 mb-3">
      <div class="card shadow">
          <img class="card-img-top" src="${this.imgUrl}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.price.toFixed(2)} | ${
          this.year
        } | Levels: ${this.levels}</h4>
              <h5 class="card-title>Bedrooms: ${this.bedrooms} | Bathrooms: ${
          this.bathrooms
        }</h5>
              <p class="card-text">${this.description}</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${
                this.id
              }')">Delete</button>
              <button type="button" class="btn btn-info" onclick="app.housesController.bid('${
                this.id
              }')">Bid</button>
          </div>
      </div>
    </div>
        `;
    }
}