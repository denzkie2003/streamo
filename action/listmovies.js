let movies = [
     {
		title: "Spider Man: Homecoming",
		cover:"https://img.yts.mx/assets/images/movies/spider_man_homecoming_2017/medium-cover.jpg",
		link:"/watch/movies/spider-man-homecoming.html"
	},
    {
		title:"Luck",
		cover:"https://123moviesgoto.com/_sf/239/83970431.jpg",
		link:"/watch/Animation/Luck the movie.html"
	},
    {
		title:"My Sweet Monster",
		cover:"https://img.yts.mx/assets/images/movies/my_sweet_monster_2021/medium-cover.jpg",
		link:"/watch/Animation/My Sweet Monster.html"
	},
    {
    	title: "SAO Progressive Movie, Aria in the Starless Night",
        cover: "https://i.animepahe.com/posters/f385a207f5f4b07f62230c92a46c41942f7922c70fb2b4af69e72db360f78554.jpg",
        link: "/watch/Animation/SAO Progressive Hoshi Naki Yuro no Aira.html",
        id: "5"
    },
    {
    	title: "Gotoubun no Hanayome",
        cover: "https://i.animepahe.com/posters/f055be0bbf97ca2addb5e83c85d455220b035bfdc8d52a45a4ab8eabecb5225b.jpg",
        link: "/watch/Animation/Gotoubun no Hanayome.html",
        id: "4"
    },
    {
	    title: "Tinker Bell and the Legend of the NeverBeast",
        cover: "https://img.myflixer.to/xxrz/250x400/201/c2/49/c2499fd714bc5068fb7f89fb01df1647/c2499fd714bc5068fb7f89fb01df1647.jpg",
        link: "/watch/Tinkerbell/tinkerbell-and-the-legend-of-the-neverbeast.html",
        id: "3"
    },
    {
        title: "Tinker Bell and the Great Fairy Rescue",
        cover: "https://img.myflixer.to/xxrz/250x400/201/70/46/7046bf4eb06b409c57e31403f2879189/7046bf4eb06b409c57e31403f2879189.jpg",
        link: "/watch/Tinkerbell/tinkerbell-and-the-great-fairy-rescue.html",
        id: "2"
    },
    {
        title: "Tinker Bell",
        cover: "https://img.myflixer.to/xxrz/250x400/201/59/bf/59bfee5228057061f27f40b3e1bd9292/59bfee5228057061f27f40b3e1bd9292.jpg",
        link: "/watch/Tinkerbell/tinker-bell-2008.html",
        id: "1"
    },
    {
        title: "Tinker Bell - Secret of the Wings",
        cover: "https://img.myflixer.to/xxrz/250x400/201/67/5a/675a19ae564078fbbb380198f32155fa/675a19ae564078fbbb380198f32155fa.jpg",
        link: "/watch/Tinkerbell/tinkerbell-secret-of-the-wings.html",
        id: "0"
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
