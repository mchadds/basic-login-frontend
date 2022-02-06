import axios, { AxiosResponse } from "axios";
import { ProviderDTO } from "./dto/provider.dto";

// connection between the front end and the backend (api) of the application
const PROVIDERS_ENDPOINT = 'http://localhost:3000/providers';

export class ProviderAPI {
    public static async getAllProviders(): Promise<AxiosResponse<any, any>> {
        return await axios.get(PROVIDERS_ENDPOINT);
    }
}