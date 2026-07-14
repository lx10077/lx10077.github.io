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
  <p>I am a postdoctoral researcher at the University of Pennsylvania. I will join the <a href="https://statistics.rutgers.edu/">Department of Statistics</a> at Rutgers University as an Assistant Professor in September 2026.</p>
  <p>My research lies at the intersection of statistics, optimization, and machine learning. I develop statistical and algorithmic foundations for reliable AI, with current work on statistical watermarking for tracing and verifying AI-generated content and on methods for evaluating what large language models know. I also study statistical inference for learning algorithms, federated learning, and online decision-making.</p>

  <div class="v3-social" aria-label="Profile links and updates">
    <a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}">Google Scholar</a>
    <a href="https://github.com/{{ site.github_username }}">GitHub</a>
    {% if site.twitter_username %}<a href="https://x.com/{{ site.twitter_username }}">X</a>{% endif %}
    {% if site.linkedin_username %}<a href="https://www.linkedin.com/in/{{ site.linkedin_username }}">LinkedIn</a>{% endif %}
    <a href="mailto:{{ site.email }}">Email</a>
    <a href="{{ '/assets/pdf/CV_XiangLi.pdf' | relative_url }}">CV</a>
  </div>

  <div class="v3-disclosure-actions" aria-label="Expandable homepage sections">
    <button type="button" data-site-disclosure="featured-papers" aria-controls="featured-papers" aria-expanded="false">Recent / Featured Papers</button>
    <button type="button" data-site-disclosure="news-panel" aria-controls="news-panel" aria-expanded="false">News</button>
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
