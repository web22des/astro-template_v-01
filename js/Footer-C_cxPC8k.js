import { c as createComponent, m as maybeRenderHead, a as renderTemplate } from './astro/server-BJsnRDlE.js';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-x3onawaz> <div class="header__container" data-astro-cid-x3onawaz> <nav class="header__nav" data-astro-cid-x3onawaz> <ul class="header__menu" data-astro-cid-x3onawaz> <li class="header__menu-item" data-astro-cid-x3onawaz><a href="/" class="header__menu-link" data-astro-cid-x3onawaz>Главная</a></li> <li class="header__menu-item" data-astro-cid-x3onawaz><a href="/posts/" class="header__menu-link" data-astro-cid-x3onawaz>Мои посты</a></li> <li class="header__menu-item" data-astro-cid-x3onawaz><a href="/contacts/" class="header__menu-link" data-astro-cid-x3onawaz>Контакты</a></li> </ul> </nav> </div> </header> <!--  --> `;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/partials/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="footer__container"> <p>Footer</p> </div> </footer>`;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/partials/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
