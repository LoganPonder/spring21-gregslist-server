export default class Job {
    constructor({ company, description, jobTitle, hours, rate, id}) {
        this.company = company
        this.description = description
        this.jobTitle = jobTitle
        this.hours = hours
        this.rate = rate
        this.id = id
    }

    get Template() {
        return `
         <div class="col-md-4 mb-3">
      <div class="card shadow">
          <div class="card-body">
              <h4 class="card-title">${this.jobTitle}</h4>
              <h5 class="card-title>Bedrooms: ${this.company} | Bathrooms: ${
          this.rate
        }</h5>
              <p class="card-text">${this.description} | ${this.hours}</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.jobsController.deleteJob('${
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