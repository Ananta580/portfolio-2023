import { Component, OnInit } from '@angular/core';
import { CONTACT_PAGE } from 'src/app/shared/constant/contact-page';

@Component({
  selector: 'p-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactInfo = CONTACT_PAGE;

  ngOnInit(): void {}
}
