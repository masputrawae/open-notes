---
layout: page
title: "Archives"
permalink: /archives/
---
<p class="archive-intro">
  Here you can find all our articles sorted by month and year. Browse through our posts to explore our content over time.
</p>

<section class="archive-list-section">
  <ul class="archive-list">
    {% for post in site.posts %}
      <li class="archive-item">
        <span class="archive-date">{{ post.date | date: "%B %Y" }}:</span>
        <a href="{{ post.url }}" class="archive-link" aria-label="Read '{{ post.title }}' from {{ post.date | date: "%B %Y" }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
</section>
