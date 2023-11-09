import { BLOGGER_URI } from "../../db.js";


//console.log( `La variable es: ${import.meta.env.VITE_BLOG_ID} / ${import.meta.env.VITE_API_KEY}` )
export async function getBasicData () {
    //The follow reques is made for make multiple request in the same time
    try {
        const generalData   = await fetch(`${BLOGGER_URI}/${ import.meta.env.VITE_BLOG_ID }/?key=${ import.meta.env.VITE_API_KEY }`);
        const {name, description} = await generalData.json();
        const postsData   = await fetch(`${BLOGGER_URI}/${ import.meta.env.VITE_BLOG_ID }/posts?key=${ import.meta.env.VITE_API_KEY }`);
        const {items, nextPageToken} = await postsData.json();
        return { name, description, items, nextPageToken }
    } catch (error) {
        console.log(error)
    }
}

export async function getHomeProducts () {
    try {
        const res   = await fetch(`${BLOGGER_URI}/${ import.meta.env.VITE_BLOG_ID }/posts?key=${ import.meta.env.VITE_API_KEY }&maxResults=6&fetchImages=true&fields=items(id,url,title,labels,images)`);
        const posts = await res.json();
        return { posts: posts }
    } catch (error) {
        console.log(error)
    }
}