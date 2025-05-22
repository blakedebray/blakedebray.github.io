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
{% if workshop.link %}[View Details]({{ workshop.link }}){% endif %}
{% endfor %}

<br>
## Presentations

{% for presentation in site.presentations %}
### {% if presentation.link %}[{{ presentation.title }}]({{ presentation.link }}){% else %}{{ presentation.title }}{% endif %}
{{ presentation.description }}
{% endfor %}

<br>
## Resources

{% for resource in site.resources %}
### {% if resource.link %}[{{ resource.title }}]({{ resource.link }}){% else %}{{ resource.title }}{% endif %}
{{ resource.description }}
{% endfor %} 