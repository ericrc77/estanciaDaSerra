# Estância da Serra - Site Institucional

Site institucional moderno e responsivo para o Chacreamento Estância da Serra.

## 🚀 Tecnologias Implementadas
- **React 18.3.1** + TypeScript
- **Vite 5.4.19** (build ultra-rápido)
- **TailwindCSS** com sistema de design personalizado
- **Framer Motion 11.11.9** (animações avançadas)
- **React Router 6.26.2** (navegação SPA)
- **React Icons** (ícones sociais)

## 🎨 Design System Responsivo
### Tipografia Fluida
- `.text-fluid-hero` - Títulos principais adaptativos
- `.text-fluid-section-title` - Títulos de seção responsivos
- `.text-fluid-base` - Texto base escalável
- `.text-fluid-sm` - Texto pequeno responsivo

### Componentes Responsivos
- `.card-responsive` - Cards que se adaptam ao viewport
- `.grid-responsive-2/3` - Grids adaptativos
- `.btn-primary/secondary-responsive` - Botões escaláveis
- `.section-padding` - Espaçamento consistente
- `.container-padding` - Padding responsivo

### Paleta de Cores da Logo
- **Verde Principal**: #667A2B (brand-green)
- **Laranja Destaque**: #FF8A00 (brand-orange)
- **Cinza Neutro**: Escalas personalizadas

## ✨ Funcionalidades Implementadas
- ✅ Design 100% responsivo (mobile-first)
- ✅ Animações e micro-interações
- ✅ Galeria com lightbox
- ✅ Botão flutuante WhatsApp
- ✅ Integração redes sociais
- ✅ Navegação suave entre seções
- ✅ SEO otimizado
- ✅ Performance otimizada

## 📱 Responsividade Avançada
- **Mobile**: Otimizado para telas pequenas
- **Tablet**: Layout adaptativo
- **Desktop**: Experiência premium mantendo consistência visual
- **Fluid Typography**: Escalonamento automático do texto
- **Flexible Grids**: Layouts que se reorganizam inteligentemente

## Scripts
- `npm run dev` – ambiente de desenvolvimento
- `npm run build` – build produção
- `npm run preview` – visualizar build
- `npm run deploy` – publicar em GitHub Pages (configure o repositório e a branch `gh-pages`)

## Estrutura inicial de seções
1. Hero com vídeo/imagem
2. Sobre o empreendimento
3. Mapa de Lotes (interativo)
4. Galeria (imagens ilustrativas iniciais)
5. Contato / Lead Form

## Variáveis de ambiente (criar `.env`)
```
VITE_EMAILJS_SERVICE=service_xxx
VITE_EMAILJS_TEMPLATE=template_xxx
VITE_EMAILJS_PUBLIC=public_xxx
```

## Publicação no GitHub Pages
Repositório: https://github.com/ericrc77/estanciaDaSerra

1. `npm install`
2. `npm run deploy` (usa pacote gh-pages) – publica para branch `gh-pages`.
3. Ative no GitHub: Settings > Pages > Branch: `gh-pages` / root.
4. Acesse: https://ericrc77.github.io/estanciaDaSerra/

### (Opcional) Deploy automático via GitHub Actions
Crie `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
	push:
		branches: [ main ]
permissions:
	contents: write
jobs:
	build-deploy:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v4
			- uses: actions/setup-node@v4
				with:
					node-version: 20
			- run: npm ci
			- run: npm run build
			- name: Deploy to GH Pages
				uses: peaceiris/actions-gh-pages@v3
				with:
					github_token: ${{ secrets.GITHUB_TOKEN }}
					publish_dir: ./dist
					cname: ''
```
Push na branch `main` dispara build e deploy automático.

## Próximos incrementos sugeridos
- Ajustar coordenadas reais dos lotes e adicionar mais polígonos
- API simples (ou planilha) para atualizar status dos lotes
- Página separada para cada lote (SEO + compartilhamento)
- Lightbox de galeria (lib ex: yet-another-react-lightbox)
- Otimização de imagens (responsivas + blur)
- Modo escuro opcional
- Seção de progresso das obras com timeline

> Material ilustrativo: conteúdos e imagens sujeitos a alteração conforme evolução do projeto.
