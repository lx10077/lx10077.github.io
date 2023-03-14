---
layout: page
permalink: /publications/
title: publications
description: In reversed chronological order | * denotes equal contribution | An up-to-date list is available on <a href='https://scholar.google.com/citations?user=-okA4fgAAAAJ&hl=zh-CN'>Google Scholar</a>.
years: [2023, 2022, 2021, 2020, 2019, thesis]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
