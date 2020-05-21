window.onload=function init(){if(document.querySelector('#pruébelo_gratis')){document.querySelector('#pruébelo_gratis').onclick=function(){var cover_input=document.querySelector('.block_second__form .cover_input').value;if(cover_input.length!=0){localStorage.setItem('email',cover_input);document.location.href="/1step.html";}}}
if(document.querySelector('#pruébelo')){document.querySelector('#pruébelo').onclick=function(){var cover_input=document.querySelector('.block_first__form .cover_input').value;if(cover_input.length!=0){localStorage.setItem('email',cover_input);document.location.href="/1step.html";}
var localValue=localStorage.getItem('email');}}
if(document.querySelector('#inputEmail')){var localValue=localStorage.getItem('email');document.querySelector('#label_email').style.cssText='font-size:13px; padding:0px 0px 18px 16px';document.querySelector('#inputEmail').value=localValue;}
if(document.querySelector('#Estandar')){document.querySelector('#Estandar').onclick=function(){localStorage.setItem('tariff','Estándar');localStorage.setItem('price','EUR 9.99');}}
if(document.querySelector('#Premium')){document.querySelector('#Premium').onclick=function(){localStorage.setItem('tariff','Premium');localStorage.setItem('price','EUR 11.99');}}
if(document.querySelector('#Basico')){document.querySelector('#Basico').onclick=function(){localStorage.setItem('tariff','Básico');localStorage.setItem('price','EUR 7.99');}}
if(document.querySelector('#comenzar')){var tariff=localStorage.getItem('tariff');var price=localStorage.getItem('price');if(tariff==null)
{tariff='Básico';price='EUR 7.99'}
var renderedRow='<p><span>'+tariff+'</span> <br>'+price+' euros al mes después del período de prueba</p>'
document.querySelector('.form_text').insertAdjacentHTML('afterbegin',renderedRow);}};