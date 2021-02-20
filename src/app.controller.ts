import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home.html') //indicate the template to render
  getHome(): {} {
    return this.appService.getHome();
  }

  
  
}