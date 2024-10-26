---
layout: page
title: Tag
permalink: /tags/
---

<section>
    <h2>Tag</h2>
    <p>Berikut adalah daftar tag yang kami gunakan di {{ site.title }}. Klik pada tag untuk melihat artikel yang relevan.</p>

    <ul class="tag-list">
        {% assign tags = site.tags %}
        {% for tag in tags %}
            <li>
                <strong>{{ tag[0] }}</strong>
                <ul>
                    {% for post in tag[1] %}
                        <li>
                            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                        </li>
                    {% endfor %}
                </ul>
            </li>
        {% endfor %}
    </ul>
</section>
