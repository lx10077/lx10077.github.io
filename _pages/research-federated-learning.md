---
layout: site
permalink: /research/federated-learning/
title: Federated and Distributed Learning
site_section: research
---

{% capture research_detail %}{% include research/federated-learning.md %}{% endcapture %}
<article class="v3-article v3-research-page">
  <header class="v3-page-header v3-research-detail-header">
    <a href="{{ '/research/' | relative_url }}">← Research</a>
    <h1>Federated &amp; Distributed Learning</h1>
  </header>
  <div class="v3-research-copy">
    {{ research_detail | markdownify }}
  </div>
</article>
