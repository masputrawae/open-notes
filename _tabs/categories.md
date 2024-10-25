---
layout: page
title: "Categories"
permalink: /categories/
---

<p class="categories-intro">Here are the categories of articles available on this site:</p>

<ul class="category-list" aria-labelledby="categories-title">
  <h2 id="categories-title" class="visually-hidden">Categories List</h2> <!-- Menambahkan judul yang tersembunyi untuk aksesibilitas -->
  {% for category in site.categories %}
    <li class="category-item">
      <h3 class="category-title">{{ category[0] }}</h3> <!-- Mengubah <h2> menjadi <h3> untuk menjaga hierarki heading -->
      <ul class="post-category-list">
        {% if category[1] | size > 0 %}
          {% for post in category[1] %}
            <li class="post-category-item">
              <a href="{{ site.baseurl }}{{ post.url }}" class="post-link" aria-label="Read '{{ post.title }}'">{{ post.title }}</a>
            </li>
          {% endfor %}
        {% else %}
          <li class="no-posts">No posts available in this category.</li>
        {% endif %}
      </ul>
    </li>
  {% endfor %}
</ul>
