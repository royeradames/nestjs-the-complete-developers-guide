import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(
    private reportService: ReportsService,
    private userService: UsersService,
  ) {}

  // missing login guard due to skipping chapters
  // missing current user decorator. using paras and getting user from db to get a user
  @Post('/:id')
  async createReport(
    @Body() body: CreateReportDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    console.log({ id });
    const user = await this.userService.findOne(id);
    return this.reportService.createReport(body, user);
  }
}
