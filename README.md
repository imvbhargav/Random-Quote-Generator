<p>Random Quote Generator created using the create-react-app to complete the project in FreeCodeCamp. </p>
<h4>The FreeCodeCamp Project:</h4>
-------------------------------------------------------------------------------------------------------------------------------------------------------------
Build a Random Quote Machine
Note: React 18 has known incompatibilities with the tests for this project (see issue)

Objective: Build an app that is functionally similar to this: https://random-quote-machine.freecodecamp.rocks/.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other front-end frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: I can see a wrapper element with a corresponding id="quote-box".

User Story #2: Within #quote-box, I can see an element with a corresponding id="text".

User Story #3: Within #quote-box, I can see an element with a corresponding id="author".

User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".

User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".

User Story #6: On the first load, my quote machine displays a random quote in the element with id="text".

User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".

User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

Note: Twitter does not allow links to be loaded in an iframe. Try using the target="_blank" or target="_top" attribute on the #tweet-quote element if your tweet won't load. target="_top" will replace the current tab so make sure your work is saved.
--------------------------------------------------------------------------------------------------------------------------------------------------------------
API Used to get Random Quotes:
https://api.quotable.io

```HTTP
GET /quotes/random
```

Get one or more random quotes from the database.  This method supports several filters that can be used to get random quotes with specific properties (ie tags, quote length, etc.)

By default, this methods returns a single random quote. You can specify the number of random quotes to return via the `limit` parameter.  

> ⚠️ This method is equivalent to the `/random` endpoint. The only difference is the response format:
> Instead of retuning a single `Quote` object, this method returns an `Array` of `Quote` objects.


<br>

| param     | type     | Description                                                                                                                                                                                                                                                                                                                          | 
| :-------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | 
| limit     | `Int`    | `default: 1` &nbsp; `min: 1` &nbsp; `max: 50` <br> The number of random quotes to retrieve.                                                                                                                                                                       |
| maxLength | `Int`    | The maximum Length in characters ( can be combined with `minLength` )                                                                                                                                                                                                                                                                |
| minLength | `Int`    | The minimum Length in characters ( can be combined with `maxLength` )                                                                                                                                                                                                                                                                |
| tags      | `String` | Get a random quote with specific tag(s). This takes a list of one or more tag names, separated by a comma (meaning `AND`) or a pipe (meaning `OR`). A comma separated list will match quotes that have **_all_** of the given tags. While a pipe (`\|`) separated list will match quotes that have **any one** of the provided tags. Tag names are **not** case-sensitive. Multi-word tags can be kebab-case ("tag-name") or space separated ("tag name") |
| author    | `String` | Get a random quote by one or more authors. The value can be an author `name` or `slug`. To include quotes by multiple authors, provide a pipe-separated list of author names/slugs.                                                                                                                                                  |
| authorId  | `String` | `deprecated` <br>Same as `author` param, except it uses author `_id` instead of `slug`                                                                                                                                                                                                                                          | 

**Response**

```ts
// An array containing one or more Quotes
Array<{
  _id: string
  // The quotation text
  content: string
  // The full name of the author
  author: string
  // The `slug` of the quote author
  authorSlug: string
  // The length of quote (number of characters)
  length: number
  // An array of tag names for this quote
  tags: string[]
}>
```


**Examples**

Get random quote [try in browser](https://api.quotable.io/quotes/random)

```HTTP
GET /quotes/random
```

Get 5 random quotes [try in browser](https://api.quotable.io/quotes/random?limit=3)

```HTTP
GET /quotes/random?limit=3
```


Random Quote with tags "technology" **`AND`** "famous-quotes" [try in browser](https://api.quotable.io/quotes/random?tags=technology,famous-quotes)

```HTTP
GET /quotes/random?tags=technology,famous-quotes
```

Random Quote with tags "History" **`OR`** "Civil Rights" [try in browser](https://api.quotable.io/quotes/random?tags=history|civil-rights)

```HTTP
GET /quotes/random?tags=history|civil-rights
```

Random Quote with a maximum length of 50 characters [try in browser](https://api.quotable.io/quotes/random?maxLength=50)

```HTTP
GET /quotes/random?maxLength=50
```

Random Quote with a length between 100 and 140 characters [try in browser](https://api.quotable.io/quotes/random?minLength=100&maxLength=140)

```HTTP
GET /quotes/random?minLength=100&maxLength=140
```

<br>
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Deployment Link : https://random-quote-generator-bhargav-jois.vercel.app/
