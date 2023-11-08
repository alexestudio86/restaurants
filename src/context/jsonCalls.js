export async function getHomeProducts () {
    try {
        const res   = await fetch('./src/assets/data/posts.json');
        const posts = await res.json();
        return { posts: posts }
    } catch (error) {
        console.log(error)
    }
}