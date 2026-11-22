# 🚀 Section 01: Introduction to Node.js & HTTP Fundamentals

> مستندات آموزشی و کدهای تمرینی سکشن اول دوره کاربردی Node.js و بک‌اند (مخزن `backend-practice`)

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v22+-green.svg?style=flat-for-the-badge&logo=nodedotjs" alt="Node.js">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow.svg?style=flat-for-the-badge&logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTTP-Server-blue.svg?style=flat-for-the-badge&logo=world&logoColor=white" alt="HTTP">
  <img src="https://img.shields.io/badge/Nodemon-Dev-red.svg?style=flat-for-the-badge&logo=nodemon&logoColor=white" alt="Nodemon">
</p>

---

## 📂 ساختار پوشه‌ها و دسترسی سریع به کدها

در این سکشن، پایه‌ای‌ترین مفاهیم Node.js را از صفر تا پیاده‌سازی یک سرور HTTP واقعی با ابزارهای توسعه بررسی کردیم:

| شماره | نام بخش | توضیحات و مفاهیم کلیدی | لینک به پوشه / کد |
| :---: | :--- | :--- | :--- |
| **01** | 📦 **NPM Init** | راه‌اندازی پروژه، ساخت `package.json` و مدیریت وابستگی‌ها | [مشاهده پوشه](https://github.com/mahdigosyan/backend-practice/tree/main/sections/01-intro/01-npm-init) |
| **02** | 🌐 **Global Objects** | آشنایی با اشیاء سراسری در Node.js مثل `__dirname` و `__filename` | [مشاهده پوشه](https://github.com/mahdigosyan/backend-practice/tree/main/sections/01-intro/02-global) |
| **03** | 🧩 **CommonJS Modules** | ماژول‌بندی سنتی با `require` و `module.exports` | [مشاهده پوشه](https://github.com/mahdigosyan/backend-practice/tree/main/sections/01-intro/03-modules) |
| **04** | ⚡ **ES Modules** | ماژول‌بندی مدرن با `import` و `export` (پسوند `.mjs`) | [مشاهده پوشه](https://github.com/mahdigosyan/backend-practice/tree/main/sections/01-intro/04-es-modules) |
| **05** | ⚖️ **Module Comparison** | مقایسه عملی تفاوت‌های ساختاری CommonJS و ES Modules | [مشاهده پوشه](https://github.com/mahdigosyan/backend-practice/tree/main/sections/01-intro/05-module-comparison) |
| **06** | 🔌 **HTTP Server & API** | ساخت سرور بومی با `node:http`، مدیریت Routeها، متدها و Status Codeها | [مشاهده پوشه](https://github.com/mahdigosyan/backend-practice/tree/main/sections/01-intro/06-http-server) |

---

## 🛠️ دستورات اجرایی (NPM Scripts)

برای اجرای بخش‌های مختلف پروژه می‌توانید از اسکریپت‌های زیر در ریشه‌ی مخزن استفاده کنید:
```json
{
  "scripts": {
"start:global": "node sections/01-intro/02-global/index.js",
"start:esm": "node sections/01-intro/04-es-modules/index.mjs",
"start:http": "node sections/01-intro/06-http-server/index.mjs",
"dev:http": "nodemon sections/01-intro/06-http-server/index.mjs"
  }
}


نحوه اجرا:

# اجرای سرور HTTP به صورت معمولی
npm run start:http

# اجرای سرور با قابلیت Auto-Reload (مخصوص توسعه)
npm run dev:http




🎯 خلاصه‌ای از مهارت‌های کسب‌شده

    درک محیط ران‌تایم Node.js: تفاوت آن با جاوااسکریپت مرورگر و کار با اشیاء عمومی سیستم‌عامل.
    مدیریت ماژول‌ها: تسلط بر استانداردهای CommonJS و ES Modules برای تمیز نگهداشتن ساختار کد.
    پروتکل HTTP: پیاده‌سازی دستی سرور وب، تشخیص Methodها، مسیرها (URL) و ارسال کدهای وضعیت استاندارد (200 OK, 201 Created, 404 Not Found).
    ابزارهای توسعه (Dev Tools): نصب و پیکربندی Nodemon برای افزایش سرعت توسعه و جلوگیری از ری‌استارت دستی سرور.

    