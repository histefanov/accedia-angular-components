import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
  animateChild,
  group,
  sequence
} from '@angular/animations';
import { PRIMARY_COLOR_RED } from './constants';

const TAB_SLIDER_TIMING_FN = '1000ms cubic-bezier(0.4, 0, 0.2, 1)';
const NEUTRAL_COLOR_GREY_LIGHT = '#dcdcdc';

export const flyInOutLeftColumn = [
  trigger('flyInOutLeftColumn', [
    state('in', style({ opacity: 0, transform: 'translateY(0)', background: 'blue' })),
    transition('void => *', [style({ opacity: 0, transform: 'translateY(-100%)' }), animate('310ms')]),
    transition('* => void', [animate('310ms', style({ opacity: 0, transform: 'translateY(-100%)' }))])
  ])
];

export const flyInOutRightColumn = [
  trigger('flyInOutRightColumn', [
    state('in', style({ opacity: 1, transform: 'translateY(0)' })),
    transition('void => *', [style({ opacity: 0, transform: 'translateY(-100%)' }), animate('310ms 310ms')]),
    transition('* => void', [animate('310ms 310ms', style({ opacity: 0, transform: 'translateY(-100%)' }))])
  ])
];

export const fadeAnimationGuide = trigger('fadeAnimation', [
  transition(':enter', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
  transition(':leave', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))])
]);

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-out', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('300ms ease-out', style({ opacity: 0 }))
  ])
]);

export const staggerFadeIn = [
  trigger('stagger', [
    transition('* => *', [
      query(':enter', [style({ opacity: 0 }), stagger(100, [animate('0.5s', style({ opacity: 1 }))])], {
        optional: true
      })
    ])
  ])
];

export const expandableContainer = [
  trigger('expandContainer', [
    transition(':enter', [
      style({ height: '0px', visibility: 'hidden' }),
      animate('300ms ease-out', style({ height: '*', visibility: 'visible' }))
    ]),
    transition(':leave', [
      animate('300ms ease-out', style({ height: '0px', visibility: 'hidden' }))
    ])
  ])
];

export const expandableArrow = [
  trigger('expandableArrow', [
    state('collapsed', style({ transform: 'rotate({{direction}}{{collapsedRotation}}deg)' }), {
      params: { collapsedRotation: '0', direction: '' }
    }),
    state('expanded', style({ transform: 'rotate({{direction}}{{expandedRotation}}deg)' }), {
      params: { expandedRotation: '90', direction: '' }
    }),
    transition('expanded <=> collapsed', animate('{{getNumberSpeed}}ms ease-out'), {
      params: { getNumberSpeed: 300 }
    }),
    transition('collapsed <=> expanded', animate('{{getNumberSpeed}}ms ease-out'), {
      params: { getNumberSpeed: 300 }
    })
  ])
];

export const selectAnimation = [
  trigger('selectAnimation', [
    state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden', border: 'none' })),
    state('expanded', style({ height: '*' })),
    transition('expanded <=> collapsed', animate('180ms cubic-bezier(0.8, 0.5, 0.7, 1.0)'))
  ])
];

export const tabSlider = [
  trigger('tabSlider', [
    state('in-from-left', style({ opacity: 1 })),
    state('in-from-right', style({ opacity: 1 })),
    state('out-to-left', style({ opacity: 0, transform: 'translateX(0)' })),
    state('out-to-right', style({ opacity: 0, transform: 'translateX(0)' })),
    transition('* => out-to-right', animate(TAB_SLIDER_TIMING_FN, style({ transform: 'translateX(100%)' }))),
    transition('* => out-to-left', [animate(TAB_SLIDER_TIMING_FN, style({ transform: 'translateX(-100%)' }))]),
    transition('* => in-from-left', [
      sequence([
        style({ transform: 'translateX(-100%)', opacity: 1 }),
        animate(TAB_SLIDER_TIMING_FN, style({ transform: 'translateX(0)' }))
      ])
    ]),
    transition('* => in-from-right', [
      sequence([
        style({ transform: 'translateX(100%)', opacity: 1 }),
        animate(TAB_SLIDER_TIMING_FN, style({ transform: 'translateX(0)' }))
      ])
    ])
  ])
];

export const toggleButtonAnimation = [
  trigger('toggleButton', [
    state('on', style({ transform: 'translateX(100%)' })),
    state('off', style({ transform: 'translateX(0)' })),
    transition('on <=> off', animate('250ms cubic-bezier(0.4, 0, 0.2, 1)'))
  ])
];

export const toggleBackgroundAnimation = [
  trigger('toggleBackground', [
    state('on', style({ background: '{{onStateColor}}' }), {
      params: { onStateColor: PRIMARY_COLOR_RED },
    }),
    state('off', style({ background: NEUTRAL_COLOR_GREY_LIGHT })),
    transition('on <=> off', [
      group([
        query('@toggleButton', [animateChild()]),
        animate('250ms cubic-bezier(0.4, 0, 0.2, 1)'),
      ]),
    ]),
  ]),
];

export const flyInOut = [
  trigger('flyInOut', [
    state('in', style({ opacity: 1, transform: 'translateY(0)' })),
    transition('void => *', [
      style({ opacity: 0, transform: 'translateY(-100%)' }),
      animate(200)
    ]),
    transition('* => void', [
      animate(200, style({ opacity: 0, transform: 'translateY(-100%)' }))
    ])
  ])
];
