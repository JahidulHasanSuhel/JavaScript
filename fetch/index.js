//1. what is fetch() api and syntax

// fetch(URL, options)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch(console.error(error));

// 2. using async/await with fetch()
async function fetchData(url) {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// fetchData("http://localhost:3000/posts");

// 3. fetch()- getting resources
async function fetchPosts(url) {
    const API_URL = "http://localhost:3000/posts";

        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
}
fetchPosts();

// - 5. fetch() Usage: Query Params
async function fetchPostsWithComments(){
    const API_URL = "http://localhost:3000/posts";

    //set up query parameters
    const queryParams = {
        _embed: "comments",
    }

    try{
        //build a query string
        const queryString = new URLSearchParams(queryParams).toString();
        const url = `${API_URL}?${queryString}`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error){
        console.log(error);
    }
}
fetchPostsWithComments();

// - 6. fetch() Usage: Creating Resource
async function createPost(postData) {
    const API_URL = "http://localhost:3000/posts";
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const newPostData = {
    id: crypto.randomUUID(),
    title: "How to use fetch() API for POST?",
    views: 0,
};

createPost(newPostData);

// - 8. fetch() Usage: Updating an Entire Resource

async function updatePost(postData) {
    console.log("Replacing a POST Data...");
    const API_URL =
        "http://localhost:3000/posts/a9057951-515e-3da2-9793-af29719d0e33";
    try {
        const response = await fetch(API_URL, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const updatePostData = {
    title: "What is 40 Days of JavaScript?",
    views: 160,
};

const updated = updatePost(updatePostData);
console.log(updated);

// - 9. fetch() Usage: Updating a Part of the Resource

async function updateViews(viewData) {
    console.log("Updating a View with Partial Data...");
    const API_URL = `http://localhost:3000/posts/${viewData.id}`;
    try {
        const response = await fetch(API_URL, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(viewData),
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const updatedPart = updateViews({
    id: "a9057951-515e-4da2-9793-af29719d0e33",
    views: 100,
});
console.log(updatedPart);

// - 10. fetch() Usage: Deleting Resource
async function deletePost(postId) {
    console.log("Deleting Post...");
    const API_URL = `http://localhost:3000/posts/${postId}`;
    try {
        const response = await fetch(API_URL, {
            method: "DELETE",
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const deleted = deletePost("a9057951-515e-4da2-9793-af29719d0e33");

