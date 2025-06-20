import { Component, input } from '@angular/core';

@Component({
    selector: 'app-skill-category',
    templateUrl: './skill-category.html',
})

export class SkillCategory {
    readonly title = input('');
    readonly skills = input('');
}