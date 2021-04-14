import { ProxyState } from '../AppState.js';
import { jobsService } from '../Services/JobsService.js'


function _draw() {
    let jobs = ProxyState.jobs;
    let template = '';
    jobs.forEach(job => template += job.Template);
    document.getElementById('jobs').innerHTML = template;
}


export default class JobsController {
    constructor() {
        ProxyState.on('jobs', _draw);

        this.getJobs();
    }

    async getJobs() {
        try {
            await jobsService.getJobs();
        } catch(error) {
            console.log(error);
        }
    }

    async createJob() {
        try {
            window.event.preventDefault();
            let form = window.event.target;

            let newJob = {
                company: form.company.value,
                rate: form.rate.value,
                jobTitle: form.title.value,
                hours: form.hours.value,
                description: form.description.value
            }

            await jobsService.createJob(newJob);
            form.reset();
            $("#new-job-form").modal("hide");
        } catch(error) {
            console.log(error)
        }
    }

    async deleteJob(id) {
        try {
            await jobsService.deleteJob(id);
        } catch (error) {
            console.log(error);
        }
    }
}