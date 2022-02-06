import axios, { AxiosResponse } from "axios";
import { LoginDTO } from "../dto/loginDto/login.dto";
import { LOGIN_ENDPOINT } from "../endpoints/endpoints";

// class that represents the connection to the POST login endpoint
export class LoginAPI {
    public static async validateLogin(values: LoginDTO): Promise<AxiosResponse<any, any>> {

        return await axios.post(LOGIN_ENDPOINT, {
            providerId: values.providerId,
            username: values.username,
            password: values.password
          });
    }
}