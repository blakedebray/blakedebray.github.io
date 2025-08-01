---
layout: default
title: Contact Me
---

# Let's Connect

I'm always open to conversations, collaboration opportunities, and exploring ways to make a positive impact. Whether you're looking for coaching, want to discuss a potential project, or simply wish to connect, don't hesitate to reach out.

Feel free to connect with me through the following:

<div class="d-flex justify-content-center align-items-center flex-wrap">
    {% assign sorted_contacts = site.data.contacts | sort: 'order' %}
    {% for contact in sorted_contacts %}
    <a href="{{ contact.link }}" target="_blank" class="mx-3 my-2 text-center contact-link">
        <img src="{{ '/assets/images/icons/' | append: contact.icon-dark | relative_url }}" alt="{{ contact.title }}" class="social-icon mb-2">
        <div>{{ contact.title }}</div>
    </a>
    {% endfor %}
</div>