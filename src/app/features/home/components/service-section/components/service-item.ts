import { Component, inject, input } from '@angular/core';
import { CheckIcon, LucideAngularModule, Mail } from 'lucide-angular';
import { ContactBridgeService } from '../../../../../core/contactBridge-service';

@Component({
    selector: 'app-service-item',
    templateUrl: './service-item.html',
    imports: [
        LucideAngularModule,
    ],
})

export class ServiceItem {
    readonly title = input('');
    readonly id = input('');
    readonly description = input('');
    protected readonly Mail = Mail;
    protected readonly CheckIcon = CheckIcon;

    readonly bridge = inject(ContactBridgeService);

    handleContact(serviceId: string) {
        this.bridge.triggerScroll(serviceId);
    }
}