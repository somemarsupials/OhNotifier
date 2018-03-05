# Oh-Notifier

A Node testing framework built to mirror Jasmine syntax, for practice / fun as
part of a Makers' Academy project.

We were challenged to build a JavaScriptfront end without using any frameworks or 
libraries of any kind - even without jQuery, and testing frameworks included. So, 
I put together the following Jasmine clone designed to test certain parts of the 
code.

## Setup

### New project

Simply clone this repo. Place source files in `src` and tests in `spec`. 

OhNotifier expects your tests to match the pattern **`\*Spec.js`**.

Run `./oh-notify` from the top-level of your project to run your tests.

### Existing project

Add oh-notify to your `lib` folder. Move the `oh-notify` shell script
to the top level of your project. You may need to edit the script if

+ your spec files are in a directory with another name
+ your spec files do not match the pattern `\*Spec.js`
+ `runner.js` is not sitting in a directory called `lib`

## Usage

See the Jasmine framework for information on syntax for writing your tests.
