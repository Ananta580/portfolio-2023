import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CERTIFICATES } from 'src/app/shared/constant/certificates';
import { EDUCATION } from 'src/app/shared/constant/education';
import { WORK_EXPEREICNE } from 'src/app/shared/constant/experience';
import { SHOWCASE_SECTION } from 'src/app/shared/constant/showcases';

@Component({
  selector: 'p-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  myDescription = `With over 5 years of software engineering experience in .NET and Angular, 
including recent experience as a co-op Software Engineer, I aim to contribute to 
innovative projects and advance professionally. My expertise includes .NET Core, 
C#, Angular, SQL, and full-stack development with modern frameworks such as 
React and Node.js. I bring strong interpersonal skills, including leadership, 
problem-solving, and effective communication. I am now stepping into a full-time 
Senior Software Engineer role at Beacontree Technologies and continue to seek 
challenging opportunities that foster growth and technical excellence.
`;

  showCases = [
    {
      id: 1,
      detail: SHOWCASE_SECTION[0].showCases[0],
    },
    {
      id: 2,
      detail: SHOWCASE_SECTION[1].showCases[0],
    },
    {
      id: 1,
      detail: SHOWCASE_SECTION[0].showCases[1],
    },
    {
      id: 1,
      detail: SHOWCASE_SECTION[0].showCases[5],
    },
  ];

  experiences = WORK_EXPEREICNE;

  educations = EDUCATION;

  certificates = CERTIFICATES;

  cardItems = [
    {
      icon1: 'calendar_month',
      icon2: '',
      label: '5+ Years Experience',
      class: 'group-hover:text-blue-500 text-[var(--exp-text-color)]',
      bgClass: 'bg-blue-400',
    },
    {
      icon1: 'workspaces',
      icon2: '',
      label: '20+ Projects Done',
      class: 'group-hover:text-amber-500 text-[var(--exp-text-color)]',
      bgClass: 'bg-amber-300',
    },
    {
      icon1: 'star',
      icon2: 'star',
      label: 'Top Rated (Upwork)',
      class: 'group-hover:text-emerald-500 text-[var(--exp-text-color)]',
      bgClass: 'bg-emerald-400',
    },
    {
      icon1: 'cloudy',
      icon2: 'code',
      label: 'Coding Enthusiast',
      class: 'group-hover:text-indigo-500 text-[var(--exp-text-color)]',
      bgClass: 'bg-indigo-400',
    },
  ];

  constructor(private router: Router) {}

  showDetail(parentId: number, id: number) {
    this.router.navigateByUrl(`/showcase-detail/${id}?parentId=${parentId}`);
  }
}
