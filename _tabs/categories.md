---
layout: page
title: "Categories"
permalink: /categories/
---
<h1 class="categories-title">Daftar Kategori dan Postingan</h1>
<p class="categories-intro">Here are the categories of articles available on this site:</p>

<ul class="category-list">
  {% for category in site.categories %}
    <li class="category-item">
      <h2 class="category-title">{{ category[0] }}</h2>
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
