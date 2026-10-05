Many learning algorithms update their estimates using noisy observations. Stochastic approximation provides a general framework for studying these iterative procedures. The analysis becomes especially challenging when observations are dependent, updates interact across multiple time scales, or the update rule creates complex dynamics.

<div class="v3-research-topic" markdown="1">

###### Convergence Analysis

Convergence analysis evaluates how quickly noisy updates approach a target solution and how their errors behave along the way. These questions can be studied from two complementary perspectives: finite-sample bounds quantify the accuracy of individual iterates after a given number of updates, while asymptotic stochastic-process limits describe how errors accumulate and evolve over time.

- **Weak Convergence Rates for Partial-Sum Processes of Nonlinear Stochastic Approximation**<br>
  **X. Li**, J. Liang, and Z. Zhang. *arXiv preprint arXiv:2609.40338*, 2026.
- **Convergence and Inference of Stream SGD, with Applications to Queueing Systems and Inventory Control**<br>
  **X. Li**\*, J. Liang\*, X. Chen, and Z. Zhang. *Operations Research*, 2026.

<p class="v3-research-card-link"><a href="{{ '/publications/' | relative_url }}?topic=stochastic">All stochastic approximation papers →</a></p>

</div>

<div class="v3-research-topic" markdown="1">

###### Statistical Inference

A convergent estimate alone does not tell us how much uncertainty remains. Statistical inference uses the fluctuations along an algorithm’s trajectory to construct confidence intervals and assess uncertainty. The challenge is to obtain valid guarantees while accounting for dependent observations and the (possibly changing) estimates produced by the algorithm.

- **Online Statistical Inference for Nonlinear Stochastic Approximation with Markovian Data**<br>
  **X. Li**, J. Liang, and Z. Zhang. *Technical report, arXiv preprint arXiv:2302.07690*, 2023.

<p class="v3-research-card-link"><a href="{{ '/publications/' | relative_url }}?topic=inference">All statistical inference papers →</a></p>

</div>
