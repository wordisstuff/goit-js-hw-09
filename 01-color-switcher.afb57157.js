!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),n=null;t.addEventListener("click",(function(d){d.preventDefault(),t.disabled=!0,a.disabled=!1,n=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),a.addEventListener("click",(function(e){e.preventDefault(),t.disabled=!1,a.disabled=!0,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.afb57157.js.map