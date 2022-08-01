## About ViewPress
ViewPress is a static site generator, powered by vue.js and developed by Evan You in 2018. 
VuePress is composed of two parts: a minimalistic static site generator with a Vue-powered theming system, and a default theme optimized for writing technical documentation. It was created to support the documentation needs of Vue's own sub projects.

Each page generated by VuePress has its own pre-rendered static HTML, providing great loading performance and is SEO-friendly. Once the page is loaded, however, Vue takes over the static content and turns it into a full Single-Page Application (SPA). Additional pages are fetched on demand as the user navigates around the site.

A VuePress site is in fact a SPA powered by Vue , Vue Router and webpack . If you've used Vue before, you will notice the familiar development experience when you are writing or developing custom themes (you can even use Vue DevTools to debug your custom theme!).
A VuePress site is in fact a SPA powered by Vue , Vue Router and webpack . If you've used Vue before, you will notice the familiar development experience when you are writing or developing custom themes (you can even use Vue DevTools to debug your custom theme!).

## About Netlify CMS

Netlify CMS is an open source content management system for your Git workflow that enables you to provide editors with a friendly UI and intuitive workflows. You can use it with any static site generator to create faster, more flexible web projects. Content is stored in your Git repository alongside your code for easier versioning, multi-channel publishing, and the option to handle content updates directly in Git.

At its core, Netlify CMS is an open-source React app that acts as a wrapper for the Git workflow, using the GitHub, GitLab, or Bitbucket API. This provides many advantages, including:

    -Fast, web-based UI: With rich-text editing, real-time preview, and drag-and-drop media uploads.
    -Platform agnostic: Works with most static site generators.
    -Easy installation: Add two files to your site and hook up the backend by including those files in your build process or linking to our Content Delivery Network (CDN).
    -Modern authentication: Using GitHub, GitLab, or Bitbucket and JSON web tokens.
    -Flexible content types: Specify an unlimited number of content types with custom fields.
    -Fully extensible: Create custom-styled previews, UI widgets, and editor plugins.


## Netlify CMS vs. Netlify

Netlify.com is a platform you can use to automatically build, deploy, serve, and manage your frontend sites and web apps. It also provides a variety of other features like form processing, serverless functions, and split testing. Not all Netlify sites use Netlify CMS, and not all sites using Netlify CMS are on Netlify.

The folks at Netlify created Netlify CMS to fill a gap in the static site generation pipeline. There were some great proprietary headless CMS options, but no real contenders that were open source and extensible—that could turn into a community-built ecosystem like WordPress or Drupal. For that reason, Netlify CMS is made to be community-driven, and has never been locked to the Netlify platform (despite the name).