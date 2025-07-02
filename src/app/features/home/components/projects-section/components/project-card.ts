import { Component, input } from '@angular/core';
import { Tags } from '../../../../../shared/components/tags/tags';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.html',
    imports: [
        Tags,
    ],
})

export class ProjectCard {
    readonly title = input('');
    readonly description = input('');
    readonly tags = input<string[]>([]);
    readonly image = input('');
    readonly link = input('');
    readonly github = input('');
}