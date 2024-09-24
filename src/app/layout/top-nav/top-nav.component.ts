import { PROFILE_DETAIL } from './../../shared/constant/topbar';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { THEME_SETTINGS, TOPBAR_MENU } from 'src/app/shared/constant/topbar';
import { FileDownloadService } from 'src/app/shared/services/file-download.service';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'p-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  profile = PROFILE_DETAIL;
  topMenus = TOPBAR_MENU;

  themeSetting = THEME_SETTINGS;

  currentMenu = '';

  constructor(
    public themeService: ThemeService,
    private router: Router,
    private downloadService: FileDownloadService
  ) {
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

  downloadResume() {
    this.downloadService.downloadFile(this.profile.resume);
  }
}
