---
template: BlogPost
path: /favours
thumbnail: /assets/favours.png
github: https://github.com/favours-io/favours
date: 2020-10
name: Favours app
subtitle: A location based app
category: Application
description: 'A location based marketplace for small-jobs, where users can commit to a posted favour in exchange for cash.'
tags: 
  - Django
  - REST API
---
## h1 Heading 8-)

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

- - -

- - -

- - -

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

*This is italic text*

*This is italic text*

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

* Create a list by starting a line with `+`, `-`, or `*`
* Sub-lists are made by indenting 2 spaces:

  * Marker character change forces new list start:

    * Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    * Nulla volutpat aliquam velit
* Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
58. bar

## Code

Inline `code`

Indented code

```
// Some comments
line 1 of code
line 2 of code
line 3 of code
```

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```py

def fibonacci(num):
  num1 = 0
  num2 = 1
  series = 0

  for i in range(num):
    print(series, end=' ');
    num1 = num2;
    num2 = series;
    series = num1 + num2;
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

![unsplash](https://images.unsplash.com/photo-1614829574910-e7e09ca1c8bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80)

![code](https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80)

## Plugins

The killer feature of `markdown-it` is very effective support of [syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

* 19^th^
* H\~2\~O

### [<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++

### [<mark>](https://github.com/markdown-it/markdown-it-mark)

\==Marked text==

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link\[^first].

Footnote 2 link\[^second].

Inline footnote^\[Text of inline footnote] definition.

Duplicated footnote reference\[^second].

\[^first]: Footnote **can have markup**

```
and multiple paragraphs.
```

\[^second]: Footnote text.

### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1 with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

```
    { some code, part of Definition 2 }

Third paragraph of definition 2.
```

*Compact style:*

Term 1   ~ Definition 1

Term 2   \~ Definition 2a
  \~ Definition 2b

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

\*\[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning *here be dragons* :::---
**Advertisement :)**

* **[pica](https://nodeca.github.io/pica/demo/)** - high quality and fast image resize in browser.
* **[babelfish](https://github.com/nodeca/babelfish/)** - developer friendly i18n with plurals support and easy syntax.

You will like those projects!
