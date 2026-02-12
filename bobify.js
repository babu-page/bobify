 

    const body=document.querySelector("body");

    const container=document.createElement("div");
    body.append(container);

    const para1=document.createElement("p");
    container.appendChild(para1);

    para1.classList.add("red");

    const h33=document.createElement('h3');
    container.appendChild(h33);
    h33.append("blue h3");
    h33.classList.add("blue");

    const childdiv=document.createElement("div");
    container.appendChild(childdiv);
    childdiv.classList.add("childstyle");

    const h11=document.createElement("h1");
    childdiv.appendChild(h11);
    h11.append("I am h1 in a div");

    const pid=document.createElement("p");





    childdiv.appendChild(pid);



    pid.append("nenu kuda bro");
