![Markdown Logo](/img/logo.jpg)
# GreenSmoothies
Author: Jody VanHoose
## About
Green Smoothies is a fictional website I created for a course in the boot camp <a href="http://codekentucky.org/" target="_blank">Code Kentucky</a> in which I'm enrolled. The website is for Green Smoothies, a fictional smoothie store that specializes in healthy options. It was developed with mobile first in mind. 
### Key Features
* Clean simple design
* Mobile first approach
* Responsive desgin
* Random Smoothie Generator
___
## Technologies/Languages
* HTML 5
* CSS 3
* Javascript
___
## Features
### CSS Features
* Responsive navigation menu with hamburger menu at mobile size and expands for desktop size
* Flexbox
* CSS Grid
* Smooth scrolling for internal site navigation
* :nth-of-type element
* Buttons and Links with hover states
* Box shadows
* Transition and Transform properties
* Animations with keyframes

### Media Queries
* 3 media queries were utilized
    * 600px
    * 840px
    * 1100px
### Javascript
* Creating Variables
* Creating an Array
* Creating Objects
* Hamburger menu
  * Created functions to open/close menu
* Random Smoothie generator program
  * Created function to show random smoothie for user when animated blender button is clicked "blending"
    * Created an array and populated with objects containing smoothie items and smoothie prices.
    * Utilized Math.floor() and Math.random() functions to pull random items from array
    * Shows array item (smoothie item & smoothie price) on page below button when button is clicked
* Form validation
  * Utilizing javascript checkValidity() function to validate for first and last name as well as email address
    * Set custom message and styling utilizing setCustomValidity() function
  * Utilized preventDefault() function to stop reload of page when submit button clicked
  * Change submit button to text \'Submitted\' when clicked
