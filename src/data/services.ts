export interface ServiceSection {
	heading: string;
	paragraphs: string[];
	list?: string[];
}

export interface Service {
	slug: string;
	name: string;
	icon: "spine" | "person" | "refresh" | "trend" | "hand";
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
		slug: "pilates-uberlandia",
		name: "Pilates clínico",
		icon: "person",
		seoTitle: "Pilates em Uberlândia | Pilates clínico com fisioterapeuta",
		description: "Pilates clínico no Centro de Uberlândia com o fisioterapeuta Dr. Pedro Paulo Molinar. Reformer, Cadillac e Chair, com avaliação individual. Particular e Gympass.",
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
				heading: "Relaxamento depois do treino",
				paragraphs: [
					"Quem treina no estúdio também pode terminar a aula com uma sessão de massoterapia: massagem relaxante ou liberação miofascial para soltar a musculatura e ajudar o corpo a desacelerar depois do exercício.",
				],
			},
		],
		indications: ["Iniciantes", "Dor lombar e cervical", "Postura", "Flexibilidade", "Condicionamento físico", "Terceira idade"],
		reviewKeywords: ["pilates", "aula", "aparelho", "aluno"],
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
				question: "Quantas vezes por semana devo fazer?",
				answer: "A frequência é definida na avaliação, de acordo com seus objetivos e sua rotina.",
			},
			{
				question: "O estúdio aceita Gympass (Wellhub)?",
				answer: "Sim, a partir do plano Silver. Também há atendimento particular.",
			},
		],
	},
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
	{
		slug: "pilates-para-idosos-uberlandia",
		name: "Pilates para idosos",
		icon: "refresh",
		seoTitle: "Pilates para idosos em Uberlândia | Equilíbrio e mobilidade",
		description: "Pilates para a terceira idade no Centro de Uberlândia: equilíbrio, força e mobilidade com acompanhamento de fisioterapeuta e exercícios adaptados.",
		eyebrow: "Terceira idade",
		h1: "Pilates para idosos em Uberlândia",
		intro: "Exercícios adaptados para a terceira idade, com foco em equilíbrio, força e mobilidade — para ter mais autonomia e segurança no dia a dia, com acompanhamento de um fisioterapeuta.",
		summary: "Exercícios adaptados para equilíbrio, força e mobilidade, com segurança e acompanhamento de fisioterapeuta.",
		whatsappSubject: "tenho interesse no Pilates para a terceira idade",
		media: "/media/pilates-ladder-barrel.mp4",
		sections: [
			{
				heading: "Por que o Pilates é indicado na terceira idade",
				paragraphs: [
					"Com o passar dos anos, é natural perder força muscular, flexibilidade e equilíbrio. O Pilates trabalha exatamente essas capacidades, com movimentos controlados, de baixo impacto e com apoio dos aparelhos.",
					"Os exercícios são adaptados às limitações de cada pessoa e evoluem aos poucos, respeitando o ritmo e as condições de saúde de cada aluno.",
				],
			},
			{
				heading: "O que o Pilates trabalha",
				paragraphs: ["Nas aulas, o foco está em capacidades que fazem diferença na rotina:"],
				list: [
					"Equilíbrio e prevenção de quedas",
					"Força das pernas para levantar, sentar e subir escadas",
					"Mobilidade da coluna, dos ombros e do quadril",
					"Postura e respiração",
					"Confiança para se movimentar com mais autonomia",
				],
			},
		],
		indications: ["Equilíbrio", "Prevenção de quedas", "Mobilidade", "Postura", "Força nas pernas"],
		reviewKeywords: ["pilates", "atencioso", "dificuldade", "necessidade", "qualidade de vida"],
		faq: [
			{
				question: "Tenho artrose ou osteoporose. Posso fazer Pilates?",
				answer: "Em muitos casos, sim, com os devidos cuidados. A avaliação inicial serve justamente para conhecer suas condições de saúde e adaptar os exercícios. Se você faz acompanhamento médico, siga as orientações do seu médico.",
			},
			{
				question: "Os exercícios são seguros?",
				answer: "Os exercícios são de baixo impacto, escolhidos a partir da avaliação e acompanhados pelo fisioterapeuta, com progressão gradual.",
			},
			{
				question: "Nunca fiz exercício. Consigo acompanhar?",
				answer: "Sim. As aulas começam no seu nível e evoluem aos poucos.",
			},
		],
	},
	{
		slug: "pilates-gympass-uberlandia",
		name: "Pilates pelo Gympass",
		icon: "trend",
		seoTitle: "Pilates pelo Gympass (Wellhub) em Uberlândia | Plano Silver",
		description: "Estúdio de Pilates em Uberlândia que aceita Gympass/Wellhub a partir do plano Silver. Pilates clínico com fisioterapeuta no Centro. Agende pelo WhatsApp.",
		eyebrow: "Gympass / Wellhub",
		h1: "Pilates pelo Gympass em Uberlândia",
		intro: "O estúdio aceita Gympass/Wellhub a partir do plano Silver. Você faz Pilates clínico com fisioterapeuta, nos mesmos aparelhos e com o mesmo cuidado dos alunos particulares.",
		summary: "Aceitamos Gympass/Wellhub a partir do plano Silver, com o mesmo atendimento dos alunos particulares.",
		whatsappSubject: "quero fazer Pilates pelo Gympass",
		media: "/media/pilates-wunda-chair.mp4",
		sections: [
			{
				heading: "Como funciona pelo Gympass",
				paragraphs: [
					"Se você tem Gympass/Wellhub no plano Silver ou superior, pode fazer suas aulas no estúdio. Chame no WhatsApp para ver os horários disponíveis e combinar o seu início.",
					"Quem vem pelo Gympass recebe o mesmo atendimento dos alunos particulares — como contam os próprios alunos nas avaliações do Google.",
				],
			},
			{
				heading: "O que você encontra no estúdio",
				paragraphs: ["Um estúdio completo no Centro de Uberlândia:"],
				list: [
					"Pilates clínico conduzido por fisioterapeuta formado pela UFU",
					"Reformer, Cadillac, Ladder Barrel e Chair",
					"Ambiente climatizado e organizado",
					"Horários de manhã (07:00 – 11:00) e à noite (16:00 – 20:00), de segunda a sexta",
				],
			},
		],
		indications: ["Plano Silver ou superior", "Iniciantes", "Condicionamento", "Postura", "Alívio de dores"],
		reviewKeywords: ["gympass", "wellhub"],
		faq: [
			{
				question: "Qual plano do Gympass/Wellhub é aceito?",
				answer: "O estúdio aceita a partir do plano Silver.",
			},
			{
				question: "O atendimento é diferente para quem vem pelo Gympass?",
				answer: "Não. O acompanhamento é o mesmo dos alunos particulares.",
			},
			{
				question: "Como agendo minha aula?",
				answer: "Chame no WhatsApp (34) 98414-3510 para ver os horários disponíveis e combinar o seu início.",
			},
		],
	},
];
