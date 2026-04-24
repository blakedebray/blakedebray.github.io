---
layout: default
title: Contact Me
description: Get in touch with Blake DeBray for coaching, consulting, or collaboration opportunities.
---

# Let's Connect

I'm always open to conversations, collaboration opportunities, and exploring ways to make a positive impact. Whether you're looking for coaching, want to discuss a potential project, or simply wish to connect, don't hesitate to reach out.

Feel free to connect with me through the following:

<div class="d-flex justify-content-center align-items-center flex-wrap" role="list" aria-label="Contact options">
    {% assign sorted_contacts = site.data.contacts | sort: 'order' %}
    {% for contact in sorted_contacts %}
    <a href="{{ contact.link }}" 
       target="_blank" 
       rel="noopener noreferrer"
       class="mx-3 my-2 text-center contact-link" 
       role="listitem"
       aria-label="Contact me via {{ contact.title }} (opens in new tab)">
        <img src="{{ '/assets/images/icons/' | append: contact.icon-dark | relative_url }}" 
             alt="{{ contact.title }} icon" 
             class="social-icon mb-2"
             loading="lazy">
        <div>{{ contact.title }}</div>
    </a>
    {% endfor %}
</div>