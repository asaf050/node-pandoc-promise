# node-pandoc-promise-promise [![npm version](https://badge.fury.io/js/node-pandoc-promise.svg)](https://badge.fury.io/js/node-pandoc-promise) [![SugarHai](https://img.shields.io/badge/farts-sprinkles-E482B5.svg)](http://www.sugarhai.com/images/sprinklepoo-gif.gif)

Run Pandoc from NodeJS. Pandoc installation is required.

* This package is inspired by [`node-pandoc`](https://github.com/eshinn/node-pandoc) by [`eshinn`](https://github.com/eshinn).

## Install

```sh
# If using as a dependancy in your module
npm install node-pandoc-promise --save

# ...or for use in your project
npm install node-pandoc-promise --save-dev
```
*Prior to using node-pandoc-promise, you must [install Pandoc](http://pandoc.org/installing.html) by [John MacFarlane](http://johnmacfarlane.net/).*

## What&rsquo;s Pandoc?

> If you need to convert files from one markup format into another, pandoc is your swiss-army knife. Pandoc can convert documents in [markdown](http://daringfireball.net/projects/markdown/), [reStructuredText](http://docutils.sourceforge.net/docs/ref/rst/introduction.html), [textile](http://redcloth.org/textile), [HTML](http://www.w3.org/TR/html40/), [DocBook](http://www.docbook.org/), [LaTeX](http://www.latex-project.org/), [MediaWiki markup](http://www.mediawiki.org/wiki/Help:Formatting), [TWiki markup](http://twiki.org/cgi-bin/view/TWiki/TextFormattingRules), [OPML](http://dev.opml.org/spec2.html), Emacs [Org-Mode](http://orgmode.org/), [Txt2Tags](http://txt2tags.org/), Microsoft Word [docx](http://www.microsoft.com/interop/openup/openxml/default.aspx), LibreOffice [ODT](http://en.wikipedia.org/wiki/OpenDocument), [EPUB](http://en.wikipedia.org/wiki/EPUB), or [Haddock markup](http://www.haskell.org/haddock/doc/html/ch03s08.html) to  
>
> * HTML formats: XHTML, HTML5, and HTML slide shows using [Slidy](http://www.w3.org/Talks/Tools/Slidy), [reveal.js](http://lab.hakim.se/reveal-js/), [Slideous](http://goessner.net/articles/slideous/), [S5](http://meyerweb.com/eric/tools/s5/), or [DZSlides](http://paulrouget.com/dzslides/)
> * Word processor formats: Microsoft Word [docx](http://www.microsoft.com/interop/openup/openxml/default.aspx), OpenOffice/LibreOffice [ODT](http://en.wikipedia.org/wiki/OpenDocument), [OpenDocument XML](http://opendocument.xml.org/)
> * Ebooks: [EPUB](http://en.wikipedia.org/wiki/EPUB) version 2 or 3, [FictionBook2](http://www.fictionbook.org/index.php/Eng:XML_Schema_Fictionbook_2.1)
> * Documentation formats: [DocBook](http://www.docbook.org/), [GNU TexInfo](http://www.gnu.org/software/texinfo/), [Groff man pages](http://www.gnu.org/software/groff/groff.html), [Haddock markup](http://www.haskell.org/haddock/doc/html/ch03s08.html)
> * Page layout formats: [InDesign ICML](https://www.adobe.com/content/dam/Adobe/en/devnet/indesign/cs55-docs/IDML/idml-specification.pdf)
> * Outline formats: [OPML](http://dev.opml.org/spec2.html)
> * TeX formats: [LaTeX](http://www.latex-project.org/), [ConTeXt](http://www.pragma-ade.nl/), LaTeX Beamer slides
> * [PDF](http://en.wikipedia.org/wiki/Portable_Document_Format) via LaTeX
> * Lightweight markup formats: [Markdown](http://daringfireball.net/projects/markdown/) (including [CommonMark](http://commonmark.org/)), [reStructuredText](http://docutils.sourceforge.net/docs/ref/rst/introduction.html), [AsciiDoc](http://www.methods.co.nz/asciidoc/), [MediaWiki markup](http://www.mediawiki.org/wiki/Help:Formatting), [DokuWiki markup](https://www.dokuwiki.org/wiki:syntax), Emacs [Org-Mode](http://orgmode.org/), [Textile](http://redcloth.org/textile)
> * Custom formats: custom writers can be written in [lua](http://www.lua.org/)

## So Then What&rsquo;s node-pandoc-promise Do?

node-pandoc-promise is simply a bridge between the Pandoc CLI (command-line interface) and NodeJS.

## Usage

**pandoc ( _src_ _args_ [_options_], pandocPath )**

### Parameters

#### src
> The _src_ can be either the location of a file (_./content/file.docx_) or a string of textual input ("_# Hello, Bananas_").

#### args
> The same list of arguments that pandoc accepts on the command line. Arguments are accepted as either a full String or as an Array.

#### pandocPath
> The pandoc binary path, will use "pandoc" as default.

#### options
> The options parameter accepts and passes along a Node Child_Process.Spawn object and is completely optional. View [a _complete_ list of Pandoc options on the Pandoc website](http://pandoc.org/README.html#options) or pull it from the command-line by typing:  
```$ pandoc -h```



### Examples of Using node-pandoc-promise

Converting a word.docx file to a markdown.md

```js
// In EcmaScript 5...

var nodePandoc = require('node-pandoc-promise');
var src, args;

src = './word.docx';

// Arguments can be either a single string:
args = '-f docx -t markdown -o ./markdown.md';
// Or in an array of strings -- careful no spaces are present:
args = ['-f','docx','-t','markdown','-o','markdown.md'];


// Call pandoc
nodePandoc(src, args)
.then(res=>{
  console.log(res);  
}).catch(err=>{
    console.error('Oh No: ',err);  
});
```
```js
// In ES-6 (ES-2015)
import nodePandoc from 'node-pandoc-promise'

let src = './word.docx';

// Arguments can be either a single String or in an Array
let args = '-f docx -t markdown -o ./markdown.md';


// Call pandoc
await nodePandoc(src, args);
```

Converting a word.docx file and returning HTML.

```js
var pandoc = require('node-pandoc-promise'),
    src = './word.docx',
    // Arguments in either a single String or as an Array:
    args = '-f docx -t html5';


// Call pandoc
await pandoc(src, args);
```

This also works the other way &rsquo;round; converting a bit of HTML and saving it as word.docx

```js
var pandoc = require('node-pandoc-promise'),
    src = '<h1>Hello</h1><p>It&rsquo;s bananas</p>',
    // Arguments in either a single String or as an Array:
    args = '-f html -t docx -o word.docx';


// Call pandoc
await pandoc(src, args);
```

Or give-a-string/get-a-string: Markdown -> HTML

```js
var pandoc = require('node-pandoc-promise'),
    src = '# Hello \n\nIt\'s bananas',
    // Arguments in either a single String or as an Array:
    args = '-f markdown -t html';


// Call pandoc
await pandoc(src, args);
```

...and in reverse: HTML -> Markdown

```js
var pandoc = require('node-pandoc-promise'),
    src = '<h1>Hello</h1><p>It&rsquo;s bananas</p>',
    // Arguments in either a single String or as an Array:
    args = '-f html -t markdown --atx-headers';

// NOTE: The --atx-headers flag set above will produce <h1>s as:
// # Hello
//
// ...while omitting --atx-headers flat will result in this style:
// Hello
// =====


// Call pandoc
await pandoc(src, args);
```

## One more thing...

It does URLs too.

```js
var pandoc = require('node-pandoc-promise'),
    src = 'https://www.npmjs.com/package/node-pandoc-promise',
    // Arguments in either a single String or as an Array:
    args = '-f html -t docx -o node-pandoc-promise.docx';


// Call pandoc
await pandoc(src, args);
```


## License

Copyright &copy; Asaf Cohen  
Licensed under the MIT License


