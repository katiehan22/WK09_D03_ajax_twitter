const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    "Content-Type": "application/json",
    "Accept": "application/json",
    ...options.headers
  };

  return await fetch(url, options);
}

export const followUser = function(id) {
  let url = `/users/${id}/follow`
  return customFetch(url), {
    method: "POST"
  }
}

export const unfollowUser = function(id) {
  let url = `/users/${id}/follow`
  return customFetch(url), {
    method: "DELETE"
  }
}
