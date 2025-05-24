---
layout: default
title: Portfolio
---

# Portfolio

Here are some workshops, presentations, and other tools I have created over the years that I would like to share.

<br>
## Workshops

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
{% for workshop in site.workshops %}
    {% include content-card.html 
        item=workshop 
        link_text="Session Details" 
    %}
{% endfor %}
</div>

<br>
## Presentations

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
{% assign sorted_presentations = site.presentations | sort: 'order' %}
{% for presentation in sorted_presentations %}
    {% include content-card.html 
        item=presentation 
        link_text="Session Details"
    %}
{% endfor %}
</div>

<br>
## Resources

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
{% for resource in site.resources %}
    {% include content-card.html 
        item=resource 
        link_text="Learn More"
    %}
{% endfor %}
</div>