# Deploy para GitHub Pages

## Status: ✅ CORRIGIDO

O problema de `ERR_ABORTED 404` foi resolvido com as seguintes correções:

### 1. Configuração do Vite (`vite.config.ts`)
```typescript
export default defineConfig(({ command, mode }) => {
  const isDevelopment = command === 'serve';
  
  return {
    base: isDevelopment ? '/' : '/estanciaDaSerra/',
    // ... outras configurações
  };
});
```

### 2. Index.html
- Caminho do script corrigido de `/src/main.tsx` para `./src/main.tsx`
- Build automático aplica os caminhos corretos com base `/estanciaDaSerra/`

### 3. Build de Produção
O comando `npm run build` agora gera:
- `dist/index.html` com caminhos corretos
- Assets com prefixo `/estanciaDaSerra/` automático
- Chunking otimizado para melhor performance

## Para fazer deploy:

1. **Build:** `npm run build`
2. **Commit:** Faça commit da pasta `dist/`
3. **Deploy:** O GitHub Pages irá funcionar automaticamente

## URLs finais:
- **Desenvolvimento:** `http://localhost:5173/`
- **Produção:** `https://ericrc77.github.io/estanciaDaSerra/`

## Arquivos importantes:
- `dist/index.html` - Arquivo principal com caminhos corretos
- `dist/assets/` - CSS e JS compilados
- `404.html` - Fallback para SPA routing

### Verificação:
✅ Build executado com sucesso  
✅ Caminhos de assets corrigidos  
✅ Base path configurado  
✅ Pronto para deploy no GitHub Pages
