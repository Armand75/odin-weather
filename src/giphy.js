const giphyAPI = "vJBjl6cH0uR3Cw5F4vUb6PY9bVCfr0UK";


export default async function createGIF(icon){
    const trimmedIcon = icon.trim();
    const sanitizedWord = trimmedIcon.replace(/ /g, '+');
    console.log(sanitizedWord);
    const gifData = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=vJBjl6cH0uR3Cw5F4vUb6PY9bVCfr0UK&q=${sanitizedWord}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    const response = await gifData.json();
    const data = response.data[0].images.original.url;
    console.log(response.data[0].images.original.url); // Log the URL if needed
    
    return data;
}

