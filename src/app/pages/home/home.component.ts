import { Component } from '@angular/core';
import { ProjectCardComponent } from "./components/project-card/project-card.component";
import { fadeAnimtaion } from './animations/fade.animation';
import { CertificatesSliderComponent } from "./components/certificates-slider/certificates-slider.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    animations: [fadeAnimtaion],
    imports: [ProjectCardComponent, CertificatesSliderComponent, FooterComponent]
})
export class HomeComponent {
    constructor(private titleService: Title) { }
    ngOnInit() {
        this.titleService.setTitle("Home | Abdulrahman Almehdar's Portfolio");
    }
}
