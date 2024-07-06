import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  body = document.getElementsByTagName('body')[0];

  constructor() {}

  get theme() {
    return localStorage.getItem('preferred-theme') ?? 'system';
  }

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
      this.matchSystemTheme();
    }
  }

  matchSystemTheme() {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkThemeMq.matches) {
      this.body.className = 'dark';
    } else {
      this.body.className = 'light';
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
      this.body.className = 'light';
    }
  }

  toogleTheme() {
    if (this.body.className === 'dark') {
      this.body.className = 'fade-out-2';
      localStorage.setItem('preferred-theme', 'light');
    } else {
      this.body.className = 'dark fade-in-1';
      localStorage.setItem('preferred-theme', 'dark');
    }
  }
}
