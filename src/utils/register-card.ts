interface CustomCardEntry {
  type: string;
  name: string;
  description: string;
}

export function registerCard(card: CustomCardEntry): void {
  const w = window as any;
  w.customCards = w.customCards || [];
  w.customCards.push(card);
}
