import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: '[appLoadData]',
  standalone: true
})
export class LoadDataDirective implements OnInit {

  @Input() dataSourceUrl!: string;
  @Output() dataLoaded = new EventEmitter<any[]>();

  constructor(private el: ElementRef, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.http.get<any[]>(this.dataSourceUrl).subscribe(data => {
      this.dataLoaded.emit(data);
    });
  }
}
