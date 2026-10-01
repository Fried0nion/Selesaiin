# Laporan — SelesaiIn

## Gambaran Umum Proyek

**SelesaiIn** adalah aplikasi manajemen tugas berbasis web untuk mahasiswa. Website terdiri dari satu file `index.html` dengan dua halaman (Login Page dan Dashboard/Kanban Board) yang ditampilkan bergantian menggunakan JavaScript DOM manipulation. Styling ditangani oleh `selesaiin.css` dan interaktivitas oleh `selesaiin.js`.


Aplikasi ini merupakan produk hasil untuk tugas besar dari acara ISE! Academy. Ada beberapa hal yang sudah/belum diterapkan (untuk penilaian):
---

## A. DOM Manipulation Dasar

### ✅ File JavaScript & Penghubungan ke HTML

`selesaiin.js` sudah dibuat dan dihubungkan ke `index.html` menggunakan tag `<script src="selesaiin.js">` yang diletakkan sebelum `</body>`, sesuai ketentuan.

```html
<script src="selesaiin.js"></script>
</body>
```

---

### ✅ Seleksi Elemen (Minimal 3 Metode)

Digunakan lebih dari 3 metode seleksi elemen:

| Metode | Digunakan di |
|---|---|
| `document.getElementById()` | `loginBtn`, `loginEmail`, `loginPassword`, `togglePasswordBtn`, `sidebar`, `backdrop`, `fab`, `loginPage`, `dashboardPage`, `emailError`, `passwordError` |
| `document.querySelector()` | `.eye-icon`, `.priority-btn` (via querySelectorAll) |
| `document.querySelectorAll()` | `.view-btn`, `.tab-btn`, `.priority-btn` |

**Kesimpulan: SUDAH DITERAPKAN** — menggunakan `getElementById`, `querySelector`, dan `querySelectorAll`.

---

### ✅ Manipulasi Konten, Atribut, dan Style

Manipulasi dilakukan secara dinamis:

- **`style.display`** — digunakan untuk show/hide halaman login dan dashboard:
  ```js
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('dashboardPage').style.display = 'block';
  ```
- **`classList.add / remove / toggle`** — digunakan pada sidebar (`.open`), FAB (`.hidden`), status input (`.input-error`, `.input-valid`), tombol view (`.active`), tab (`.active`), dan priority (`.sel-low`, `.sel-medium`, `.sel-high`).
- **`el.textContent`** — digunakan di fungsi `showError()` untuk mengisi pesan error secara dinamis.
- **`input.type`** — diubah dari `password` ke `text` untuk toggle visibilitas password.
- **`eyeIcon.style.opacity`** — dimanipulasi untuk memberi feedback visual toggle password.

**Kesimpulan: SUDAH DITERAPKAN.**

---

### ✅ Event Listener (Minimal 3 Jenis Event)

Event yang diterapkan dengan `addEventListener`:

| Event | Elemen | Fungsi |
|---|---|---|
| `click` | `#loginBtn` | Validasi dan navigasi ke dashboard |
| `click` | `#togglePasswordBtn` | Toggle visibilitas password |
| `click` | `.view-btn` (querySelectorAll) | Ganti tampilan Kanban/List |
| `click` | `.tab-btn` (querySelectorAll) | Filter status tugas |
| `input` | `#loginEmail` | Validasi realtime email |
| `input` | `#loginPassword` | Validasi realtime password |
| `keydown` | `document` | Tutup sidebar dengan tombol Escape |

Lebih dari 3 jenis event digunakan (`click`, `input`, `keydown`).

**Kesimpulan: SUDAH DITERAPKAN.**

---

### ❌ Hamburger Menu Berfungsi

Tidak ditemukan elemen hamburger menu (`☰`) pada navbar, baik di navbar halaman login maupun navbar dashboard. Tidak ada implementasi `classList.toggle()` untuk membuka/menutup mobile menu, dan tidak ada CSS untuk menu mobile yang tersembunyi/terlihat.

**Kesimpulan: BELUM DITERAPKAN.**

---

## B. Form & Validasi Bawaan HTML5

### ✅ Struktur Form

Halaman login memiliki elemen form de facto dengan:
- `<label for="loginEmail">` dan `<input id="loginEmail">` — nilai `for` sesuai dengan `id` input.
- `<label for="loginPassword">` dan `<input id="loginPassword">` — nilai `for` sesuai dengan `id` input.
- Tombol login `<button class="btn-login" id="loginBtn">` berfungsi sebagai submit.

**Catatan:** Input tidak dibungkus dalam tag `<form>` secara eksplisit — melainkan menggunakan `<div>`. Tombol juga tidak menggunakan `type="submit"`. Ini tidak memenuhi persyaratan struktur form HTML yang baku (`<form>`, `<button type="submit">`).

**Kesimpulan: SEBAGIAN — struktur `<label>` dan `<input>` dengan `for`/`id` sudah ada, tetapi tidak menggunakan elemen `<form>` dan `<button type="submit">` secara eksplisit.**

---

### ❌ Variasi Elemen Input (Minimal 4 Jenis)

Input yang ada di halaman login:
1. `type="email"` — input email
2. `type="password"` — input password
3. `type="checkbox"` — checkbox "Ingat saya"

Sidebar "Tambah Tugas" memiliki:
4. `type="text"` — nama tugas
5. `type="date"` — due date
6. `<select>` — status/kolom
7. `<textarea>` — deskripsi tugas

Jika form yang dimaksud adalah halaman login saja, hanya ada 3 jenis (email, password, checkbox). Jika sidebar dihitung sebagai form terpisah, maka total ada 7 jenis elemen input, namun sidebar tidak memiliki tag `<form>` resmi.

**Kesimpulan: SEBAGIAN — tergantung apakah sidebar dianggap sebagai form. Tidak ada satu form terpadu dengan minimal 4 jenis input dalam satu `<form>` element.**

---

### ❌ Atribut Validasi HTML5 Bawaan (Minimal 3 Atribut)

Tidak ditemukan atribut validasi HTML5 bawaan pada elemen input manapun:
- Tidak ada `required`
- Tidak ada `minlength` / `maxlength`
- Tidak ada `min` / `max`
- Tidak ada `pattern` (dengan `title`)
- Input email menggunakan `type="email"` (ini merupakan satu atribut validasi bawaan), namun itu saja tidak cukup memenuhi minimal 3 atribut.

**Kesimpulan: BELUM DITERAPKAN** — hanya `type="email"` yang memberikan validasi bawaan, tidak ada atribut validasi HTML5 lainnya (`required`, `minlength`, `pattern`, dll.).

---

### ❌ Feedback Visual `:valid` dan `:invalid`

Tidak ditemukan pseudo-class `:valid` dan `:invalid` di `selesaiin.css`. Feedback visual dilakukan secara manual menggunakan class `.input-error` dan `.input-valid` yang ditambahkan via JavaScript, bukan melalui CSS pseudo-class bawaan HTML5.

```css
/* Yang ada — feedback manual via class JS */
.form-input.input-error { ... }
.form-input.input-valid { ... }

/* Yang dibutuhkan — TIDAK ADA */
.form-input:valid { ... }
.form-input:invalid { ... }
```

**Kesimpulan: BELUM DITERAPKAN** — tidak menggunakan `:valid` dan `:invalid` CSS pseudo-class.

---

## C. Validasi Manual dengan JavaScript

### ❌ Atribut `novalidate`

Tidak ada elemen `<form>` di HTML, sehingga atribut `novalidate` tidak bisa diterapkan. Validasi dikontrol sepenuhnya oleh JavaScript namun tanpa tag `<form novalidate>`.

**Kesimpulan: BELUM DITERAPKAN** — tidak ada `<form novalidate>`.

---

### ✅ Tempat Pesan Error

Elemen pesan error sudah disediakan di bawah setiap input:

```html
<p class="field-error" id="emailError"></p>
<p class="field-error" id="passwordError"></p>
```

Styling `.field-error` sudah ada di CSS:
```css
.field-error {
  display: none;
  font-size: 0.78rem;
  color: #BE123C;
  margin-top: 5px;
}
```

Styling `.input-error` juga sudah ada. Namun kelas yang digunakan di HTML adalah `field-error`, sementara tugas meminta nama seperti `pesan-error`. Secara fungsional sudah setara.

**Kesimpulan: SUDAH DITERAPKAN** — elemen error tersedia di bawah setiap input dengan styling yang sesuai.

---

### ✅ Fungsi Tampilkan & Hapus Error

Sudah diimplementasikan fungsi yang dapat dipakai ulang:

```js
function showError(id, message) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = message || '';
  el.style.display = message ? 'block' : 'none';
}
```

Fungsi `showError(id, null)` berfungsi sebagai "hapus error" karena mengatur `display: none` dan mengosongkan teks. Ini setara dengan `tampilkanError` dan `hapusError` yang digabung menjadi satu fungsi.

**Kesimpulan: SUDAH DITERAPKAN** — fungsi reusable untuk menampilkan dan menghapus error sudah ada.

---

### ✅ Aturan Validasi (Minimal 4 Aturan)

Aturan validasi yang diterapkan:

| No | Aturan | Implementasi |
|---|---|---|
| 1 | Wajib diisi (email tidak boleh kosong) | `if (!value) return 'Email tidak boleh kosong.'` |
| 2 | Wajib diisi (password tidak boleh kosong) | `if (!value) return 'Kata sandi tidak boleh kosong.'` |
| 3 | Format email (mengandung `@`) | `if (!value.includes('@')) return ...` |
| 4 | Panjang minimal (password min 5 karakter) | `if (value.length < 5) return ...` |
| 5 | Format khusus (password harus mengandung angka) | `if (!/[0-9]/.test(value)) return ...` |
| 6 | Format khusus (password harus mengandung karakter spesial) | `if (!/[^A-Za-z0-9]/.test(value)) return ...` |

Lebih dari 4 aturan validasi diterapkan.

**Kesimpulan: SUDAH DITERAPKAN.**

---

### ❌ Alur Submit (Event Submit + `e.preventDefault()`)

Validasi dilakukan melalui event `click` pada tombol, **bukan** melalui event `submit` pada elemen `<form>`. Tidak ada `e.preventDefault()` karena tidak menggunakan form submission yang sesungguhnya.

Selain itu, ketentuan alur submit meminta:
- Pesan sukses di halaman (bukan `alert`) — **BELUM ADA** (jika login berhasil, langsung ganti halaman tanpa pesan sukses eksplisit)
- `form.reset()` setelah sukses — **BELUM ADA** (input dikosongkan manual di fungsi `logout()`, bukan lewat `form.reset()`)

**Kesimpulan: BELUM DITERAPKAN** — tidak menggunakan `submit` event dengan `e.preventDefault()`, tidak ada pesan sukses di halaman, dan tidak ada `form.reset()`.

---

## D. Integrasi & Konsistensi

### ✅ Layout Tidak Rusak

Flexbox, Grid, dan Media Queries dari Progress 2 tetap terjaga. JavaScript hanya menambahkan/menghapus class dan mengubah `display`, tidak mengubah struktur layout.

---

### ✅ Konsistensi Tampilan

Tampilan konsisten dengan design system yang digunakan (warna, font `Plus Jakarta Sans`, komponen card, badge, dan sidebar dark mode).

---

### ✅ Tidak Ada Error Console yang Bersifat Fatal

Kode JavaScript ditulis dengan pengecekan null (`if (loginBtn)`, `if (fab)`, dll.) sehingga meminimalisir error runtime. Fungsi-fungsi global (`openSidebar`, `closeSidebar`, `selectPriority`) dipanggil via `onclick` inline di HTML dan sudah terdefinisi.

---

## Ringkasan Penilaian

| Kriteria | Status |
|---|---|
| **A1.** File `script.js` terhubung ke HTML | ✅ Sudah (`selesaiin.js` sebelum `</body>`) |
| **A2.** Minimal 3 metode seleksi elemen | ✅ Sudah (`getElementById`, `querySelector`, `querySelectorAll`) |
| **A3.** Manipulasi konten, atribut, style/classList | ✅ Sudah (`style.display`, `classList`, `textContent`, `input.type`) |
| **A4.** Minimal 3 jenis event listener | ✅ Sudah (`click`, `input`, `keydown`) |
| **A5.** Hamburger menu fungsional (mobile) | ❌ BELUM DITERAPKAN |
| **B1.** Struktur form (`<form>`, `<label>`, `<input>`, `<button type="submit">`) | ❌ BELUM DITERAPKAN (tidak ada tag `<form>` eksplisit) |
| **B2.** Minimal 4 jenis elemen input dalam satu form | ❌ BELUM DITERAPKAN (tidak ada satu `<form>` dengan 4+ jenis input) |
| **B3.** Minimal 3 atribut validasi HTML5 bawaan | ❌ BELUM DITERAPKAN (tidak ada `required`, `minlength`, `pattern`, dll.) |
| **B4.** Feedback visual `:valid` dan `:invalid` CSS | ❌ BELUM DITERAPKAN (menggunakan class JS, bukan pseudo-class CSS) |
| **C1.** Atribut `novalidate` pada form | ❌ BELUM DITERAPKAN |
| **C2.** Elemen pesan error di bawah input + styling | ✅ Sudah (`.field-error`, `#emailError`, `#passwordError`) |
| **C3.** Fungsi tampilkan & hapus error yang reusable | ✅ Sudah (`showError(id, message)`) |
| **C4.** Minimal 4 aturan validasi | ✅ Sudah (6 aturan: kosong email, kosong password, format @, panjang min, angka, karakter spesial) |
| **C5.** Submit event + `e.preventDefault()` + pesan sukses di halaman + `form.reset()` | ❌ BELUM DITERAPKAN |
| **D1.** Layout Progress 2 tidak rusak | ✅ Sudah |
| **D2.** Konsistensi tampilan & design system | ✅ Sudah |
| **D3.** Tidak ada error Console | ✅ Sudah (null-check pada semua selector) |

---

## Hal yang Perlu Ditambahkan

Poin-poin berikut **belum diterapkan** dan perlu diselesaikan:

1. **Hamburger menu mobile** — Tambahkan ikon hamburger di navbar, buat CSS untuk mobile menu yang tersembunyi, dan buat event `click` dengan `classList.toggle()` untuk membuka/menutupnya.

2. **Elemen `<form>` eksplisit** — Bungkus input login dalam `<form id="loginForm" novalidate>` dengan `<button type="submit">`.

3. **Atribut validasi HTML5 bawaan** — Tambahkan minimal 3 dari: `required`, `minlength`, `maxlength`, `min`, `max`, `pattern` (dengan `title`) pada elemen input.

4. **CSS `:valid` dan `:invalid`** — Tambahkan styling pseudo-class CSS untuk feedback visual validasi bawaan HTML5.

5. **Submit event + `e.preventDefault()` + pesan sukses + `form.reset()`** — Pindahkan logika validasi ke event `submit` pada `<form>`, tambahkan `e.preventDefault()`, tampilkan pesan sukses di halaman (bukan alert), dan reset form dengan `form.reset()`.
