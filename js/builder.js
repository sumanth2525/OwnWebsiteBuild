// helpers
const fileToDataURL = file => new Promise(res=>{const r=new FileReader();r.onload=()=>res(r.result);r.readAsDataURL(file);});

const form = document.getElementById('builderForm');
form.addEventListener('submit', async e => {
  e.preventDefault();
  const data = {
    name:    document.getElementById('name').value.trim(),
    role:    document.getElementById('role').value.trim(),
    tagline: document.getElementById('tagline').value.trim(),
    accent:  document.getElementById('accent').value,
    about:   document.getElementById('about').value.trim(),
    socials: {
      email:   document.getElementById('linkEmail').value.trim(),
      linkedin:document.getElementById('linkLinkedIn').value.trim(),
      github:  document.getElementById('linkGitHub').value.trim(),
      twitter: document.getElementById('linkTwitter').value.trim()
    },
    edu:       document.getElementById('education').value.split('\n').filter(Boolean),
    exp:       document.getElementById('experience').value.split('\n').filter(Boolean),
    profilePic:''
  };
  const picFile = document.getElementById('profile').files[0];
  if(picFile) data.profilePic = await fileToDataURL(picFile);

  localStorage.setItem('portfolioData', JSON.stringify(data));
  window.location.href = 'preview.html';
});
