---
layout: page
permalink: /research/
title: Research
description: >
  * denotes equal contribution and ** denotes alphabet order.  
  An up-to-date list is available on <a href='https://scholar.google.com/citations?user=-okA4fgAAAAJ&hl=zh-CN'>Google Scholar</a>.
nav: true
nav_order: 1
years: [2025, 2024, 2023, 2022, 2021, 2020, 2019, thesis]
---

<!-- Toggle buttons -->
<div style="margin-bottom: 20px;">
  <button onclick="showByTopic()">By Topics</button>
  <button onclick="showByYear()">By Years</button>
</div>

<!-- By Topic section -->
<div id="by-topic">
<h2>Large Language Models (LLMs)</h2>
{% bibliography -f papers_LLM --sort_by year --order descending %}

<h2>Statistical Inference</h2>
{% bibliography -f papers_IF --sort_by year --order descending %}

<h2>Stochastic Approximation</h2>
{% bibliography -f papers_OPT --sort_by year --order descending %}

<h2>Federated Learning</h2>
{% bibliography -f papers_FL --sort_by year --order descending %}

<h2>Online Decision Making</h2>
{% bibliography -f papers_RL --sort_by year --order descending %}
</div>

<!-- By Year section -->
<div id="by-year" style="display: none;">

    {%- for y in page.years %}
      <h2 class="year">{{y}}</h2>
      {% bibliography -f papers -q @*[year={{y}}]* %}
    {%- endfor %}

</div>

<!-- Toggle script -->
<script>
function showByTopic() {
  document.getElementById('by-topic').style.display = 'block';
  document.getElementById('by-year').style.display = 'none';
}
function showByYear() {
  document.getElementById('by-topic').style.display = 'none';
  document.getElementById('by-year').style.display = 'block';
}
</script>
