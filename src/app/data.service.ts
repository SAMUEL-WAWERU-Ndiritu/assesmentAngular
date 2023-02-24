import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any;

  setData(newData: any) {
    this.data = newData;
  }

  getData() {
    return this.data;
  }
}
