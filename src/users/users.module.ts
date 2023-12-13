import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UserssService } from './services/userss/userss.service';

@Module({
    imports: [],
    controllers: [UsersController],
    providers: [UserssService],
})
export class UsersModule {}
