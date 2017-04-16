import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class MapService {

  constructor(
    private data : DataService
  ) { }

  getLocation() {
    
  }
}
