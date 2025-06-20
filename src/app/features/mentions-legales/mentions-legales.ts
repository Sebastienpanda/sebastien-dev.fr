import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/layouts/header';
import { Footer } from '../../core/layouts/footer';

@Component({
    selector: 'app-mentions-legales',
    templateUrl: './mentions-legales.html',
    imports: [
        HeaderComponent,
        Footer,
    ],
})

export default class MentionsLegales {
}