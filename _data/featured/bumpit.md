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

After juggling several ideas we settled with the issue of road potholes. We found that potholes cost American drivers $6.4 billion dollars per year, that is in both repair and insurance cost's. Additionally, the average price to repair a pothole including labor is about $30 - $50 per pothole, while the damage that single pothole may cause are up to $300/year per vehicle ([2016](https://www.pothole.info/2016/05/so-many-potholes-so-much-cost/)). Thus the effort to aiding this issue can be indeed cost-effective.

## Our Proposal

The idea of the application to be a simple as possible to minimize driving distractions. Therefore, we intended to create an interface that would show a dialog box only when our system predicted there to be a pothole, from there the user would confirm if so. Also, we designed for a 2-layer confirmation of a road pothole, one by the active camera, and secondly using either the user's phone telemetry data.

## Analyzing Mobile Data

Every modern smartphone is equipped with very accurate telemetry systems. For instance the GPS and accelerometer, which we leveraged for location and to track any abrupt movement indicating a pothole on the road. One of the difficulties with this approach was that logging every high acceleration movement may result in false positives of a road pothole.

| Datetime |  Accel.X (m/s²) | Accel.Y (m/s²) | Accel.Z (m/s²) | Latitude | Longitude | Altitude (m) |
| --- | --- | --- | --- | --- | --- | --- |
2019-12-14 16:28:30:975 | -1.03 | -0.18 | 9.69 | 29.7955 | -95.568 | 6
2019-12-14 16:28:31:475 | -1.01 | -0.03 | 9.70 | 29.7955 | -95.568 | 6
2019-12-14 16:28:31:975 | -1.07 | -0.02 | 9.67 | 29.7955 | -95.568 | 6
2019-12-14 16:28:32:475 | -0.91 | -0.03 | 9.75 | 29.7955 | -95.568 | 6
2019-12-14 16:28:32:975 | -0.96 | -0.20 | 9.67 | 29.7955 | -95.568 | 6

![accelerometer data](assets/bumpit/fig1.svg)
<figcaption>Smartphone accelerometer data</figcaption>

## Live Computer Vision

This part was a little more difficult, but this was our second layer for prediction of potholes, implementation done with some guidance from the MS architects. We used Azure Logic Apps to import our road image frames to the cloud, and with OpenCV where able to register a model to start analyzing our content with the conveniently named Azure microservice [Computer Vision](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/).

![dashcam](https://raw.githubusercontent.com/BrianRuizy/2019-Microsoft-IoT-hackathon/master/img/pothole-computervision.gif)

## Geocoding / Mapping

Finally we needed to actually plot our GPS data so the city could take action. Our collected data included latitude, longitude, altitude and location accuracy. Location accuracy is important to pinpoint multiple occurrences of the same pothole from different users.

![geo](https://raw.githubusercontent.com/BrianRuizy/2019-Microsoft-IoT-hackathon/master/img/geocoding.png)

## The Final Result

Having won the competition 🥇, after our minimum-viable-product, granted us credits to Microsoft Azure services, and even seats to the Cannon co-working space. Which we could use to continue development of the application.

![20191214_151801_2](https://user-images.githubusercontent.com/23439187/114973417-0ee94500-9e46-11eb-94d7-55f095da4b46.jpg)
<figcaption>Our project board</figcaption>

![IMG_20191214_151949](https://user-images.githubusercontent.com/23439187/114971928-05aaa900-9e43-11eb-83ce-326283aef44b.jpg)
<figcaption>The BumpIt team. Luis, ME, Jordan, Kaleab, MS guy, Moises and Eashrak.</figcaption>
