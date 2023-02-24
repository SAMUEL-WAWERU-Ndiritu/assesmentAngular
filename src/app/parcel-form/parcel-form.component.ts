import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParcelService } from '../percel.service';

@Component({
  selector: 'app-parcel-form',
  templateUrl: './parcel-form.component.html',
  styleUrls: ['./parcel-form.component.css']
})
export class ParcelFormComponent implements OnInit {

  parcelForm: FormGroup;

  constructor(private fb: FormBuilder, private parcelService: ParcelService) { }

  ngOnInit(): void {
    this.parcelForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, this.emailValidator]],
      destination: ['', Validators.required],
    });
  }

  emailValidator(control) {
    if (control.value && !control.value.endsWith('@travel.com')) {
      return { invalidEmail: true };
    }
    return null;
  }

  onSubmit() {
    if (this.parcelForm.valid) {
      this.parcelService.addParcel(this.parcelForm.value);
      this.parcelForm.reset();
    }
  }

}
