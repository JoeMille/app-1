
# *Headset Meditation App*

![Screenshot](Head-Space-title.png)



## *Description*
The following project is a false page for a simple meditation application. 
Using Javascript, HTML and CSS code for all three pages, as well as Jquery and Google Maps API software. 
The purpose of the Headset application is to showcase the understanding of fundamental JS HTML and CSS principles.
By using lessons from Code Institute, Giraffe Academy, W3 Schools and a host of online rescources. 
This project comes after a staggered halt to education for nearly a year, meaning that the majority of the HTML and CSS code 
fundamentals gathered during the creation of Milestone Project 1 had been largely forgotten. The goal of this project although
designed to embody the principles of design taught in Project 1, was more focused towards writing leggible and functioning custom Javascript code which when deployed, behaves as expected. The initial and logical process to provide a meditation aid would be to provide audio content during a timer function, though this application provides visual stimuli generated from a message array to better showcase use of Javascript.

## *User Stories*
This project acts as a simple meditation timer which when activated provides a comforting background sound and a visual aid
to concentrate on in the form of messages displayed to the user. The goals of this free online tool are as listed from the 
perspective of a user aiming to find a short window of time in the day to center themselves and meditate:
* Replacing the need for a paid meditation app, these are costly and provide the same basic service.
* Find content on each section of the site easy to navigate and quick to understand.
* Be able to locate the fictional owners easily when viewing the contact page.

From the perspective of the developer the main objectives of Head Set meditation application are:
* Primarily, to showcase a product which relies on custom Javascript for its main function. 
* Executes its purpose as intended. 
* Is enjoyable and similarly easy to navigate across all devices.
* Allow users a service free of charge for a function that could be beneficial when beginning their       meditative journey.

## *Design Choices*
The main purpose of the design is to highlight a relaxed aesthetic and provide a comfortable digital environment 
to take up to five minutes from the users day to meditate. With the use of varying properties and functions, demonstrating
a fundamental understanding of Javascript concepts as well as HTML and CSS literacy. Using Google Maps API, Jquery, Bootstrap and Fontawesome.
![Screenshot](timer-screenshot.png)

The first designs of Head Set meditation app although contrasting to the final deployment are similar in purpose and the final build hopefully embodies all aspects of the design that were most important during planning. 
![Screenshot](first-wire-frame.png)

All functioning parts of the site have been built with Javascript, and the project began based entirely around the first example function.
![Screenshot](first-function.png)

## *Testing*

![Screenshot](first-test.png)

Testing JavaScript using Google Developer Tools provides new developers with a powerful set of debugging and profiling tools to inspect code execution, track variable values, and analyze performance bottlenecks. This allows identification and resolution of issues. As expected, the first test was a fail due to an AdBlock software preventing the Javascript file from running.

![Screenshot](lighthouse-fail.png)
These testing procedures threw up more and more issues as the project became larger. From errors related to code placement within the JS file to finding sections of former code that no longer worked or were in use which ultimately led to lower performance values and page-loading.

![Screenshot](NPM-testing.png)

Once Javascript was working as expected (or near enough working) it was time to begin testing with Jest. The first test was carried out on a simple maths function. 

![Screenshot](gmaps-java-error.png)
Moving onto more thorough testing of functions, Google Maps which appears shortly on the Contacts page refused to open. This error took the longest to fix, as after moving across to Visual Studio Code, when previewing the page with an uncleared cache, Google Maps would vanish despite being properly placed. 

![Screenshot](jest-java-error.png)
Before Javascript could run properly, all syntax errors preventing code to execute were dealt with leaving the front-end of the meditation application working in order. 

## Testing Further...

![Screenshot](js-lint-screenshot.png)
As well as Developer Tools, Jest, and online code testing tools all code for the Javascript was pushed through the incredibly helpful web-based code tester JS Lint. Once mostly all syntax errors and functions that were impeding other functions from working due to placement had been fixed, all files of the project were pushed through code beautifier tools. By further using Jest to run mock tests on code within my Javascript file, functions could be tested externally and one by one to make sure they worked in succession. 

![Screenshot](mock-tests.png)

### Environment Testing 
Environment testing involved assessing performance across varied  setups. This included testing the app on various operating systems, browsers, and devices such as smartphones, tablets, and desktop computers. Resorting to developer tools to help with media query placement and sizing issues. Compatibility issues related to different screen sizes, resolutions, and interaction methods. Additionally, testing the app's audio playback and synchronization with javascript elements on the page, as well as evaluating its responsiveness under different network conditions, makes for a seamless meditation experience for users across different environments.

## Deployment 

Automated and manual deployment are two imperative tools for releasing and updating digital projects. The cycle of which begins with the manual deployment of written code to a repository allowing developers and testers to carefully review and test each stage of development to the production environment. Manual deployment allows for human validation at every stage of the process and fine-tuning/adjustment of configurations as needed. Manual deployment for the Meditation App began with a smoke test of the applications most basic iteration. Once the basic code for the timing mechanism had been written, a test page was deployed and the code was altered continuously until it performed its core function.

Automated deployment ensures the application performs across all platforms and can be implemented by writing small individual tests for each function and component of said application. A unit test was created to ensure the logic within the meditation timer functioned correctly, and that it accurately counts down and triggers the correct events at the correct intervals. Another example would be the API testing method, which makes sure an application is communicating effectively and retrieving valid data such as global positioning within a Google Maps feature. By utilising these tests throughout the development process, devlopers can streamline their testing processes and highlight potential errors and issues during development. 

This project is available to be cloned and ammended as well as improved upon.

To clone this project you will need:

* Github and a Github account.
* A working internet connection.

To ammend or add to, follow these simple steps:

* Sign into your Gitpod account
* Navigate to the XXXXXXX repository.
* Beneath the repository name, click on the "Clone" option, which will open a new Gitpod workspace.
* Inside your terminal, type "git clone", add the Coastal Chef URL and Press Enter.
 
## Summary

The hope and design behind the Head Set meditation application is not just to provide the user with a simple, easy-to-operate meditation timer; the main intent is to provide working understanding of the HTML CSS and mainly, Javascript, code used throughout. After much trial and failure, and tremendous amounts of repeating lessons and tutorials the Head Set meditation app functions and views as intended across all computing set ups and hopefully demonstrates an understanding of the Javascript concepts it embodies.  
![Screenshot](-timer-function.png)

with the final product, hopefully quite far from where the project began. 

![Screenshot](final-screenshot.png)

Thank you for taking the time to view this ReadMe.

## Author


Joe Miller  

ChefJoeMiller1992@gmail.com

## Acknowledgments

* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [W3 Schools](https://www.w3schools.com/css)
* [Code Institute](https://learn.codeinstitute.net/)
* [Stack Overflow](https://stackoverflow.com/questions)
* [Free Code Camp](https://www.freecodecamp.org/)

## Libraries used
* Jquery
* Jest (Testing) 
* Bootstrap
* Font-Awesome
* Google Fonts
* Google Maps API