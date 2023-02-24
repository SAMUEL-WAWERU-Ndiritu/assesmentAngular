import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {
  private parcels: Parcel[] = [
    { id: 1, name: 'Parcel 1', email: 'example1@travel.com', destination: 'Destination 1' },
    { id: 2, name: 'Parcel 2', email: 'example2@travel.com', destination: 'Destination 2' },
    { id: 3, name: 'Parcel 3', email: 'example3@travel.com', destination: 'Destination 3' }
  ];

  constructor() { }

  getAllParcels(): Parcel[] {
    return this.parcels;
  }

  addParcel(parcel: Parcel): void {
    this.parcels.push(parcel);
  }

  updateParcel(parcel: Parcel): void {
    const index = this.parcels.findIndex(p => p.id === parcel.id);
    if (index !== -1) {
      this.parcels[index] = parcel;
    }
  }

  deleteParcel(id: number): void {
    const index = this.parcels.findIndex(p => p.id === id);
    if (index !== -1) {
      this.parcels.splice(index, 1);
    }
  }
}

export interface Parcel {
  id: number;
  name: string;
  email: string;
  destination: string;
}
