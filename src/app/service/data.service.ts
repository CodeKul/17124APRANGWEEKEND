import { DataListener } from './data.service';
import { EventEmitter, Injectable } from '@angular/core';

export interface DataListener {
  listen(mob: string): void;
}

@Injectable()
export class DataService {

  private eventEmmiter: EventEmitter<string>;
  private mobiles: Array<string>;

  constructor() {
    this.mobiles = new Array<string>();
    this.eventEmmiter = new EventEmitter<string>();

    this.addMobile('Android');
    this.addMobile('Apple');
    this.addMobile('BB');
    this.addMobile('Samsung');
    this.addMobile('Windows');
  }

  getMobiles() {
    return this.mobiles;
  }

  addMobile(mob: string) {
    this.mobiles.push(mob);
    this.eventEmmiter.emit(mob);
  }

  listen(dataListener: DataListener) {
    this.eventEmmiter.subscribe(mob => dataListener.listen(mob));
  }
}
