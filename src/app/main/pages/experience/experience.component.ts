import { Component } from '@angular/core';
import { WORK_EXPEREICNE } from 'src/app/shared/constant/experience';

@Component({
  selector: 'p-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  workExperiences = WORK_EXPEREICNE;
}
