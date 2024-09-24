import { Component } from '@angular/core';
import { SKILL_SETS } from 'src/app/shared/constant/skill-set';

@Component({
  selector: 'p-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  skillSets = SKILL_SETS;
}
