document.querySelector("#content"),document.body.insertBefore(function(){const e=document.createElement("header"),t=document.createElement("h1"),n=document.createElement("button"),o=document.createElement("button");return e.innerHTML="this is a header",t.innerHTML="this is an h1",n.innerHTML="this is a button",o.innerHTML="this is another  button",e.appendChild(t),e.appendChild(n),e.appendChild(o),e}(),document.body.firstChild),document.body.appendChild(function(){const e=document.createElement("footer");return e.innerHTML="this is a footer",e}());