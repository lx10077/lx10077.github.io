Large language models (LLMs) and other generative models are now used in many settings, but we still need better ways to understand their reliability, interpretability, and safety. Statistics helps us understand what these models learn, how their outputs depend on data and context, and when those outputs can be trusted. Algorithm design turns these insights into methods that work in large-scale generative AI systems.

<div class="v3-research-topic" markdown="1">

###### LLM Watermarking

As language models become widely used, it is increasingly difficult to distinguish their output from human-written text. Watermarking addresses this challenge by embedding a detectable statistical signal during generation. It involves both watermark embedding and detection, with an emphasis on robust detection, preserving text quality, and balancing detection power against other design considerations.

- **textGrain: Entropy-Calibrated Watermarking for Language Model Text**<br>
  **X. Li**, G. G. Wen, X. Chen, Q. Long, A. Jain, F. Joly, M. Lam, Q. Song, and W. J. Su. *Technical report accompanying the OpenAI blog*, 2026. Watermark adopted by OpenAI.
- **A Statistical Framework of Watermarks for Large Language Models: Pivot, Detection Efficiency, and Optimal Rules**  
  **X. Li**, F. Ruan, H. Wang, Q. Long, and W. J. Su. *The Annals of Statistics*, 2025.
- **Robust Detection of Watermarks in Large Language Models under Human Edits**  
  **X. Li**, F. Ruan, H. Wang, Q. Long, and W. J. Su. *Journal of the Royal Statistical Society: Series B*, 2025.


<p class="v3-research-card-link"><a href="{{ '/publications/' | relative_url }}?topic=watermark">All LLM watermarking papers →</a></p>

</div>

<div class="v3-research-topic" markdown="1">

###### LLM Evaluation

A finite collection of prompts and responses reveals only part of what an LLM can do. To draw broader conclusions, an evaluation must account for factors we observe as well as those we do not. Statistical tools can help us understand these complex systems better and clarify the limits of what an evaluation can reveal.

- **Evaluating the Unseen Capabilities: How Many Theorems Do LLMs Know?**  
  **X. Li**, J. Xin, Q. Long, and W. J. Su. *arXiv preprint arXiv:2506.02058*, 2025.


<p class="v3-research-card-link"><a href="{{ '/publications/' | relative_url }}?topic=evaluation">All LLM evaluation papers →</a></p>

</div>

<div class="v3-research-topic" markdown="1">

###### AI Content Detection

As AI-generated content becomes more common across text, images, video, and other modalities, understanding its origin becomes increasingly important. The problem is to find evidence that can distinguish human-created from machine-generated content. A statistical approach asks which signals are informative and how they can support reliable judgments.

- **Steer-to-Detect: Probing Hidden Representations for Detection of LLM-Generated Text**<br>
  L. Liang and **X. Li**. *NeurIPS*, 2026.


<p class="v3-research-card-link"><a href="{{ '/publications/' | relative_url }}?topic=detection">All AI content detection papers →</a></p>

</div>
