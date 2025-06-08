import { shuffle } from "./shuffle";
import type { Country } from "../hooks/useCountriesData";

export type Question = {
  type: "flag" | "capital";
  prompt: string;
  image?: string; // for flag questions
  options: string[];
  answer: string;
};

export function generateQuestions(countries: Country[]): Question[] {
  const questions: Question[] = [];

  // Flag questions
  const validFlagCountries = countries.filter((c) => c.flag && c.name);
  validFlagCountries.forEach((country) => {
    const wrong = shuffle(
      validFlagCountries
        .filter((c) => c.name !== country.name)
        .map((c) => c.name)
    ).slice(0, 3);
    questions.push({
      type: "flag",
      prompt: `Which country does this  flag belong to?`,
      image: country.flag,
      options: shuffle([country.name, ...wrong]),
      answer: country.name,
    });
  });

  // Capital questions
  const validCapitalCountries = countries.filter((c) => {
    const capital = Array.isArray(c.capital) ? c.capital[0] : c.capital;
    return capital && typeof capital === "string" && capital.trim() !== "";
  });
  validCapitalCountries.forEach((country) => {
    const capital = Array.isArray(country.capital)
      ? country.capital[0]
      : country.capital;
    const wrong = shuffle(
      validCapitalCountries
        .map((c) => (Array.isArray(c.capital) ? c.capital[0] : c.capital))
        .filter((c) => c && c !== capital)
    ).slice(0, 3);
    questions.push({
      type: "capital",
      prompt: `What is the capital of ${country.name}?`,
      options: shuffle([capital, ...wrong]),
      answer: capital,
    });
  });

  // Shuffle all questions for randomness and limit to 10
  return shuffle(questions).slice(0, 10);
}
