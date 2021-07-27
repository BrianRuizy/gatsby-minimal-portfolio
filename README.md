<h1 align="center">
  Gatsby JS Minimal Portfolio
</h1>

<p align="center">
Blog style portfolio <a href="https://gatsby-minimal-portfolio.netlify.app/">website</a>,
 created with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and hosted on <a href="https://www.netlify.com/" target="_blank">Netlify</a>.
 </br>Carefully designed to be minimal and content focused. Don't forget to leave a star ⭐!
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
     <img src="https://img.shields.io/github/license/BrianRuizy/gatsby-minimal-portfolio?color=red&style=flat" />
   </a>
</p>
</div>

![dribbble tablet peri](https://user-images.githubusercontent.com/23439187/113445071-bda77300-93ba-11eb-91dc-60478af663f7.png)



## Features

- PWA ready, installable on Android and iOS
- Blog ready, easily add own blog posts
- Toggable dark mode
- Mobile friendly nav-dock, and bottom drawer
- Netlify contact form with seamless [setup](https://docs.netlify.com/forms/setup/)
- SEO ready, option to Add meta description


## Quick Start

Prerequisites include [Node.JS v13](https://www.gatsbyjs.com/docs/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system) and [Gatsby CLI](https://www.gatsbyjs.com/docs/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system). See Gatsby's [Development Environment Setup](https://www.gatsbyjs.com/docs/tutorial/part-zero/) documentation for more details or issues with initial project installation.

```bash
nvm install 13
nvm use 13

npm install -g gatsby-cli
```

1. **Install Project**

    Create new site using `gastby new` command, doing it this way will also install the project dependencies.


    ```bash
    gatsby new gatsby-minimal-portfolio https://github.com/BrianRuizy/gatsby-minimal-portfolio
    ```

    Alternatively, you can manually clone the repository and install dependencies by running ```npm install```.

2. **Start Developing**


    Navigate into your new site’s directory and start it up using `gatsby develop` command.

    ```bash
    gatsby develop

    DONE - Compiled successful
    You can now view Brian-Ruiz-Portfolio in the browser.
    http://localhost:8000/
    ```

## Usage

Using this portfolio website and adding your own content is super simple! Add your respective project markdown-file to the `_data` folder, and Gatsby + GraphQL + Remark does the rest of the work rendering the markdown file to html. Same applies for site metadata, add your own content to `site-meta-data.json`.

![image](https://user-images.githubusercontent.com/23439187/113368846-568baf00-9325-11eb-8212-33f8473e9236.png)
See [_data/readme.md](https://github.com/BrianRuizy/gatsby-minimal-portfolio/blob/master/_data/readme.md) for examples on .md syntax, or [brianruizy.com/markdown-help/](https://brianruizy/markdown-help).

## Deployment

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

Netlify currently has built in support for GitHub. You gain the ability to redeploy the site by pushing the code to the respective repository, with no need to manually rebuild and upload every time you make changes. See Gatsby's [docs](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-netlify/) for more detail.

1. Login to Netlify.com and you will see a `New site from git` button at the top right corner of the screen. Click on it and connect with the same git provider that you used to host your website and authorize Netlify to use your account.

2. Choose your `website repository` and it will take you to deploy settings with the below options.

     - Branch to deploy: You can specify a branch to monitor. When you push to that particular branch, only then will Netlify build and deploy the site. The default is master.
     - Build Command: You can specify the command you want Netlify to run when you push to the above branch. The default is npm run build.

3. Click on the `Deploy site` button and Netlify will start the build and deploy process you have specified. You can go to the `Deploys` tab and see the process unfold in the Deploy log. After a few moments, it will give you the live site URL, e.g., random-name.netlify.com.

## Credits

This site's Web design was made possible thanks to these awesome packages / plugins!

| Function | Package + Link |
| ------------- | ---------- |
| UI Library | [react-bootstrap](https://react-bootstrap.github.io/) / MaterialUI|
| Dark Mode | [gatsby-plugin-dark-mode](https://www.gatsbyjs.com/plugins/gatsby-plugin-dark-mode/) |
| Syntax Highlighting | [gatsby-remark-prismjs](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/?=prismjs) |
| UI element(s) | [react-bottom-drawer](https://www.npmjs.com/package/react-bottom-drawer) |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |
| Fonts | [google-fonts](https://fonts.google.com/), [rfs](https://github.com/twbs/rfs) |
