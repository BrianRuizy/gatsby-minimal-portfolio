
<h1 align="center">
  Portfolio Website
</h1>

<p align="center">
 This is the 3rd and latest version of my portfolio <a href="https://brianruizy.com">website</a>.
 Modernized with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby JS</a> and hosted smoothly thanks to <a href="https://www.netlify.com/" target="_blank">Netlify</a>.
 Don't forget to leave a star ⭐!
</p>
<p align="center">
   <a href="https://app.netlify.com/sites/brianruizy/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/72511ec5-84cd-416c-81d8-b16489c1b235/deploy-status" alt="Netlify Status" /> 
   </a>
   <a href="https://gatsbyjs.com" target="_blank">
     <img src="https://img.shields.io/badge/Built%20with-Gatsby-%23614dff?logo=gatsby" />
   </a>
   <a href="https://reactjs.org/" target="_blank">
     <img src="https://img.shields.io/badge/Powered%20by-React-%2361dafb?logo=react" />
   </a>
   <a>
     <img src="https://img.shields.io/github/license/BrianRuizy/portfolio-website?color=red&style=flat" />
   </a>
</p>
</div>

![open-graph-site-preview](https://user-images.githubusercontent.com/23439187/112022247-1ac04080-8b00-11eb-8f0c-2954ac58f221.png)

## Usage

Using this portfolio website and adding your own content is super easy! Simply add your respective project markdown file to the `_data` folder, and Gatsby + GraphQL + Remark does the rest of the work parsing and rendering the markdown file to html.

See [data/readme.md](https://github.com/BrianRuizy/portfolio-website/blob/master/_data/readme.md) for examples on markdown syntax and embedding images or codeblocks. Same applies for site metadata, add your own content to `site-meta-data.json`.

![remark(1)](https://user-images.githubusercontent.com/23439187/111946523-a65ab280-8aa9-11eb-8be0-7a7170b562eb.png)

## Getting Started

Like this project & want to use it for your own project? **My goal is to make this repo as easy as possible to use**. First, fork the repository, then `git clone` to your local system, and type the following commands to get the project running locally fast and easy. See Gatsby's [Development Environment Setup](https://www.gatsbyjs.com/docs/tutorial/part-zero/) docummentation for more details.

### Prerequisites

- Node.JS version 13
  
```bash
nvm install 13
nvm use 13
```

- Gatsby CLI

```bash
npm install -g gatsby-cli
```

### Installing

1. Fork this repo, and git clone to your system.

```bash
git clone https://github.com/your_username/portfolio-website.git
cd portfolio-website
```

2. Install project dependencies.

```bash
npm install
```

3. Run local server.

```bash
gatsby develop

# DONE - Compiled successfully
# You can now view Brian-Ruiz-Portfolio in the browser
  # http://localhost:8000/
```

## Deployment

>Netlify is an excellent option for deploying Gatsby sites. Netlify is a unified platform that automates your code to create performant, easily maintainable sites and web apps.

For this project the fastest and easiest way to get a live site running is using [Netlify](https://netlify.com/).
Visit Gatsby's [Deploying to Netlify](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-netlify/#git-repository-setup) documentation for more details on deploying your website.

## Credits

This site's Web design was made possible thanks to these awesome packages / plugins!

| Function | Package + Link |
| ------------- | ---------- |
| UI Library | [react-bootstrap](https://react-bootstrap.github.io/) |
| Dark Mode | [gatsby-plugin-dark-mode](https://www.gatsbyjs.com/plugins/gatsby-plugin-dark-mode/) |
| Syntax Highlighting | [gatsby-remark-prismjs](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/?=prismjs) |
| UI element(s) | [react-bottom-drawer](https://www.npmjs.com/package/react-bottom-drawer) |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |
| Fonts | [google-fonts](https://fonts.google.com/), [rfs](https://github.com/twbs/rfs) |
  