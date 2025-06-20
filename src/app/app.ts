import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { HeaderComponent } from './core/layouts/header';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    imports: [RouterOutlet, NgxSonnerToaster, HeaderComponent],
})
export class App {
}
