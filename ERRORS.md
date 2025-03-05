# Image Gallery - List of Errors

This document contains a list of all the intentional errors in the Image Gallery application, along with hints for fixing them.

## HTML Errors (index.html)

1. **Missing closing `</body>` tag**
   - Hint: Check the HTML structure at the end of the file

2. **Unclosed `<span>` tag in theme toggle**
   - Hint: Look at the theme-label span in the header

3. **Extra closing `</input>` tag for search input**
   - Hint: Input elements are self-closing and don't need a closing tag

4. **Missing quotes around attribute value**
   - Hint: Check the data-category attribute on the food filter button

5. **Incorrect nesting in gallery**
   - Hint: Look at the closing tags for the last image card

6. **Unclosed `<div>` in the last image card**
   - Hint: The last div in the gallery is missing its closing tag

7. **Incorrect header hierarchy**
   - Hint: There's a div between the header and main sections that doesn't belong

## CSS Errors (styles.css)

1. **Missing colon in box-sizing property**
   - Hint: Check the box-sizing property in the * selector

2. **Missing semicolons**
   - Hint: Look for missing semicolons after background-color and padding declarations

3. **Unclosed parenthesis in grid-template-columns**
   - Hint: Check the gallery grid properties

4. **Incorrect media query syntax**
   - Hint: Examine the media query at the bottom of the file

5. **Missing units on numeric values**
   - Hint: Some padding values might be missing their units (px, rem, etc.)

## JavaScript Errors (app.js)

1. **Incorrect method name `getElementByID`**
   - Hint: JavaScript is case-sensitive, check the DOM method name

2. **Incorrect selector in `querySelector`**
   - Hint: The closeModal element selector is missing a class prefix

3. **Using `==` instead of `===` in comparisons**
   - Hint: Look for loose equality checks that should be strict

4. **Missing quotes around string value**
   - Hint: Check the document.body.style.overflow assignment in openModal function

5. **Missing semicolon at the end of a statement**
   - Hint: Look at the end of the init function's event listener

6. **Logic error in the theme toggle initialization**
   - Hint: The saved theme isn't properly applied on page load

## Logical Errors

1. **Filter functionality doesn't properly update active state**
   - Hint: The active class might not be applied correctly to filter buttons

2. **Theme preference isn't properly saved**
   - Hint: Check how the theme preference is stored and retrieved from localStorage

3. **Modal doesn't close properly**
   - Hint: Ensure the closeModal event listener is properly set up

## Event Handling Issues

1. **Some event listeners might not work**
   - Hint: Check if all DOM elements exist before attaching events

2. **Search functionality has edge cases**
   - Hint: What happens with empty searches or case sensitivity?

## Debugging Approach

When debugging, consider:

1. Use browser developer tools to check for console errors
2. Examine the Elements panel to see how the browser is rendering your HTML
3. Use console.log statements to track JavaScript execution
4. Check for CSS issues with the Styles panel
5. Test each feature systematically
6. Validate your HTML structure for proper nesting
7. Check for missing or extra tags
8. Examine event listeners to ensure they're attached to the right elements
