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
        return;
      }

      this.body.className = preferredTheme;
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
      return;
    }
    this.body.className = theme;
  }
}
