---
layout: page
permalink: /research/
title: Research
description: >
  * denotes equal contribution and ** denotes alphabet order.  
  An up-to-date list is available on <a href='https://scholar.google.com/citations?user=-okA4fgAAAAJ&hl=zh-CN'>Google Scholar</a>.
nav: true
nav_order: 1
---

{% bibliography -f papers
   --group_by finished
   --group_order descending
   --sort_by finished
   --order descending
   --template bib
%}
