import { Component } from '@angular/core';
import { HeaderComponent } from '../../../core/layouts/header';
import { HeroSection } from '../components/hero-section/hero';
import { About } from '../components/about/about';
import { SkillsSection } from '../components/skills-section/skills-section';
import { ProjectsSection } from '../components/projects-section/projects-section';
import { ServicesSection } from '../components/service-section/services-section';
import { TestimonialsSection } from '../components/testimonials-section/testimonials-section';
import { FaqSection } from '../components/faq-section/faq-section';
import { ContactSection } from '../components/contact-section/contact-section';
import { Footer } from '../../../core/layouts/footer';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    imports: [
        HeaderComponent,
        HeroSection,
        About,
        SkillsSection,
        ProjectsSection,
        ServicesSection,
        TestimonialsSection,
        FaqSection,
        ContactSection,
        Footer,
    ],
})

export default class Home {
}
