import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  PROFESSITIONAL_ACCOUNTS,
  SIDEBAR_MENU,
  SOCIAL_ACCOUNTS,
} from 'src/app/shared/constant/sidebar';

@Component({
  selector: 'p-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  @ViewChild('sideMenu') sideMenu?: ElementRef;

  today = new Date();

  sideMenus = SIDEBAR_MENU;

  professionalAccounts = PROFESSITIONAL_ACCOUNTS;

  socialAccounts = SOCIAL_ACCOUNTS;

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
