import { b as createAstro, c as createComponent, d as addAttribute, e as renderHead, r as renderComponent, f as renderSlot, a as renderTemplate } from './astro/server-jR75XK9s.js';
import 'kleur/colors';
/* empty css                           */
import { $ as $$Header, a as $$Footer } from './Footer-n9vpz4RL.js';

const $$Astro = createAstro("https://web22des.github.io");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title = "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" } = Astro2.props;
  return renderTemplate`<html lang="ru"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Базовые иконки --><link rel="icon" href="/favicon/favicon.ico" sizes="any"><link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml"><!-- Адаптивные иконки --><link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png"><link rel="manifest" href="/favicon/site.webmanifest"><title>${title}</title>${renderHead()}</head> <body class="wrapper light"> ${renderComponent($$result, "Header", $$Header, {})} <main class="page"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $ };
