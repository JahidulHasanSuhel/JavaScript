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

