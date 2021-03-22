
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

![brianruizy-portfolio-website](https://user-images.githubusercontent.com/23439187/112066205-efefdf80-8b33-11eb-85a1-96c40baf2a8d.png)

## Quick Start

Prerequisites include [Node.JS v13](https://www.gatsbyjs.com/docs/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system) and [Gatsby CLI](https://www.gatsbyjs.com/docs/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system). See Gatsby's [Development Environment Setup](https://www.gatsbyjs.com/docs/tutorial/part-zero/) docummentation for more details or issues with initial project installation.

1. **Install Project**

    Create new site using `gastby new` command. This command will also install the project dependencies.

    ```bash
    gatsby new portfolio-website https://github.com/BrianRuizy/portfolio-website
    ```

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

![remark](https://user-images.githubusercontent.com/23439187/111946523-a65ab280-8aa9-11eb-8be0-7a7170b562eb.png)
See [data/readme.md](https://github.com/BrianRuizy/portfolio-website/blob/master/_data/readme.md) for examples on markdown syntax and embedding images or codeblocks.

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
| UI Library | [react-bootstrap](https://react-bootstrap.github.io/) |
| Dark Mode | [gatsby-plugin-dark-mode](https://www.gatsbyjs.com/plugins/gatsby-plugin-dark-mode/) |
| Syntax Highlighting | [gatsby-remark-prismjs](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/?=prismjs) |
| UI element(s) | [react-bottom-drawer](https://www.npmjs.com/package/react-bottom-drawer) |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |
| Fonts | [google-fonts](https://fonts.google.com/), [rfs](https://github.com/twbs/rfs) |
  
