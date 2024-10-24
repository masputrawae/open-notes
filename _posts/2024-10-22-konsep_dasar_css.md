---
layout: post
title: Panduan Memulai dengan CSS
date: 2024-10-24
categories:
  - Web Development
  - Frontend
tags:
  - css
  - web design
  - tutorial
  - panduan
  - styling
excerpt: Artikel ini menjelaskan dasar-dasar CSS dan bagaimana cara menggunakannya untuk mengatur gaya halaman web.
status: published
thumbnail: 
post: true
---

# Panduan Memulai dengan CSS

## Pendahuluan

CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk menggambarkan presentasi dokumen HTML. Dengan CSS, Anda dapat mengatur gaya dan layout halaman web dengan mudah. Artikel ini akan membahas dasar-dasar CSS dan cara penggunaannya.

## Apa itu CSS?

CSS adalah bahasa yang memungkinkan Anda untuk mengontrol tampilan dan format elemen HTML. Anda dapat menggunakan CSS untuk mengubah warna, ukuran, font, dan tata letak halaman web.

### Struktur Dasar CSS

CSS dapat ditulis dalam tiga cara:

1. **Inline CSS**: Diterapkan langsung ke elemen HTML dengan menggunakan atribut `style`.
   ```html
   <h1 style="color: blue;">Judul Berwarna Biru</h1>
   ```

2. **Internal CSS**: Ditempatkan di dalam elemen `<style>` di bagian `<head>` dokumen HTML.
   ```html
   <head>
       <style>
           h1 {
               color: red;
           }
       </style>
   </head>
   ```

3. **External CSS**: Disimpan dalam file terpisah dengan ekstensi `.css` dan dihubungkan dengan dokumen HTML menggunakan tag `<link>`.
   ```html
   <head>
       <link rel="stylesheet" href="styles.css">
   </head>
   ```

### Selektor CSS

Selektor CSS digunakan untuk memilih elemen yang akan diberi gaya. Berikut beberapa jenis selektor:

- **Selektor Tag**: Memilih semua elemen dari jenis tertentu.
  ```css
  p {
      color: green;
  }
  ```

- **Selektor Kelas**: Memilih elemen dengan kelas tertentu.
  ```css
  .highlight {
      background-color: yellow;
  }
  ```

- **Selektor ID**: Memilih elemen dengan ID tertentu.
  ```css
  #main-title {
      font-size: 24px;
  }
  ```

## Contoh Gaya CSS

Berikut adalah contoh gaya CSS yang mengubah tampilan elemen HTML:

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

h1 {
    color: #333;
}

p {
    line-height: 1.5;
}
```

## Kesimpulan

CSS adalah alat penting dalam pengembangan web yang memungkinkan Anda untuk menciptakan desain yang menarik. Dengan memahami dasar-dasar CSS, Anda dapat mulai mendesain halaman web Anda sendiri. Untuk informasi lebih lanjut, Anda dapat mencari tutorial CSS online.

## Referensi

- [W3Schools - CSS Tutorial](https://www.w3schools.com/css/)