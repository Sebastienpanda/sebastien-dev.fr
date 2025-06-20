import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactBridgeService {
    readonly scrollToService = signal<string | null>(null);

    triggerScroll(serviceId: string) {
        this.scrollToService.set(serviceId);
    }

    reset() {
        this.scrollToService.set(null);
    }
}
