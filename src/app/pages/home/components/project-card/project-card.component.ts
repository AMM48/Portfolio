import { Component, OnInit } from '@angular/core';
import { staggerAnimation } from '../../animations/stagger.animation';
import { Project } from '../interfaces/Project.interface';
import {LoadDataDirective} from '../../../../directives/load-data.directive';
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [LoadDataDirective],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  providers: [],
  animations: [ 
    staggerAnimation
  ],
})
export class ProjectCardComponent {
  projects: Project[] = [];
  dataLoaded(data: Project[]) {
    this.projects = data;
  }
} 
