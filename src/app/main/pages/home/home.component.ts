import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SHOWCASE_SECTION } from 'src/app/shared/constant/showcases';

@Component({
  selector: 'p-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  myDescription = ` With four years of software engineering experience in .NET and Angular,
  I aim to contribute to innovative projects and advance professionally.
  My expertise includes .NET Core, C#, Angular, SQL, and strong
  interpersonal skills such as leadership and problem-solving. I'm now
  seeking challenging software engineering opportunities to continue my
  career growth.`;

  sections = SHOWCASE_SECTION;

  constructor(private router: Router) {}

  showDetail(parentId: number, id: number) {
    this.router.navigateByUrl(`/showcase-detail/${id}?parentId=${parentId}`);
  }
}
