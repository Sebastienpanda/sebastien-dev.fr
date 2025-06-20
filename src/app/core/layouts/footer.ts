import { Component, inject } from '@angular/core';
import { Github, Linkedin, LucideAngularModule, Mail, Moon, Sun } from 'lucide-angular';
import { NavigationItem } from './components/navigation-item/navigation-item';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../theme/theme-service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.html',
    imports: [LucideAngularModule, NavigationItem, RouterLink],
})

export class Footer {
    protected readonly Mail = Mail;
    protected readonly Linkedin = Linkedin;
    protected readonly Github = Github;
    protected readonly Sun = Sun;
    protected readonly Moon = Moon;
    protected readonly themeService = inject(ThemeService);
    readonly currentYear = new Date().getFullYear();

    toggleTheme() {
        this.themeService.toggleTheme();
    }
}