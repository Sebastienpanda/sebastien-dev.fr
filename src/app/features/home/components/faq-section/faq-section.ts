import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-faq-section',
    templateUrl: './faq-section.html',
})

export class FaqSection {
    readonly faqItems = signal([
        {
            question: 'Quelles sont vos disponibilités ?',
            answer: 'Je suis disponible pour des missions freelance à distance ou en collaboration avec vos équipes.',
        },
        {
            question: 'Quel est votre tarif ?',
            answer: 'Mes tarifs varient selon la complexité du projet, je propose un devis personnalisé après discussion.',
        },
        {
            question: 'Comment démarrez-vous un projet ?',
            answer: 'On échange d’abord sur vos besoins, je vous propose ensuite un plan clair et un devis.',
        },
        {
            question: 'Pouvez-vous travailler avec un design fourni ?',
            answer: 'Oui, j’intègre parfaitement vos maquettes (Figma, Adobe XD...).',
        },
        {
            question: 'Faites-vous aussi le backend ?',
            answer: 'Oui, je peux gérer la partie backend avec NestJS ou Supabase ou collaborer avec votre équipe.',
        },
        {
            question: 'Proposez-vous un support après livraison ?',
            answer: 'Oui, je peux assurer la maintenance ou des évolutions selon vos besoins.',
        },
        {
            question: 'Travaillez-vous seul ou en équipe ?',
            answer: 'Je travaille seul et je peux collaborer avec d\'autres freelances ou intégrer une équipe.',
        },
    ]);
}