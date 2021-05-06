(()=>{"use strict";document.getElementsByTagName("body")[0].prepend((()=>{let e=document.createElement("ul");return e.className="nav px-5 pb-5",["Home","Menu","Contact"].forEach((a=>{let t=document.createElement("li");t.className="nav-item";let n=document.createElement("a");n.href="#"+a.toLowerCase(),n.innerHTML=a,n.className="nav-link",t.append(n),e.append(t)})),e})());let e=document.getElementById("content");e.append((()=>{let e=document.createElement("div");e.className="section",e.classList="mx-4 mb-5",e.id="Home";let a=document.createElement("h3");a.className="px-5",a.innerHTML="Home",e.appendChild(a);let t=document.createElement("div"),n=document.createElement("h4");n.innerHTML="'Il Ristorante del Vegetaro'",t.appendChild(n);let i=document.createElement("p");return i.innerHTML="A restaurant, or an eatery, is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast food restaurants and cafeterias, to mid-priced family restaurants, to high-priced luxury establishments. In Western countries, most mid-to high-range restaurants serve alcoholic beverages such as beer and wine. Some restaurants serve all the major meals, such as breakfast, lunch, and dinner. Other restaurants may serve only a single meal or they may server.",t.appendChild(i),e.appendChild(t),e})()),e.append((()=>{let e=document.createElement("div");e.className="section",e.id="menu";let a=document.createElement("h3");a.className="px-5",a.innerHTML="Menu",e.appendChild(a);let t=document.createElement("div");return t.className="row",[{dish:" Vegetarian Spaghetti",price:"$7.99",ingredients:"Salty and savory, the roasting method kills the natural bitterness of asparagus. ",image:"https://i.ibb.co/Zzmc6F3/image.png"},{dish:" Veggie Cola",price:"$1.99",ingredients:"Depending on how spicy you and your family like your dishes, use as little or ",image:"https://i.ibb.co/8zYL4Vt/image.png"},{dish:" Veggie Cola",price:"$1.99",ingredients:"Depending on how spicy you and your family like your dishes, use as little or ",image:"https://i.ibb.co/9ytT8RV/image.png"},{dish:" Veggie Cola",price:"$1.99",ingredients:"Depending on how spicy you and your family like your dishes, use as little or ",image:"https://i.ibb.co/t3b0XHK/image.png"},{dish:" Veggie Cola",price:"$1.99",ingredients:"Depending on how spicy you and your family like your dishes, use as little or ",image:"https://i.ibb.co/t3b0XHK/image.png"},{dish:" Veggie Cola",price:"$1.99",ingredients:"Depending on how spicy you and your family like your dishes, use as little or ",image:"https://i.ibb.co/t3b0XHK/image.png"}].forEach((e=>{let a=document.createElement("div");a.className="col-4",document.createElement("div").className="card mb-3";let n=document.createElement("img");n.className="card-img-bottom",n.src=`${e.image}`;let i=document.createElement("div");i.className="card-body";let s=document.createElement("h4");s.className="card-title",s.append(e.dish);let r=document.createElement("h4");r.className="card-title",r.append(e.price);let d=document.createElement("p");d.className="card-text",d.append(e.ingredients),t.appendChild(a),a.appendChild(i),i.appendChild(s),i.appendChild(r),i.appendChild(d),i.appendChild(n)})),e.appendChild(t),e})())})();