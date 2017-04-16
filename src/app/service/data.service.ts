export class DataService {
  private mobiles : Array<string>;

  constructor() {
    this.mobiles = new Array<string>();

    this.addMobile('Android');
    this.addMobile('Apple');
    this.addMobile('BB');
    this.addMobile('Samsung');
    this.addMobile('Windows');
  }

  getMobiles() {
    return this.mobiles;
  }

  addMobile(mob : string) {
    this.mobiles.push(mob);
  }
}
