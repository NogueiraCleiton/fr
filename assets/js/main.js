/* FR Elétrica & Automação · main.js — menu mobile, cartões de laudos, formulário */
(function(){
  var b=document.querySelector('.menu-toggle'), m=document.getElementById('menu');
  b.addEventListener('click',function(){
    var o=m.classList.toggle('aberto'); b.setAttribute('aria-expanded',o); b.setAttribute('aria-label',o?'Fechar menu':'Abrir menu');
  });
  m.addEventListener('click',function(e){ if(e.target.tagName==='A'){ m.classList.remove('aberto'); b.setAttribute('aria-expanded','false'); } });
  // Cartões de laudos: toque abre/fecha (no computador abre ao passar o mouse)
  document.querySelectorAll('.laudo').forEach(function(c){
    var bt=c.querySelector('.laudo-btn'), fx=c.querySelector('.laudo-fechar');
    function set(o){ c.classList.toggle('aberto',o); bt.setAttribute('aria-expanded',o); if(o){ var a=c.querySelector('.laudo-painel a'); a&&a.focus({preventScroll:true}); } }
    bt.addEventListener('click',function(){ document.querySelectorAll('.laudo.aberto').forEach(function(o){ if(o!==c){o.classList.remove('aberto');o.querySelector('.laudo-btn').setAttribute('aria-expanded','false');} }); set(!c.classList.contains('aberto')); });
    fx.addEventListener('click',function(){ set(false); bt.focus(); });
    c.addEventListener('keydown',function(e){ if(e.key==='Escape'){ set(false); bt.focus(); } });
  });
  // Botões "Solicitar orçamento" já escolhem o serviço no formulário
  document.querySelectorAll('[data-servico]').forEach(function(a){
    a.addEventListener('click',function(){ var s=document.getElementById('f-tipo'); s.value=a.getAttribute('data-servico'); });
  });
  document.getElementById('ano').textContent=new Date().getFullYear();
})();
