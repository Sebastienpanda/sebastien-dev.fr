import { Component, computed, input } from '@angular/core';


@Component({
    selector: 'app-tags',
    templateUrl: './tags.html',
})

export class Tags {
    readonly tag = input('');

    readonly colorPalette: string[] = [
        'badge-primary',
        'badge-secondary',
        'badge-accent',
        'badge-success',
        'badge-info',
        'badge-warning',
        'badge-error',
        'badge-neutral',
    ];

    badgeClass = computed(() => {
        const tag = this.tag();
        const index = [...tag].reduce((acc, c) => acc + c.charCodeAt(0), 0);
        const colorIndex = index % this.colorPalette.length;
        return this.colorPalette[colorIndex];
    });

}