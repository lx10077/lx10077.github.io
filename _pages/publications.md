---
layout: site
permalink: /publications/
title: Publications
site_section: publications
---

<article class="v3-article v3-publications">
  <header class="v3-page-header">
    <h1>Publications</h1>
    <p>* denotes equal contribution and ** denotes alphabetical order. See also <a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}">Google Scholar</a>.</p>
  </header>

  {% bibliography -f papers
     --group_by finished
     --group_order descending
     --sort_by finished
     --order descending
     --template bib
  %}
</article>
