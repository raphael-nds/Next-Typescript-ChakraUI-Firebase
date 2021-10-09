import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    color: {
        gray50: '#F7FAFC',
        gray100: '#EDF2F7',
        gray200: '#E2E8F0',
        gray300: '#CBD5E0',
        gray400: '#A0AEC0',
        gray500: '#718096',
        gray600: '#4A5568',
        gray700: '#2D3748',
        gray800: '#1A202C',
        gray900: '#171923',
    },

    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    
    styles: {
        global: {
            body: {
                bg: 'gray.800',
                color: 'gray.100',
            }
        }
    }
})