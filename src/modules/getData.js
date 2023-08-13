"use strict"

export default getData

function getData() {
  return fetch(
    "https://test-1-1203d-default-rtdb.firebaseio.com/goods.json"
  ).then((res) => res.json())
}
