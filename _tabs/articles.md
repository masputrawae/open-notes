---
layout: page
title: "Articles"
permalink: /articles/
---

<p class="articles-intro">Welcome to the articles section! Here you can find a list of all articles published on this site.</p>

<div class="card-container" aria-labelledby="articles-title">
  <h2 id="articles-title" class="visually-hidden">Articles List</h2> <!-- Menambahkan judul yang tersembunyi untuk aksesibilitas -->
  {% assign sorted_posts = site.posts | sort: 'date' | reverse %} <!-- Mengurutkan postingan berdasarkan tanggal -->
  {% for post in sorted_posts limit: 20 %} <!-- Batasi jumlah postingan yang ditampilkan -->
    <div class="card">
      <h3 class="card-title">{{ post.title }}</h3> <!-- Mengubah <h2> menjadi <h3> untuk menjaga hierarki heading -->
      <p class="post-date">Dipublikasikan pada: <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%B %d, %Y" }}</time></p>
      <p class="card-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p> <!-- Cuplikan postingan -->
      <a class="read-more" href="{{ site.baseurl }}{{ post.url }}" aria-label="Read '{{ post.title }}'">{{ post.read_more_text | default: "Baca Selengkapnya" }}</a> <!-- Tombol Baca Selengkapnya -->
    </div>
  {% endfor %}
</div>

<!-- Tambahkan tautan untuk melihat lebih banyak artikel -->
<div class="more-articles">
  <a href="{{ site.baseurl }}/archives/" class="view-more">Lihat Semua Artikel</a>
</div>
