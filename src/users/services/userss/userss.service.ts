import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UserssService {
    private fakeUsers=[{
        username:'ander',
        email:'ander@mail'
    },
{
    username:'ander2',
    email:'ander2@mail'
}]
    fetchUsers() {
        return this.fakeUsers
    }
    createUser(userDetails:CreateUserType) {
        this.fakeUsers.push(userDetails)
        return ;
    }
    fetchUserById(id:number) {
        return {id, username:'ander', email:'ander@mail'}
    }
}
