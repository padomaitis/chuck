const fetchData = (url) => {
     return fetch(url).then(result => {
        if(!result.ok) {
            return;
        }
      return result.json();
    })
}

export default fetchData;