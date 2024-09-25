import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  body = document.getElementsByTagName('body')[0];

  colors = ['indigo', 'blue', 'green', 'red', 'purple', 'orange'];

  constructor() {}

  get theme() {
    return localStorage.getItem('preferred-theme') ?? 'system';
  }

  get color() {
    return localStorage.getItem('preferred-color') ?? '';
  }

  initializeTheme() {
    const preferredTheme = localStorage.getItem('preferred-theme');
    const preferredColor = localStorage.getItem('preferred-color');
    if (preferredTheme) {
      // If system preferred
      if (preferredTheme === 'system') {
        this.matchSystemTheme();
        return;
      }

      const theme =
        (preferredColor ? `${preferredColor}-` : '') + preferredTheme;

      console.log(theme);
      this.body.className = theme;
    }
    // Set to System Default & Add to local storage.
    else {
      localStorage.setItem('preferred-theme', 'system');
      this.matchSystemTheme();
    }
  }

  matchSystemTheme() {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    const preferredColor = localStorage.getItem('preferred-color');

    if (darkThemeMq.matches) {
      if (preferredColor) {
        this.body.className = `${preferredColor}-dark`;
        return;
      }
      this.body.className = 'dark';
    } else {
      if (preferredColor) {
        this.body.className = `${preferredColor}-light`;
        return;
      }
      this.body.className = 'light';
    }
  }

  changeTheme(theme: string, isShuffle = false) {
    if (isShuffle) {
      this.changeColor();
      return;
    }
    localStorage.setItem('preferred-theme', theme);
    localStorage.setItem('preferred-color', '');

    // If system preferred
    if (theme === 'system') {
      this.matchSystemTheme();
      return;
    }
    this.body.className = theme;
  }

  changeColor() {
    const color = this.colors[Math.floor(Math.random() * this.colors.length)];
    localStorage.setItem('preferred-color', color);
    if (this.theme === 'system') {
      this.matchSystemTheme();
      return;
    }
    this.body.className = `${color}-${this.theme}`;
  }
}
