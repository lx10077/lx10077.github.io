---
layout: page
permalink: /publications/
title: Research
description: >
  * denotes equal contribution and ** denotes alphabet order.  
  An up-to-date list is available on <a href='https://scholar.google.com/citations?user=-okA4fgAAAAJ&hl=zh-CN'>Google Scholar</a>.
nav: false
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

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
