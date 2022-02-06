
// interface representing data retrieved from the login post request
// TODO: ask about if they would use seperate dtos/intefaces for the request and response of the login call since they
// have different properties
export interface LoginDTO {
    providerId?: number;
    username: string;
    password?: string;
    name?: string;
}