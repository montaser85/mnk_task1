# Tic-Tac-Toe-MNK-Prototype
A web-based prototype for a Tic-Tac-Toe (MNK) game that simulates AI agent decisions. Just getting started? Check the [Getting Started](https://github.com/FAM-CS/Tic-Tac-Toe-MNK-Prototype#getting-started) and [Additional Resources](https://github.com/FAM-CS/Tic-Tac-Toe-MNK-Prototype#additional-resources) sections!

## Getting Started
1. Clone the repository
2. Set remote origin
3. Set up node
4. Note that if your local machine does not have svelte installed, use the command: git clone https://github.com/sveltejs/svelte.git
   + this is good if `npm install` fails to install dependencies

**NOTE:** Using Google API for fonts and icons [API](https://fonts.google.com/?icon.style=Rounded&icon.platform=web)

This project uses Node (v>8), run below to install all dependencies:
```
npm install
```

To launch in dev mode run (live server reload):
```
npm run dev
```
To launch in regular mode (compile first!):
```
npm run start
```

### Tutorials for Svelte
+ [YouTube Playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO)
+ [Svelte official tutorial](https://svelte.dev/tutorial/basics)

### Code Guidelines
+ Variable naming convention is PascalCase (e.g., VariableName)
+ Keep element sizes and margins/position dynamic-ish with `em` or `#%` (takes up % of space allowable)
    + `em` is a CSS unit that is based on the current element's font-size (nice for margins)
+ To make the `em` also dynamic on the font itself do something like `font-size: calc(100%+1vw);`
    + `font-size: calc(100% + 1vw);` => `font-size: calc(<baseline>% + <growth>vw);`
    + [Dynamic Font Size](https://stackoverflow.com/questions/14431411/pure-css-to-make-font-size-responsive-based-on-dynamic-amount-of-characters)

## FAQ + VS-Code Tricks
+ `ctrl+/` and click on a line or highlight multiple to comment and comment out lines (`cmd+/`)
+ `alt+up/down` arrow key to move code lines up or down (`option+up/down` arrow key)
+ F2 for smarter renaming of functions and variables (considers scope and multiple files)

## Additional Resources
+ [README formating how-to](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
+ JS code documentation
    + [Coding standards](https://developer.wordpress.org/coding-standards/inline-documentation-standards/javascript/)
    + [Example function header](https://www.codexpedia.com/javascript/javascript-function-and-class-header-documentation/)
+ [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
+ [SVG guide](https://www.aleksandrhovhannisyan.com/blog/svg-tutorial-how-to-code-svg-icons-by-hand/#svg-101-how-to-code-svgs-by-hand)
+ [SVG Positioning](https://www.jotform.com/blog/better-positioning-and-transforming-with-nested-svgs/#:~:text=When%20it%20comes%20to%20the,cy%E2%80%9D%20attributes%20for%20circles)
+ [Google Icon API](https://fonts.google.com/icons?icon.style=Rounded&icon.platform=web)
+ [Github flow branching](https://docs.github.com/en/get-started/quickstart/github-flow)
