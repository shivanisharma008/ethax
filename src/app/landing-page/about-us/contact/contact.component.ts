import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormModel, ContactService } from './contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  loading = false;
  constructor(private formBuilder: FormBuilder, private contactService: ContactService, private toastr: ToastrService) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      contactNumber: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      let contactFormModel: ContactFormModel= {
        name: this.contactForm.get('name')?.value,
        surname: this.contactForm.get('surname')?.value,
        email: this.contactForm.get('emailAddress')?.value,
        contactNumber: this.contactForm.get('contactNumber')?.value,
        message: this.contactForm.get('message')?.value,
        source: 'ETHAX_WEBSITE'
    }
      this.loading = true; // Set loading to true when form is submitted
      this.contactService.contactForm(contactFormModel).subscribe(
        (response) => {
          console.log(response);
          this.loading = false;
          this.contactForm.reset();
          alert('Contact form submitted successful!')
        },
        (err) => {
          this.loading = false;
          alert('An Error Occurred!')
        }
      );
    } else {
      alert('Form is invalid');
      this.contactForm.markAllAsTouched();
    }
  }
  
}
