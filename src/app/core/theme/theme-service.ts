import { Injectable, signal } from '@angular/core';

export type Theme = "light" | "dark";

@Injectable({ providedIn: "root" })
export class ThemeService {
    private readonly THEME_KEY = "theme";
    private readonly _theme = signal<Theme>(this.initTheme());
    public readonly theme = this._theme.asReadonly();

    constructor() {
        const observer = new MutationObserver(() => {
            const themeAttr = document.documentElement.getAttribute("data-theme");
            const theme: Theme = themeAttr === "dark" ? "dark" : "light"; 
            this._theme.set(theme);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });
    }

    private initTheme(): Theme {
        const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
        const currentTheme = savedTheme || this.detectTheme();
        this.applyThemeToDOM(currentTheme);
        return currentTheme;
    }

    private applyThemeToDOM(theme: Theme): void {
        document.documentElement.setAttribute("data-theme", theme);
    }

    private detectTheme(): Theme {
        const attr = document.documentElement.getAttribute("data-theme");
        return attr === "dark" ? "dark" : "light";
    }

    public setTheme(theme: Theme) {
        localStorage.setItem(this.THEME_KEY, theme);
        this._theme.set(theme);
        this.applyThemeToDOM(theme);
    }

    public toggleTheme() {
        const currentTheme = this._theme();
        const newTheme: Theme = currentTheme === "dark" ? "light" : "dark";
        this.setTheme(newTheme);
    }
}
