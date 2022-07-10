import axios from "axios"
export const axiosInstance = axios.create({
    baseURL : "https://dashboard.heroku.com/apps/urlshortnershortly/deploy/heroku-git/api/urls/"
})