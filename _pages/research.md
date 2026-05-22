---
layout: page
permalink: /overview/
title: Research         
description: >
  An up-to-date list is available on <a href='https://scholar.google.com/citations?user=-okA4fgAAAAJ&hl=zh-CN'>Google Scholar</a> or the <a href='/research/'>Publications</a> page.
nav: true
nav_order: 1
---

My research interests lie in statistical and algorithmic principles for inference and decision-making in data-driven systems, motivated by new data structures and analysis paradigms arising from modern AI, online learning, and federated systems.

-----

#### **Statistical Foundations of LLMs**

Large language models (LLMs) and other powerful architectures have achieved remarkable success, yet in many domains there remains a need for theoretical guarantees of efficiency, reliability, and safety. I believe that statistical principles and algorithmic design together provide a rigorous foundation for making AI systems interpretable, reliable, and generalizable. Statistics offers principled tools for reasoning about data, dependence structures, and uncertainty, while algorithms translate these principles into practical methods that enable robust and efficient learning.

My current work focuses on statistical watermarking, which provides provable methods for detecting and tracing AI-generated content, as well as on model evaluation and uncertainty quantification for large language models.
Beyond these topics, I am also actively investigating related statistical problems, including synthetic data, reasoning, and fundamental limits.

###### **LLM Watermarking**

- **A Statistical Framework of Watermarks for Large Language Models: Pivot, Detection Efficiency, and Optimal Rules**  
  **X. Li**, F. Ruan, H. Wang, Q. Long, and W. J. Su. *The Annals of Statistics*, 2025.

- **Optimal Detection for Language Watermarks with Pseudorandom Collision**  
  T. T. Cai, **X. Li**, Q. Long, W. J. Su, and G. G. Wen (Alphabetical).  *arXiv preprint arXiv:2510.22007*, 2025.

- **Robust Detection of Watermarks in Large Language Models under Human Edits**  
  **X. Li**, F. Ruan, H. Wang, Q. Long, and W. J. Su. *Journal of the Royal Statistical Society: Series B (Statistical Methodology)*, 2025.

 - **On the Empirical Power of Goodness-of-Fit Tests in Watermark Detection**  
  W. He\*, **X. Li**\*, T. Shang, L. Shen, W. J. Su, and Q. Long. *Advances in Neural Information Processing Systems (NeurIPS)*, 2025 (Spotlight).

- **Debiasing Watermarks for Large Language Models via Maximal Coupling**  
  Y. Xie, **X. Li**, T. Mallick, W. J. Su, and R. Zhang. *Journal of the American Statistical Association*, 2025.

- **Optimal Estimation of Watermark Proportions in Hybrid AI–Human Texts**  
  **X. Li**, G. G. Wen, W. He, J. Wu, Q. Long, and W. J. Su. *arXiv preprint arXiv:2506.22343*, 2025.
  
- **Improving the Trade-off Between Watermark Strength and Speculative Sampling Efficiency for Language Models**  
  W. He\*, **X. Li**\*, L. Shen, W. J. Su, and Q. Long. *International Conference on Learning Representations (ICLR)*, 2026.

- **Selective Disclosure Watermarking for Large Language Models**  
  X. Chen, **X. Li**, Y. Xie, and Q. Long. *International Conference on Machine Learning (ICML)*, 2026. 

###### **AI Content Detection**

- **Steer-to-Detect: Probing Hidden Representations for Detection of LLM-Generated Texts**  
  L. Liang and **X. Li**. *arXiv preprint arXiv:2605.12890*, 2026.

- **Robust Spectral Watermark for Synthetic Tabular Data**  
  Y. Zhao, **X. Li**, P. Song, Q. Long, and W. J. Su.   *Statistical Learning and Data Science*, 2026.

###### **LLM Knowledge**

- **Evaluating the Unseen Capabilities: How Many Theorems Do LLMs Know?**  
  **X. Li**, J. Xin, Q. Long, and W. J. Su. *arXiv preprint arXiv:2506.02058*, 2025.
  
- **UCS: Estimating Unseen Coverage for Improved In-Context Learning**  
  J. Xin, **X. Li**, E. Qiang, W. He, T. Shang, W. J. Su, and Q. Long. *Findings of the Association for Computational Linguistics*, 2026.

-----

#### **Algorithmic Inference**


When adaptive optimization algorithms are used to compute optimal solutions, an important question is how to characterize their convergence behavior and how to equip the resulting solutions with valid and computationally efficient confidence intervals. My research studies algorithmic inference by viewing learning algorithms as stochastic processes and leveraging their convergence dynamics and gradient noise for statistical inference.

A key theme is that carefully designed gradient estimators or algorithms can endow learned solutions with desirable statistical properties (such as valid uncertainty quantification, robustness, privacy, or fairness) without sacrificing computational efficiency. In particular, algorithmic randomness and gradient noise can be explicitly exploited to construct confidence intervals and enable principled statistical inference, offering a convenient pathway for understanding uncertainty in modern learning systems.

My recent work explores these ideas in a range of settings, including local SGD in federated learning, Q-learning in reinforcement learning, and operations research problems such as queueing systems and inventory control.

###### **Federated Learning**

- **On the Convergence of FedAvg on Non-IID Data**  
  **X. Li**\*, K. Huang\*, W. Yang\*, S. Wang, and Z. Zhang. *International Conference on Learning Representations (ICLR)*, 2020 (Oral).

- **Statistical Estimation and Online Inference via Local SGD**  
  **X. Li**, J. Liang, X. Chang, and Z. Zhang. *Conference on Learning Theory (COLT)*, 2022.

- **Mitigating the Privacy–Utility Trade-off in Decentralized Federated Learning via f-Differential Privacy**  
  **X. Li**\*, B. Su\*, C. Wang\*, Q. Long, and W. J. Su. *Advances in Neural Information Processing Systems (NeurIPS)*, 2025 (Spotlight).
  
- **Communication-Efficient Distributed SVD via Local Power Iterations**  
  **X. Li**, S. Wang, K. Chen, and Z. Zhang. *International Conference on Machine Learning (ICML)*, 2021.

- **FedPower: Privacy-Preserving Distributed Eigenspace Estimation**  
  X. Guo, **X. Li**, X. Chang, S. Wang, and Z. Zhang. *Machine Learning*, 2024.

- **A Random Projection Approach to Personalized Federated Learning: Enhancing Communication Efficiency, Robustness, and Fairness**  
  Y. Han, S. Lin, **X. Li**, and Z. Zhang (Alphabetical).  *Journal of Machine Learning Research*, 2024.

- **Personalized Federated Learning towards Communication Efficiency, Robustness, and Fairness**  
  S. Lin\*, Y. Han\*, **X. Li**, and Z. Zhang. *Advances in Neural Information Processing Systems (NeurIPS)*, 2022.


###### **Stochastic Approximation**

- **A Statistical Analysis of Polyak–Ruppert Averaged Q-Learning**  
  **X. Li**, W. Yang, J. Liang, Z. Zhang, and M. I. Jordan. *International Conference on Artificial Intelligence and Statistics (AISTATS)*, 2023.

- **Convergence and Inference of Stream SGD, with Applications to Queueing Systems and Inventory Control**  
  **X. Li**\*, J. Liang\*, X. Chen, and Z. Zhang. *Operations Research*, 2026.

- **Online Statistical Inference for Nonlinear Stochastic Approximation with Markovian Data**  
  **X. Li**, J. Liang, and Z. Zhang. *arXiv preprint arXiv:2302.07690*, 2023.

- **Asymptotic Behaviors of Projected Stochastic Approximation: A Jump Diffusion Perspective**  
  J. Liang, Y. Han, **X. Li**, and Z. Zhang. *Advances in Neural Information Processing Systems (NeurIPS)*, 2022 (Spotlight).

- **Decoupled Functional Central Limit Theorems for Two-Time-Scale Stochastic Approximation**  
  Y. Han, **X. Li**, J. Liang, and Z. Zhang. *arXiv preprint arXiv:2412.17070*, 2024.

- **Finite-Time Decoupled Convergence in Nonlinear Two-Time-Scale Stochastic Approximation**  
  Y. Han, **X. Li**, and Z. Zhang. *Journal of Machine Learning Research*, 2026.

- **Do Subsampled Newton Methods Work for High-Dimensional Data?**  
  **X. Li**, S. Wang, and Z. Zhang. *AAAI Conference on Artificial Intelligence*, 2020.
  
-----

#### **Decision-Making under Uncertainty**

In online decision-making systems, the main objective is to sequentially maximize cumulative reward under uncertainty. In practice, however, feedback is often imperfect, exhibiting heavy-tailed noise, corruption, or even adversarial perturbations. My research studies how to design statistically principled algorithms that achieve robust and near-optimal regret guarantees in such challenging environments. My work focuses on understanding how uncertainty, variability, and contamination in rewards affect learning dynamics, and how variance-aware or robust methods can mitigate these effects without sacrificing efficiency. 

- **Variance-Aware Decision Making with Linear Function Approximation under Heavy-Tailed Rewards**  
  **X. Li** and Q. Sun. *Transactions on Machine Learning Research*, 2024.
  
 - **Corruption-Robust Variance-Aware Algorithms for Generalized Linear Bandits under Heavy-Tailed Rewards**  
  Q. Yu, E. Baek, **X. Li**, and Q. Sun. *Conference on Uncertainty in Artificial Intelligence (UAI)*, 2025.
