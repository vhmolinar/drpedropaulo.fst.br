export interface ServiceSection {
	heading: string;
	paragraphs: string[];
	list?: string[];
}

export interface Service {
	slug: string;
	name: string;
	icon: "spine" | "person" | "hand";
	seoTitle: string;
	description: string;
	eyebrow: string;
	h1: string;
	intro: string;
	summary: string;
	whatsappSubject: string;
	payment?: string;
	media: string;
	sections: ServiceSection[];
	indications: string[];
	reviewKeywords: string[];
	faq: { question: string; answer: string }[];
}

export const SERVICES: Service[] = [
	{
		slug: "fisioterapia-ortopedica-uberlandia",
		name: "Fisioterapia ortopédica",
		icon: "spine",
		seoTitle: "Fisioterapia ortopédica em Uberlândia | Dr. Pedro Paulo Molinar",
		description: "Fisioterapia ortopédica no Centro de Uberlândia: dores na coluna e nas articulações, lesões e pós-operatório, com avaliação individual. Agende pelo WhatsApp.",
		eyebrow: "Fisioterapia ortopédica",
		h1: "Fisioterapia ortopédica em Uberlândia",
		intro: "Avaliação e tratamento de dores e lesões do sistema musculoesquelético — coluna, ombros, joelhos, quadril — com um plano individual para você voltar a se mexer sem dor.",
		summary: "Avaliação e tratamento de lesões musculoesqueléticas, dores na coluna e nas articulações e recuperação pós-cirúrgica.",
		whatsappSubject: "gostaria de agendar uma avaliação de fisioterapia",
		media: "/media/estudio-pilates-uberlandia.webp",
		sections: [
			{
				heading: "Como funciona o tratamento",
				paragraphs: [
					"Tudo começa por uma avaliação fisioterapêutica: conversamos sobre seu histórico, quando a dor aparece e o que ela impede você de fazer, e analisamos postura, força e amplitude de movimento.",
					"Com isso, é montado um plano de tratamento com objetivos claros, que combina exercícios terapêuticos, orientações para o dia a dia e, quando indicado, Pilates clínico. O plano é revisto conforme a sua evolução.",
				],
			},
			{
				heading: "Reabilitação funcional",
				paragraphs: [
					"Mais do que aliviar a dor, o objetivo é devolver função: subir escadas, carregar peso, voltar ao trabalho e ao esporte com segurança. Por isso o tratamento evolui de exercícios mais controlados para movimentos parecidos com os da sua rotina.",
				],
			},
			{
				heading: "Pós-operatório ortopédico",
				paragraphs: [
					"Depois de uma cirurgia ortopédica, a fisioterapia ajuda a recuperar movimento, força e confiança, respeitando as orientações do seu médico e as fases de cicatrização.",
				],
			},
		],
		indications: ["Dor lombar", "Dor cervical", "Hérnia de disco", "Dores no ombro e no joelho", "Lesões esportivas", "Pós-operatório ortopédico", "Tendinites"],
		reviewKeywords: ["profissional", "atendimento", "capacitado", "atencioso", "compet"],
		faq: [
			{
				question: "Preciso de pedido médico para fazer fisioterapia?",
				answer: "Para atendimento particular, você pode agendar a avaliação diretamente. Se você tiver exames ou relatórios médicos, traga na primeira consulta: eles ajudam a montar o plano de tratamento.",
			},
			{
				question: "Como é a primeira consulta?",
				answer: "É uma avaliação completa: histórico, sintomas, postura e testes de movimento. Ao final, você sai com um plano de tratamento e orientações.",
			},
			{
				question: "Quanto tempo dura o tratamento?",
				answer: "Depende do problema e de como o seu corpo responde. A estimativa é discutida já na avaliação e revista ao longo do tratamento.",
			},
		],
	},
	{
		slug: "pilates-uberlandia",
		name: "Pilates clínico",
		icon: "person",
		seoTitle: "Pilates em Uberlândia | Pilates clínico com fisioterapeuta",
		description: "Pilates clínico no Centro de Uberlândia com fisioterapeuta: avaliação individual, aulas para iniciantes e terceira idade. Particular e Gympass (plano Silver).",
		eyebrow: "Pilates clínico",
		h1: "Pilates em Uberlândia com acompanhamento de fisioterapeuta",
		intro: "Aulas de Pilates clínico planejadas a partir de uma avaliação individual, para fortalecer, alongar e cuidar da postura com segurança — seja para aliviar dores ou para ganhar condicionamento.",
		summary: "Pilates conduzido por fisioterapeuta para fortalecer o core, melhorar a postura, a flexibilidade e o equilíbrio.",
		whatsappSubject: "tenho interesse nas aulas de Pilates",
		media: "/media/pilates-cadillac.mp4",
		sections: [
			{
				heading: "O que é o Pilates clínico",
				paragraphs: [
					"O Pilates clínico é o método Pilates aplicado por um fisioterapeuta. Antes de começar, você passa por uma avaliação: histórico, dores, postura e objetivos. A partir disso, os exercícios são escolhidos e adaptados para o seu corpo — e ajustados conforme a sua evolução.",
					"A diferença está no olhar clínico: cada movimento tem um propósito, seja reduzir uma dor, recuperar a mobilidade depois de uma lesão ou simplesmente treinar com mais consciência corporal.",
				],
			},
			{
				heading: "Aparelhos do estúdio",
				paragraphs: ["O estúdio, no Centro de Uberlândia, conta com os principais aparelhos do método, o que permite variar e progredir os exercícios com segurança:"],
				list: [
					"Reformer — fortalecimento e alongamento com resistência das molas",
					"Cadillac — exercícios de força, mobilidade e alongamento com apoio",
					"Ladder Barrel — mobilidade da coluna, alongamento e equilíbrio",
					"Chair — força de membros inferiores, estabilidade e controle postural",
				],
			},
			{
				heading: "Benefícios do Pilates",
				paragraphs: ["Com acompanhamento e regularidade, o Pilates contribui para:"],
				list: [
					"Fortalecimento do core (abdômen, lombar e quadril)",
					"Melhora da postura e da consciência corporal",
					"Mais flexibilidade e mobilidade articular",
					"Equilíbrio e coordenação",
					"Alívio de dores ligadas à postura e à falta de movimento",
				],
			},
			{
				heading: "Pilates para idosos",
				paragraphs: [
					"Com o passar dos anos, é natural perder força muscular, flexibilidade e equilíbrio. O Pilates trabalha exatamente essas capacidades, com movimentos controlados, de baixo impacto e com apoio dos aparelhos.",
					"Os exercícios são adaptados às limitações de cada pessoa e evoluem aos poucos, respeitando o ritmo e as condições de saúde de cada aluno. O foco está no que faz diferença na rotina:",
				],
				list: [
					"Equilíbrio e prevenção de quedas",
					"Força das pernas para levantar, sentar e subir escadas",
					"Mobilidade da coluna, dos ombros e do quadril",
					"Confiança para se movimentar com mais autonomia",
				],
			},
			{
				heading: "Pilates pelo Gympass (Wellhub)",
				paragraphs: [
					"O estúdio aceita Gympass/Wellhub a partir do plano Silver. Quem vem pelo aplicativo recebe o mesmo atendimento dos alunos particulares, nos mesmos aparelhos — como contam os próprios alunos nas avaliações do Google. Chame no WhatsApp para ver os horários disponíveis.",
				],
			},
			{
				heading: "Relaxamento depois do treino",
				paragraphs: [
					"Quem treina no estúdio também pode terminar a aula com uma sessão de massoterapia: massagem relaxante ou liberação miofascial para soltar a musculatura e ajudar o corpo a desacelerar depois do exercício.",
				],
			},
		],
		indications: ["Iniciantes", "Dor lombar e cervical", "Postura", "Flexibilidade", "Condicionamento físico", "Terceira idade", "Equilíbrio e prevenção de quedas"],
		reviewKeywords: ["pilates", "gympass", "wellhub", "aula", "aparelho"],
		faq: [
			{
				question: "Nunca fiz Pilates. Posso começar?",
				answer: "Pode. A primeira etapa é uma avaliação, e os exercícios começam no seu nível, com progressão gradual. Muitos alunos do estúdio começaram sem nenhuma experiência com o método.",
			},
			{
				question: "Pilates clínico é só para quem tem dor ou lesão?",
				answer: "Não. Ele é indicado tanto para quem está tratando uma dor ou se recuperando de uma lesão quanto para quem quer ganhar força, flexibilidade e qualidade de vida com orientação profissional.",
			},
			{
				question: "Tenho artrose ou osteoporose. Posso fazer Pilates?",
				answer: "Em muitos casos, sim, com os devidos cuidados. A avaliação inicial serve justamente para conhecer suas condições de saúde e adaptar os exercícios. Se você faz acompanhamento médico, siga as orientações do seu médico.",
			},
			{
				question: "Quantas vezes por semana devo fazer?",
				answer: "A frequência é definida na avaliação, de acordo com seus objetivos e sua rotina.",
			},
			{
				question: "O estúdio aceita Gympass (Wellhub)?",
				answer: "Sim, a partir do plano Silver, com o mesmo acompanhamento dos alunos particulares. Também há atendimento particular.",
			},
		],
	},
	{
		slug: "massoterapia-uberlandia",
		name: "Massoterapia",
		icon: "hand",
		seoTitle: "Massoterapia em Uberlândia | Massagem com fisioterapeuta",
		description: "Massoterapia no Centro de Uberlândia com fisioterapeuta: massagem relaxante, massagem terapêutica e liberação miofascial em sessões prolongadas ou após o Pilates.",
		eyebrow: "Massoterapia",
		h1: "Massoterapia em Uberlândia com fisioterapeuta",
		intro: "Massagem relaxante, massagem terapêutica e liberação miofascial feitas por um fisioterapeuta, para aliviar tensões musculares e relaxar — em sessões prolongadas ou como complemento ao seu treino de Pilates.",
		summary: "Massagem relaxante, terapêutica e liberação miofascial, em sessões prolongadas ou após o treino de Pilates.",
		whatsappSubject: "tenho interesse em uma sessão de massoterapia",
		payment: "Atendimento particular",
		media: "/media/massoterapia-uberlandia.webp",
		sections: [
			{
				heading: "Como funciona a sessão",
				paragraphs: [
					"Antes de começar, conversamos sobre onde você sente tensão ou desconforto e o que espera da sessão. Com isso, as técnicas e a intensidade são escolhidas para você — do toque mais suave, para relaxar, ao trabalho mais profundo, em pontos de tensão muscular.",
					"As sessões são conduzidas por um fisioterapeuta, que conhece a anatomia e o funcionamento dos músculos e adapta a massagem às suas condições de saúde.",
				],
			},
			{
				heading: "Técnicas utilizadas",
				paragraphs: ["Dependendo do seu objetivo, a sessão combina:"],
				list: [
					"Massagem relaxante — movimentos suaves e ritmados para reduzir o estresse e relaxar o corpo",
					"Massagem terapêutica — trabalho direcionado em regiões com tensão, rigidez ou desconforto muscular",
					"Liberação miofascial — manual ou com instrumentos, como bastão de rolos e ferramentas de liberação, para soltar a musculatura e a fáscia",
				],
			},
			{
				heading: "Sessões avulsas ou depois do Pilates",
				paragraphs: [
					"Você pode agendar uma sessão avulsa prolongada, dedicada só à massagem, ou fazer um momento de relaxamento logo após o seu treino de Pilates, ajudando o corpo a desacelerar depois do exercício.",
				],
			},
		],
		indications: ["Tensão muscular", "Estresse", "Dor nas costas e no pescoço", "Rigidez após o treino", "Relaxamento"],
		reviewKeywords: ["atencioso", "cuidado", "atendimento", "profissional"],
		faq: [
			{
				question: "Preciso fazer Pilates para agendar uma massagem?",
				answer: "Não. Há sessões avulsas prolongadas, só de massagem. Quem treina Pilates no estúdio também pode fazer um relaxamento após o treino.",
			},
			{
				question: "Qual a diferença entre massagem relaxante e terapêutica?",
				answer: "A relaxante usa movimentos suaves para reduzir o estresse e relaxar o corpo. A terapêutica é direcionada a regiões com tensão ou desconforto muscular e pode ser mais intensa. Muitas sessões combinam as duas.",
			},
			{
				question: "Como agendo uma sessão?",
				answer: "Chame no WhatsApp (34) 98414-3510 para ver os horários disponíveis.",
			},
		],
	},
];
