---
layout: site
permalink: /research/online-decision-making/
title: Online Learning and Decision-Making
site_section: research
---

{% capture research_detail %}{% include research/decision-making.md %}{% endcapture %}
<article class="v3-article v3-research-page">
  <header class="v3-page-header v3-research-detail-header">
    <a href="{{ '/research/' | relative_url }}">← Research</a>
    <h1>Online Learning &amp; Decision-Making</h1>
  </header>
  <div class="v3-research-copy">
    {{ research_detail | markdownify }}
  </div>
</article>
