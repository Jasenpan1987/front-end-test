# Test

## Excercise 1

**NOTE**: For this excercise the code DOESN'T need to be working, as it relies on mock functions.

Assume the following helper objects are already defined in your environment, `request` and `db` with the following functions:

```
/*
 * Performs a GET request and returns a RequestReturnObject
 */
request.get(url: String): RequestReturnObject
```

```
/*
 * Saves an arbitrary object in a NoSQL database
 */
db.save(obj: Object)
```

```
/*
 * Find all objects whose attibute @attr matches the regular
 * expression @what
 */
db.find(attr: String, what: RegExp)
```

1 - Define a minimal set of properties available in the `RequestReturnObject`. <br>Eg: If we had to define a minimal set of properties in a `carObject` they could look like this:

```
carObject:
	brand: String,
	color: String,
	engineSize: Int,
	drive: '2wd' | '4wd' | 'awd'
```

### My Solution

```js
// Some helper functions
const is = type => val => typeof val === type;
const isString = is("string");
const isNumber = val => is("number")(val) && !isNaN(val);
const ISBN_DIGITS = 13;

function Book({ isbn, title, authorId, pages }) {
  const isIsbnValid = [
    isString,
    x => x.length === ISBN_DIGITS
    // other validations
  ].every(fn => fn(isbn));

  const isTitleValid = [
    isString,
    x => x.length > 1 && x.length < 100
    // other validations
  ].every(fn => fn(title));

  const isAuthorId = [
    isString
    // other validations
  ].every(fn => fn(authorId));

  const isPagesValid = [
    isNum(pages),
    x => x > 5
    // other validations
  ].every(fn => fn(authorId));

  if (isIsbnValid && isTitleValid && isAuthorId && isPagesValid) {
    return Object.create({ isbn, title, authorId, pages });
  }

  throw new Error("Unable to create Book, spec is invalid");
}
```

2 - Write a script/class that given 4 urls, it will send a request to each one of them and store the result in the database.

### My Solution

```js
// promise helper
function allWithFallback(promiseArr, placeHolder) {
  const newPromiseArr = promiseArr.map(p =>
    p.catch(err => {
      if (typeof placeHolder !== "function") {
        return placeHolder;
      }
      return placeHolder(err);
    })
  );
  return Promise.all(newPromiseArr);
}

function requestUrls(urls) {
  const reqPromiseArr = urls.map(request.get);
  return allWithFallback(reqPromiseArr, console.log)
    .then(responses => responses.filter(response => response !== undefined))
    .then(responses => {
      const saveObjArr = responses.map(response => db.save(response));

      allWithFallback(saveObjArr, console.log);
    });
}
```

3 - Now, if a given url is in the `test.com` domain, also print the results to `stdout`.

Eg:

- `http://site1.com/path` - save to db only
- `http://site2.com/path` - save to db only
- `http://test.com/path` - save to db and print

### My Solution

```js
const testDotComPattern = /(\.)?test\.com$/i;

function saveWithPrint(url) {
  return request.get(url).then(response => {
    if (testDotComPattern.test(url)) {
      console.log(response);
    }

    db.save(response);
  });
}
```

4 - Write a function that will find all urls in the database that tried to set a cookie when requested. Eg: back to the `carsObject` example, if we had to find all cars that are not `awd` we could do:

```
function findAllNonAWDCars = {
	return db.find('drive',/(2|4)wd/);
}
```

### My Solution

```js
function findSetCookie() {
  return db.find("setCookie", /^(?!\s*$).+/).then(({ url }) => url);
}
```

## Excercise 2

**NOTE**: For this excercise the code DOES need to be working.

1. Using "Create React App" build a react application and update the UI using (->)Bootstrap/MaterialUI

2. Create a mock api from a static json file using either:

   - GraphQL: `https://github.com/marmelab/json-graphql-server`
   - -> REST: `https://github.com/typicode/json-server`

3. Create a view in react that now displays data from your api

4. Now write a search component that allows a user to search for records in the db (client side is ok)

5. Write a higher order component that does some validation on the search page before loading the data.

```
npm i
npm start
```
