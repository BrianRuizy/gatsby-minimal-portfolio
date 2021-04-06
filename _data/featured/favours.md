---
template: BlogPost
path: /favours-app
mockup: /assets/favours/logo.png
thumbnail: 'https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
github: https://github.com/favours-io/favours
date: 2020-07-01
name: Favours
title: Developing a local marketplace for small favors.
category: Application
description: 'A location based marketplace for small-jobs, where users can commit to a posted favour in exchange for cash.'
tags: 
  - Django
  - REST API
  - Flutter
---
#

## What is Favours?

My goal is to create a local marketplace application where users post small-jobs (favours) in exchange for cash; currently in **beta**. Favours-io plays out in the domain of collaborative consumption. Need a favour? Or want to make some quick cash committing to a favour? The application aims at bringing local communities together by leveraging local connections you have through existing social networks. Open-source and free.

### Components

![arch](https://raw.githubusercontent.com/favours-io/favours/master/favours/static/assets/favours/Favours%20general%20architecture%20clear.png)

This back-end codebase is found on on a [Linode](https://www.linode.com/) Linux server with SSH and firewalls (UFW) enabled. Running an Apache http server from Django's WSGI, and serving our static files on [AWS S3](https://aws.amazon.com/s3/). Kudos to [LetsEncrypt](https://letsencrypt.org/) for free SSL!
The goal is to then leverage Django's built-in REST API to be consumed by Flutter for native mobile application.