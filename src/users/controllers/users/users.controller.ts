import { Controller, Get, Post,Query, Body, Param, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe, HttpException, HttpStatus } from '@nestjs/common';
import { Request,Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UserssService } from '../../services/userss/userss.service';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
@Controller('users')
export class UsersController {
    constructor(private UserssService:UserssService) {
        
        }
    @Get()
    getUsers(){
        return this.UserssService.fetchUsers();
    }
    

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData:CreateUserDto) {
        console.log(typeof(userData.age.toPrecision()));
        this.UserssService.createUser(userData);
        return {};
    };
    

    @Get(':id')
    getUserbyId(@Param('id',ParseIntPipe) id:number ) {
        const user=this.UserssService.fetchUserById(id);
        if(!user)
        throw new HttpException('user not found',HttpStatus.BAD_REQUEST);
        return user;
    }
}