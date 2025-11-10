# إعداد Git والنشر

## خطوات سريعة للنشر على GitHub

### 1. تهيئة Git (إذا لم تكن مهيأة)

```bash
git init
git add .
git commit -m "Initial commit: اسكافي البهجة website"
```

### 2. إنشاء مستودع على GitHub

1. اذهب إلى https://github.com/new
2. اختر اسم المستودع (مثلاً: `eskify-al-bahja`)
3. اختر Public أو Private
4. **لا** تضع علامة على "Initialize with README"
5. اضغط "Create repository"

### 3. ربط المشروع بـ GitHub

```bash
# استبدل YOUR_USERNAME و YOUR_REPO_NAME
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 4. النشر على Vercel (الأسهل - مجاني)

1. اذهب إلى https://vercel.com
2. سجل دخول بحساب GitHub
3. اضغط "New Project"
4. اختر المستودع
5. Vercel سيكتشف تلقائياً أنه مشروع Vite
6. اضغط "Deploy"
7. ✅ الموقع جاهز خلال دقائق!

### 5. النشر على Netlify (مجاني أيضاً)

1. اذهب إلى https://netlify.com
2. سجل دخول بحساب GitHub
3. اضغط "Add new site" > "Import an existing project"
4. اختر المستودع
5. Build settings:
   - **Build command**: `pnpm run build`
   - **Publish directory**: `dist`
6. اضغط "Deploy site"

## ملاحظات مهمة قبل النشر:

- ✅ تأكد من إضافة الشعار في `public/logo.png`
- ✅ تأكد من إضافة جميع الصور المطلوبة
- ✅ راجع معلومات التواصل (الهاتف، العنوان)
- ✅ اختبر الموقع محلياً أولاً: `pnpm run dev`

## بعد النشر:

- الموقع سيكون متاحاً على رابط مثل: `https://your-site.vercel.app`
- يمكنك ربطه بدومين خاص بك
- أي تحديثات ترفعها على GitHub ستُحدث الموقع تلقائياً

