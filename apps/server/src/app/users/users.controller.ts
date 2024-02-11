import { Controller, Get } from '@nestjs/common';
import { UsersService } from './usesr.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    getData() {
        return this.usersService.getData();
    }
}
