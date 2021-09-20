import type { RecursivePartial } from 'tsparticles/Types';
import type { IOptions } from 'tsparticles/Options/Interfaces/IOptions';

export const CONFIG: RecursivePartial<IOptions> = {
	particles: {
		number: { value: 200, density: { enable: true, value_area: 1000 } },
		color: { value: '#990099' },
		shape: {
			type: 'circle',
			stroke: { width: 0, color: '#990099' },
			polygon: { nb_sides: 5 },
			image: { src: '', width: 100, height: 100 }
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
		},
		size: {
			value: 3,
			random: true,
			anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
		},
		line_linked: { enable: true, distance: 150, color: '#990099', opacity: 0.4, width: 1 },
		move: {
			enable: true,
			speed: 1,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: { enable: false, rotateX: 600, rotateY: 1200 }
		}
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: { enable: true, mode: 'grab' },
			onclick: { enable: true, mode: 'push' },
			resize: true
		},
		modes: {
			grab: { distance: 182.71737276780266, line_linked: { opacity: 1 } },
			push: { particles_nb: 4 }
		}
	},
	retina_detect: true
};
