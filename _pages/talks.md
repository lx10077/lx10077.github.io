---
layout: site
permalink: /talks/
title: Talks
site_section: talks
---

<article class="v3-article v3-talks-page">
  <header class="v3-page-header">
    <h1>Selected Talks</h1>
    <p>A selection of invited talks on my recent works.</p>
  </header>

  <div class="v3-talk-list">
    {% assign sorted_talks = site.data.talks | sort: 'date' | reverse %}
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
          {{ talk.kind }}{% if talk.event %} · {{ talk.event }}{% endif %}
        </p>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</article>
