# Share Buttons 
Share buttons without tens of HTTP requests and tracking cookies to spy on your customers.

No dependencies.

Uses backend server for counting the total number of shares.

## Status
This is just a proof of concept. 

Do not use in production yet.

The backend server is not production ready.

## Supported Social Platforms
- Facebook
- Twitter
- LinkedIn

##  How to Use

1. Copy the contents of the css, images and js directories to your project.

2. Add the following to the head 
```html
<link rel="stylesheet" type="text/css" href="css/share-buttons.css" />
```
3. Add the following to the body
```html
        <div id="share-buttons">
            <a id="share-button-facebook" title="Facebook" href="#">
                <img alt="facebook share" src="images/facebook_square.png" />
            </a>
            <a id="share-button-twitter" title="Twitter" href="#">
                <img alt="twitter share" src="images/twitter_square.png" />
            </a>
            <a id="share-button-linkedin" title="LinkedIn" href="#">
                <img alt="linkedin share" src="images/linkedin_square.png" />
            </a>
            <div id="share-count"></div>
        </div>
        <script type="text/javascript" src="js/share-buttons.js"></script>
```