export function DateFormat(value: string) {
  return new Intl.DateTimeFormat('pt-BR', {
  }).format(new Date(value))
}