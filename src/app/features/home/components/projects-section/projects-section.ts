import { Component, computed, signal } from '@angular/core';
import { ProjectCard } from './components/project-card';

@Component({
    selector: 'app-projects-section',
    templateUrl: './projects-section.html',
    imports: [
        ProjectCard,
    ],
})

export class ProjectsSection {
    readonly projects = [
        {
            title: 'Puissance 4 - Frontend Mentor',
            tags: ['Frontend', 'HTML', 'CSS', 'Backend', 'Angular', 'Supabase', 'NestJS'],
            image: '/images/puissance-4.jpg',
            description: `• Création d'un jeu de Puissance 4 en ligne\n• Intégration d'une API pour la gestion des parties\n• Authentification et sauvegarde des scores\n`,
            link: 'https://puissance-4.sebastien-dev.fr/',
            github: '',
        },
        {
            title: 'Extension Manager - Frontend Mentor',
            tags: ['Frontend', 'HTML', 'SCSS', 'Angular'],
            image: '/images/extensions-manager.jpg',
            description: `
            • Création d'un gestionnaire d'extensions pour navigateur\n• Intégration d'une interface utilisateur responsive\n• Utilisation de SCSS pour le style\n`,
            link: 'https://extension-manager.sebastien-dev.fr/',
            github: 'https://github.com/Sebastienpanda/extension-manager',
        },
        {
            title: 'La Petite Boutique d\'Éphée',
            tags: ['Frontend', 'Backend', 'Angular', 'Supabase', 'TailwindCSS', 'Stripe', 'DaisyUI'],
            image: '/images/petiteboutiquedephee.png',
            description: `Site e-commerce développé de A à Z avec Angular & Supabase.\n\n• UI responsive (Tailwind, DaisyUI, animations Angular)\n• Authentification (Supabase, Google)\n• Paiement Stripe\n• Traitement d'images Supabase\n• Wishlist, favoris, chat en temps réel, Paiement, Ticket tools\n`,
            link: '#',
            github: '',
        },
        {
            title: 'Dashboard Admin',
            tags: ['Frontend', 'Backend', 'Angular', 'Supabase', 'TailwindCSS', 'DaisyUI'],
            image: '/images/dashboard.png',
            description: `Dashboard Admin développé avec Angular & Supabase.\n\n• UI responsive (Tailwind, DaisyUI, animations Angular)\n• Authentification (Supabase, Google)\n• Gestion des utilisateurs, des produits et des commandes\n• Graphiques et statistiques en temps réel\n`,
            link: '#',
            github: '',
        },
        {
            title: 'Testimonials grid section - Frontend Mentor',
            tags: ['Frontend', 'HTML', 'CSS'],
            image: '/images/testimonials.jpg',
            description: `• Création d'une section Testimonials avec Grid\n`,
            link: 'https://testimonials.sebastien-dev.fr/',
            github: 'https://github.com/Sebastienpanda/testimonials-grid-section',
        },
        {
            title: 'Blog Preview Card Component - Frontend Mentor',
            tags: ['Frontend', 'HTML', 'CSS'],
            image: '/images/blog-preview-card.jpg',
            description: `• Création d'un composant de carte de blog\n• Intégration d'images et de typographie responsive\n`,
            link: 'https://blog-preview.sebastien-dev.fr/',
            github: 'https://github.com/Sebastienpanda/Blog-preview-card',
        },
    ];

    readonly allTags = Array.from(
        new Set(this.projects.flatMap(project => project.tags)),
    ).sort((a, b) => a.localeCompare(b));

    selectedTag = signal<string | null>(null);

    filteredProjects = computed(() => {
        const tag = this.selectedTag();
        return tag ? this.projects.filter(p => p.tags.includes(tag)) : this.projects;
    });

    selectTag(tag: string | null) {
        this.selectedTag.set(tag);
    }
}