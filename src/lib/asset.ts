// Путь к статике с учётом base (GitHub Pages: /oxanka).
// BASE_URL может быть и '/oxanka', и '/oxanka/' — нормализуем слэш сами.
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return (base.endsWith('/') ? base : base + '/') + path.replace(/^\//, '');
}
