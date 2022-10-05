const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    "X-CSRF-Token": csrfToken,
    ...options.headers
  };

  return await fetch(url, options);
}

export const followUser = function(id) {
  return customFetch(`/users/${id}/follow`, {
    method: "POST"
  })
}

export const unfollowUser = function(id) {
  return customFetch(`/users/${id}/follow`, {
    method: "DELETE"
  })
}
