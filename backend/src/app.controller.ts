import { Controller, Get, Res} from '@nestjs/common';
import {Response} from 'express' ;
import {join} from 'path';

@Controller('medicos')
export class MedicosController {
  @Get()
  getMedicos(@Res()res: Response){
    const medicos = join(__dirname, '../data/medicos.json')
    res.sendFile(medicos)
  }
}
