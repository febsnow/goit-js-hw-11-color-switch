(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,n){var e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a={startBtn:document.querySelector("[data-action=start]"),stopBtn:document.querySelector("[data-action=stop]"),body:document.querySelector("body")};var o=e.length-1;function r(){var t,n,r=e[(t=0,n=o,Math.floor(Math.random()*(n-t+1)+t))];a.body.style.backgroundColor=""+r}a.startBtn.addEventListener("click",(function(){a.startBtn.disabled=!0,c=setInterval(r,1e3)}));var c=null;a.stopBtn.addEventListener("click",(function(){a.startBtn.disabled=!1,clearInterval(c)}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.1012766c4791f7ca98b8.js.map