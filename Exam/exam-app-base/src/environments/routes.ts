import { environment } from './environment';

export const ROUTES = {
    LOGIN : environment.URL_SERVER.concat('api/auth/login'),
    SURVEY : environment.URL_SERVER.concat('api/survey')
}