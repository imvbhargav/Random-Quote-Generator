# freeCodeCamp's Front End Development Libraries Certification Project.
## Random Quote Generator
### Test Conditions passed: 12/12
#### Technology Stack
1. You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!
#### Tests
1. I can see a wrapper element with a corresponding id="quote-box".
2. Within #quote-box, I can see an element with corresponding id="text".
3. Within #quote-box, I can see an element with corresponding id="author".
4. Within #quote-box, I can see a clickable element with corresponding id="new-quote".
5. Within #quote-box, I can see a clickable <a> element with corresponding id="tweet-quote".
6. On first load, my quote machine displays a random quote in the element with id="text".
7. On first load, my quote machine displays the random quote's author in the element with id="author".
8. When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.
9. My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.
10. I can tweet the current quote by clicking on the #tweet-quote <a> element. This <a> element should include the "twitter.com/intent/tweet" path in it's href attribute to tweet the current quote.
#### Layout
1. The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

***

### API Used:
    - API Ninjas  -> Quotes API
    - Endpoint    -> https://api.api-ninjas.com/v1/quotes?category=category

***
[Deployed on Vercel](https://rqg-by-imvbhargav.vercel.app)