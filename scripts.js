// Small client-side interactions: form handling and demo link
document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('registerForm');
  if(form){
    const msg = document.getElementById('formMessage');
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name')?.trim();
      const email = data.get('email')?.trim();
      const pwd = data.get('password')?.trim();
      if(!name || !email || !pwd){
        msg.textContent = 'Please fill all required fields.';
        msg.style.color = 'crimson';
        return;
      }
      // Fake success — show message
      msg.style.color = 'green';
      msg.textContent = `Thanks ${name}! Registration successful (demo).`;
      form.reset();
    });
    document.getElementById('resetBtn')?.addEventListener('click',()=>{form.reset();document.getElementById('formMessage').textContent='';});
  }
});
