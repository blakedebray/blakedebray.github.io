---
layout: default
title: Resource Library
---

# Resource Library

This is a collection of resources that inspire me. I hope you find them useful.

## Books

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
{% for book in site.books %}
    <div class="col">
        <div class="card h-100">
            {% if book.image %}
            <img src="{{ '/assets/images/' | append: book.image | relative_url }}" 
                 class="card-img-top" 
                 alt="Cover of {{ book.title }}"
                 style="height: 200px; object-fit: contain; padding: 1rem;">
            {% endif %}
            <div class="card-body">
                <h5 class="card-title">{{ book.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ book.author }}</h6>
                {% if book.description %}
                <p class="card-text">{{ book.description }}</p>
                {% endif %}
                {% if book.link %}
                <a href="{{ book.link }}" class="card-link" target="_blank">View on Goodreads</a>
                {% endif %}
            </div>
        </div>
    </div>
{% endfor %}
</div>

## Training Programs

* [Agile People](https://agilepeople.com/)
* [Kansas Leadership Center: Leadership Coach Intensive](https://kansasleadershipcenter.org/intensives/)

## Mentors and Coaches

* [Susie Coultis](https://www.linkedin.com/in/susie-coultis-3b63a0)
* [Rachel Salzberg](https://www.linkedin.com/in/rachel-salzberg-9b59622/)
* [Barbara Acevedo Visser](https://www.linkedin.com/in/barbara-acevedo-visser/)

## Organizations and Tools

* [Reiss Motivation Profile](https://www.reissmotivationprofile.com/)
* [International Coaching Federation](https://coachingfederation.org/)
* [Center for Nonviolent Communication](https://cnvc.org/)

---

<div class="text-muted small mt-4">
Book cover images are sourced from Goodreads and are used for identification purposes only. All book cover images are the property of their respective publishers and are used under fair use for educational and informational purposes.
</div>
