import { d as createAstro, c as createComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead, s as spreadAttributes, f as renderSlot, r as renderComponent } from './astro/server-Cyo_KTo2.js';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://web22des.github.io");
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  const { cookies } = Astro2;
  const initialTheme = cookies.get("theme")?.value || "light";
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>\n(function() {\n  // \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0434\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0442\u0435\u043C\u044B\n  function setTheme(theme) {\n    document.documentElement.setAttribute('data-theme', theme);\n    document.body.classList.remove('light', 'dark');\n    document.body.classList.add(theme);\n    localStorage.setItem('theme', theme);\n    \n    // \u041E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u043C \u0447\u0435\u043A\u0431\u043E\u043A\u0441\n    const toggle = document.getElementById('theme-toggle');\n    if (toggle) {\n      toggle.checked = theme === 'dark';\n    }\n  }\n\n  // \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0439 \u0442\u0435\u043C\u044B\n  function initTheme() {\n    // 1. \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C localStorage\n    const savedTheme = localStorage.getItem('theme');\n    if (savedTheme) return savedTheme;\n    \n    // 2. \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438\n    return window.matchMedia('(prefers-color-scheme: dark)').matches \n      ? 'dark' \n      : 'light';\n  }\n\n  // \u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0442\u0435\u043C\u044B\n  setTheme(initTheme());\n\n  // \u041E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u044B\n  document.addEventListener('DOMContentLoaded', () => {\n    const toggle = document.getElementById('theme-toggle');\n    if (toggle) {\n      toggle.addEventListener('change', (e) => {\n        setTheme(e.target.checked ? 'dark' : 'light');\n      });\n    }\n  });\n\n  // \u0421\u043B\u0435\u0434\u0438\u043C \u0437\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0445 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A\n  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {\n    if (!localStorage.getItem('theme')) {\n      setTheme(e.matches ? 'dark' : 'light');\n    }\n  });\n})();\n<\/script>", '<div class="theme-toggle" data-astro-cid-lfoluaxz> <input type="checkbox" id="theme-toggle" class="theme-toggle__input"', ' data-astro-cid-lfoluaxz> <label for="theme-toggle" class="theme-toggle__slider" data-astro-cid-lfoluaxz></label> </div>'])), maybeRenderHead(), addAttribute(initialTheme === "dark", "checked"));
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/ui/ThemeToggle.astro", void 0);

const $$ContactsIcons = createComponent(($$result, $$props, $$slots) => {
  const PhoneUser = "71234567890";
  const WhatsappUser = "71234567890";
  const TelegramUser = "username";
  return renderTemplate`${maybeRenderHead()}<div class="contacts-icons"> <!-- Телефон --> <!--  Добавляем роль button для явного указания интерактивности --> <!-- Убедимся, что элемент фокусируем --> <a${addAttribute(`tel:+${PhoneUser}`, "href")} class="contacts-icons__link contacts-icons__link--phone" aria-label="Позвонить по телефону" role="button" tabindex="0"> <span class="contacts-icons__icon" aria-hidden="true"> <span class="_icon-phone"></span> </span> <span class="visually-hidden">${PhoneUser}</span> </a> <!-- WhatsApp --> <a${addAttribute(`https://wa.me/${WhatsappUser}`, "href")} class="contacts-icons__link contacts-icons__link--whatsapp" aria-label="Написать в WhatsApp" target="_blank" rel="noopener noreferrer" role="button" tabindex="0"> <span class="contacts-icons__icon" aria-hidden="true"> <span class="_icon-whatsapp"></span> </span> <span class="visually-hidden">WhatsApp</span> </a> <!-- Telegram --> <a${addAttribute(`https://t.me/${TelegramUser}`, "href")} class="contacts-icons__link contacts-icons__link--telegram" aria-label="Написать в Telegram" target="_blank" rel="noopener noreferrer" role="button" tabindex="0"> <span class="contacts-icons__icon" aria-hidden="true"> <span class="_icon-telegram"></span> </span> <span class="visually-hidden">Telegram</span> </a> </div>`;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/ui/social/ContactsIcons/ContactsIcons.astro", void 0);

const $$Astro$3 = createAstro("https://web22des.github.io");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`_icon-${name} ${className || ""}`, "class")} aria-hidden="true"></span>`;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/ui/icon/Icon.astro", void 0);

const $$Astro$2 = createAstro("https://web22des.github.io");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, ...props } = Astro2.props;
  const resolvedHref = "/astro-template_v-01/" + href.replace(/^\//, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(resolvedHref, "href")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/ui/Link.astro", void 0);

const $$Astro$1 = createAstro("https://web22des.github.io");
const $$NavMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavMenu;
  const { items = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="nav-menu" data-astro-cid-sjsrs553> <ul class="nav-menu__list" data-astro-cid-sjsrs553> ${items.map((item) => renderTemplate`<li${addAttribute(`nav-menu__item ${item.children ? "has-dropdown" : ""}`, "class")} data-astro-cid-sjsrs553> ${renderComponent($$result, "Link", $$Link, { "href": item.url, "class": "nav-menu__link", "aria-expanded": item.children ? "false" : null, "aria-haspopup": item.children ? "true" : null, "data-astro-cid-sjsrs553": true }, { "default": ($$result2) => renderTemplate`${item.title}${item.children && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-down", "class": "nav-menu__icon", "data-astro-cid-sjsrs553": true })}`}` })} ${item.children && renderTemplate`<ul class="nav-menu__submenu" data-astro-cid-sjsrs553> ${item.children.map((subItem) => renderTemplate`<li class="nav-menu__subitem" data-astro-cid-sjsrs553> ${renderComponent($$result, "Link", $$Link, { "href": subItem.url, "class": "nav-menu__sublink", "data-astro-cid-sjsrs553": true }, { "default": ($$result2) => renderTemplate`${subItem.title}` })} </li>`)} </ul>`} </li>`)} </ul> </nav> `;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/ui/navigation/NavMenu.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://web22des.github.io");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logo;
  const {
    width = 120,
    height = 40,
    linked = true,
    className = ""
  } = Astro2.props;
  let theme = "light";
  if (typeof document !== "undefined") {
    theme = document.documentElement.getAttribute("data-theme") || "light";
  }
  const logoPath = `/icons/logo-${theme === "dark" ? "dark" : "light"}.svg`;
  return renderTemplate(_a || (_a = __template(["", "<script>\n// \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u0441\u043C\u0435\u043D\u0435 \u0442\u0435\u043C\u044B\nconst updateLogos = () => {\n  const theme = document.documentElement.getAttribute('data-theme') || 'light';\n  document.querySelectorAll('.logo').forEach(logo => {\n    logo.src = `/icons/logo-${theme === 'dark' ? 'dark' : 'light'}.svg`;\n    logo.setAttribute('data-theme', theme);\n  });\n};\n\n// \u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F\ndocument.addEventListener('DOMContentLoaded', () => {\n  updateLogos();\n  new MutationObserver(updateLogos).observe(document.documentElement, {\n    attributes: true,\n    attributeFilter: ['data-theme']\n  });\n});\n<\/script>"], ["", "<script>\n// \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u0441\u043C\u0435\u043D\u0435 \u0442\u0435\u043C\u044B\nconst updateLogos = () => {\n  const theme = document.documentElement.getAttribute('data-theme') || 'light';\n  document.querySelectorAll('.logo').forEach(logo => {\n    logo.src = \\`/icons/logo-\\${theme === 'dark' ? 'dark' : 'light'}.svg\\`;\n    logo.setAttribute('data-theme', theme);\n  });\n};\n\n// \u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F\ndocument.addEventListener('DOMContentLoaded', () => {\n  updateLogos();\n  new MutationObserver(updateLogos).observe(document.documentElement, {\n    attributes: true,\n    attributeFilter: ['data-theme']\n  });\n});\n<\/script>"])), linked ? renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": "/", "aria-label": "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E", "class": `logo-link ${className}`, "data-astro-cid-bt5hbwbt": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<img${addAttribute(logoPath, "src")} alt="Логотип компании"${addAttribute(width, "width")}${addAttribute(height, "height")} class="logo" loading="eager"${addAttribute(theme, "data-theme")} data-astro-cid-bt5hbwbt>` })}` : renderTemplate`<img${addAttribute(logoPath, "src")} alt="" role="presentation"${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(`logo ${className}`, "class")} loading="eager"${addAttribute(theme, "data-theme")} data-astro-cid-bt5hbwbt>`);
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/ui/Logo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const menuItems = [
    {
      title: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
      url: "/"
    },
    {
      title: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F",
      url: "/gallery/"
    },
    {
      title: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
      url: "/news/",
      children: [
        { title: "\u0411\u043B\u043E\u0433", url: "/posts/" },
        { title: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438", url: "/news/news-history" }
      ]
    },
    {
      title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
      url: "/contacts/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="header" data-astro-cid-x3onawaz> <div class="header__container" data-astro-cid-x3onawaz> <div class="header__body" data-astro-cid-x3onawaz> <div class="header__logo" data-astro-cid-x3onawaz> ${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-x3onawaz": true })} </div> <div class="header__nav" data-astro-cid-x3onawaz> ${renderComponent($$result, "NavMenu", $$NavMenu, { "items": menuItems, "data-astro-cid-x3onawaz": true })} </div> <div class="header__contacts" data-astro-cid-x3onawaz> ${renderComponent($$result, "ContactsIcons", $$ContactsIcons, { "data-astro-cid-x3onawaz": true })} </div> <div class="header__burger" data-astro-cid-x3onawaz></div> </div> <div class="header__footer" data-astro-cid-x3onawaz> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-x3onawaz": true })} </div> </div> </div> <!--  --> `;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/partials/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="footer__container"> <p>Footer</p> </div> </footer>`;
}, "/home/runner/work/astro-template_v-01/astro-template_v-01/src/components/partials/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
