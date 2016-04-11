# typescript_learning

WebSite: https://www.typescriptlang.org/

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. 
This means you all Javascript code is valid Typescript code and you can place it in a TypeScript file (a file with a .ts extension) and use it directly. Hence existing javascript code and frameworks can use typescript without having major modifications.

You can leverage typescript in any kind of Javascript application.
Angular 2 will leverage typescript heavily. 

Why?
JavaScript is difficult to work with complex architectures. Development of application scale .Javascript is hard. It doesn’t have static typing.Typescript is a language for application scale JS development. You have IDES and auto completes to enable coding productivity. This is almost impossible in JavaScript since it is hard to see the intention. Typescript overcomes this shortcomings. It provides a means of annotating code that both human and computer can understand in detail. TypeScript is fully compatible with future versions of JavaScript, but with some added features that make it stand out.  Typescript makes complex coding easier, robust and manageable.
 You can use use optional static typing, modules, interfaces and classes (not available in JS)  to write your code and once the code is compiled, the end result is javascript code 

Installation:
Download Sublime Text 3 from http://www.sublimetext.com/3.  
Download Node.js. http://nodejs.org/download/ 
Install typescript. Open a terminal on your MAC and type
           npm install -g typescript

 -g installs typescript globally so that it can be accessed from any process, example Sublime Text.
Sublime Text plugin for Typescript
    https://github.com/Microsoft/TypeScript-Sublime-Plugin

On MAC
cd ~/"Library/Application Support/Sublime Text 3/Packages"
git clone --depth 1 https://github.com/Microsoft/TypeScript-Sublime-Plugin.git TypeScript

On Windows
cd "%APPDATA%\Sublime Text 3\Packages"
git clone --depth 1 https://github.com/Microsoft/TypeScript-Sublime-Plugin.git TypeScript

Compilation:
TypeScript file can be compiled to JavaScript using TypeScript’s tsc.exe compiler tool.

Example:
echo “console.log(‘This is a test’)” >  test.ts >> Create a typescript file with .ts
tsc test.ts                                                      >> Compile
node test.js                                                  >> JS created!


Watch typescript so that it will automatically compile when the source changes
tsc *.ts --watch


Playground: http://www.typescriptlang.org/play/ :  Here you will be able to type code, have auto completion and directly see the emitted JavaScript.

The test.ts file should be used to understand the various syntax.
Uncomment parts of it to undertsand
