import { trigger, stagger, query, keyframes, style, transition, animate } from '@angular/animations';
export const staggerAnimation = trigger('staggerAnimation', [
  transition('* => *', [
    query('.container', style({ opacity: 0, filter: 'blur(2px)' }), { optional: true }),
    query('.container', stagger('700ms', [
      animate('1s ease-in', keyframes([
        style({ opacity: 0, filter: 'blur(1px)', offset: 0 }),
        style({ opacity: 0.5, filter: 'blur(0.5px)', offset: 0.5 }),
        style({ opacity: 1, filter: 'blur(0)', offset: 1 }),
      ]))
    ]), { optional: true })
  ])
]);
