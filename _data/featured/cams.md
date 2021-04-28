---
template: BlogPost
path: /cams-etrac
mockup: /assets/cams/cams-mockup.png
thumbnail: 'https://images.unsplash.com/photo-1467533003447-e295ff1b0435?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
date: 2020-03-01
name: CAMS E-TRaC
title: What was it like to develop a fintech energy analytics SaaS? 
category: Enterprise
description: 'A robust and modern midstream oil & energy data monitoring web-app. Built with Python on AWS.'
tags:
  - Python
  - Flask
  - AWS
  - Docker

---

Our software (E-TRaC) monitored terabytes of real-time and forecasted data such as **system conditions** and **price reports** from multiple energy projects like conventional power plants, to renewable energy sources like wind farms. The goal of the platform was to effectively consolidate all the data that was being collected and have the available data visualizations at any given moment. This was very valuable at providing insights to the clients of the company, and internal asset managers who could use it for statistical analysis. 


![mobile phones mockuo](assets/cams/a32be449-5f55-430d-a39d-d8d8ea13400b.jpeg)
<figcaption>Josh Bryant (Director of Engineering), ME, and Rick Knauth (VP of asset management)</figcaption>

## Building an analytics data pipeline

I worked hands on with the automated data pipeline for the E-TRaC project. This was my first experience with cloud computing and big-data (most of which came from ERCOT), but I quickly absorbed what it meant to work on AWS EC2 Linux nodes, how to access and store files from scalable AWS S3 buckets, and other tools and services like Docker and SSH. Once our data was processed and cleaned with defined Pandas + NumPy fuctions(s), the site would then render matplotlib based data visualizations onto the respective Flask web applications. And, all of this was being continuously repeated and updated by the minute.

|DELIVERY_DATE | HOUR_ENDING | ACTUAL\_SYSTEM\_WIDE |COPHSL\_SYSTEM\_WIDE |STWPF\_SYSTEM\_WIDE |WGRPP\_SYSTEM\_WIDE |ACTUAL\_LZ\_SOUTH\_HOUSTON |
|-|-|-|-|-|-|-|
04/25/2021    | 22          | 20576.06           |23918.5             |23762.5           |19763             |4654.09                 |
04/25/2021    | 23          | 20626.41           |24107.9             |24507.2           |20369.2           |4689.46                 |
04/25/2021    | 24          | 20168.84           |24804.1             |24229             |20057.2           |4638.93                 |
04/26/2021    | 01          | 19506.43           |25190.6             |23964.6           |19937.9           |4589.61                 |
04/26/2021    | 02          | 18875.47           |24663.8             |23850.8           |19960.2           |4489.86                 |
04/26/2021    | 03          | 18599.93           |24217               |23879.8           |19954.3           |4500.74                 |

![](assets/cams/rtmLmp.png)
<figcaption>Example of time series data visualization</figcaption>

## UI Redesign

![mobile phones mockuo](assets/cams/cams-devices.png)
<figcaption>Mobile interface mockup</figcaption>

