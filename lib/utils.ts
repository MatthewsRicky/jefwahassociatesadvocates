export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPhone(phone: string): string {
  return phone.replace(/^(\+254)(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3 $4");
}
