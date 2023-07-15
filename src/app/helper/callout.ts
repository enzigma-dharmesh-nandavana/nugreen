import axios, { AxiosError, AxiosInstance } from 'axios'
import { HttpMethod } from '../models/enums';
import { Result } from '../models/models';
import { CookieService } from 'ngx-cookie-service';

export class Callout {

    constructor(public baseURL: string) { }
    cookie = new CookieService(document, 'browser')
    private async createRequest(method: HttpMethod, apiURL: string, body?: any): Promise<Result> {
        let reqObject: any = {
            method: method,
            url: this.baseURL + '/' + apiURL
        }
        if (body) {
            reqObject.data = body
        }
        const request: AxiosInstance = axios.create(reqObject);

        const sid = this.cookie.get('sid');
        const userToken = this.cookie.get('userToken');
        request.defaults.headers['Authorization'] = JSON.stringify({ sid: sid, userToken: userToken });

        return new Promise(async (resolve, reject) => {
            try {
                let response: Result = await request.request(request.defaults);
                return resolve(response.data);
            } catch (ex: any) {
                return reject(Result.error(ex.message));
            }
        });
    }

    async get(endpoint: string) {
        return await this.createRequest(HttpMethod.get, endpoint);
    }
    async post(endpoint: string, body: any) {
        return await this.createRequest(HttpMethod.post, endpoint, body);
    }
    async put(endpoint: string, body: any) {
        return await this.createRequest(HttpMethod.put, endpoint, body);
    }
    async delete(endpoint: string, sid: string, body?: any) {
        return await this.createRequest(HttpMethod.delete, endpoint, body);
    }

    // static async api(api: API, userToken?: string) {
    //     let url: string = api.url
    //     if (api.queryParams) {
    //         let queryParams = Object.keys(api.queryParams)
    //         if (queryParams.length) {
    //             if ((url as string).indexOf('?') === -1) {
    //                 url = url + '?'
    //             }
    //             queryParams.forEach((queryParam, index) => {
    //                 if ((api.queryParams as any)[queryParam]) {
    //                     url = url + queryParam + '=' + (api.queryParams as any)[queryParam]
    //                     if (queryParams.length !== index + 1) {
    //                         url = url + '&'
    //                     }
    //                 }

    //             })
    //         }
    //     }
    //     let request = await Callout.createRequest1(api.method, url, api.requestBody, userToken as string);
    //     try {
    //         let response = await request.request(request.defaults);

    //         if (typeof response.data === "string") {
    //             response.data = JSON.parse(response.data)
    //         }
    //         let result = new AbxResult()
    //         result.success = response.data.success
    //         result.statusCode = response.status
    //         if (response.data.success) {
    //             result.data = response.data.data
    //         } else {
    //             result.message = response.data.message
    //         }
    //         return result
    //     } catch (ex: any) {
    //         return AbxResult.error(ex.response.data ? ex.response.data.message : undefined, ex.response.data ? ex.response.data.statusCode : undefined, ex.response.data ? ex.response.data.data : undefined, ex.response.data ? (ex.response.data as AbxResult).statusCode : undefined);
    //     }
    // }
}