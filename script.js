const quote=document.querySelector(".quote");
const author=document.querySelector(".author");

const api_url="https://api.quotable.io/random";

async function get_quote(url){
    let response=await fetch(url);
    let data=await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}

get_quote(api_url);
