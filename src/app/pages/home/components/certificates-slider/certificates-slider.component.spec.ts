import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesSliderComponent } from './certificates-slider.component';

describe('CertificatesSliderComponent', () => {
  let component: CertificatesSliderComponent;
  let fixture: ComponentFixture<CertificatesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificatesSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificatesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
