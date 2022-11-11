import axios from 'axios';

const baseURL= "https://jobs-demo-api-js.herokuapp.com"

export function listJobs(){
    return axios.get(`${baseURL}/jobs`);
}