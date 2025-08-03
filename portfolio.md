---
layout: default
title: Portfolio
description: Workshops, presentations, and resources created by Blake DeBray covering coaching, leadership development, and organizational agility.
---

# Portfolio

Here are some workshops, presentations, and other tools I have created over the years that I would like to share.

<section aria-labelledby="workshops-heading">
<h2 id="workshops-heading">Workshops</h2>

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4" role="group" aria-labelledby="workshops-heading">
{% for workshop in site.workshops %}
    {% include content-card.html 
        item=workshop 
        link_text="Session Details" 
    %}
{% endfor %}
</div>
</section>

<section aria-labelledby="presentations-heading" class="mt-5">
<h2 id="presentations-heading">Presentations</h2>

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4" role="group" aria-labelledby="presentations-heading">
{% assign sorted_presentations = site.data.presentations | sort: 'order' %}
{% for presentation in sorted_presentations %}
    {% include content-card.html 
        item=presentation 
        link_text="Session Details"
    %}
{% endfor %}
</div>
</section>

<section aria-labelledby="resources-heading" class="mt-5">
<h2 id="resources-heading">Resources</h2>

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4" role="group" aria-labelledby="resources-heading">
{% for resource in site.data.resources %}
    {% include content-card.html 
        item=resource 
        link_text="Learn More"
    %}
{% endfor %}
</div>
</section>