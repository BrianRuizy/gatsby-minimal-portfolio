---
template: BlogPost
path: /favours-app
thumbnail: /assets/favours/logo.png
github: https://github.com/favours-io/favours
date: 2020-07-01
name: Favours app
subtitle: A local marketplace for small-jobs.
category: Application
description: 'A location based marketplace for small-jobs, where users can commit to a posted favour in exchange for cash.'
tags: 
  - Django
  - REST API
  - Flutter
cardsize: 5
display: contents
---
#
## What is Favours?

My goal is to create a local marketplace application where users post small-jobs (favours) in exchange for cash; currently in **beta**. Favours-io plays out in the domain of collaborative consumption. Need a favour? Or want to make some quick cash committing to a favour? The application aims at bringing local communities together by leveraging local connections you have through existing social networks. Open-source and free.

### Components

![arch](https://raw.githubusercontent.com/favours-io/favours/master/favours/static/assets/favours/Favours%20general%20architecture%20clear.png)

This back-end codebase is found on on a [Linode](https://www.linode.com/) Linux server with SSH and firewalls (UFW) enabled. Running an Apache http server from Django's WSGI, and serving our static files on [AWS S3](https://aws.amazon.com/s3/). Kudos to [LetsEncrypt](https://letsencrypt.org/) for free SSL!
The goal is to then leverage Django's built-in REST API to be consumed by Flutter for native mobile application.