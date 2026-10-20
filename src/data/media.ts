export interface MediaItem {
	type: "video" | "image";
	src: string;
	poster?: string;
	width: number;
	height: number;
	duration?: string;
	title: string;
	description: string;
}

export const MEDIA: MediaItem[] = [
	{
		type: "video",
		src: "/media/pilates-cadillac.mp4",
		poster: "/media/pilates-cadillac.webp",
		width: 540,
		height: 960,
		duration: "PT7S",
		title: "Fortalecimento no Cadillac",
		description: "Exercício de Pilates no Cadillac para fortalecimento do core e estabilidade do tronco.",
	},
	{
		type: "video",
		src: "/media/pilates-ladder-barrel.mp4",
		poster: "/media/pilates-ladder-barrel.webp",
		width: 540,
		height: 960,
		duration: "PT9S",
		title: "Mobilidade e equilíbrio",
		description: "Exercício de mobilidade de ombro e equilíbrio no Ladder Barrel, indicado também para a terceira idade.",
	},
	{
		type: "image",
		src: "/media/pilates-alongamento-cadillac.webp",
		width: 720,
		height: 1280,
		title: "Flexibilidade",
		description: "Aluna realizando alongamento no Cadillac durante aula de Pilates clínico.",
	},
	{
		type: "video",
		src: "/media/pilates-wunda-chair.mp4",
		poster: "/media/pilates-wunda-chair.webp",
		width: 540,
		height: 960,
		duration: "PT24S",
		title: "Força na Wunda Chair",
		description: "Exercício de fortalecimento de membros inferiores e controle postural na Wunda Chair.",
	},
	{
		type: "image",
		src: "/media/estudio-pilates-uberlandia.webp",
		width: 900,
		height: 1200,
		title: "Nosso estúdio",
		description: "Estúdio de Pilates e fisioterapia no Centro de Uberlândia, equipado com Reformer, Cadillac, Ladder Barrel e Chair.",
	},
];
