# 🚀 تعليمات النشر السريعة

## نشر على GitHub (5 دقائق)

### الخطوة 1: إنشاء مستودع على GitHub

1. اذهب إلى: https://github.com/new
2. اسم المستودع: `eskafy-al-bahja`
3. اختر Public
4. **لا** تضع علامة على "Initialize with README"
5. اضغط "Create repository"

### الخطوة 2: رفع المشروع

افتح Terminal في مجلد المشروع:

```bash
git init
git add .
git commit -m "Initial commit: اسكافي البهجة website"
git remote add origin https://github.com/YOUR_USERNAME/eskafy-al-bahja.git
git branch -M main
git push -u origin main
```

**استبدل `YOUR_USERNAME`** باسم المستخدم على GitHub

### الخطوة 3: النشر على Vercel (مجاني)

1. https://vercel.com → Sign in with GitHub
2. New Project → اختر المستودع
3. Deploy → ✅ جاهز!

---

**للمزيد من التفاصيل**: راجع ملف `GITHUB_DEPLOY.md`

