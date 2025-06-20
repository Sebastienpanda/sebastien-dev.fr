import { Component, input, output, signal } from '@angular/core';

@Component({
    selector: 'app-navigation-item',
    templateUrl: './navigation-item.html',
})

export class NavigationItem {
    readonly navigationItems = signal([
        { label: 'Accueil', link: '/' },
        { label: 'A Propos', link: '#about' },
        { label: 'Stack', link: '#stack' },
        { label: 'Projets', link: '#projets' },
        { label: 'Services', link: '#services' },
        { label: 'Testimonial', link: '#testimonials' },
        { label: 'FAQ', link: '#faq' },
        { label: 'Contact', link: '#contact' },
    ]);

    readonly toggleMenu = output<void>();
    readonly class = input('');


    readonly activeAnchor = signal<string | null>(null);

    setActiveAnchor(anchor: string) {
        this.activeAnchor.set(anchor);
    }
}