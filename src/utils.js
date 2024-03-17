import spanishCV from "../cv.json"
import englishCV from "../cv_english.json"

export default function checkLenguage({ lang }) {
  return lang === "es" ? spanishCV : englishCV
}
