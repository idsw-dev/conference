export interface Faq {
  question: string;
  answer: string;
  /** Optional link shown after the answer. `href` is a site path or a full URL. */
  link?: { label: string; href: string };
}
