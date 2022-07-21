const main = document.querySelector("main");

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        altText:
            "Van Gogh looking very stoic in a light blue suit with blue background with swirls",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        altText:
            "Courbet dramatically looking straight at you with hands grabbing hair",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        altText: "Ducreux wearing big hat, holding a cane and pointing at you",
        comment:
            "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
    },
    {
        name: "Frida Kahlo",
        username: "fk1907",
        location: "Mexico City, Mexico",
        avatar: "images/avatar-frida.jpg",
        post: "images/post-frida.jpg",
        altText:
            "Kahlo with a parrot on her shoulder in front of tropical leaves and a butterfly in the background.",
        comment: "check out my newest pet!",
        likes: 308,
    },
    {
        name: "Salvador Dalí",
        username: "sd1904",
        location: "Catalonia, Spain",
        avatar: "images/avatar-dali.jpg",
        post: "images/post-dali.jpg",
        altText: "Closeup of Dali with his signature whiskers",
        comment: "you just show up at my door and want me to help you move?!",
        likes: 54,
    },
    {
        name: "Pablo Picasso",
        username: "pp1881",
        location: "Mougins, France",
        avatar: "images/avatar-picasso.jpeg",
        post: "images/post-picasso.jpg",
        altText: "Strongly angled face painted with broad strokes",
        comment: "how I feel when I meet a lady's chaperone",
        likes: 27,
    },
    {
        name: "Norman Rockwell",
        username: "nr1894",
        location: "Massachusetts, United States",
        avatar: "images/avatar-rockwell.jpg",
        post: "images/post-rockwell.jpg",
        altText:
            "Rockwell in front of easel, leaning over to inspect face in mirrow",
        comment: "too bad a lost my camera! LOL",
        likes: 9,
    },
];

// render posts to page
function renderPosts() {
    let html = "";
    posts.map((i) => {
        html += `
        <article>
                <div class="flex-start">
                    <div class="avatar"><img src="${i.avatar}" class="user-img"></div>
                    <div class="user-details">
                        <p class="user-name">${i.name}</p>
                        <p class="user-location">${i.location}</p>
                    </div>
                </div>
                
                <div class="post">
                    <img src="${i.post}" class="post-img" alt="${i.altText}">
                </div>
                
                <div class="icons-box">
                    <button id="likeBtn"><img src="images/icon-heart.png" class="icon" id="likeIcon"></button>
                    <button id="commentBtn"><img src="images/icon-comment.png" class="icon"></button>
                    <button id="DMBtn"><img src="images/icon-dm.png" class="icon"></button>
                </div>
                
                <p class="likes">${i.likes} likes</p>
                <p class="comments"><span class="user-name">${i.username}</span> ${i.comment}</p>
            </article>`;
    });
    main.innerHTML = html;
}

renderPosts();
