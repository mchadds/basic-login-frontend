import axios, { AxiosResponse } from "axios";
import { PROVIDERS_ENDPOINT } from "../endpoints/endpoints";

// class the retrieves results from provider api endpoint
export class ProviderAPI {
    public static async getAllProviders(): Promise<AxiosResponse<any, any>> {
        return await axios.get(PROVIDERS_ENDPOINT);
    }
}