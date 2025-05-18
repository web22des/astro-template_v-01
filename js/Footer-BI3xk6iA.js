import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, n as renderSlot, a as renderTemplate, r as renderComponent } from './astro/server-BJsnRDlE.js';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://web22des.github.io");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, ...props } = Astro2.props;
  const resolvedHref = "/astro-template_v-01/" + href.replace(/^\//, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(resolvedHref, "href")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/ui/Link.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-x3onawaz> <div class="header__container" data-astro-cid-x3onawaz> <nav class="header__nav" data-astro-cid-x3onawaz> <ul class="header__menu" data-astro-cid-x3onawaz> <li class="header__menu-item" data-astro-cid-x3onawaz>${renderComponent($$result, "Link", $$Link, { "href": "/", "data-astro-cid-x3onawaz": true }, { "default": ($$result2) => renderTemplate`Главная` })}</li> <li class="header__menu-item" data-astro-cid-x3onawaz>${renderComponent($$result, "Link", $$Link, { "href": "/posts/", "data-astro-cid-x3onawaz": true }, { "default": ($$result2) => renderTemplate`Посты` })}</li> <li class="header__menu-item" data-astro-cid-x3onawaz>${renderComponent($$result, "Link", $$Link, { "href": "/contacts/", "data-astro-cid-x3onawaz": true }, { "default": ($$result2) => renderTemplate`Мои контакты` })}</li> </ul> </nav> </div> </header> <!--  --> `;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/partials/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="footer__container"> <p>Footer</p> </div> </footer>`;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/partials/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
