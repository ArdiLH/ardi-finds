// DATABASE PRODUK
// isDummy: true = produk contoh (link affiliate palsu, WAJIB diganti atau dihapus).
// Hanya produk id 1 dan 2 yang memakai link affiliate asli.
const PRODUCTS = [
  { id: 1, name: "Scarlett Retinol Bright Glow Body Serum", category: "Beauty & Body Care", price: "Rp41.900",
    description: "Produk perawatan tubuh untuk rutinitas harian.", image: "assets/products/bodyserum.jpg",
    affiliateLink: "https://s.shopee.co.id/906uUGwJYN?utm_source=chatgpt.com", featured: true, badge: "Produk kecantikan", dateAdded: "2026-11-20", isDummy: false },
  { id: 2, name: "[JENNIE's PICK!] NEW Vaseline Vitamin Soft + Glow Serum", category: "Beauty & Body Care", price: "Cek harga terbaru di Shopee",
    description: "Rekomendasi produk dari koleksi ARDI FINDS.", image: "assets/products/bodyserum2.png",
    affiliateLink: "https://s.shopee.co.id/8pnUKqrjqD", featured: true, badge: "Produk kecantikan", dateAdded: "2026-11-19", isDummy: false },
  { id: 3, name: "Holder HP Motor (Contoh)", category: "Otomotif", price: "Rp35.000",
    description: "Dudukan HP untuk motor. DATA CONTOH, ganti dengan produk asli.", image: "assets/products/motor-phone-holder.jpg",
    affiliateLink: "https://example.com/GANTI-LINK-AFFILIATE-DUMMY-3", featured: false, badge: "Contoh", dateAdded: "2026-11-18", isDummy: true },
  { id: 4, name: "Desk Organizer Minimalis (Contoh)", category: "Home & Living", price: "Rp59.000",
    description: "Rak kecil untuk merapikan meja kerja. DATA CONTOH.", image: "assets/products/desk-organizer.jpg",
    affiliateLink: "https://example.com/GANTI-LINK-AFFILIATE-DUMMY-4", featured: false, badge: "Contoh", dateAdded: "2026-11-17", isDummy: true },
  { id: 5, name: "Earbuds Nirkabel (Contoh)", category: "Gadget", price: "Rp125.000",
    description: "Earbuds bluetooth untuk dengar musik harian. DATA CONTOH.", image: "assets/products/wireless-earbuds.jpg",
    affiliateLink: "https://example.com/GANTI-LINK-AFFILIATE-DUMMY-5", featured: true, badge: "Contoh", dateAdded: "2026-11-16", isDummy: true },
  { id: 6, name: "Tas Selempang Pria (Contoh)", category: "Fashion", price: "Rp89.000",
    description: "Tas selempang simpel untuk aktivitas sehari-hari. DATA CONTOH.", image: "assets/products/mens-sling-bag.jpg",
    affiliateLink: "https://example.com/GANTI-LINK-AFFILIATE-DUMMY-6", featured: false, badge: "Contoh", dateAdded: "2026-11-15", isDummy: true },
  { id: 7, name: "Lampu Mini Meja (Contoh)", category: "Home & Living", price: "Rp9.999",
    description: "Lampu kecil untuk menemani kerja atau belajar. DATA CONTOH.", image: "assets/products/mini-lamp.jpg",
    affiliateLink: "https://example.com/GANTI-LINK-AFFILIATE-DUMMY-7", featured: false, badge: "Contoh", dateAdded: "2026-11-14", isDummy: true },
  { id: 8, name: "Jas Hujan (Contoh)", category: "Otomotif", price: "Rp47.500",
    description: "Jas hujan praktis untuk pengendara motor. DATA CONTOH.", image: "assets/products/raincoat.jpg",
    affiliateLink: "https://example.com/GANTI-LINK-AFFILIATE-DUMMY-8", featured: false, badge: "Contoh", dateAdded: "2026-11-13", isDummy: true }
];
