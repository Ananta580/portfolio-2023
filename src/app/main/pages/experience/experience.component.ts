import { Component } from '@angular/core';

@Component({
  selector: 'p-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  workExperiences = [
    {
      company: 'Resimator',
      companySlogan: 'Platform for better tenant experience',
      project: 'Izy',
      projectUrl: 'https://izy.no/en/',
      position: 'Senior Software Engineer',
      timeline: 'Nov 2022 - present',
      workDescription: [
        'Senior Software Engineer at Izy, specializing in Angular, .NET, and C# development.',
        'Led web application enhancements for improved user experiences at Izy.',
        'Proficient in .NET for scalable solutions and seamless feature integration.',
        'Daily international team coordination at Izy for cross-border collaboration.',
      ],
    },
    {
      company: 'Whitehat Engineering',
      companySlogan: 'Restaurant Accounting that Accelerates Growth',
      project: 'Rasi',
      projectUrl: 'https://rasiusa.com/',
      position: 'Senior Software Engineer',
      timeline: 'Sep 2022 - Jun 2023',
      workDescription: [
        'Proficient in AWS, focusing on cloud infrastructure management.',
        'Developed software in C#, Angular, .NET, Node.js, and React.',
        'Innovated design patterns and maintained legacy software in a research team.',
        'Skillful architect in C#, Angular, .NET, Node.js, and React, specializing in software design and development.',
      ],
    },
    {
      company: 'Verisk',
      companySlogan: 'Decision support for insurance & finances',
      project: 'Iso',
      projectUrl: 'https://www.verisk.com/insurance/brands/iso/',
      position: 'Software Engineer',
      timeline: 'Aug 2021 - Aug 2022',
      workDescription: [
        'Constructed full-stack software: .NET MVC, Angular, React, and Node.js.',
        'Gained AWS experience in cloud infrastructure and deployment.',
        'Collaborated in Agile methodologies at a multinational company.',
        'Enhanced communication and leadership via mentoring trainees.',
      ],
    },
    {
      company: 'Crossover',
      companySlogan: 'Ultimate solutions to maintain hospitality',
      project: 'Pms',
      projectUrl: 'http://sales.crossoverpms.com/',
      position: 'Software Engineer',
      timeline: 'Dec 2019 - Aug 2021',
      workDescription: [
        'Started as Intern Software Developer, learned diverse programming.',
        'Promoted to Engineer, led Full-Stack projects for top Nepalese hotels.',
        'Mastered development phases, demonstrating expertise in software engineering.',
        'Progressed from intern to engineer, showcasing leadership in full-stack projects.',
      ],
    },
  ];
}
