---
layout: site
permalink: /presentations/
title: Presentations
site_section: talks
---

<article class="v3-article v3-talks-page">
  <header class="v3-page-header">
    <h1>Presentations</h1>
    <p>Selected conference talks, seminars, and tutorials on my research.</p>
  </header>

  {% assign categories = "Conference Talks|Tutorials|Seminars & Colloquia" | split: "|" %}
  {% for category in categories %}
  <section class="v3-presentation-group">
    <h2 class="v3-talk-category">{{ category }}</h2>
  <div class="v3-talk-list">
    {% assign sorted_talks = site.data.talks | where: 'category', category | sort: 'date' | reverse %}
    {% for talk in sorted_talks %}
    <div class="v3-talk-item">
      <div class="v3-talk-copy">
        <div class="v3-talk-title-row">
          <span class="v3-talk-title">{{ talk.title }}</span>
          {% if talk.slides %}
          <a href="{{ talk.slides | relative_url }}">Slides</a>
          {% endif %}
        </div>
        {% if talk.kind or talk.event %}
        <p class="v3-talk-meta">
          <time datetime="{% if talk.date_precision == 'year' %}{{ talk.date | date: '%Y' }}{% else %}{{ talk.date | date: '%Y-%m' }}{% endif %}">{% if talk.date_precision == 'year' %}{{ talk.date | date: '%Y' }}{% else %}{{ talk.date | date: '%b %Y' }}{% endif %}</time> · {{ talk.kind }}{% if talk.kind and talk.event %} · {% endif %}{{ talk.event }}
        </p>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
  </section>
  {% endfor %}
</article>
