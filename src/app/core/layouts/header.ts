import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../theme/theme-service';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';
import { NavigationItem } from './components/navigation-item/navigation-item';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    imports: [
        RouterLink,
        LucideAngularModule,
        NavigationItem,
    ],
})
export class HeaderComponent {
    protected readonly themeService = inject(ThemeService);
    mobileMenuOpen = signal(false);
    scrolled = signal(false);

    toggleMenu() {
        this.mobileMenuOpen.set(!this.mobileMenuOpen());
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    @HostListener('window:scroll', [])
    onScroll() {
        this.scrolled.set(window.scrollY > 50);
    }

    protected readonly Sun = Sun;
    protected readonly Moon = Moon;
}