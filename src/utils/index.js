const storeUserToken = function(val) {
  localStorage.setItem("token", val);
}

const removeUserToken = function() {
  localStorage.removeItem("token");
}

export default {
  storeUserToken,
  removeUserToken
};