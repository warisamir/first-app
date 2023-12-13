import { Controller, Get, Post,Query, Body, Param, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe } from '@nestjs/common';
import { Request,Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
@Controller('users')
export class UsersController {
    @Get()
    getUsers(@Query('sortDesc',ParseBoolPipe) sortDesc:boolean ) {
        console.log(sortDesc);
        return {username:'ander',email:'ander@mail'};
    }
    

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData:CreateUserDto) {
        console.log(userData.email);
        return {};
    };
    

    @Get(':id')
    getUserbyId(@Param('id',ParseIntPipe) id:number ) {
       console.log(id);
       return {id}; 
    }
}