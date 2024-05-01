import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  private data: any;

  constructor() { }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  console(){
    console.log(this.data + '  this is input ')
  }
}
