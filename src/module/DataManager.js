const remoteURL = "http://localhost:5002"

export default Object.create(null, {
  //for registering and logging in
  searchUsername: {
    value: function (username) {
      return fetch(`${remoteURL}/users?username=${username}`).then(result =>
        result.json()
      )
    }
  },
  searchLogin: {
    value: function (username, password) {
      return fetch(
        `${remoteURL}/users?username=${username}&password=${password}`
      ).then(e => e.json())
    }
  },
  //database calls
  get: {
    value: (resource, id) => {
      return fetch(`${remoteURL}/${resource}/${id}`)
        .then(result => result.json())
    }
  },
  getUserData: {
    value: (resource, id) => {
      return fetch(`${remoteURL}/${resource}?userId=${id}`)
        .then(result => result.json())
    }
  },
  getJournalByCoffee: {
    value: (resource, id, coffeeId) => {
      return fetch(`${remoteURL}/${resource}?userId=${id}&coffeeId=${coffeeId}`)
        .then(result => result.json())
    }
  },
  getRecentJournal: {
    value: (resource, id) => {
      return fetch(`${remoteURL}/${resource}?userId=${id}&_sort=brewDate&_order=desc&_limit=4`)
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
  delete: {
    value: (resource, id) => {
      return fetch(`${remoteURL}/${resource}/${id}`, {
        method: "DELETE"
      }).then(result => result.json())
    }
  },
  edit: {
    value: (resource, id, item) => {
      return fetch(`${remoteURL}/${resource}/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(item)
        })
        .then(result => result.json())
    }
  }

})