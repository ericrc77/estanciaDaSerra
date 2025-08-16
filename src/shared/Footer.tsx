export function Footer() {
  return (
    <footer className="border-t border-black/10 mt-24 py-10 text-fluid-sm text-brand-gray-600">
      <div className="max-w-7xl mx-auto container-padding flex flex-col md:flex-row gap-6 items-center justify-between">
        <p>&copy; {new Date().getFullYear()} Estância da Serra. Todos os direitos reservados.</p>
        <p>Site em desenvolvimento - material ilustrativo sujeito a ajustes.</p>
      </div>
    </footer>
  );
}
