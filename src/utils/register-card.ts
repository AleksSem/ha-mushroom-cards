interface CustomCardEntry {
  type: string;
  name: string;
  description: string;
}

export function registerCard(card: CustomCardEntry): void {
  const w = window as any;
  w.customCards = w.customCards || [];
  if (w.customCards.some((c: CustomCardEntry) => c.type === card.type)) return;
  w.customCards.push(card);
}
