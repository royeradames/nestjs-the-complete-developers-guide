import { Body, Controller, Post } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private reportService: ReportsService) {}

  // missing login guard due to skipping chapters
  @Post()
  createReport(@Body() body: CreateReportDto) {
    return this.reportService.createReport(body);
  }
}
