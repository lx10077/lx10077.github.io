---
layout: site
permalink: /publications/
title: Publications
site_section: publications
topic_filters: true
---

<article class="v3-article v3-publications v3-publications-browser">
  <header class="v3-page-header">
    <h1>Publications</h1>
    <p>Papers are grouped by project completion year, with publication years shown in each entry.</p>
    <p>Some papers appear under more than one topic. Use the filters below, or visit <a href="{{ '/research/' | relative_url }}">Research</a> for an overview.</p>
    <p>* Equal contribution. ** Alphabetical order. See <a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}">Google Scholar</a> for citation information.</p>
  </header>

  <div class="v3-topic-filters" role="group" aria-label="Filter publications by research topic">
    <button type="button" class="v3-topic-toggle" aria-expanded="false" aria-controls="topic-options">Topic: <span class="v3-topic-current">All</span><span aria-hidden="true">▾</span></button>
    <div class="v3-topic-options" id="topic-options">
    <button type="button" data-topic="all" aria-pressed="true">All</button>
    <button type="button" data-topic="watermark" aria-pressed="false">LLM Watermarking</button>
    <button type="button" data-topic="evaluation" aria-pressed="false">LLM Evaluation</button>
    <button type="button" data-topic="detection" aria-pressed="false">AI Content Detection</button>
    <button type="button" data-topic="stochastic" aria-pressed="false">Stochastic Approximation</button>
    <button type="button" data-topic="inference" aria-pressed="false">Statistical Inference</button>
    <button type="button" data-topic="reinforcement,online" aria-pressed="false">Sequential Decision-Making</button>
    <button type="button" data-topic="federated" aria-pressed="false">Federated Learning</button>
    </div>
  </div>
  <div id="filtered-publications">
  {% bibliography -f papers
     --group_by finished
     --group_order descending
     --sort_by finished
     --order descending
     --template bib
  %}
  </div>
</article>
