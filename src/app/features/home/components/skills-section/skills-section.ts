import { Component } from '@angular/core';
import { SkillCategory } from './components/skill-category';

@Component({
    selector: 'app-skills-section',
    templateUrl: './skills-section.html',
    imports: [
        SkillCategory,
    ],
})

export class SkillsSection {
}