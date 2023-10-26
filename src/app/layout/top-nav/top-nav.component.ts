import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'p-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  topMenus = [
    { label: 'Home', value: 'home' },
    { label: 'Videos', value: 'videos' },
    { label: 'Shorts', value: 'shorts' },
    { label: 'Live', value: 'live' },
    { label: 'Playlist', value: 'playlist' },
    { label: 'Community', value: 'community' },
    { label: 'Channel', value: 'channel' },
    { label: 'About', value: 'about' },
  ];

  themeSetting = [
    { icon: 'dark_mode', name: 'dark' },
    { icon: 'light_mode', name: 'light' },
    { icon: 'contrast', name: 'system' },
  ];

  currentMenu = '';

  constructor(public themeService: ThemeService, private router: Router) {
    this.setActiveMenu();
  }

  setActiveMenu() {
    const [, second] = this.router.url.split('/');
    if (second) {
      this.changeMenu(second);
    }
    if (second === '') {
      this.currentMenu = 'home';
    }
  }

  changeMenu(menu: string) {
    this.currentMenu = menu;
    this.router.navigate([menu]);
  }
}
