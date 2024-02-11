import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getData(): { message: string } {
        return { message: 'Hello Users' };
    }
}
