import { b as createAstro, c as createComponent, l as renderHead, r as renderComponent, n as renderSlot, a as renderTemplate } from './astro/server-BJsnRDlE.js';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer } from './Footer-Cq5qSOQl.js';

const $$Astro = createAstro("https://web22des.github.io");
const $$MarkdownLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`<html lang="ru" class="light"> <head><meta charset="utf-8"><title>${frontmatter.title}</title>${renderHead()}</head> <body class="wrapper"> ${renderComponent($$result, "Header", $$Header, {})} <article class="markdown__container page"> ${renderSlot($$result, $$slots["default"])} <!-- Сюда вставится содержимое .md --> </article> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/layouts/MarkdownLayout.astro", void 0);

export { $$MarkdownLayout as $ };
