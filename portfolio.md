---
layout: default
title: Portfolio
---

# Portfolio

Here are some workshops, presentations, and other tools I have created over the years that I would like to share.

<br>
## Workshops

{% for workshop in site.workshops %}

### {% if workshop.link %}[{{ workshop.title }}]({{ workshop.link }}){% else %}{{ workshop.title }}{% endif %}
{{ workshop.description }}
{% endfor %}

<br>
## Presentations

{% assign sorted_presentations = site.presentations | sort: 'order' %}
{% for presentation in sorted_presentations %}
### {% if presentation.link %}[{{ presentation.title }}]({{ presentation.link }}){% else %}{{ presentation.title }}{% endif %}
{{ presentation.description }}

_{{ presentation.theme }}_
{% endfor %}

<br>
## Resources

{% for resource in site.resources %}
### {% if resource.link %}[{{ resource.title }}]({{ resource.link }}){% else %}{{ resource.title }}{% endif %}
{{ resource.description }}
{% endfor %} 