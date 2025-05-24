---
layout: default
title: Resource Library
---

# Resource Library

This is a collection of resources that inspire me. I hope you find them useful.

## Books

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
{% assign sorted_books = site.books | sort: 'order' %}
{% for book in sorted_books %}
    {% include content-card.html 
        item=book 
        link_text="View on Goodreads" 
    %}
{% endfor %}
</div>

## Training Programs

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
{% for training in site.data.training %}
    {% include content-card.html 
        item=training 
        link_text="Visit Website" 
    %}
{% endfor %}
</div>

## Mentors and Coaches

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
{% for mentor in site.data.mentors %}
    {% include content-card.html 
        item=mentor 
        link_text="Visit Website" 
    %}
{% endfor %}
</div>

## Organizations and Tools

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
{% for org in site.data.organizations %}
    {% include content-card.html 
        item=org 
        link_text="Visit Website" 
    %}
{% endfor %}
</div>

---

<div class="text-muted small mt-4">
Book cover images are sourced from Goodreads and are used for identification purposes only. All book cover images are the property of their respective publishers and are used under fair use for educational and informational purposes.
</div>
