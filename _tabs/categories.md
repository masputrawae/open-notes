---
layout: page
title: Kategori
permalink: /categories/
---

<section>
    <h2>Kategori</h2>

    {% assign categories = site.categories %}
    {% if categories.size > 0 %}
        <ul>
            {% for category in categories %}
                <li>
                    <strong>{{ category[0] }}</strong>
                    <ul>
                        {% for post in category[1] %}
                            <li>
                                <a href="{{ post.url | relative_url }}">{{ post.title }}</a> 
                            </li>
                        {% endfor %}
                    </ul>
                </li>
            {% endfor %}
        </ul>
    {% else %}
        <p>Tidak ada kategori yang ditemukan.</p>
    {% endif %}
</section>
