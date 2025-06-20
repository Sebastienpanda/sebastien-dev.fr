import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../core/layouts/header';
import { Footer } from '../../core/layouts/footer';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-mentions-legales',
    templateUrl: './mentions-legales.html',
    imports: [
        HeaderComponent,
        Footer,
    ],
})

export default class MentionsLegales implements OnInit {
    private readonly titleService = inject(Title);
    private readonly meta = inject(Meta);

    ngOnInit() {
        this.titleService.setTitle('Sebastien Daufresne | Mentions légales');
        this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });
    }
}