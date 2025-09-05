import { Proyect } from '../interfaces/proyect.interface';

export const PROYECTS_MOCK: Proyect[] = [
    {
        id: 1,
        title: 'E-commerce App',
        description: 'proyectsSection.proyects.proyect_1.description',
        image: 'assets/tesloShopAdmin.png',
        tags: ['Angular', 'Nest.js', 'MongoDB'],
        demoUrl: 'https://spiffy-flan-80bdcf.netlify.app/',
        githubUrl: 'https://github.com/MiguelAngelR0/teslo-shop',
    },
    {
        id: 2,
        title: 'Country Search App',
        description: 'proyectsSection.proyects.proyect_2.description',
        image: 'assets/countryApp.png',
        tags: ['Angular', 'TypeScript', 'Tailwind', 'DaisyUI'],
        demoUrl: 'https://miguelangelr0.github.io/country-app/',
        githubUrl: 'https://github.com/MiguelAngelR0/country-app'
    },
    {
        id: 3,
        title: 'Landing Page',
        description: 'proyectsSection.proyects.proyect_4.description',
        image: 'assets/facturasApp.png',
        tags: ['Angular', 'Tailwind', 'DaisyUI'],
        demoUrl: 'https://facturasangular.netlify.app/',
        githubUrl: 'https://github.com/MiguelAngelR0/facturasAngularDaisyUi',
    },
    {
        id: 4,
        title: 'Gifs App',
        description: 'proyectsSection.proyects.proyect_3.description',
        image: 'assets/gifApp.png',
        tags: ['Angular', 'Tailwind', 'DaisyUI'],
        demoUrl: 'https://miguelangelr0.github.io/gifs-app/',
        githubUrl: 'https://github.com/MiguelAngelR0/gifs-app',
    },

];
