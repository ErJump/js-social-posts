const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "is_liked" : true,
        "created": "2022-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "is_liked" : false,
        "created": "2022-06-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "is_liked" : true,
        "created": "2022-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "is_liked" : false,
        "created": "2022-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Stefano Tortellini",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
         "is_liked" : false,
        "created": "2022-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=536",
        "author": {
            "name": "Luigia Micca",
            "image": "https://unsplash.it/300/300?image=33"
        },
        "likes": 95,
         "is_liked" : true,
        "created": "2022-02-02"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=531",
        "author": {
            "name": "Grace Hunterdan",
            "image": "https://unsplash.it/300/300?image=59"
        },
        "likes": 95,
         "is_liked" : false,
        "created": "2022-02-01"
    },
    {
        "id": 8,
        "content": "Ao! Che nun ce lo sai che io so l'unico post scritto in romanesco de tutta sta lista autogenerata! Dico e scrivo nummeri da quanno so nato, ce manca pure che me faccio un post autogennerato!",
        "media": "https://unsplash.it/600/400?image=554",
        "author": {
            "name": "Mario Di Nio",
            "image": "null"
        },
        "likes": 95,
         "is_liked" : true,
        "created": "2021-12-11"
    }
];

const postContainer = document.getElementById('container');

//for each per scorrere nell'array e popolare il DOM
posts.forEach(post => {
    const { id, content, media, author, likes, created } = post;
    const postElement = document.createElement('div');
    let date = created; 
    //formatto la data
    date = reverseDate(date);
    
    
    //riempio l'inner html dell'elemento con il template del post
    postElement.innerHTML = `<div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${author.image}" alt="">
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${author.name}</div>
                    <div class="post-meta__time">${date}</div>
                </div>
            </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button-${id}" href="javascript:;" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                </div>
            </div>
        </div>
    </div>`;
    
    
    //aggiungo l'elemento al container
    postContainer.append(postElement);
    
    //prendo il contenitore padre del profile pic
    const profilePicContainer = postElement.getElementsByClassName('post-meta__icon');
    //prendo l'immagine profilo
    const originalProfilePic = postElement.getElementsByClassName('profile-pic');

    //se l'immagine dell'author.image è null creo un div e gli assegno la classe "profile-pic-default"
    if (author.image == null || author.image == 'null') {
        //rimuovo l'immagine profilo
        originalProfilePic[0].remove();
        //creo un nuovo div a cui assegno la classe e inserisco le iniziali
        const defaultProfilePic = document.createElement('div');
        defaultProfilePic.classList.add('profile-pic-default');
        defaultProfilePic.innerHTML = getInitials(author.name);
        profilePicContainer[0].append(defaultProfilePic);
    }

    //Prendo il bottone del like
    const likeButton = document.querySelector(`.like-button.js-like-button-${id}`);

    //prendo il contatore dei like 
    let likeCounter = document.getElementById(`like-counter-${id}`).innerHTML;
    
    //se is_like è true allora il bottone è colorato
    if (post.is_liked === true){
        likeButton.classList.add('like-button--liked');
    };
    
    //aggiungo l'evento di click al bottone
    likeButton.addEventListener('click', ()=>{
        //se si clicka sul bottone già liked allora si rimuove il like
        if (post.is_liked === true){
            likeButton.classList.remove('like-button--liked');
            likeCounter--;
        } else { //altrimenti si aggiunge il like
            likeButton.classList.add('like-button--liked'); 
            likeCounter++;
        }
        post.is_liked = !post.is_liked;
        document.getElementById(`like-counter-${id}`).innerHTML = likeCounter;
    })

    console.log(getInitials(author.name));
});

//Bonus 2 - formatta la data
function reverseDate(date) {
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    return `${day}/${month}/${year}`;
}

//funzione che restituisce le iniziali
function getInitials(completeName) {
    let nameSurname = completeName.split(' ');
    let initials = '';
    nameSurname.forEach(element => {
        initials += element[0]
    });
    return initials
}

