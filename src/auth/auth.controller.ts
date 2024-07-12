import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get('callback')
    async getAccessToken(@Query('code') code: string): Promise<any> {
        const accessToken = await this.authService.getAccessToken(code);
        return accessToken;
    }

    @Get('user')
    async getUserData(@Query('token') token: string): Promise<any> {
        const userData = await this.authService.getUserData(token);
        return userData;
    }

    @Get('client-id')
    async getClientId(): Promise<{ link: string; }> {
        return this.authService.getClientId();
    }
}
