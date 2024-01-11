import { Component, Renderer2, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Slide } from '../interfaces/Slide.interface';
import { HttpClient } from '@angular/common/http';
import {LoadDataDirective} from '../../../../directives/load-data.directive';

@Component({
  selector: 'app-certificates-slider',
  standalone: true,
  imports: [LoadDataDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './certificates-slider.component.html',
  styleUrl: './certificates-slider.component.css'
})

export class CertificatesSliderComponent {
  

  constructor(private renderer: Renderer2, private http:HttpClient) {}

   images: Slide[] = [];

   dataLoaded(data: Slide[]) {
    this.images = data;
  }

}
