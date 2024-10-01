// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

function getQueryParams(url) {
  const urlArr = url.split("?");
  const params = urlArr[1].split("&");
  const queryParams = {};

  params.forEach((param) => {
    const queryParam = param.split("=");
    queryParams[queryParam[0]] = queryParam[1];
  });

  return queryParams;
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }
