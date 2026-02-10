import en from './translations/en';
import ru from './translations/ru';

const languages: Record<string, Record<string, string>> = { en, ru };

export function localize(key: string, lang: string = 'en'): string {
  return languages[lang]?.[key] ?? languages['en']?.[key] ?? key;
}
