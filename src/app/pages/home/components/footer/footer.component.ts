import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { simpleGithub, simpleLinkedin } from '@ng-icons/simple-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  viewProviders: [provideIcons({ simpleGithub, simpleLinkedin })]
})
export class FooterComponent {
  year: number = new Date().getFullYear();
}
