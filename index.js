const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
        {
        name: "Gustav Klimt",
        username: "goldenboy1862",
        location: "Vienna, Austria",
        avatar: "images/avatar-gustav.jpg",
        post: "images/post-gustav.jpg",
        comment: "gold leaf is not a personality, it's a lifestyle",
        likes: 7305

    }, 
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
        {
        name: "Claude Monet",
        username: "monet1840",
        location: "Giverny, France",
        avatar: "images/avatar-monet.jpg",
        post: "images/post-monet.jpg",
        comment: "windy day, hat on, umbrella up. We are not letting the weather ruin this shot",
        likes: 152
    },       
        {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    }
]

let postsEl = document.getElementById("posts")

let postsHtml = ""

for (let i = 0; i < posts.length; i++) {
    let currentPost = posts[i]
    postsHtml += `
        <div class="profile-container">
            <img class="avatar" src="${currentPost.avatar}" />
            <div class="profile-info">
                <h2 class="mtb-0">${currentPost.name}</h2>
                <p class="mtb-0">${currentPost.location}</p>
            </div>
        </div>

        <img class="post-img" src="${currentPost.post}" />

        <div class="bottom-container">  
            <div class="icon-container">
                <button class="icon-btn">
                    <img src="images/icon-heart.png" alt="like" />
                </button>
                <button class="icon-btn">
                    <img src="images/icon-comment.png" alt="comment" />
                </button>
                <button class="icon-btn">
                    <img src="images/icon-dm.png" alt="dm" />
                </button>
            </div>

            <h2 class="likes">${currentPost.likes} likes</h2>

            <div class="comments-container">
                <h3 class="mtb-0">${currentPost.username}</h3>
                <p class="comment mtb-0">${currentPost.comment}</p>
            </div>
        </div>
    `
}

postsEl.innerHTML = postsHtml