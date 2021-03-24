# MDN Practice: Number Guessing Game #
Project Goal:

The intent of this project is to incorporate the basic functionality offered in the original MDN example-- and then find places to update the application while continuing to follow the instructions presented in the example

Original MDN Example:

**https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash**


## Example Instructions: ##

*I want you to create a simple guess-the-number type game where a player has ten (10) chances to correctly guess the value of a randomly-generated number that is between 1 and 100. After each guess they will be told if they are right or wrong AND whether their guess was too low or too high; previous guesses will be displayed for reference*

*The game ends once the player makes the correct guess or when they run out of turns. When the game ends, the player should be given the option to start playing again.*

## Project Challenges ##
Top-level perspective about the project
- fullstack dev project that builds the app using VS Code IDE
- uses a CSS layout technique that matches family of projects
- practices use of JS to make DOM changes

## Application Analysis ##
This section offers simple commentary about each component of the application including ways to meet the goals of the project, any open expectations, issues that were encountered, results, and future ideas for improvement
- ### HTML ###
    + uses a familiar <*h1*> header across the top of the page that matches other MDN projects in this series
    + (instructions to) this game should appear in the center of the page as a way to draw the user attention
        * adding **FONT AWESOME** glyphs to the instructions added some flare to the text

    + an input field and submit button are used as initial controls (the first submission starts the game)
    + after the first submission, a second area appears benath the instructions and submission controls
        * it shows the user's initial submission and then logs the submission for later tracking
        * an animated .gif appears beneath the tracker as a way to demonstrate proximity to the right answer
        * text appears beneath the .gif to offer hints and clarification on how the player should guess next

    + when the game is over, another button appears at the bottom of the second area for a chance to restart

- ### CSS ###
    + these are supposed to be simple, single-page projects and should not require hori. + vert. scroll bars
        * setting **{ margin: 0; padding: 0; }** is meant to eliminate browser presets that may add extra pixels
        * uses vh and vw as built-in CSS variables to correctly position a container div with desired margin
        * height of h1 was not set...
            - height of h1 should be set {font-size: ##} as a way of overriding browser defaults

    + player instructions are centered on the page using div.container **{ display: flex; }**
        * justify and align properties get it centered
        * initial box is not centered **{ align: center }**, but instead with margin on top

    + the second area (**div.results**) does not appear until the first guess is submitted
        * when the page loads the div area that contains the result is hidden **{ visibility: hidden; }**

    + three (3) classes exist that contain the background .gifs used to demonstrate proximity
        * **'.colder'**
        * **'.warmer'**
        * **'.bulls-eye'**

- ### JS ###
    + #### Server ####
        * uses an **express()** server
        * why do I need two (2) static paths
    + #### Script ####
        * uses **Math.floor()** and **Math.random()** to generate number
        * 09 x global variables
        * 06 x user functions
        * 07 x string ${literals}
        * 04 x ternary operators

- ### Deployment ###
    + deployed via heroku: https://mdn-practice-js001.herokuapp.com/