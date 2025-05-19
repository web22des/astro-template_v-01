import { b as createAstro, c as createComponent, e as renderHead, r as renderComponent, f as renderSlot, a as renderTemplate } from './astro/server-jR75XK9s.js';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer } from './Footer-axVH6Tdf.js';

const $$Astro = createAstro("https://web22des.github.io");
const $$MarkdownLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`<html lang="ru" class="light"> <head><meta charset="utf-8"><!-- Базовые иконки --><link rel="icon" href="/favicon/favicon.ico" sizes="any"><link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml"><!-- Адаптивные иконки --><link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png"><link rel="manifest" href="/favicon/site.webmanifest"><title>${frontmatter.title}</title>${renderHead()}</head> <body class="wrapper"> ${renderComponent($$result, "Header", $$Header, {})} <article class="markdown__container page"> ${renderSlot($$result, $$slots["default"])} <!-- Сюда вставится содержимое .md --> </article> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/layouts/MarkdownLayout.astro", void 0);

export { $$MarkdownLayout as $ };
