import { Component, signal } from '@angular/core';
import { ServiceItem } from './components/service-item';

@Component({
    selector: 'app-services-section',
    templateUrl: './services-section.html',
    imports: [
        ServiceItem,


    ],
})

export class ServicesSection {
    readonly services = signal([
        {
            id: 'webapps',
            title: 'Applications web sur mesure',
            description: 'Conception et développement d\'applications adaptées à vos besoins spécifiques.',
        },
        {
            id: 'integration',
            title: 'Intégration UI',
            description: 'Intégration de vos maquettes Figma en sites web responsive.',
        },
        {
            id: 'api',
            title: 'API sécurisées',
            description: 'Mise en place d\'APIs robustes.',
        },
        {
            id: 'optimization',
            title: 'Optimisation performances',
            description: 'Amélioration des performances et du SEO technique de vos applications.',
        },
    ]);

}