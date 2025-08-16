# Imagem de Fundo Hero - Configuração

## ✅ **Implementação Concluída**

O código foi atualizado para usar `hero.png` como imagem de fundo prioritária na seção inicial.

## 📁 **Como Adicionar a Imagem:**

### 1. **Local da Imagem:**
Coloque o arquivo `hero.png` em:
```
public/media/hero.png
```

### 2. **Especificações Recomendadas:**

#### **Dimensões:**
- **1920x1080px** (Full HD) - Ideal
- **2560x1440px** (2K) - Para telas high-DPI
- **Mínimo:** 1366x768px

#### **Formato e Otimização:**
- **Formato:** `.png` ou `.jpg`
- **Peso:** 200KB - 800KB (máximo 1MB)
- **Qualidade:** 80-85% para balance perfeito

## 🎨 **Características Visuais:**

### **Filtros Aplicados:**
- **Brightness:** 65% (para legibilidade do texto)
- **Scale:** 105% (efeito parallax sutil)
- **Fade-in:** 1s de transição suave

### **Responsividade:**
- **Desktop:** `background-attachment: fixed` (parallax)
- **Mobile:** `background-attachment: scroll` (performance)
- **Retina:** Otimização para alta densidade

## 🔄 **Sistema de Fallback:**

### **Prioridade de Carregamento:**
1. **🖼️ hero.png** (prioritário)
2. **🎥 hero-placeholder.mp4** (se imagem falhar)
3. **🖼️ /gallery/1.jpg** (fallback final)

### **Estados:**
```
Carregando imagem... → hero.png
     ↓ (se falhar)
Carregando vídeo... → hero-placeholder.mp4
     ↓ (se falhar)
Imagem da galeria → /gallery/1.jpg
```

## 💻 **Código Implementado:**

### **Preload Inteligente:**
```typescript
useEffect(() => {
  const img = new Image();
  img.onload = () => setImageLoaded(true);
  img.onerror = () => setImageError(true);
  img.src = '/media/hero.png';
}, []);
```

### **Background Otimizado:**
```css
.hero-background-image {
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  will-change: transform;
  image-rendering: crisp-edges;
}
```

## 📱 **Performance:**

### **Otimizações:**
- ✅ Preload da imagem antes de mostrar
- ✅ Fallback automático se imagem falhar
- ✅ Loading state informativo
- ✅ CSS otimizado para diferentes devices
- ✅ Will-change para animações suaves

### **Mobile-First:**
- ✅ Background-attachment adaptativo
- ✅ Scale responsivo
- ✅ Carregamento progressivo

## 🚀 **Para Ativar:**

1. **Adicione** `hero.png` em `public/media/`
2. **Recarregue** a página
3. **Pronto!** A imagem aparecerá automaticamente

Se a imagem não existir, o sistema continuará usando o vídeo atual como fallback.
