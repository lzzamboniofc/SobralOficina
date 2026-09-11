document.getElementById('year').textContent = new Date().getFullYear();
const nav = document.getElementById('mainNav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>40));
const reveal = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));
const sections=[...document.querySelectorAll('header[id], main section[id]')];
const links=[...document.querySelectorAll('.nav-link')];
window.addEventListener('scroll',()=>{let current='inicio';sections.forEach(s=>{if(window.scrollY>=s.offsetTop-180)current=s.id});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))});
document.querySelectorAll('#nav .nav-link').forEach(a=>a.addEventListener('click',()=>{const c=document.getElementById('nav');if(c.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(c).hide()}));
