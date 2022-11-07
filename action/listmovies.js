let movies = [
    {
        title: "Tinker Bell",
        cover: "https://img.myflixer.to/xxrz/250x400/201/59/bf/59bfee5228057061f27f40b3e1bd9292/59bfee5228057061f27f40b3e1bd9292.jpg",
        link: "/watch/Tinkerbell/tinker-bell-2008.html"
    },
    {
        title: "Tinkerbell - Secret of the Wings",
        cover: "https://img.myflixer.to/xxrz/250x400/201/67/5a/675a19ae564078fbbb380198f32155fa/675a19ae564078fbbb380198f32155fa.jpg",
        link: "/watch/Tinkerbell/tinkerbell-secret-of-the-wings.html"
    }
];

let post = $(".postpage");
for(let i = 0; i < movies.length; i++){
    
    let div = document.createElement("div");
    div.setAttribute("class","item");
    let a = document.createElement("a");
    a.setAttribute("hrer","");
    let img = document.createElement("img");
    img.setAttribute("src","");
    let h1 = document.createElement("h1");
    
    a.href = movies[i].link;
    img.src = movies[i].cover;
    h1.textContent = movies[i].title;
    
    a.appendChild(img);
    a.appendChild(h1);
    div.appendChild(a);
    post.append(div);
    
}
