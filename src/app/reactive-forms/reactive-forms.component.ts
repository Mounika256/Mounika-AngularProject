import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  pathMyForm(): void {
    this.reactiveForm.patchValue({
      email: "gaian@gmail.com",
      address: {
          cityName: "Hyderabad",
          zipCode: 500032
        }
    })
  }

  clearData(): void {
    this.reactiveForm.reset()
  }

  reactiveForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    fullName: new FormControl(''),
    address: new FormGroup({
      cityName: new FormControl(''),
      zipCode: new FormControl('')
    })
  })

  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}
