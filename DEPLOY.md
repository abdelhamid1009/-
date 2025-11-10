# دليل النشر على Git

## خطوات النشر على GitHub

### 1. إنشاء مستودع جديد على GitHub

1. اذهب إلى [GitHub](https://github.com)
2. اضغط على "New repository"
3. اختر اسم المستودع (مثلاً: `eskafy-al-bahja`)
4. اختر Public أو Private
5. **لا** تضع علامة على "Initialize with README"
6. اضغط "Create repository"

### 2. تهيئة Git في المشروع

```bash
# تهيئة Git
git init

# إضافة جميع الملفات
git add .

# عمل commit أولي
git commit -m "Initial commit: اسكافي البهجة website"

# إضافة remote repository (استبدل YOUR_USERNAME و YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# رفع الملفات
git branch -M main
git push -u origin main
```

### 3. النشر على Vercel (مجاني)

1. اذهب إلى [Vercel](https://vercel.com)
2. سجل دخول بحساب GitHub
3. اضغط "New Project"
4. اختر المستودع
5. Vercel سيكتشف تلقائياً أنه مشروع Vite
6. اضغط "Deploy"
7. الموقع سيكون متاحاً خلال دقائق!

### 4. النشر على Netlify (مجاني)

1. اذهب إلى [Netlify](https://netlify.com)
2. سجل دخول بحساب GitHub
3. اضغط "Add new site" > "Import an existing project"
4. اختر المستودع
5. Build settings:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
6. اضغط "Deploy site"

### 5. النشر على GitHub Pages

```bash
# تثبيت gh-pages
pnpm add -D gh-pages

# إضافة script في package.json
# "deploy": "pnpm run build && gh-pages -d dist"

# النشر
pnpm run deploy
```

## ملاحظات مهمة

- تأكد من إضافة جميع الصور في مجلد `public/`
- تأكد من تحديث رقم الهاتف والعنوان في `src/lib/translations.ts`
- بعد النشر، تأكد من أن جميع الروابط تعمل بشكل صحيح

