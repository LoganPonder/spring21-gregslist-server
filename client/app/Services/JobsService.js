import { ProxyState } from '../AppState.js'
import Job from '../Models/Job.js';
import { api } from '../Services/AxiosService.js';

class JobsService {
    async getJobs() {
        let res = await api.get('jobs')
        ProxyState.jobs = res.data.map(j => new Job(j));
    }

    async createJob(newJob) {
        let res =  await api.post('jobs', newJob);
        res.data.id = res.data._id;
        let job = new Job(res.data);
        ProxyState.jobs = [...ProxyState.jobs, job];

    }

    async deleteJob(id) {
        await api.delete('jobs/' + id)
        ProxyState.jobs = ProxyState.jobs.filter(j => j.id !== id);
    }
}

export const jobsService = new JobsService();
