import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'p-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  @ViewChild('sideMenu') sideMenu?: ElementRef;

  today = new Date();

  sideMenus = [
    { label: 'Welcome', icon: 'home', value: '/home' },
    { label: 'Projects', icon: 'folder_special', value: '/portfolio' },
    { label: 'Skills', icon: 'videocam', value: '/skill' },
    { label: 'Experience', icon: 'work_history', value: '/experience' },
  ];

  professionalAccounts = [
    {
      label: 'Github',
      image: '../../../assets/professional/github.svg',
      url: 'https://github.com/ananta580',
    },
    {
      label: 'Upwork',
      image: '../../../assets/professional/upwork.svg',
      url: 'https://www.upwork.com/freelancers/~0188bd9446a88c1e33',
    },
    {
      label: 'Behance',
      image: '../../../assets/professional/behance.svg',
      url: 'https://www.behance.net/anantapoudel',
    },
  ];

  socialAccounts = [
    {
      label: 'Linkedin',
      image: '../../../assets/social/linkedin.svg',
      url: 'https://www.linkedin.com/in/ananta580/',
    },
    {
      label: 'Youtube',
      image: '../../../assets/social/youtube.svg',
      url: 'https://www.youtube.com/@ananta.poudel',
    },
  ];

  hideMenu() {
    const nat = this.sideMenu?.nativeElement as HTMLElement;
    nat.classList.add('fade-out');
    setTimeout(() => {
      nat.classList.add('max-lg:hidden');
      nat.classList.remove('max-lg:flex');
      nat.classList.remove('fade-out');
    }, 500);
  }

  showMenu() {
    const nat = this.sideMenu?.nativeElement as HTMLElement;
    nat.classList.add('max-lg:flex');
    nat.classList.add('fade-in');
    nat.classList.remove('max-lg:hidden');
  }
}
