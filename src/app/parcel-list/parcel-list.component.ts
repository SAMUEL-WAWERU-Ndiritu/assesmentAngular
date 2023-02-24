import { Component, OnInit } from '@angular/core';
import { ParcelService } from '../parcel.service';

@Component({
  selector: 'app-parcel-list',
  templateUrl: './parcel-list.component.html',
  styleUrls: ['./parcel-list.component.css']
})
export class ParcelListComponent implements OnInit {

  parcels = [];

  constructor(private parcelService: ParcelService) { }

  ngOnInit(): void {
    this.parcels = this.parcelService.getParcels();
  }

}
