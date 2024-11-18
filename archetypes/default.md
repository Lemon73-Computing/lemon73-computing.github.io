---
title: {{ replace .File.ContentBaseName `-` ` ` | title }}
description: description of this post
slug: slug
date: {{ .Date | time.Format "2006-01-02 15:04:05+0700" }}
categories:
    - category
tags:
    - tag
draft: true
---
