import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, signal, viewChild } from '@angular/core';

@Component({
    selector: 'app-testimonials-section',
    templateUrl: './testimonials-section.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class TestimonialsSection implements AfterViewInit {
    readonly testimonials = signal([
        {
            id: 1,
            name: 'Cedric Locchi',
            position: 'Directeur',
            content: 'J’ai eu l’occasion d’accompagner Sébastien en tant que mentor dans le cadre de sa formation. C’est quelqu’un de très intéressant, avec une grande capacité d’apprentissage et une vraie faculté à se remettre en question. Je suis convaincu que les entreprises qui auront la chance de collaborer avec lui ne seront pas déçues.',
        },
        {
            id: 2,
            name: 'Philippe Anel',
            position: 'Directeur',
            content: 'Sébastien a rejoint notre équipe il y a un an. Avec sa motivation et son engagement, il a conforté ses compétences en développement web (Vue.js et React) ainsi qu\'en gestion de projet. Par ailleurs, il a beaucoup travaillé sur la partie back (API, Swagger en Go en Node et même un peu en Rust).\n' +
                '\n' +
                'Ses contributions sont remarquables : il a travaillé sur l\'interface utilisateur de notre IA mAIstrow et plus particulièrement sur toute la partie RGPD, comme un vrai développeur fullstack.\n' +
                '\n' +
                'Il a également conçu entièrement l\'interface d\'une CRM en Kanban. Son travail est un excellent exemple de ce que l\'on peut accomplir avec détermination et passion.\n' +
                '\n' +
                'Sébastien est motivé, c\'est le moins que l\'on puisse dire. Il travaille pour lui-même et cherche à améliorer ses compétences. Il sait utiliser les outils à sa disposition pour trouver les informations dont il a besoin.\n' +
                '\n' +
                'Alors il est encore jeune et il a beaucoup à apprendre. Mais ça tombe bien ... il est motivé !!!\n' +
                '\n' +
                'Nous sommes ravis de avoir eu la chance de l\'accompagner dans sa formation et nous sommes impatients de voir ses prochaines réalisations.\n',
        },
        {
            id: 3,
            name: 'Aurore Ramos',
            position: 'Développeuse',
            content: 'J\'ai eu l\'occasion de travailler avec Sébastien. C\'est un excellent développeur qui est à l\'écoute, compétent et sympa. Je recommande fortement 👍👍',
        },
        {
            id: 4,
            name: 'Julie Bettinger',
            position: 'Particulier',
            content: 'J\'ai sollicité Sébastien pour le site vitrine de mon entreprise et il s\'est montré consciencieux et à l\'écoute de mes demandes. C\'est une personne sérieuse et fiable, engagée au service de ses projets.',
        },
        {
            id: 5,
            name: 'Stéphane Didier',
            position: 'Mentor',
            content: 'J\'ai accompagné Sébastien sur sa formation de développeur WEB. C\'est un développeur de talent, qui est fiable. Je recommande',
        },
        {
            id: 6,
            name: 'Gautier Vincent',
            position: 'Particulier',
            content: 'Réalisation et conception du site vitrine de la cave avec force de proposition tout au long de la réalisation.',
        },
    ]);
    readonly swiperRef = viewChild('swiperRef', { read: ElementRef });
    readonly prevEl = viewChild('prevEl', { read: ElementRef });
    readonly nextEl = viewChild('nextEl', { read: ElementRef });

    ngAfterViewInit(): void {
        const swiperEl = this.swiperRef()?.nativeElement;
        const prev = this.prevEl()?.nativeElement;
        const next = this.nextEl()?.nativeElement;

        if (swiperEl && prev && next) {
            Object.assign(swiperEl, {
                slidesPerView: 1,
                loop: false,
                spaceBetween: 16,
                pagination: false,
                a11y: false,
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 24,
                    },
                },
            });

            swiperEl.initialize();
        }
    }
}