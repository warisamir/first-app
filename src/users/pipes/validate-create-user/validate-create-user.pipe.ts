import { ArgumentMetadata, HttpException, HttpStatus, Injectable, ParseIntPipe, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('inside validatecreateUserPipe')
    console.log(value);
    console.log(metadata)
    const parseAgeInt= parseInt(value.age.toString());
    if(isNaN(parseAgeInt)){
      console.log(`${value.age} is not a number!`);
      throw new HttpException('Invalid Data Type for property Age.Expected Number ',HttpStatus.BAD_REQUEST)
    }
     console.log(`${parseAgeInt} is a number.Returning ...`)
      return {...value,age:parseAgeInt}
  }
}
