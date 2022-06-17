const api_url = "https://jsonplaceholder.typicode.com/posts";
async function getapi(url) {
    const response = await fetch(url);
    const data = await response.json();
    show(data);
}
getapi(api_url);


function show(data) {
    let title = "";
    let id = "";

    for (let r of data) {
        title += r.title + '\n';
        id += r.id + '\n';
    }

    document.getElementById("title-text").innerHTML = title;
    document.getElementById("id-text").innerHTML = id;
}