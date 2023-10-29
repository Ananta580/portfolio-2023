import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'p-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {
  @Input() src = '../../assets/audio/audio.mp3';

  @Input() label = 'Music';

  audioPlayer = document.querySelector('.audio-player');
  audio = new Audio(this.src);

  ngOnInit(): void {
    this.audio.addEventListener(
      'loadeddata',
      () => {
        (document.querySelector('.time .length') as HTMLElement).textContent =
          this.getTimeCodeFromNum(this.audio.duration);
        this.audio.volume = 0.75;
      },
      false
    );

    //click on timeline to skip around
    var timeline = document.querySelector('.timeline') as any;
    timeline?.addEventListener(
      'click',
      (e: any) => {
        const timelineWidth = window.getComputedStyle(timeline).width;
        const timeToSeek =
          (e.offsetX / parseInt(timelineWidth)) * this.audio.duration;
        this.audio.currentTime = timeToSeek;
      },
      false
    );

    //click volume slider to change volume
    const volumeSlider = document.querySelector('.controls .volume-slider');
    volumeSlider?.addEventListener(
      'click',
      (e: any) => {
        const sliderWidth = window.getComputedStyle(volumeSlider).width;
        const newVolume = e.offsetX / parseInt(sliderWidth);
        this.audio.volume = newVolume;
        (
          document.querySelector('.controls .volume-percentage') as any
        ).style.width = newVolume * 100 + '%';
      },
      false
    );

    //check audio percentage and update time accordingly
    setInterval(() => {
      const progressBar = document.querySelector('.progress') as HTMLElement;
      progressBar.style.width =
        (this.audio.currentTime / this.audio.duration) * 100 + '%';
      (document.querySelector('.time .current') as HTMLElement).textContent =
        this.getTimeCodeFromNum(this.audio.currentTime);
    }, 500);

    const playBtn = document.querySelector('.controls .toggle-play');
    playBtn?.addEventListener(
      'click',
      () => {
        if (this.audio.paused) {
          playBtn?.classList.remove('play');
          playBtn?.classList.add('pause');
          this.audio.play();
        } else {
          playBtn?.classList.remove('pause');
          playBtn?.classList.add('play');
          this.audio.pause();
        }
      },
      false
    );

    document.querySelector('.volume-button')?.addEventListener('click', () => {
      const volumeEl = document.querySelector('.volume-container .volume');
      this.audio.muted = !this.audio.muted;
      if (this.audio.muted) {
        volumeEl?.classList.remove('icono-volumeMedium');
        volumeEl?.classList.add('icono-volumeMute');
      } else {
        volumeEl?.classList.add('icono-volumeMedium');
        volumeEl?.classList.remove('icono-volumeMute');
      }
    });
  }

  getTimeCodeFromNum(num: any) {
    let seconds: any = parseInt(num);
    let minutes: any = parseInt((seconds / 60).toString());
    seconds -= minutes * 60;
    const hours: any = parseInt((minutes / 60).toString());
    minutes -= hours * 60;

    if (hours === 0)
      return `${minutes}:${String(seconds % 60).padStart(2, '0')}`;
    return `${String(hours).padStart(2, '0')}:${minutes}:${String(
      seconds % 60
    ).padStart(2, '0')}`;
  }
}
