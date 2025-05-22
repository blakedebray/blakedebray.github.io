---
layout: default
title: Resource Library
---

# Resource Library

This is a collection of resources that inspire me. I hope you find them useful.

## Books

{% for book in site.books %}

* {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %} - {{ book.author }}
{% if book.description %} {{ book.description }}{% endif %}
{% endfor %}

## Training Programs

* [Agile People](https://agilepeople.com/)
* [Kansas Leadership Institute: Leadership Coach Intensive](https://kansasleadershipcenter.org/intensives/)

## Mentors and Coaches

* [Susie Coultis](https://www.linkedin.com/in/susie-coultis-3b63a0)
* [Rachel Salzberg](https://www.linkedin.com/in/rachel-salzberg-9b59622/)
* [Barbara Acevedo Visser](https://www.linkedin.com/in/barbara-acevedo-visser/)

## Organizations and Tools

* [Reiss Motivation Profile](https://www.reissmotivationprofile.com/)
* [International Coaching Federation](https://coachingfederation.org/)
* [Center for Nonviolent Communication](https://cnvc.org/)
