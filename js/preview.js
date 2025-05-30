const data = JSON.parse(localStorage.getItem('portfolioData')||'{}');
if(!data.name){ location.href = 'index.html'; }

const root = document.documentElement;
root.style.setProperty('--accent', data.accent||'#7a004b');

const container = document.getElementById('portfolioRoot');
container.innerHTML = `
  <div class="left">
    <img src="${data.profilePic||'https://placehold.co/280x350'}" alt="Profile" class="profile-img">
    <div class="name">${data.name}</div>
    <div class="role">${data.role}</div>
    <div class="socials">
      ${data.socials.email   ? `<a href="${data.socials.email}"><i class="fa-solid fa-envelope"></i></a>` : ''}
      ${data.socials.linkedin? `<a href="${data.socials.linkedin}"><i class="fa-brands fa-linkedin"></i></a>` : ''}
      ${data.socials.github  ? `<a href="${data.socials.github}"><i class="fa-brands fa-github"></i></a>` : ''}
      ${data.socials.twitter ? `<a href="${data.socials.twitter}"><i class="fa-brands fa-x-twitter"></i></a>` : ''}
    </div>
  </div>
  <div class="right">
    <div class="about">
      <h3>ABOUT ME</h3>
      <div class="tagline">${data.tagline}</div>
      <p>${data.about}</p>
    </div>
    <div class="edu">
      <h3>EDUCATION</h3>
      ${data.edu.map(line => renderLine(line,'degree')).join('')}
    </div>
    <div class="exp">
      <h3>EXPERIENCE</h3>
      ${data.exp.map(line => renderLine(line,'position')).join('')}
    </div>
    <a class="button" href="#" onclick="window.print()">Print Résumé</a>
  </div>`;

function renderLine(str,cls){
  const [year, title, org] = str.split('|').map(s=>s.trim());
  return `<div class="${cls}-item"><span class="year">${year||''}</span> <span class="${cls}">${title||''}</span><br><small>${org||''}</small></div>`;
}

const fa = document.createElement('link');
fa.rel='stylesheet';fa.href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';document.head.appendChild(fa);
