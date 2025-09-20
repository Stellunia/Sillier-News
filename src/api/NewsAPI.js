

export async function apiGetNews() {
    const response = await fetch("https://dummyjson.com/posts");
    const news = await response.json();
    console.log(news)
    return news.posts;
}

export async function apiGetPlaceholderImage() {
    const response = await fetch ("https://dummyjson.com/image/230x150/282828");
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    //console.log("Generated image URL:", imageUrl);

    return imageUrl;
}

export async function apiGetDateForNews() {
    const response = await fetch ("https://dummyjson.com/users?select=birthDate");
    const newsPosted = await response.json();
    console.log(newsPosted)
    return newsPosted;
}

export async function apiGetAuthorForNews() {
  const response = await fetch ("https://dummyjson.com/users?select=firstName,lastName");
  const newsAuthor = await response.json();
  console.log(newsAuthor)
  return newsAuthor;
}