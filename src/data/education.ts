export interface Course {
	name: string;
	school?: string;
}

export const EDUCATION: Course[] = [
	{ name: "Formação completa em Pilates", school: "Virtus" },
	{ name: "Pilates na gestação", school: "Virtus" },
	{ name: "Pilates na terceira idade" },
	{ name: "Avaliação cinesiofuncional e raciocínio clínico das aplicabilidades do Pilates nas lesões ortopédicas e desportivas", school: "Virtus" },
	{ name: "Tratamento da coluna vertebral baseado na classificação em subgrupos", school: "Virtus" },
	{ name: "Mobilização de tecidos moles", school: "Virtus" },
	{ name: "Biomecânica da dor", school: "Labsforfit" },
	{ name: "Terapia manual aplicada", school: "Labsforfit" },
	{ name: "Reabilitação das lesões do complexo do ombro: prática baseada em evidência", school: "Cura Healing" },
	{ name: "International Foot and Ankle Biomechanics", school: "Escola de Medicina de São Paulo" },
	{ name: "Tratamento da dor com enfoque neuro-ortopédico (teórico e prático)", school: "Reabilitador" },
	{ name: "MIT – Movimento Inteligente: Pilates, treinamento funcional e terapia manual", school: "Congresso Internacional de Fisioterapia em Coluna Vertebral" },
];
