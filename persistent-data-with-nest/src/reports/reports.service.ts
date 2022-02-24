import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dtos/create-report.dto';
import { Report } from './reports.entity';

@Injectable() // allows to get a share class instance manage by nestjs in the constructor
export class ReportsService {
  constructor(
    @InjectRepository(Report) private reportRepo: Repository<Report>,
  ) {}

  createReport(reportDto: CreateReportDto) {
    const report = this.reportRepo.create(reportDto);

    return this.reportRepo.save(report);
  }
}
