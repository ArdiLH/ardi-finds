(function(){
"use strict";
var C=SITE_CONFIG,P=PRODUCTS,$=function(s,r){return(r||document).querySelector(s)};
var state={cat:C.categories[0],q:"",sort:"terbaru"};

// --- Konfigurasi ke halaman ---
document.title=C.title;
$('meta[name=description]').content=C.metaDescription;
$('meta[property="og:title"]').content=C.title;
$('meta[property="og:description"]').content=C.metaDescription;
$("#heroHeadline").textContent=C.heroHeadline;
$("#heroSub").textContent=C.heroSubheadline;
document.querySelectorAll("[data-logo]").forEach(function(a){
  a.innerHTML='<i><svg viewBox="0 0 24 24" width="15" height="15"><circle cx="11" cy="11" r="6" fill="none" stroke="#fff" stroke-width="3"/><path d="M16 16l5 5" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg></i><span>'+C.logoText[0]+' <b>'+C.logoText[1]+'</b></span>';
});
document.querySelectorAll(".brandName").forEach(function(e){e.textContent=C.brandName});
$(".foot__tag").textContent=C.tagline;$(".foot__desc").textContent=C.description;
document.querySelectorAll(".disclosure").forEach(function(e){e.textContent="Beberapa link di website ini merupakan link affiliate. Jika kamu membeli melalui link tersebut, aku bisa mendapatkan komisi tanpa biaya tambahan untuk kamu."});
$("#year").textContent=new Date().getFullYear();
var names={tiktok:"TikTok",instagram:"Instagram",youtube:"YouTube"};
$("#social").innerHTML=Object.keys(C.social).map(function(k){
  return '<a href="'+C.social[k]+'" target="_blank" rel="noopener noreferrer">'+(names[k]||k)+'</a>'}).join("");

// --- Util ---
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function parsePrice(s){var d=String(s).replace(/\./g,"").match(/Rp\s?(\d+)/i);return d?parseInt(d[1],10):null}
function hasPrice(p){return parsePrice(p.price)!==null}
var FALLBACK="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#FFF7ED"/><circle cx="200" cy="180" r="46" fill="none" stroke="#F97316" stroke-width="12"/><path d="M234 214l50 50" stroke="#F97316" stroke-width="12" stroke-linecap="round"/><text x="200" y="330" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#78716C">Gambar belum tersedia</text></svg>');
window.__imgFail=function(img){img.onerror=null;img.src=FALLBACK};

function card(p){
  var price=hasPrice(p)?'<p class="card__price">'+esc(p.price)+'</p>':'<p class="card__price na">'+esc(p.price||"Cek harga di Shopee")+'</p>';
  var badge=p.badge?'<span class="badge'+(p.isDummy?' badge--dummy':'')+'">'+esc(p.badge)+'</span>':'';
  return '<article class="card"><div class="card__img"><img src="'+esc(p.image)+'" alt="'+esc(p.name)+'" loading="lazy" decoding="async" onerror="__imgFail(this)">'+badge+'</div>'+
  '<div class="card__body"><span class="card__cat">'+esc(p.category)+'</span><h3 class="card__name">'+esc(p.name)+'</h3><p class="card__desc">'+esc(p.description)+'</p>'+price+
  '<a class="btn btn--primary" href="'+esc(p.affiliateLink)+'" target="_blank" rel="noopener noreferrer"'+(p.isDummy?' data-dummy="1"':'')+'>Lihat Produk</a></div></article>';
}

// --- Render ---
function renderFeatured(){
  $("#featuredGrid").innerHTML=P.filter(function(p){return p.featured}).map(card).join("");
}
function view(){
  var q=state.q.trim().toLowerCase();
  var list=P.filter(function(p){
    var okC=state.cat===C.categories[0]||p.category===state.cat;
    var okQ=!q||(p.name+" "+p.category+" "+p.description).toLowerCase().indexOf(q)>-1;
    return okC&&okQ});
  list.sort(function(a,b){
    if(state.sort==="nama")return a.name.localeCompare(b.name,"id");
    if(state.sort==="harga"){var x=parsePrice(a.price),y=parsePrice(b.price);
      if(x===null&&y===null)return 0;if(x===null)return 1;if(y===null)return -1;return x-y}
    return new Date(b.dateAdded)-new Date(a.dateAdded)});
  return list;
}
function render(){
  var list=view();
  $("#grid").innerHTML=list.map(card).join("");
  $("#empty").hidden=list.length>0;
  $("#count").textContent=list.length?list.length+" produk":"";
  $("#clearBtn").hidden=!state.q;
  document.querySelectorAll(".chip").forEach(function(c){c.setAttribute("aria-pressed",c.dataset.cat===state.cat)});
}
$("#chips").innerHTML=C.categories.map(function(c){return '<button class="chip" data-cat="'+esc(c)+'" aria-pressed="false">'+esc(c)+'</button>'}).join("");

// --- Event ---
$("#chips").addEventListener("click",function(e){var b=e.target.closest(".chip");if(b){state.cat=b.dataset.cat;render()}});
$("#searchInput").addEventListener("input",function(e){state.q=e.target.value;render()});
$("#clearBtn").addEventListener("click",function(){state.q="";$("#searchInput").value="";$("#searchInput").focus();render()});
$("#sortSelect").addEventListener("change",function(e){state.sort=e.target.value;render()});
$("#resetBtn").addEventListener("click",function(){state.q="";state.cat=C.categories[0];$("#searchInput").value="";render()});
var tt;document.addEventListener("click",function(e){var a=e.target.closest("a[data-dummy]");
  if(a){var t=$("#toast");t.textContent="Ini produk contoh. Ganti link affiliate di products.js.";t.classList.add("on");clearTimeout(tt);tt=setTimeout(function(){t.classList.remove("on")},3500)}});

renderFeatured();render();
})();
