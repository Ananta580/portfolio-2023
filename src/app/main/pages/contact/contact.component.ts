import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactNo = '+977-9846863918';
  address = 'Gaindakot | Nawalparasi | Nepal';

  ngOnInit(): void {
    if (
      Intl.DateTimeFormat().resolvedOptions().timeZone.toLocaleLowerCase() !==
      'asia/kuala_lumpur '
    ) {
      this.contactNo = '+1-4378187032';
      this.address = '6 Amulet Street | Ontario | Canada';
    }
  }
}
