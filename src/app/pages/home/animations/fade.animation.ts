import { trigger, query, style, transition, animate, group } from '@angular/animations';

export const fadeAnimtaion = trigger('fadeAnimtaion', [
    transition(':enter', [
        group([
            query('h1, h2', [
              style({ opacity: 0, filter: 'blur(10px)' }),
                animate('500ms 200ms ease-out', style({  opacity: 1, filter: 'blur(0)'  })),
        
            ], {optional: true}),
            query('p', [
              style({ transform: 'translateX(-300px)', opacity: 0 }),
              animate('500ms 600ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
            ], {optional: true}),
            query('a', [
              style({ transform: 'translateY(300px)', opacity: 0 }),
              animate('500ms 800ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
            ], {optional: true}),
          ])
      ]),
    ])