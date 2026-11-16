import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const AppPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fef2f7',
      100: '#fac3da',
      200: '#f693bc',
      300: '#f1639e',
      400: '#ed3481',
      500: '#e90363',
      600: '#c60354',
      700: '#a30345',
      800: '#800236',
      900: '#5d0228',
      950: '#3a0119',
    },
    colorScheme: {
      light: {
        primary: {
          contrastColor: '#fff',
        },
      },
      dark: {
        primary: {
          contrastColor: '#fff',
        },
      },
    },
  },
  components: {
    progressspinner: {
      colorScheme: {
        light: {
          root: {
            colorOne: '{primary.500}',
            colorTwo: '{primary.500}',
            colorThree: '{primary.500}',
            colorFour: '{primary.500}',
          },
        },
        dark: {
          root: {
            colorOne: '{primary.500}',
            colorTwo: '{primary.500}',
            colorThree: '{primary.500}',
            colorFour: '{primary.500}',
          },
        },
      },
    },
  },
});
