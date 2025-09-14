fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(json => console.log(json));

fetch('https://dummyjson.com/image/300')