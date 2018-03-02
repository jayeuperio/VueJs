import RestUtilities from './restutilities';
import { ICredentials, IAuthResult } from '../models/auth/';
import { ApiList } from './common';

class AuthService {
    authenticate(credential: ICredentials) {
        return RestUtilities.post<IAuthResult>(`${ApiList.Auth}/authenticate`, credential);
    }
}

export const authService = new AuthService();