import { ADDRESS, BUSINESS_NAME, CREFITO, GEO, INSTAGRAM_URL, MAPS_CID_URL, PHONE_E164, SITE_URL, TITLE } from "../config";
import { EDUCATION } from "./education";
import { FAQ } from "./faq";
import { MEDIA } from "./media";
import { SERVICES, type Service } from "./services";

const businessId = `${SITE_URL}/#business`;
const personId = `${SITE_URL}/#person`;
const sameAs = [INSTAGRAM_URL, MAPS_CID_URL];

export const homeSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": `${SITE_URL}/#website`,
			url: `${SITE_URL}/`,
			name: TITLE,
			inLanguage: "pt-BR",
			publisher: { "@id": businessId },
		},
		{
			"@type": "Physiotherapy",
			"@id": businessId,
			name: BUSINESS_NAME,
			alternateName: `${TITLE} – Fisioterapia e Pilates`,
			description: "Fisioterapia ortopédica, Pilates clínico, massoterapia e reabilitação funcional no Centro de Uberlândia-MG. Atendimento particular e Gympass/Wellhub.",
			url: `${SITE_URL}/`,
			telephone: PHONE_E164,
			image: [`${SITE_URL}/og-image.jpg`, `${SITE_URL}/media/estudio-pilates-uberlandia.webp`, `${SITE_URL}/avatar-whatsapp.jpg`],
			logo: `${SITE_URL}/fisioterapia.png`,
			priceRange: "$$",
			currenciesAccepted: "BRL",
			paymentAccepted: "Particular, Gympass/Wellhub (Pilates)",
			address: {
				"@type": "PostalAddress",
				streetAddress: ADDRESS.street,
				addressLocality: ADDRESS.city,
				addressRegion: ADDRESS.region,
				postalCode: ADDRESS.postalCode,
				addressCountry: ADDRESS.country,
			},
			geo: { "@type": "GeoCoordinates", latitude: GEO.lat, longitude: GEO.lng },
			hasMap: MAPS_CID_URL,
			areaServed: { "@type": "City", name: "Uberlândia" },
			openingHoursSpecification: [
				{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "11:00" },
				{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "16:00", closes: "20:00" },
			],
			availableService: SERVICES.map((s) => ({ "@type": "MedicalTherapy", name: s.name, url: `${SITE_URL}/${s.slug}` })),
			employee: { "@id": personId },
			sameAs,
		},
		{
			"@type": "Person",
			"@id": personId,
			name: "Pedro Paulo Molinar",
			honorificPrefix: "Dr.",
			jobTitle: "Fisioterapeuta",
			image: `${SITE_URL}/avatar-whatsapp.jpg`,
			url: `${SITE_URL}/`,
			alumniOf: { "@type": "CollegeOrUniversity", name: "Universidade Federal de Uberlândia" },
			worksFor: { "@id": businessId },
			knowsAbout: ["Fisioterapia", "Fisioterapia ortopédica", "Pilates clínico", "Pilates na gestação", "Pilates para idosos", "Terapia manual", "Massoterapia", "Liberação miofascial", "Reabilitação funcional"],
			hasCredential: [
				{
					"@type": "EducationalOccupationalCredential",
					credentialCategory: "license",
					name: CREFITO,
					recognizedBy: { "@type": "Organization", name: "Conselho Regional de Fisioterapia e Terapia Ocupacional da 4ª Região (CREFITO-4)" },
				},
				...EDUCATION.map((c) => ({
					"@type": "EducationalOccupationalCredential",
					credentialCategory: "certificate",
					name: c.name,
					...(c.school ? { recognizedBy: { "@type": "Organization", name: c.school } } : {}),
				})),
			],
			sameAs: [INSTAGRAM_URL],
		},
		{
			"@type": "FAQPage",
			"@id": `${SITE_URL}/#faq`,
			mainEntity: FAQ.map(({ question, answer }) => ({
				"@type": "Question",
				name: question,
				acceptedAnswer: { "@type": "Answer", text: answer },
			})),
		},
		...MEDIA.filter((m) => m.type === "video").map((m) => ({
			"@type": "VideoObject",
			name: m.title,
			description: m.description,
			thumbnailUrl: `${SITE_URL}${m.poster}`,
			contentUrl: `${SITE_URL}${m.src}`,
			uploadDate: "2026-09-24",
			duration: m.duration,
			publisher: { "@id": businessId },
		})),
	],
};

export const serviceSchema = (service: Service) => {
	const url = `${SITE_URL}/${service.slug}`;
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${url}#webpage`,
				url,
				name: service.seoTitle,
				description: service.description,
				inLanguage: "pt-BR",
				isPartOf: { "@id": `${SITE_URL}/#website` },
				breadcrumb: { "@id": `${url}#breadcrumb` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${url}#breadcrumb`,
				itemListElement: [
					{ "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
					{ "@type": "ListItem", position: 2, name: `${service.name} em Uberlândia`, item: url },
				],
			},
			{
				"@type": "Service",
				"@id": `${url}#service`,
				name: `${service.name} em Uberlândia`,
				serviceType: service.name,
				description: service.description,
				url,
				areaServed: { "@type": "City", name: "Uberlândia" },
				...(service.offers
					? { offers: service.offers.map((o) => ({ "@type": "Offer", name: o.name, price: o.price.toFixed(2), priceCurrency: "BRL" })) }
					: {}),
				provider: {
					"@type": "Physiotherapy",
					"@id": businessId,
					name: BUSINESS_NAME,
					telephone: PHONE_E164,
					url: `${SITE_URL}/`,
					address: {
						"@type": "PostalAddress",
						streetAddress: ADDRESS.street,
						addressLocality: ADDRESS.city,
						addressRegion: ADDRESS.region,
						postalCode: ADDRESS.postalCode,
						addressCountry: ADDRESS.country,
					},
				},
			},
			{
				"@type": "FAQPage",
				"@id": `${url}#faq`,
				mainEntity: service.faq.map(({ question, answer }) => ({
					"@type": "Question",
					name: question,
					acceptedAnswer: { "@type": "Answer", text: answer },
				})),
			},
		],
	};
};
