# كادر

مدونة تصوير فوتوغرافي مبنية بـ Angular 20 وAngular Router.

## التشغيل

اتأكد إن Node.js 22.12 أو أحدث مدعوم من Angular 20 متثبت عندك. افتح Terminal داخل مجلد المشروع وشغّل:

```bash
npm ci
npm start
```

افتح [localhost:4200](http://localhost:4200). لبناء نسخة الإنتاج، استخدم `npm run build`. ملفات البناء في `dist/`. عند نشرها على static hosting، خلّي الروابط الداخلية ترجع إلى `index.html` عشان Angular Router يستقبلها.

## الصفحات

| الرابط | الصفحة |
| --- | --- |
| `/` | الرئيسية |
| `/blog` | البحث والفلترة وعرض Grid أو List، ٦ مقالات في الصفحة |
| `/blog/:slug` | تفاصيل المقال باستخدام الـslug |
| `**` | 404 |

صفحة المقالات بتحتفظ بالبحث والتصنيف وطريقة العرض ورقم الصفحة في الـURL. البحث والفلترة بيتطبقوا الأول، وبعد كده بيتحدد الـ٦ مقالات اللي هتظهر في الصفحة.

بيانات المشروع في `src/data/posts.json`. الملف فيه ١٢ مقال تجريبي ويمكن استبداله بملف التاسك بعد مطابقة الحقول مع `Post` في `src/data/posts.ts`. الصور والخط موجودين في `public/`.

الصور من [Unsplash](https://unsplash.com/). خط [Cairo](https://fonts.google.com/specimen/Cairo) مرخص بـ SIL Open Font License.
