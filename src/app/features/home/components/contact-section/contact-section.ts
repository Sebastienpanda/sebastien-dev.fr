import { Component, computed, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
import { ContactBridgeService } from '../../../../core/contactBridge-service';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { toast } from 'ngx-sonner';

@Component({
    selector: 'app-contact-section',
    templateUrl: './contact-section.html',
    imports: [
        ReactiveFormsModule,
    ],
})

export class ContactSection {
    readonly services = signal([
        { id: 'ecommerce', label: 'Création de sites e-commerce' },
        { id: 'webapps', label: 'Applications web sur mesure' },
        { id: 'integration', label: 'Intégration UI' },
        { id: 'api', label: 'API sécurisées' },
        { id: 'optimization', label: 'Optimisation performances' },
    ]);

    readonly selectedServiceId = signal<string | undefined>(undefined);
    readonly contactSection = viewChild('contactSection', { read: ElementRef });
    readonly bridge = inject(ContactBridgeService);
    readonly formBuilder = inject(NonNullableFormBuilder);

    readonly placeholder = computed(() =>
        this.getPlaceholderByService(this.selectedServiceId()),
    );

    constructor() {
        effect(() => {
            const serviceId = this.bridge.scrollToService();
            if (serviceId) {
                this.selectedServiceId.set(serviceId);
                this.scrollToForm();
                this.bridge.reset();
            }
        });
    }

    scrollToForm() {
        this.contactSection()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

    getPlaceholderByService(serviceId?: string): string {
        switch (serviceId) {
            case 'ecommerce':
                return 'Décrivez votre projet de boutique en ligne (type de produits, fonctionnalités souhaitées...)';
            case 'webapps':
                return 'Expliquez vos besoins pour votre application web (fonctionnalités principales, utilisateurs cibles...)';
            case 'integration':
                return 'Parlez-nous de votre design à intégrer (technologies souhaitées, délais...)';
            case 'api':
                return 'Détaillez vos besoins en API (type de données, sécurité requise...)';
            case 'optimization':
                return 'Décrivez les problèmes de performance que vous rencontrez';
            default:
                return 'Votre message';
        }
    }

    form = this.formBuilder.group(({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required],
        service: ['', Validators.required],
    }));

    get nameErrors(): string | null {
        const control = this.form.controls.name;
        if (control.touched && control.errors) {
            if (control.errors['required'])
                return 'Le nom est requis.';
        }
        return null;
    }

    get emailErrors(): string | null {
        const control = this.form.controls.email;
        if (control.touched && control.errors) {
            if (control.errors['required'])
                return 'L\'email est requis.';
            if (control.errors['email'])
                return 'L\'email doit être valide.';
        }
        return null;
    }

    get messageErrors(): string | null {
        const control = this.form.controls.message;
        if (control.touched && control.errors) {
            if (control.errors['required'])
                return 'Le message est requis.';
        }
        return null;
    }

    get serviceErrors(): string | null {
        const control = this.form.controls.service;
        if (control.touched && control.errors) {
            if (control.errors['required'])
                return 'Le service est requis.';
        }
        return null;
    }

    onSubmit(): void {
        if (!this.form.valid) {
            this.form.markAllAsTouched();
            toast.error('Formulaire invalide', {
                description: 'Veuillez corriger les erreurs du formulaire.',
            });
        }

        const { name, email, message, service } = this.form.value;

        fetch('https://nslpaikihqnwfssmeauz.supabase.co/functions/v1/resend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: email,
                subject: `Nouveau message via le portfolio : ${service}`,
                html: `
                    <p><strong>Nom :</strong> ${name}</p>
                    <p><strong>Email :</strong> ${email}</p>
                    <p><strong>Message :</strong><br/>${message}</p>
                    <p><strong>Service :</strong> ${service}</p>
      `,
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log('✅ Message envoyé avec succès', data);
                this.form.reset();
                toast.success('Message envoyé avec succès', {
                    description: 'Nous vous répondrons dans les plus brefs délais.',
                });
            })
            .catch(err => {
                console.error('❌ Erreur lors de l’envoi', err);
            });
    }

}