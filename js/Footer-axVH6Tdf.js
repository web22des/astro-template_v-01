import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, f as renderSlot, a as renderTemplate, r as renderComponent } from './astro/server-jR75XK9s.js';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro("https://web22des.github.io");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, ...props } = Astro2.props;
  const resolvedHref = "/astro-template_v-01/" + href.replace(/^\//, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(resolvedHref, "href")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/ui/Link.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://web22des.github.io");
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  const { cookies } = Astro2;
  const cookieTheme = cookies.get("theme")?.value;
  cookieTheme || (Astro2.request.headers.get("sec-ch-prefers-color-scheme") === "dark" ? "dark" : "light");
  return renderTemplate(_a || (_a = __template(["<script>\n  (function() {\n    // \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0434\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0442\u0435\u043C\u044B\n    function setTheme(theme) {\n      document.body.classList.remove('light', 'dark');\n      document.body.classList.add(theme);\n      localStorage.setItem('theme', theme);\n      \n      // \u041E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u043C \u0447\u0435\u043A\u0431\u043E\u043A\u0441\n      const toggle = document.getElementById('theme-toggle');\n      if (toggle) {\n        toggle.checked = theme === 'dark';\n      }\n    }\n\n    // \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0439 \u0442\u0435\u043C\u044B\n    function initTheme() {\n      // \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u043A\u043B\u0430\u0441\u0441\u044B \u043D\u0430 body\n      if (document.body.classList.contains('light')) {\n        return 'light';\n      }\n      if (document.body.classList.contains('dark')) {\n        return 'dark';\n      }\n      \n      // \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C localStorage\n      const savedTheme = localStorage.getItem('theme');\n      if (savedTheme) {\n        return savedTheme;\n      }\n      \n      // \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438\n      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches \n        ? 'dark' \n        : 'light';\n    }\n\n    // \u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0442\u0435\u043C\u044B\n    const currentTheme = initTheme();\n    setTheme(currentTheme);\n\n    // \u041E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u044B\n    document.addEventListener('DOMContentLoaded', () => {\n      const toggle = document.getElementById('theme-toggle');\n      if (toggle) {\n        toggle.checked = currentTheme === 'dark';\n        \n        toggle.addEventListener('change', (e) => {\n          setTheme(e.target.checked ? 'dark' : 'light');\n        });\n      }\n    });\n\n    // \u0421\u043B\u0435\u0434\u0438\u043C \u0437\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0445 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A (\u0435\u0441\u043B\u0438 \u0442\u0435\u043C\u0430 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u0430 \u044F\u0432\u043D\u043E)\n    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {\n      if (!localStorage.getItem('theme')) {\n        setTheme(e.matches ? 'dark' : 'light');\n      }\n    });\n  })();\n<\/script>", '<div class="theme-toggle" data-astro-cid-lfoluaxz> <input type="checkbox" id="theme-toggle" class="theme-toggle__input" data-astro-cid-lfoluaxz> <label for="theme-toggle" class="theme-toggle__slider" data-astro-cid-lfoluaxz></label> </div>'])), maybeRenderHead());
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/ui/ThemeToggle.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-x3onawaz> <div class="header__container" data-astro-cid-x3onawaz> <nav class="header__nav" data-astro-cid-x3onawaz> <ul class="header__menu" data-astro-cid-x3onawaz> <li class="header__menu-item" data-astro-cid-x3onawaz>${renderComponent($$result, "Link", $$Link, { "href": "/", "data-astro-cid-x3onawaz": true }, { "default": ($$result2) => renderTemplate`Главная` })}</li> <li class="header__menu-item" data-astro-cid-x3onawaz>${renderComponent($$result, "Link", $$Link, { "href": "/posts/", "data-astro-cid-x3onawaz": true }, { "default": ($$result2) => renderTemplate`Посты` })}</li> <li class="header__menu-item" data-astro-cid-x3onawaz>${renderComponent($$result, "Link", $$Link, { "href": "/contacts/", "data-astro-cid-x3onawaz": true }, { "default": ($$result2) => renderTemplate`Мои контакты` })}</li> </ul> </nav> <div class="header__theme-togle" data-astro-cid-x3onawaz> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-x3onawaz": true })} </div> </div> </header> <!--  --> `;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/partials/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="footer__container"> <p>Footer</p> </div> </footer>`;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/partials/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
