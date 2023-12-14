import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UserssService } from './services/userss/userss.service';
import { ExampleMiddleware } from './middleware/example/example.middleware';
import { AnotherMiddleware } from './middleware/another/another.middleware';

@Module({
    imports: [],
    controllers: [UsersController],
    providers: [UserssService],
    
})
export class UsersModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AnotherMiddleware).forRoutes({
            path: 'users',
            method: RequestMethod.GET,
        },
        {
            path: 'users/:id',
            method: RequestMethod.POST,
        })
        .apply(ExampleMiddleware).forRoutes({
            path: 'users',
            method: RequestMethod.GET,
        },
        {
            path: 'users/:id',
            method: RequestMethod.POST,
        })
    }
}
