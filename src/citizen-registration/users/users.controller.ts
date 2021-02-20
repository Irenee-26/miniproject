import { Controller, Get, Post, Body, Put, Param, Delete, Render } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':firstname')
  findOne(@Param('firstname') firstname: string) {
    return this.usersService.findOne(+firstname);
  }

  @Put(':firstname')
  update(@Param('firstname') firstname: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+firstname, updateUserDto);
  }

  @Delete(':firstname')
  remove(@Param('firstname') firstname: string) {
    return this.usersService.remove(+firstname);
  }
  @Get('create') 
  @Render('users/create-user.html') 
  createForm() {
  }
}
