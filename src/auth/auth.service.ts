import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthService {


    private clientId = process.env.CLIENT_ID;
    private clientSecret = process.env.CLIENT_SECRET;
    private tokenUrl = 'https://github.com/login/oauth/access_token';

    async getAccessToken(code: string): Promise<any> {
        try {
            const response = await axios.post(
                this.tokenUrl,
                {
                    client_id: this.clientId,
                    client_secret: this.clientSecret,
                    code: code
                },
                {
                    headers: {
                        Accept: 'application/json',
                    },
                }
            );
            return response.data;
        } catch (error) {
            throw new HttpException(error.response.data, HttpStatus.BAD_REQUEST);
        }
    }

    async getUserData(token: string): Promise<any> {
        try {
            const response = await axios.get('https://api.github.com/user', {
                headers: {
                    Authorization: `token ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new HttpException(error.response.data, HttpStatus.BAD_REQUEST);
        }
    }

    getClientId(): { link: string; } {
        return { link: 'https://github.com/login/oauth/authorize?scope=user:email&client_id=' + this.clientId };
    }
}
