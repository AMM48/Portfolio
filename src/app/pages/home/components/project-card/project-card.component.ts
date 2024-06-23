import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { staggerAnimation } from '../../animations/stagger.animation';
import { Project } from '../interfaces/Project.interface';
import { LoadDataDirective } from '../../../../directives/load-data.directive';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [LoadDataDirective,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  providers: [],
  animations: [
    staggerAnimation
  ]
})
export class ProjectCardComponent {
  projects: Project[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  dataLoaded(data: Project[]) {
    this.projects = data;
  }

  getSanitizedSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
} 
