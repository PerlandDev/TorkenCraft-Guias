// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Guías de TorkenCraft',
			logo: {src: '/src/assets/torkencraft.png'},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Facciones',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introducción', slug: 'facciones' },
						{ label: 'Fundamentos', slug: 'facciones/fundamentos'},
						{ label: 'Poder y Territorio', slug: 'facciones/poder-territorio'},
						{ label: 'Diplomacia', slug: 'facciones/diplomacia'},
						{ label: 'Gestión de Miembros', slug: 'facciones/gestion-miembros'},
						{ label: 'Guerra y Combate', slug: 'facciones/guerra'},
						{ label: 'Comandos', slug: 'facciones/comandos'}
					],
				},
			],
		}),
	],
});
