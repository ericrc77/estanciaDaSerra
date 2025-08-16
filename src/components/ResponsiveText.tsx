interface ResponsiveTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  size?: 'hero' | 'section-title' | 'base' | 'sm';
  className?: string;
  breakWords?: boolean;
}

export function ResponsiveText({ 
  children, 
  as: Component = 'p', 
  size = 'base',
  className = '',
  breakWords = true 
}: ResponsiveTextProps) {
  const sizeClasses = {
    hero: 'text-fluid-hero',
    'section-title': 'text-fluid-section-title',
    base: 'text-fluid-base',
    sm: 'text-fluid-sm'
  };

  const baseClasses = `
    ${sizeClasses[size]} 
    ${breakWords ? 'word-break-keep' : ''} 
    w-full 
    max-w-full 
    overflow-hidden
  `.trim();

  return (
    <Component className={`${baseClasses} ${className}`}>
      {children}
    </Component>
  );
}
