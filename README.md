# Dr. Pedro Paulo Molinar - Pilates e Reabilitação

Website profissional para serviços de Pilates e Fisioterapia em Uberlândia.

## 🚀 Stack

- **Astro 5.x** - Framework estático moderno
- **Tailwind CSS 3.x** - Estilização utilitária
- **TypeScript** - Type safety

## 📦 Estrutura

```
/
├── public/              # Arquivos estáticos (imagens, robots.txt, sitemap.xml)
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── WhyChoose.astro
│   │   ├── Testimonials.astro
│   │   ├── Contact.astro
│   │   ├── FloatingWhatsApp.astro
│   │   └── NewFooter.astro
│   ├── layouts/
│   │   └── Layout.astro  # Layout principal com SEO
│   └── pages/
│       └── index.astro   # Página inicial
└── dist/                # Build output (gerado)
```

## 🎨 Features

### SEO Otimizado
- ✅ Meta tags completas (Open Graph, Twitter Cards)
- ✅ Structured Data (Schema.org) para MedicalBusiness
- ✅ Sitemap.xml e robots.txt
- ✅ Canonical URLs
- ✅ Linguagem PT-BR
- ✅ Performance otimizada (100% estático)

### Seções
1. **Hero** - Headline impactante + CTAs primários
2. **Sobre** - Credenciais e apresentação profissional
3. **Serviços** - Pilates, Fisioterapia, Funcional, Massagem
4. **Diferenciais** - Atendimento personalizado, estrutura, Gympass
5. **Depoimentos** - Testimoniais de pacientes
6. **Contato** - Localização, horários, formas de pagamento
7. **Footer** - Links rápidos e informações de contato
8. **WhatsApp Flutuante** - Botão fixo para conversão

### Design
- Cores: `#aeded0` (mint green) + Black
- Inspiração: ColunaLab (clean e profissional)
- Mobile-first e totalmente responsivo
- CTAs estratégicos em todas as seções

## 🛠️ Comandos

```bash
# Instalar dependências
npm install

# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🔥 Deploy no Firebase

### Primeiro Deploy

1. Instale o Firebase CLI (se ainda não tiver):
```bash
npm install -g firebase-tools
```

2. Faça login:
```bash
firebase login
```

3. Build o projeto:
```bash
npm run build
```

4. Deploy:
```bash
firebase deploy
```

### Configuração do Firebase

O arquivo `firebase.json` já está configurado para servir a pasta `dist/`:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  }
}
```

### Deploy Automatizado

Para deploys futuros:

```bash
npm run build && firebase deploy
```

## 📱 Contato e Social

- WhatsApp: (34) 98414-3510
- Instagram: [@drpedropaulomolinar](https://www.instagram.com/drpedropaulomolinar)
- Endereço: Av. Cesário Alvim, 521 - Uberlândia/MG

## 📈 Próximos Passos

- [ ] Adicionar mais fotos reais do estúdio
- [ ] Substituir testimoniais fake por reais
- [ ] Integrar Google Maps embed na seção de contato
- [ ] Adicionar blog/artigos (opcional)
- [ ] Configurar Google Analytics
- [ ] Configurar Facebook Pixel (opcional)

## 📝 Notas

- Todos os CTAs direcionam para WhatsApp ou seções específicas
- Site 100% estático (sem backend necessário)
- Otimizado para SEO local (Uberlândia)
- Schema.org configurado para negócios médicos
- Pronto para Firebase Hosting
