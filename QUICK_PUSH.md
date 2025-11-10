# رفع سريع إلى GitHub

## الطريقة السريعة:

### 1. استخدم ملف الباتش:
- شغّل `PUSH_TO_GITHUB.bat` (انقر نقراً مزدوجاً)
- سيتم تنفيذ جميع الأوامر تلقائياً

### 2. أو نفّذ الأوامر يدوياً في Terminal:

```bash
git init
git add pnpm-lock.yaml package.json .gitignore src/ public/ index.html *.json *.js *.ts *.md *.cjs vite.config.ts tsconfig.json tsconfig.node.json postcss.config.js tailwind.config.js
git commit -m "Update pnpm-lock.yaml and add all project files"
git remote add origin https://github.com/abdelhamid1009/-.git
git branch -M main
git push -u origin main
```

### 3. عند طلب المصادقة:
- **Username**: `abdelhamid1009`
- **Password**: استخدم **Personal Access Token** (ليس كلمة المرور)

### كيفية الحصول على Token:
1. GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token
4. اختر `repo` (كامل)
5. انسخ الرمز واستخدمه

---

**بعد الرفع، Vercel سيعيد البناء تلقائياً! ✅**

