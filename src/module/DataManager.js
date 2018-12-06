const remoteURL = "http://localhost:5002"

export default Object.create(null, {

  get: {
    value: (resource, id) => {
      return fetch(`${remoteURL}/${resource}/${id}`)
        .then(result => result.json())
    }
  },
  getAll: {
    value: (resource) => {
      return fetch(`${remoteURL}/${resource}`)
        .then(result => result.json())
    }
  },
  add: {
    value: (resource, item) => {
      return fetch(`${remoteURL}/${resource}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
      }) 
        .then(result => result.json())
    }
  },
  searchUsername: {
    value: function(username) {
      return fetch(`${remoteURL}/users?username=${username}`).then(result =>
        result.json()
      )
    }
  },

  searchLogin: {
    value: function(username, password) {
      return fetch(
        `${remoteURL}/users?username=${username}&password=${password}`
      ).then(e => e.json())
    }
  }











})