const btn=document.getElementById('themeBtn');
const saved=localStorage.getItem('anita-theme');
if(saved==='light') document.body.classList.add('light');
function updateTheme(){if(!btn)return;const light=document.body.classList.contains('light');btn.innerHTML=light?'<span>☀</span> Mode Terang':'<span>☾</span> Mode Gelap'}
updateTheme();btn&&btn.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('anita-theme',document.body.classList.contains('light')?'light':'dark');updateTheme()});

document.querySelectorAll('a[href]').forEach(a=>{const url=a.getAttribute('href');if(!url||url.startsWith('#')||url.startsWith('http')||url.startsWith('mailto:'))return;a.addEventListener('click',e=>{e.preventDefault();document.body.classList.add('page-out');setTimeout(()=>location.href=url,300)})});
window.addEventListener('pageshow',()=>document.body.classList.remove('page-out'));
