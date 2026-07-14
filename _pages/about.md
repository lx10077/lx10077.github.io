---
layout: site
permalink: /
title: Xiang Li
site_home: true
---

{% capture news_content %}{% include news.md %}{% endcapture %}
<section class="v3-profile" aria-labelledby="site-name">
  <img src="{{ '/assets/img/prof_pic.webp' | relative_url }}" alt="Portrait of Xiang Li" width="800" height="996" fetchpriority="high">
  <h1 id="site-name">Xiang Li</h1>
  <p>I am a postdoctoral researcher in Statistics at the University of Pennsylvania. My work develops statistical and algorithmic foundations for reliable AI and modern learning systems.</p>
  <p>I will join the Department of Statistics at Rutgers University as an Assistant Professor in September 2026.</p>

  <div class="v3-social" aria-label="Profile links and updates">
    <a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}">Google Scholar</a>
    <a href="https://github.com/{{ site.github_username }}">GitHub</a>
    <button type="button" data-site-disclosure="featured-papers" aria-controls="featured-papers" aria-expanded="false">Recent / Featured Papers</button>
    <button type="button" data-site-disclosure="news-panel" aria-controls="news-panel" aria-expanded="false">News</button>
    <a href="mailto:{{ site.email }}">Email</a>
    <a href="{{ '/assets/pdf/CV_XiangLi.pdf' | relative_url }}">CV</a>
  </div>

  <div class="v3-buttons" aria-label="Site sections">
    <a href="{{ '/research/' | relative_url }}">Research</a>
    <a href="{{ '/publications/' | relative_url }}">Publications</a>
    <a href="{{ '/talks/' | relative_url }}">Talks</a>
    <a href="{{ '/service/' | relative_url }}">Service</a>
  </div>

  <div class="v3-home-disclosures">
    <section id="featured-papers" class="v3-disclosure-content v3-publications" hidden>
      {% include selected_papers.html %}
      <a class="v3-disclosure-more" href="{{ '/publications/' | relative_url }}">All publications →</a>
    </section>

    <section id="news-panel" class="v3-disclosure-content v3-home-news" hidden>
      {{ news_content | markdownify }}
    </section>
  </div>
</section>
