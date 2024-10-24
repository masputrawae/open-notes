---
layout: post
title: Mengenal JavaScript untuk Pemula
date: 2024-10-24
categories:
  - Web Development
  - Frontend
tags:
  - javascript
  - web development
  - tutorial
  - pemrograman
  - panduan
excerpt: Artikel ini menjelaskan dasar-dasar JavaScript dan bagaimana cara menggunakannya untuk menambah interaktivitas pada halaman web.
status: published
thumbnail: 
post: true
---

# Mengenal JavaScript untuk Pemula

## Pendahuluan

JavaScript adalah bahasa pemrograman yang sangat populer untuk pengembangan web. Ini digunakan untuk membuat halaman web yang interaktif dan dinamis. Artikel ini akan membahas dasar-dasar JavaScript dan cara penggunaannya.

## Apa itu JavaScript?

JavaScript adalah bahasa pemrograman yang dijalankan di sisi klien (client-side), yang berarti kode JavaScript dieksekusi di browser pengguna. Dengan JavaScript, Anda dapat mengubah konten halaman web, merespons input pengguna, dan membuat animasi.

### Menyisipkan JavaScript ke dalam Halaman Web

Anda dapat menyisipkan JavaScript ke dalam dokumen HTML dengan menggunakan tag `<script>`. Berikut adalah cara melakukannya:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Contoh JavaScript</title>
    <script>
        function greet() {
            alert("Selamat datang di halaman web!");
        }
    </script>
</head>
<body>
    <h1>Contoh JavaScript</h1>
    <button onclick="greet()">Klik saya!</button>
</body>
</html>
```

### Variabel dan Tipe Data

JavaScript mendukung beberapa tipe data dasar, seperti:

- **String**: Teks yang dikelilingi oleh tanda kutip.
- **Number**: Angka, baik bulat maupun desimal.
- **Boolean**: Nilai `true` atau `false`.

Anda dapat mendeklarasikan variabel menggunakan `var`, `let`, atau `const`.

```javascript
let name = "Alice";
const age = 30;
var isStudent = true;
```

### Fungsi

Fungsi adalah blok kode yang dapat dipanggil untuk melakukan tugas tertentu. Berikut adalah cara mendefinisikan dan memanggil fungsi:

```javascript
function add(a, b) {
    return a + b;
}

let result = add(5, 3); // result akan bernilai 8
```

## Kesimpulan

JavaScript adalah bahasa yang penting untuk pengembangan web modern. Dengan memahami dasar-dasar JavaScript, Anda dapat menambahkan interaktivitas ke halaman web Anda. Untuk belajar lebih lanjut, Anda dapat menemukan banyak sumber daya dan tutorial online.

## Referensi

- [Mozilla Developer Network - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)