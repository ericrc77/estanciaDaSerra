import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Verificar se estamos no cliente (browser)
    if (typeof window === 'undefined') return 'light';
    
    // Tentar carregar do localStorage
    const stored = localStorage.getItem('theme') as Theme;
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      return stored;
    }
    
    // Detectar preferência do sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  const [isDark, setIsDark] = useState(false);

  // Função para aplicar o tema no DOM
  const applyTheme = (newTheme: Theme) => {
    if (typeof window === 'undefined') return;

    let shouldBeDark = false;

    if (newTheme === 'dark') {
      shouldBeDark = true;
    } else if (newTheme === 'system') {
      shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Aplicar/remover classe dark no html
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }

    // Atualizar meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', shouldBeDark ? '#1f2937' : '#ffffff');
    }

    setIsDark(shouldBeDark);
  };

  // Effect para aplicar tema e salvar no localStorage
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Effect para escutar mudanças na preferência do sistema
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    // Verificar se addEventListener existe (compatibilidade)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback para browsers mais antigos
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [theme]);

  // Effect para detectar tema inicial no primeiro render
  useEffect(() => {
    applyTheme(theme);
  }, []);

  const toggleTheme = () => {
    setTheme(current => {
      switch (current) {
        case 'light':
          return 'dark';
        case 'dark':
          return 'light';
        default:
          return 'light';
      }
    });
  };

  const setThemeMode = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return {
    theme,
    isDark,
    toggleTheme,
    setTheme: setThemeMode,
    isSystem: theme === 'system'
  };
}
