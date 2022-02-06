import axios, { AxiosResponse } from "axios";
import { ProviderDTO } from "../dto/providerDto/provider.dto";

// connection between the front end and the backend (api) of the application
const LOGIN_ENDPOINT = 'http://localhost:3000/login';

export class LoginAPI {
    public static async validateLogin(values: {provider: number, username: string, password: string}): Promise<AxiosResponse<any, any>> {

        return await axios.post(LOGIN_ENDPOINT, {
            providerId: values.provider,
            username: values.username,
            password: values.password
          });
    }
}