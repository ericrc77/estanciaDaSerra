# Estância da Serra - Site Institucional

Site institucional em desenvolvimento para o Condomínio Estância da Serra.

## Stack
- Vite + React + TypeScript
- TailwindCSS (design system rápido)
- React Router
- React Query (futuras integrações / painel de status de obras)
- Leaflet + React Leaflet (mapa interativo de lotes)
- Framer Motion (animações)
- EmailJS (formulário de contato sem backend inicial)

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
