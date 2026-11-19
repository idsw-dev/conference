/**
 * Optional link shown after an answer. `href` is a site path or a full URL.
 * `streamTicket: true` links to siteConfig.stream.ticket.url and is hidden once
 * stream.ticket.onSale is false.
 */
export type FaqLink =
  { label: string; href: string } | { label: string; streamTicket: true };

export interface Faq {
  question: string;
  answer: string;
  link?: FaqLink;
}
