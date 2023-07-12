## Overview
This document contains guidelines and conventions which were followed during the development of ***accedia-angular-components*** and remain applicable to any future additions to the library. It serves as a reference for contributors of this project and provides structural and style recommendations for any developer aiming to build scalable Angular applications.

It's important to note that this document covers only a subset of the conventions laid out in Angular docs, specifically selected for their relevance to this library. We highly recommend referring to [the official documentation](https://angular.io/guide/styleguide) as it provides comprehensive information and best practices for developing Angular applications of various types and scales.

## Folder structure
Always bear the **LIFT** principle in mind when trying to come up with a sensible folder structure at any level of your application. This means that you should be able to:

 1. **L**ocate code quickly - keep related files close to each other in an intuitive location.
 2. **I**dentify the code at a glance - when looking at a file you should instantly know what it contains and represents.
 3. Try to keep a **F**lat folder structure - avoid organizing folders with multiple levels, as this can complicate the search process. Instead, aim to keep the folder structure as streamlined as possible while maintaining convenience. A good rule of thumb is to consider creating separate folders when the number of files exceeds 7.
 4. **T**ry to be DRY (T-DRY) - stick to the DRY principle, while not sacrificing readability. Avoid redundant wording when naming files or folders, especially when it is obvious or based on convention. If neither, be as explicit as needed when coming up with a name.

## Naming
Consistency is crucial for code maintainability and readability when it comes to naming files, folders, or class members. Having that in mind, the following guidelines should be followed:

**Symbols**
Name all assets meaningfully based on what they represent. Use *PascalCase* for all class names and suffix them with the symbol type (`HomeComponent`, `HoverDirective`, `AppModule`, `DateFormatPipe`, `BlogService`, etc.)

**File names**
A recommended pattern is `feature.type.ts`. 

Use dashes to separate words in the descriptive name (*feature*). Use dots to separate the descriptive name from the *type*. 

Use conventional type names, such as `.service`, `.component`, `.pipe`, `.module`, and `.directive` and avoid abbreviations.

**Test file names**
Use `.spec` suffix when naming unit test specification files. Use `.e2e-spec` suffix for end-to-end test specification files.

**Directives** 
Use _PascalCase_ when naming directive class names and *camelCase* for naming the selectors of directives.

**Pipes**
Use *PascalCase* when naming pipe class names, while the corresponding name string should be named in *camelCase*.

**Component selectors**
Use *kebab-case* for naming the element selectors of components. Use a custom prefix for the component selector, e.g. `acc`.

**Class members**
 - Private and public properties - Descriptive and meaningful names written in _camelCase_ should be used for both private and public properties. Similar to naming other elements, it is advisable to avoid abbreviations unless when used by commonly accepted conventions. When a private field has a corresponding public property with a getter and/or a setter, place an underscore before the private member's name to help differentiate between itself and its public counterpart.
 - Functions - similar to variables, the *camelCase* approach should be used to declare function names. In addition, the name should accurately represent the function's purpose and should preferably start with a verb, e.g. `getName()`. Do name event handler methods with the prefix `on` followed by the event name, e.g. `onSubmit()`. By doing this, we provide an at-a-glance comprehension of the method's responsibility and its connection to DOM events.
 - Event emitters - do name event emitters without the prefix `on`, e.g. `closeButtonClick`.

## Component class
**Member sequence**
Structuring your classes by following a defined member sequence significantly improves code readability and makes it easier to locate specific members.

Properties should be placed up top, followed by method declarations. 

Private members should be placed after public members, preferably alphabetized.

Constructors, being methods, should be placed right below all public and private properties.

Lifecycle hooks should be placed above all other method declarations, except for the constructor, in their order of invocation.

**Small functions**
Try to limit your functions to no more than 75 lines. If a function exceeds this number of lines, consider splitting the logic into separate functions. Adhering to this principle promotes code reuse, improves readability and makes testing easier.

## Appendix
Do take advantage of the Angular CLI and extension tools, such as  [Angular snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2) when creating files and generating boilerplate code. This not only saves development time, but also promotes layout and code styling consistency throughout the entire code base.