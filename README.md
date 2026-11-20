# ARDI FINDS — Katalog Produk Affiliate Shopee

Website katalog produk pribadi (HTML, CSS, JavaScript murni). Tanpa backend, tanpa NPM, siap untuk GitHub Pages.

## Struktur file
- `index.html` — kerangka halaman
- `style.css` — tampilan
- `script.js` — pencarian, filter, urutan, render produk
- `config.js` — brand, tagline, deskripsi, link sosmed, daftar kategori
- `products.js` — database produk
- `assets/products/` — gambar produk

> **Penting:** Hanya produk `id: 1` dan `id: 2` yang memakai link affiliate asli. Produk id 3–8 adalah **produk contoh (dummy)** dengan `isDummy: true` dan link `example.com/GANTI-LINK-AFFILIATE-DUMMY-...`. Ganti atau hapus sebelum dipublikasikan.

## 1. Menjalankan website secara lokal
Cara paling mudah: klik dua kali `index.html`. Atau dengan server lokal (opsional):
```
python3 -m http.server 8000
```
lalu buka `http://localhost:8000`.

## 2. Mengganti gambar produk
Simpan foto di `assets/products/` (disarankan persegi, 600x600 px, JPG, di bawah 150 KB). Lalu ubah `image` di `products.js`:
`image: "assets/products/nama-fotomu.jpg"`. Jika gambar tidak ditemukan, gambar pengganti otomatis tampil.

## 3. Menambahkan produk baru
Salin satu blok produk di `products.js`, tempel sebelum `];`, beri `id` baru yang unik, dan jangan lupa koma antar blok:
```js
{ id: 9, name: "Nama Produk", category: "Gadget", price: "Rp75.000",
  description: "Deskripsi singkat.", image: "assets/products/foto.jpg",
  affiliateLink: "https://s.shopee.co.id/xxxx", featured: false,
  badge: "", dateAdded: "2026-11-21", isDummy: false }
```
Atur `featured: true` agar tampil di bagian "Pilihan Ardi". Format tanggal: `TAHUN-BULAN-TANGGAL`.

## 4. Mengganti affiliate link
Ubah `affiliateLink` pada produk terkait di `products.js`. Setiap produk punya link sendiri. Setelah diganti, ubah `isDummy` menjadi `false` dan hapus badge "Contoh".

## 5. Mengubah harga
Ubah `price` dengan format `"Rp41.900"` (titik sebagai pemisah ribuan). Jika harga belum pasti, tulis `"Cek harga terbaru di Shopee"`; produk ini otomatis berada di urutan akhir saat diurutkan berdasarkan harga.

## 6. Mengubah kategori
Daftar kategori ada di `config.js` (`categories`). Item pertama harus tetap "Semua Produk". Nilai `category` di setiap produk harus **sama persis** dengan salah satu nama kategori.

## 7. Mengubah brand name
Di `config.js`: ubah `brandName`, `logoText` (dua bagian, contoh `["ARDI","FINDS"]`), dan `title`.

## 8. Mengubah tagline
Di `config.js`: ubah `tagline`, `description`, serta `heroHeadline` dan `heroSubheadline` untuk teks hero.

## 9. Mengubah link media sosial
Di `config.js` bagian `social`, ganti `tiktok`, `instagram`, dan `youtube` dengan URL profilmu.

## 10. Deploy ke GitHub Pages (langkah demi langkah)
1. Buat akun di https://github.com jika belum punya.
2. Klik **New repository**. Nama contoh: `ardi-finds`. Pilih **Public**, lalu **Create repository**.
3. Di halaman repository, klik **uploading an existing file**.
4. Ekstrak ZIP, lalu seret **isi folder** (`index.html`, `style.css`, `script.js`, `config.js`, `products.js`, `README.md`, folder `assets`) ke halaman upload. Pastikan `index.html` berada di tingkat paling atas repository.
5. Klik **Commit changes**.
6. Buka **Settings → Pages**.
7. Pada **Build and deployment**, pilih **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**, lalu **Save**.
8. Tunggu 1–3 menit. Alamat websitemu:
```
https://USERNAME-GITHUB.github.io/NAMA-REPOSITORY/
```
Contoh: `https://ardi.github.io/ardi-finds/`

Semua path dalam proyek ini relatif, jadi aman dipakai di subfolder repository. Setiap kali kamu mengubah file dan commit, website ikut diperbarui.

## Catatan transparansi
Disclosure affiliate sudah tersedia di halaman dan footer. Jangan menulis klaim "sudah dicoba" atau "terbaik" pada deskripsi produk kecuali memang benar.
