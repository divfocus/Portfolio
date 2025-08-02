# Заметки по верстке

## 🍔 Бургер-меню
1. Добавить кнопку `<button class="burger">...</button>`
2. В JS — навешать обработчик `click`
3. В CSS: `.nav { display: none; }`, а `.nav.open { ... }`

## 💡 Советы
- Всегда задавай `position: relative;` родителю, если child — `absolute`

# Важно:
- .site-header → position: relative;

- .nav.open → содержит все стили, .nav только display: none;

- top: 100% = навигация сразу под шапкой (по высоте родителя)

## Иконки для секции "Why choose us"
- icons/user-check.svg — Expert Tutors
- icons/clock.svg — Flexible Learning
- icons/certificate.svg — Certification
- icons/headset.svg — 24/7 Support