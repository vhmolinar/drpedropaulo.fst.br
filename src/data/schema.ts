import { ADDRESS, BUSINESS_NAME, GEO, INSTAGRAM_URL, MAPS_CID_URL, PHONE_E164, SITE_URL, TITLE } from "../config";
import { FAQ } from "./faq";
import { MEDIA } from "./media";

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
			description: "Fisioterapia ortopédica, Pilates clínico e reabilitação funcional no Centro de Uberlândia-MG. Atendimento particular e Gympass/Wellhub.",
			url: `${SITE_URL}/`,
			telephone: PHONE_E164,
			image: [`${SITE_URL}/og-image.jpg`, `${SITE_URL}/media/estudio-pilates-uberlandia.webp`, `${SITE_URL}/avatar-whatsapp.jpg`],
			logo: `${SITE_URL}/fisioterapia.png`,
			priceRange: "$$",
			currenciesAccepted: "BRL",
			paymentAccepted: "Particular, Gympass/Wellhub",
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
			availableService: [
				{ "@type": "MedicalTherapy", name: "Fisioterapia ortopédica" },
				{ "@type": "MedicalTherapy", name: "Pilates clínico" },
				{ "@type": "MedicalTherapy", name: "Reabilitação funcional" },
			],
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
			knowsAbout: ["Fisioterapia", "Pilates clínico", "Reabilitação funcional", "Fisioterapia ortopédica"],
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
