---
template: BlogPost
path: /bumpit
mockup: /assets/bumpit/bumpit.png
thumbnail: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
github: https://github.com/BrianRuizy/2019-Microsoft-IoT-hackathon
date: 2019-12
name: Bump.IT
title: This app got us first place at a Microsoft Azure Hackathon.
category: Microsoft Hackathon
description: '1st place app idea would leverage latest of Azure and ML to support a $6.4 billion infrastructure issue.'
tags:
  - Azure
  - Jupyter
---
## The Challenge

The main objective of the competition revolved around developing innovative solutions for improving the infrastructure of cities. The [Smart Infrastructure Hackathon](https://www.eventbrite.com/e/smart-infrastructure-hackathon-tickets-76918610635#) was hosted at The Cannon, in partnership with Microsoft. Thankfully, we had a team of really bright cloud architects for guidance.

After brainstorming and juggling several ideas we settled with the issue of road potholes. We found that potholes cost American drivers $6.4 billion dollars per year, that is in both repair and insurance cost's. Additionally, the average price to repair a pothole including labor is about $30 - $50 per pothole, while the damage that single pothole may cause are up to $300/year per vehicle. (2016) [pothole.info](https://www.pothole.info/2016/05/so-many-potholes-so-much-cost/)  Thus the effort to aiding this issue can be extremely cost-effective.

## Our Proposal

The idea of the application to be a simple as possible to minimize driving distractions. Therefore, we intended to create an interface that would show a dialog box only when our system predicted there to be a pothole, from there the user would confirm if so. Also, we designed for a 2-layer confirmation of a road pothole, one by the active camera, and secondly using either the user's phone telemetry data.

### Mobile telemetry

Every modern smartphone is equipped with very accurate telemetry systems. For instance the GPS and accelerometer, which we leveraged for location and to track any abrupt movement indicating a pothole on the road. One of the difficulties with this approach was that logging every high acceleration movement may result in false positives of a road pothole. Hence why we would need a second layer of confirmation, using computer vision ML.

### Live Computer Vision

![dashcam](https://raw.githubusercontent.com/BrianRuizy/2019-Microsoft-IoT-hackathon/master/img/pothole-computervision.gif)

### Geocoding/Mapping

I was responsible to look into ways of plotting our phone GPS data
![geo](https://raw.githubusercontent.com/BrianRuizy/2019-Microsoft-IoT-hackathon/master/img/geocoding.png)

## The Result 🥇

Having won the competition, post minimum-viable-product, granted us full access to MS Azure cloud infrastucture. Which we will employ for the future continued development of the application*.

![20191214_085553_2](https://user-images.githubusercontent.com/23439187/114973415-0db81800-9e46-11eb-86af-9b9fa09006ee.jpg)
<figcaption>Presentation and prompt time</figcaption>

![20191214_151801_2](https://user-images.githubusercontent.com/23439187/114973417-0ee94500-9e46-11eb-94d7-55f095da4b46.jpg)
<figcaption>Our project board</figcaption>

![IMG_20191214_151949](https://user-images.githubusercontent.com/23439187/114971928-05aaa900-9e43-11eb-83ce-326283aef44b.jpg)
<figcaption>Our winning team!</figcaption>
