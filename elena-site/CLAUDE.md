# САЙТ ЕЛЕНЫ ЧЕКРИЗОВОЙ

## О проекте
Экспертный сайт врача-эндокринолога Елены Чекризовой (Южно-Сахалинск).
30 лет стажа. 3 специализации: эндокринология, гирудотерапия, нутрициология.
Цель: экспертное позиционирование + пациенты + онлайн-продукты.
ЦА: женщины 25-55, Россия, проблемы с весом, щитовидкой, усталость.

## Технологии
- Astro 5, Tailwind CSS 4 (@theme в CSS, НЕ tailwind.config.js)
- MDX, TypeScript strict, Vercel
- НЕ использовать @astrojs/tailwind — только @tailwindcss/vite

## Палитра «Океан и песок»
- Primary: #6BA5A5 (бирюзовый) — кнопки, ссылки, h2-h3
- Primary Light: #8FBFBF — hover
- Primary Dark: #4F8A8A — active
- Warm Light: #F5EFE5 (песочный) — фон альт. секций
- Warm Dark: #D4C5AD — бордеры
- Deep: #1E3A5F (тёмно-синий) — h1, основной текст, footer
- Text Secondary: #5A6B7D
- Bg: #FAFAF8

## Шрифты
- Заголовки: Playfair Display (600, 700)
- Текст: Source Sans 3 (300, 400, 600, 700)
- h1: 48/32px, h2: 36/28px, h3: 28/22px, body: 18/16px

## Компоненты
- Кнопка Primary: bg-primary text-white rounded-xl px-8 py-3.5 hover:bg-primary-dark
- Кнопка Secondary: border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white
- Карточка: bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition
- Секции чередуются: градиент → белый → warm-light → белый

## Страницы (русские URL)
/ → Главная
/about → Обо мне
/uslugi/endokrinologiya → Эндокринология
/uslugi/girudoterapiya → Гирудотерапия
/uslugi/nutriciologiya → Нутрициология
/maraton → Марафон «Энергия стройности»
/kejsy → Кейсы
/blog → Блог
/blog/[slug] → Статья
/kontakty → Контакты
/privacy → Политика конфиденциальности
/terms → Соглашение
/disclaimer → Дисклеймер

## Контентные ограничения
- НЕ: «лечит», «излечивает», «гарантирует»
- ДА: «поддерживает», «способствует», «помогает»
- «Результаты индивидуальны» — под каждым кейсом
- БАД не является лекарственным средством — в footer

## Команды
npm run dev | npm run build | npm run preview

## НЕЛЬЗЯ
- НЕ создавать tailwind.config.js
- НЕ менять astro.config.mjs без запроса
