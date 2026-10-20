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
	payment: string;
	offers?: { name: string; price: number }[];
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
		description: "Fisioterapia ortopédica no Centro de Uberlândia: lombalgia, hérnia de disco, artrose, bursite e tendinopatias de ombro e joelho. Sessões de 50 min, particular.",
		eyebrow: "Fisioterapia ortopédica",
		h1: "Fisioterapia ortopédica em Uberlândia",
		intro: "Avaliação e tratamento de dores e lesões na coluna, nos ombros e nos joelhos — como lombalgia, hérnia de disco, artrose, bursite e tendinopatias — com um plano individual para você voltar a se mexer sem dor.",
		summary: "Tratamento de lombalgia, hérnia de disco, artrose, bursite e tendinopatias, em sessões de 50 minutos.",
		whatsappSubject: "gostaria de agendar uma avaliação de fisioterapia",
		payment: "Atendimento particular",
		media: "/media/estudio-pilates-uberlandia.webp",
		sections: [
			{
				heading: "Como funciona o tratamento",
				paragraphs: [
					"Tudo começa por uma avaliação fisioterapêutica: conversamos sobre seu histórico, quando a dor aparece e o que ela impede você de fazer, e analisamos postura, força e amplitude de movimento.",
					"Com isso, é montado um plano de tratamento com objetivos claros. As sessões duram 50 minutos e, em geral, acontecem 2 vezes por semana. Na maioria dos casos, o tratamento leva no mínimo 3 meses — tempo para o corpo se adaptar e os ganhos de força e movimento se consolidarem. O plano é revisto conforme a sua evolução.",
				],
			},
			{
				heading: "Condições mais atendidas",
				paragraphs: ["No dia a dia do consultório, os casos mais comuns são:"],
				list: [
					"Lombalgia — dor na região lombar, aguda ou que volta com frequência",
					"Hérnia de disco — na lombar ou na cervical, com ou sem dor irradiada",
					"Artrose — desgaste das articulações, como joelho e quadril",
					"Tendinopatia de ombro — dor e limitação para elevar o braço",
					"Bursite — inflamação das bursas, comum no ombro e no quadril",
					"Tendinopatia no joelho — dor ao subir escadas, agachar ou correr",
				],
			},
			{
				heading: "Recursos utilizados",
				paragraphs: [
					"O centro do tratamento é o exercício terapêutico, escolhido para cada fase da recuperação. Quando indicado, ele é combinado com recursos de eletroterapia:",
				],
				list: [
					"Exercícios isométricos — força sem movimentar a articulação, úteis nas fases de dor",
					"Exercícios concêntricos e excêntricos — o músculo trabalhando ao encurtar e ao alongar, base do tratamento das tendinopatias",
					"Exercícios em cadeia cinética aberta e fechada — com o pé ou a mão livres ou apoiados, para treinar a articulação de formas diferentes",
					"Exercícios metabólicos — para resistência muscular e condicionamento",
					"Eletroterapia e ultrassom terapêutico",
					"Pilates clínico, quando indicado, para dar continuidade ao fortalecimento",
				],
			},
			{
				heading: "Um exemplo de evolução",
				paragraphs: [
					"Um paciente chegou com tendinopatia no ombro e grande restrição de movimento. Com um plano de exercícios progressivos, teve uma melhora importante da movimentação do ombro em 10 sessões.",
					"Cada caso evolui de um jeito: o tempo de tratamento depende do problema, de há quanto tempo ele existe e de como o seu corpo responde. Por isso a evolução é reavaliada ao longo do tratamento.",
				],
			},
			{
				heading: "Formação",
				paragraphs: [
					"Além da graduação pela Universidade Federal de Uberlândia (UFU), o Dr. Pedro tem cursos voltados ao tratamento da dor e das lesões ortopédicas, como:",
				],
				list: [
					"Tratamento da coluna vertebral baseado na classificação em subgrupos (Virtus)",
					"Reabilitação das lesões do complexo do ombro: prática baseada em evidência (Cura Healing)",
					"Biomecânica da dor e Terapia manual aplicada (Labsforfit)",
					"Tratamento da dor com enfoque neuro-ortopédico (Reabilitador)",
					"International Foot and Ankle Biomechanics (Escola de Medicina de São Paulo)",
				],
			},
			{
				heading: "Pós-operatório ortopédico",
				paragraphs: [
					"Depois de uma cirurgia ortopédica, a fisioterapia ajuda a recuperar movimento, força e confiança, respeitando as orientações do seu médico e as fases de cicatrização.",
				],
			},
		],
		indications: ["Lombalgia", "Hérnia de disco", "Artrose", "Tendinopatia de ombro", "Bursite", "Tendinopatia no joelho", "Dor cervical", "Pós-operatório ortopédico"],
		reviewKeywords: ["profissional", "atendimento", "capacitado", "atencioso", "compet"],
		faq: [
			{
				question: "Quanto tempo dura cada sessão?",
				answer: "50 minutos. Em geral, são 2 sessões por semana.",
			},
			{
				question: "Quanto tempo dura o tratamento?",
				answer: "Na maioria dos casos, no mínimo 3 meses. A estimativa para o seu caso é discutida na avaliação e revista ao longo do tratamento.",
			},
			{
				question: "Vocês atendem convênio?",
				answer: "Não. O atendimento de fisioterapia é somente particular.",
			},
			{
				question: "Preciso de pedido médico para fazer fisioterapia?",
				answer: "Para atendimento particular, você pode agendar a avaliação diretamente. Se você tiver exames ou relatórios médicos, traga na primeira consulta: eles ajudam a montar o plano de tratamento.",
			},
			{
				question: "Como é a primeira consulta?",
				answer: "É uma avaliação completa: histórico, sintomas, postura e testes de movimento. Ao final, você sai com um plano de tratamento e orientações.",
			},
		],
	},
	{
		slug: "pilates-uberlandia",
		name: "Pilates clínico",
		icon: "person",
		seoTitle: "Pilates em Uberlândia | Pilates clínico com fisioterapeuta",
		description: "Pilates clínico no Centro de Uberlândia com fisioterapeuta: aulas de 55 min com massagem no final e aula experimental grátis. Particular e Gympass (Silver).",
		eyebrow: "Pilates clínico",
		h1: "Pilates em Uberlândia com acompanhamento de fisioterapeuta",
		intro: "Aulas de Pilates clínico planejadas a partir de uma avaliação individual, para fortalecer, alongar e cuidar da postura com segurança — e toda aula termina com 10 minutos de massagem. A primeira aula experimental é grátis.",
		summary: "Pilates conduzido por fisioterapeuta, com 10 minutos de massagem ao fim de cada aula. Aula experimental grátis.",
		whatsappSubject: "quero agendar uma aula experimental de Pilates",
		payment: "Particular ou Gympass (plano Silver) · aula experimental grátis",
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
				heading: "Como é a aula",
				paragraphs: ["Cada aula dura 55 minutos, divididos em três momentos:"],
				list: [
					"40 minutos de exercícios nos aparelhos",
					"5 minutos de exercícios de relaxamento",
					"10 minutos de massagem para fechar a aula",
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
				heading: "Pilates na gestação",
				paragraphs: [
					"Gestantes também podem treinar no estúdio, com exercícios adaptados a cada fase da gestação. No fim da aula, a massagem é feita com a aluna sentada.",
				],
			},
			{
				heading: "Pilates pelo Gympass (Wellhub)",
				paragraphs: [
					"O estúdio aceita Gympass/Wellhub a partir do plano Silver. Quem vem pelo aplicativo recebe o mesmo atendimento dos alunos particulares, nos mesmos aparelhos — como contam os próprios alunos nas avaliações do Google. Chame no WhatsApp para ver os horários disponíveis.",
				],
			},
			{
				heading: "Formação",
				paragraphs: ["O Dr. Pedro é fisioterapeuta pela UFU, com cursos específicos de Pilates:"],
				list: [
					"Formação completa em Pilates (Virtus)",
					"Avaliação cinesiofuncional e raciocínio clínico das aplicabilidades do Pilates nas lesões ortopédicas e desportivas (Virtus)",
					"Pilates na gestação (Virtus) e Pilates na terceira idade",
					"MIT – Movimento Inteligente: Pilates, treinamento funcional e terapia manual",
				],
			},
		],
		indications: ["Iniciantes", "Dor lombar e cervical", "Postura", "Flexibilidade", "Condicionamento físico", "Terceira idade", "Equilíbrio e prevenção de quedas", "Gestantes"],
		reviewKeywords: ["pilates", "gympass", "wellhub", "aula", "aparelho"],
		faq: [
			{
				question: "Tem aula experimental?",
				answer: "Sim, a aula experimental é gratuita. Chame no WhatsApp para agendar.",
			},
			{
				question: "Quanto tempo dura a aula?",
				answer: "55 minutos: 40 de exercícios nos aparelhos, 5 de exercícios de relaxamento e 10 de massagem.",
			},
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
				question: "Gestantes podem fazer Pilates?",
				answer: "Sim, com exercícios adaptados a cada fase da gestação. Se você faz acompanhamento pré-natal, siga as orientações do seu médico.",
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
		description: "Massoterapia com fisioterapeuta no Centro de Uberlândia: massagem relaxante, terapêutica e liberação miofascial. Sessão de 50 min por R$ 75 e pacotes.",
		eyebrow: "Massoterapia",
		h1: "Massoterapia em Uberlândia com fisioterapeuta",
		intro: "Massagem relaxante, massagem terapêutica e liberação miofascial feitas por um fisioterapeuta, para aliviar tensões musculares e relaxar — em sessões de 50 minutos ou ao final da sua aula de Pilates.",
		summary: "Massagem relaxante, terapêutica e liberação miofascial, em sessões de 50 minutos a partir de R$ 50.",
		whatsappSubject: "tenho interesse em uma sessão de massoterapia",
		payment: "Atendimento particular",
		offers: [
			{ name: "Sessão avulsa de massoterapia (50 min)", price: 75 },
			{ name: "Pacote de 4 sessões de massoterapia", price: 240 },
			{ name: "Pacote de 8 sessões de massoterapia", price: 400 },
		],
		media: "/media/massoterapia-uberlandia.webp",
		sections: [
			{
				heading: "Como funciona a sessão",
				paragraphs: [
					"A sessão avulsa dura 50 minutos. Antes de começar, conversamos sobre onde você sente tensão ou desconforto e o que espera da sessão. Com isso, as técnicas e a intensidade são escolhidas para você — do toque mais suave, para relaxar, ao trabalho mais profundo, em pontos de tensão muscular.",
					"As sessões são conduzidas por um fisioterapeuta, com formação em mobilização de tecidos moles e terapia manual, que conhece a anatomia e o funcionamento dos músculos e adapta a massagem às suas condições de saúde.",
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
				heading: "Valores",
				paragraphs: ["Atendimento somente particular:"],
				list: [
					"Sessão avulsa (50 minutos) — R$ 75",
					"Pacote de 4 sessões — R$ 240 (R$ 60 por sessão)",
					"Pacote de 8 sessões — R$ 400 (R$ 50 por sessão)",
				],
			},
			{
				heading: "Massagem no fim da aula de Pilates",
				paragraphs: [
					"Quem treina Pilates no estúdio já tem massagem incluída: toda aula termina com 10 minutos de massagem, para soltar a musculatura e ajudar o corpo a desacelerar depois do exercício.",
				],
			},
			{
				heading: "Gestantes",
				paragraphs: [
					"Durante a gestação, a massagem deitada de barriga para baixo é contraindicada. Por isso, para gestantes, a massagem é feita apenas com a aluna sentada, ao final da aula de Pilates.",
				],
			},
		],
		indications: ["Tensão muscular", "Estresse", "Dor nas costas e no pescoço", "Rigidez após o treino", "Relaxamento"],
		reviewKeywords: ["atencioso", "cuidado", "atendimento", "profissional"],
		faq: [
			{
				question: "Quanto custa a sessão de massoterapia?",
				answer: "A sessão avulsa de 50 minutos custa R$ 75. Há pacotes de 4 sessões por R$ 240 e de 8 sessões por R$ 400.",
			},
			{
				question: "A massoterapia é aceita pelo Gympass?",
				answer: "Não. A massoterapia é atendida somente no particular.",
			},
			{
				question: "Preciso fazer Pilates para agendar uma massagem?",
				answer: "Não. A sessão avulsa de 50 minutos é independente do Pilates.",
			},
			{
				question: "Gestantes podem fazer massagem?",
				answer: "Somente sentadas, ao final da aula de Pilates. A massagem de barriga para baixo é contraindicada na gestação.",
			},
			{
				question: "Qual a diferença entre massagem relaxante e terapêutica?",
				answer: "A relaxante usa movimentos suaves para reduzir o estresse e relaxar o corpo. A terapêutica é direcionada a regiões com tensão ou desconforto muscular e pode ser mais intensa. Muitas sessões combinam as duas.",
			},
		],
	},
];
