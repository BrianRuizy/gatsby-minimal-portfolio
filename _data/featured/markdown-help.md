---
hide: true
template: BlogPost
path: /markdown-help
mockup: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F273%2F780%2Ff05.png&f=1&nofb=1'
thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F273%2F780%2Ff05.png&f=1&nofb=1'
date: 2021-03-26
name: README Tutorial
title: 'This is a tutorial on how to format your blog posts using my template'
category: help
description: HOW TO FORMAT YOUR BLOG POSTS
tags: 
  - help
  - tag 1
  - tag 2
---

## Welome to the markdown syntax tutorial

**WARNING** this page is intended for developers

## Headings

I don't recommend using **h1** aka **"#"** in .markdown file,
because **h1** is already used for the blog title.

## << h2 Heading >>

use this heading style for section title

### << h3 Heading >>

use this heading style for sub section title

## Horizontal Line

- - -
- - -

## Emphasis

Bold: **This is bold text**

Italics: *This is italic text*

Strikethrough: ~~This is striked through text~~

## Blockquotes

> Let’s have a toast for the dou\*hebags.
> Let’s have a toast for the as\*holes.
> Let’s have a toast for the sc\*mbags.
> Everyone of them that I know.

-Kanye West

## Lists

### Unordered

Create a list by starting with `+`, `-`, or `*`

* Sub-lists are made by indenting:  
  * sublist item 1
  * Ac tristique libero volutpat at
  * Facilisis in pretium nisl aliquet
  * Nulla volutpat aliquam velit

### Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

## Links

[link text](http://dev.nodeca.com)

[link with title on hover](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

Personally, I love grabbing images from <htts://unsplash.com>. Go heck them out!

![unsplash image](https://images.unsplash.com/photo-1614829574910-e7e09ca1c8bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80 "unslash image")
<figcaption>This is an image with figure caption</figcaption>

![code](https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80 "unsplash image laptop")

## Code

### Inline code

example `print('hello')`

### Code block + Syntax highlighting

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

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P)

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

## Plugins

The killer feature of `markdown-it` is very effective support of [syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### Emoji [ref](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### Subscript [ref](https://github.com/markdown-it/markdown-it-sub)

* 19^th^

### Superscript [ref](https://github.com/markdown-it/markdown-it-sup)

* H\~2\~O

### Footnotes [ref](https://github.com/markdown-it/markdown-it-footnote)

### Definition lists [ref](https://github.com/markdown-it/markdown-it-deflist)
