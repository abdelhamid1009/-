# حل خطأ Vercel: pnpm-lock.yaml outdated

## المشكلة:
```
ERR_PNPM_OUTDATED_LOCKFILE Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date
```

## الحل السريع:

### 1. تحديث ملف القفل محلياً (تم بالفعل ✅)

```bash
pnpm install
```

### 2. رفع الملف المحدث إلى GitHub

إذا كان المشروع مربوطاً بـ GitHub بالفعل:

```bash
# إضافة ملف pnpm-lock.yaml المحدث
git add pnpm-lock.yaml

# عمل commit
git commit -m "Update pnpm-lock.yaml"

# رفع التحديث
git push
```

### 3. إذا لم يكن المشروع مربوطاً بـ Git بعد:

```bash
# تهيئة Git
git init

# إضافة جميع الملفات (بما فيها pnpm-lock.yaml المحدث)
git add .

# عمل commit
git commit -m "Initial commit with updated lockfile"

# ربط بـ GitHub (استبدل YOUR_USERNAME و YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# رفع الملفات
git branch -M main
git push -u origin main
```

### 4. بعد الرفع

Vercel سيعيد البناء تلقائياً، أو يمكنك:
- اذهب إلى Vercel Dashboard
- اضغط "Redeploy" على آخر deployment

## ملاحظة:

تأكد من أن `pnpm-lock.yaml` موجود في المستودع وليس في `.gitignore`

---

**بعد رفع الملف المحدث، سيعمل البناء على Vercel بنجاح! ✅**

