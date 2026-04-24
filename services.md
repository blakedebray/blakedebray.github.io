---
layout: services
title: Services
description: Professional coaching, facilitation, and consulting services to help individuals, teams, and organizations thrive.
---

# Services

I am a certified coach, experienced facilitator, trainer, and consultant that can help individuals, teams, and organizations thrive in a rapidly changing and complex environment.

<div class="services-container" role="region" aria-label="Available services">
{% assign sorted_services = site.services | sort: 'order' %}
{% for service in sorted_services %}
    {% include service-module.html service=service %}
{% endfor %}
</div>