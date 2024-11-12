const url = 'https://api.themoviedb.org/3/authentication';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTUwZTRkYzZlZThmZDcxZjg0YzBhNzcyMWU5ZjdjZCIsIm5iZiI6MTczMTQwNTIyOC42MzYzODc2LCJzdWIiOiI2NzMzMjJlOTI5YWE4ZmYyNDRjMGU2YjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.P9-10-VkTf3uFSWGX0oaWsDqqAtUpKs-GLDEGYwxGgo'
  },
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));