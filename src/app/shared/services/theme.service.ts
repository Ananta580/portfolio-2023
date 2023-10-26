import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  body = document.getElementsByTagName('body')[0];

  constructor() {}

  initializeTheme() {
    const preferredTheme = localStorage.getItem('preferred-theme');
    if (preferredTheme) {
      // If system preferred
      if (preferredTheme === 'system') {
        this.matchSystemTheme();
      }
      // If dark choosen
      else if (preferredTheme === 'dark') {
        this.body.className = 'dark';
      }
      // Otherwise light
      else {
        this.body.className = '';
      }
    }
    // Set to System Default & Add to local storage.
    else {
      localStorage.setItem('preferred-theme', 'system');
    }
  }

  matchSystemTheme() {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkThemeMq.matches) {
      this.body.className = 'dark';
    } else {
      this.body.className = '';
    }
  }

  changeTheme(theme: string) {
    localStorage.setItem('preferred-theme', theme);

    // If system preferred
    if (theme === 'system') {
      this.matchSystemTheme();
    }
    // If dark choosen
    else if (theme === 'dark') {
      this.body.className = 'dark';
    }
    // Otherwise light
    else {
      this.body.className = '';
    }
  }

  toogleTheme() {
    if (this.body.className === 'dark') {
      this.body.className = '';
      localStorage.setItem('preferred-theme', 'light');
    } else {
      this.body.className = 'dark';
      localStorage.setItem('preferred-theme', 'dark');
    }
  }
}
