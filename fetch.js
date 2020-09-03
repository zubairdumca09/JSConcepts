var url = ''
fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    //do anything with data
  })
  .catch(() => {

  })