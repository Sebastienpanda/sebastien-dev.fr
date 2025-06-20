import { Component } from '@angular/core';
import { FolderOpen, LucideAngularModule, Mail } from 'lucide-angular';

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero.html',
    imports: [
        LucideAngularModule,
    ],
})

export class HeroSection {
    protected readonly Mail = Mail;
    protected readonly FolderOpen = FolderOpen;
}