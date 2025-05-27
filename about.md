---
layout: about
title: About Me
summary: "To positively impact and enable the lives of others (and the world) by supporting them to discover the next best version of themselves."

---

# About Me

I am a Program Manager and Coach with 20 years of experience leading enterprise-wide, global transformations and enabling organizational clarity in fast-paced tech environments. I have spent my career building high-impact programs, coaching leaders, and cultivating resilient, and highly collaborative teams.

Throughout my career, I have had the pleasure of being in many types of roles: 
- Engineer
- Engineering Manager
- Consultant
- Agile Coach
- Teacher
- Program Manager (Learning & Development, Operations, Leadership Development)

If I were to sum up my experiences and career journey, I would focus on discovering my passion in helping individuals, teams, and organizations learn and grow and ultimately making the world a better place for all.

<div class="d-flex justify-content-center align-items-center">
    {% for cert in site.data.certifications %}
        <a href="{{ cert.link }}" class="mx-2">
            <img src="{{ '/assets/images/' | append: cert.image | relative_url }}" alt="{{ cert.title }}" class="certification-image">
        </a>
    {% endfor %}
</div>

## :sparkling_heart: My Values

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {% for value in site.data.values %}
    {% include content-card.html 
        item=value 
    %}
    {% endfor %}
</div>

## :1st_place_medal: Strengths

- **Trust and Safety:**
I have a strong sensor of reading the mood of the "room" and can adapt to build trust with others and create a safe environment for vulnerability and learning. My "trust sensor" can sometimes be overly sensitive, but I find that it serves me well regardless.
- **Empathy:**
I can easily empathize and have compassion for others, feel their predicament and am moved to help (either directly or through coaching so that they can help themselves).
- **Mindfulness:**
I strive to always be self-aware, pausing before reacting, and having a deeper understanding of my emotions and triggers. In situations of conflict, I externally express the trigger, reaction, and what I am learning from each experience in order to create a safe space for others to do so as well.
- **Curiousity:**
I have a strong curiousity and desire to learn, whether it is to read something new, try something new, or to learn a process in order to contribute towards making it better.