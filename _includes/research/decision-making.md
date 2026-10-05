Sequential decision-making studies how to act when information arrives over time and each action affects what can be learned next. A good method must explore uncertain options while using what it has already learned to earn rewards. This becomes harder when the feedback is noisy, heavy-tailed, or corrupted.

<div class="v3-research-topic" markdown="1">

###### Reinforcement Learning

Reinforcement learning studies how an agent learns to make decisions through repeated interaction with an environment. Each action affects both future rewards and what the agent can learn for later decisions. Statistical analysis helps us understand how errors build up during learning and how accurately values and policies can be estimated from limited data.

- **A Statistical Analysis of Polyak-Ruppert Averaged Q-Learning**<br>
  **X. Li**, W. Yang, J. Liang, Z. Zhang, and M. I. Jordan. *AISTATS*, 2023.


<p class="v3-research-card-link"><a href="{{ '/publications/' | relative_url }}?topic=reinforcement,online">All sequential decision-making papers →</a></p>

</div>

<div class="v3-research-topic" markdown="1">

###### Heavy-tailed Rewards

In sequential decision problems, heavy-tailed rewards make extreme observations more common. A few such observations can contaminate the feedback and lower its signal-to-noise ratio, making it harder to learn useful information for future decisions. Methods and theoretical tools for this setting aim to reduce their impact and enable reliable learning under heavy-tailed feedback.

- **Variance-Aware Decision Making with Linear Function Approximation under Heavy-Tailed Rewards**  
  **X. Li** and Q. Sun. *Transactions on Machine Learning Research*, 2024.


<p class="v3-research-card-link"><a href="{{ '/publications/' | relative_url }}?topic=reinforcement,online">All sequential decision-making papers →</a></p>

</div>
