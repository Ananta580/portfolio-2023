import { Component } from '@angular/core';

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

  sections = [
    {
      name: 'Web development',
      showCases: [
        {
          image: '../../../../assets/images/khatapana.jpg',
          title: 'Khatapana | Simplest way to manage your money!',
          url: 'https://khatapana.com/',
          tags: '#Freelancing',
          workDone: 'Frontend (Angular)',
          timeline: '1.5y ago',
        },
        {
          image: '../../../../assets/images/technepal.jpg',
          title: 'Tech Nepal | Website for tech learner and enthusiast',
          url: 'https://thetechnepal.com/',
          tags: '#Personal',
          workDone: 'Full Stack (.NET, Angular)',
          timeline: '1y ago',
        },
        {
          image: '../../../../assets/images/kgarney.jpg',
          title: 'Kgarney | Web-app that uses firebase tools for hosting',
          url: 'https://kgarne-0.web.app/home',
          tags: '#Freelancing',
          workDone: 'Full Stack (C#, Angular)',
          timeline: '1y ago',
        },
        {
          image: '../../../../assets/images/generate.jpg',
          title: 'Generate | Tried to implement clone of canva functioning',
          url: 'https://gen.thetechnepal.com',
          tags: '#Personal',
          workDone: 'Full Stack (Angular, GCP)',
          timeline: '2y ago',
        },
        {
          image: '../../../../assets/images/izy.jpg',
          title: 'IZY | Simplest way to manage your money!',
          url: 'https://izy.no/en/',
          tags: '#Resimator #Company',
          workDone: 'Full Stack(.NET, Angular)',
          timeline: '2s ago',
        },
      ],
    },
    {
      name: 'App development',
      showCases: [
        {
          image: '../../../../assets/images/khatapana.jpg',
          title: 'Khatapana | Simplest way to manage your money!',
          url: 'https://khatapana.com/',
          tags: '#Freelancing',
          workDone: 'Frontend (Angular)',
          timeline: '1.5y ago',
        },
        {
          image: '../../../../assets/images/technepal.jpg',
          title: 'Tech Nepal | Website for tech learner and enthusiast',
          url: 'https://thetechnepal.com/',
          tags: '#Personal',
          workDone: 'Full Stack (.NET, Angular)',
          timeline: '1y ago',
        },
        {
          image: '../../../../assets/images/kgarney.jpg',
          title: 'Kgarney | Web-app that uses firebase tools for hosting',
          url: 'https://kgarne-0.web.app/home',
          tags: '#Freelancing',
          workDone: 'Full Stack (C#, Angular)',
          timeline: '1y ago',
        },
        {
          image: '../../../../assets/images/generate.jpg',
          title: 'Generate | Tried to implement clone of canva functioning',
          url: 'https://gen.thetechnepal.com',
          tags: '#Personal',
          workDone: 'Full Stack (Angular, GCP)',
          timeline: '2y ago',
        },
        {
          image: '../../../../assets/images/izy.jpg',
          title: 'IZY | Simplest way to manage your money!',
          url: 'https://izy.no/en/',
          tags: '#Resimator #Company',
          workDone: 'Full Stack(.NET, Angular)',
          timeline: '2s ago',
        },
      ],
    },
    {
      name: 'Graphics design',
      showCases: [
        {
          image: '../../../../assets/images/foreveryng.jpg',
          title: `FOREVERYNG | Nepal's best Cosmetics website`,
          url: 'https://ananta-poudel.com.np/graphics#Foreveryng',
          tags: '#cosmetic #nepalibeauty',
          workDone: `Adobe PS,  AI,  UI/UX`,
          timeline: '4y ago',
        },
        {
          image: '../../../../assets/images/khaiidim.jpg',
          title: `KHAAIDIM | Food delivery at your footstep`,
          url: 'https://ananta-poudel.com.np/graphics#Khaaidim',
          tags: '#fooddelivery #foodporn',
          workDone: 'Adobe Photoshop',
          timeline: '2y ago',
        },
      ],
    },
  ];
}
