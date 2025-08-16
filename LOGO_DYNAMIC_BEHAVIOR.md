# Comportamento Dinâmico da Logo no Navbar

## ✨ Funcionalidade Implementada

### **Comportamento:**
- **Topo da página (hero visível)**: Logo pequena sem texto
- **Rolando para baixo (hero fora de vista)**: Logo pequena + texto "ESTÂNCIA DA SERRA"

### **Detecção de Scroll:**
```typescript
// Detecta se o hero ainda está visível
const heroThreshold = window.innerHeight * 0.7;
setHeroVisible(scrollY < heroThreshold);
```

### **Transição Suave:**
- Texto aparece/desaparece com animação `slide + fade`
- Duração: 0.3s com easing suave
- Direção: desliza horizontalmente (-10px → 0px)

## 📱 **Responsividade Mantida:**

### Desktop (768px+):
- ✅ Texto visível quando hero não está em vista
- ✅ Logo + texto bem posicionados

### Tablet (430px - 767px):
- ✅ Texto visível quando hero não está em vista  
- ✅ Layout adaptado para tela média

### Celular (< 430px):
- ✅ Texto permanece oculto (como antes)
- ✅ Apenas logo pequena sempre visível

## 🎯 **Threshold de Ativação:**
- **70% da altura da tela**: Ponto onde o texto aparece/desaparece
- **Ajustável**: Pode ser modificado alterando `window.innerHeight * 0.7`

## 🔧 **Implementação Técnica:**

### Navbar.tsx:
```tsx
const [heroVisible, setHeroVisible] = useState(true);

// Scroll detection
const heroThreshold = window.innerHeight * 0.7;
setHeroVisible(scrollY < heroThreshold);

// Logo com texto condicional
<Logo size="md" showText={!heroVisible} />
```

### Logo.tsx:
```tsx
<AnimatePresence>
  {showText && (
    <motion.span 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      ESTÂNCIA DA SERRA
    </motion.span>
  )}
</AnimatePresence>
```

## 🎨 **Visual Resultante:**

### Estado 1 - Hero Visível (topo):
```
[🏞️ LOGO] (sem texto)
```

### Estado 2 - Hero Oculto (rolou para baixo):
```
[🏞️ LOGO] ESTÂNCIA DA SERRA
```

### Transição:
- Suave e elegante
- Não quebra o layout
- Performance otimizada
