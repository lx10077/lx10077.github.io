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
  <p>I am currently a postdoctoral researcher at the University of Pennsylvania, working with <a href="https://www.weijie-su.com/">Weijie J. Su</a> and <a href="https://www.med.upenn.edu/apps/faculty/index.php/g20001140/p8939931">Qi Long</a>. I received my B.S. and Ph.D. in Statistics from Peking University, where I was advised by <a href="https://math.pku.edu.cn/teachers/zhzhang/">Zhihua Zhang</a>. I will join the <a href="https://statistics.rutgers.edu/">Department of Statistics</a> at Rutgers University as an Assistant Professor in January 2027.</p>
  <p>My research interests lie at the intersection of statistics, optimization, machine learning, and AI. My current research focuses on the theoretical foundations of generative AI, including text watermarking and LLM evaluation, as well as convergence and statistical inference for stochastic approximation. My earlier work includes federated learning with heterogeneous data and decision-making under uncertainty.</p>
  <p>At a broader level, my work combines statistical thinking with algorithm design to understand the behavior, reliability, and uncertainty of learning systems.</p>

  <p class="v3-student-note"><strong>Prospective students (Fall 2027).</strong> I expect to recruit PhD students at Rutgers for Fall 2027. If you are interested in statistical foundations of AI, machine learning, or optimization, please <a href="mailto:{{ site.email }}">email me</a> with a brief introduction and your research interests.</p>

  <div class="v3-social" aria-label="Profile links and updates">
    <a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}">Google Scholar</a>
    <a href="https://github.com/{{ site.github_username }}">GitHub</a>
    {% if site.twitter_username %}<a href="https://x.com/{{ site.twitter_username }}">X</a>{% endif %}
    {% if site.linkedin_username %}<a href="https://www.linkedin.com/in/{{ site.linkedin_username }}">LinkedIn</a>{% endif %}
    <a href="mailto:{{ site.email }}">Email</a>
    <a href="{{ '/assets/pdf/CV_XiangLi.pdf' | relative_url }}">CV</a>
  </div>

  <div class="v3-home-sections">
    <section id="news-panel" class="v3-disclosure-content v3-home-news" aria-labelledby="news-heading">
      <h2 id="news-heading" class="v3-home-section-heading">News</h2>
      {{ news_content | markdownify }}
    </section>

    {% comment %}
    <section id="featured-papers" class="v3-disclosure-content v3-publications" aria-labelledby="featured-heading">
      <h2 id="featured-heading" class="v3-home-section-heading">Recent / Featured Work</h2>
      {% include selected_papers.html %}
      <a class="v3-disclosure-more" href="{{ '/publications/' | relative_url }}">All publications →</a>
    </section>
    {% endcomment %}
  </div>
</section>
