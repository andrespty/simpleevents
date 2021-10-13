import { extendTheme } from "@chakra-ui/react";
import { Button } from "./Button";
export const theme = extendTheme({
    colors:{
        primary:{
          50: '#e2eaff',
          100: '#b2bfff',
          200: '#7f95ff',
          300: '#3456FF', //primary
          400: '#1d40fe',
          500: '#0526e5',
          600: '#001eb3',
          700: '#001581',
          800: '#000c50',
          900: '#000420',
        },
        secondary:{
          50: '#e9eafb',
          100: '#bfc1ef',
          200: '#9499e5',
          300: '#6b70dc',
          400: '#4447d4',
          500: '#2c2ebb',
          600: '#232491',
          700: '#191967',
          800: '#0e103e',
          900: '#070928', //secondary
        }
    },
    styles: {
      global:{
        body:{
          bg:'#F8F8FA'
        }
      }
    },
    components: {
      Button,
    }
})