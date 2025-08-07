# Lemonium Website

This repository contains the source code for [Lemon's Resting Area](https://lemon73-computing.github.io), a website built using [Hugo](https://gohugo.io/), a fast and flexible static site generator. The site supports both Japanese and English content. 

## Table of Contents

- [How to use](#how-to-use)
- [Create a New Article](#create-new-article)
- [More Information](#more-information)
- [About Multilingual Archetypes](#about-multilingual-archetypes)
- [License](#license)

## How to Use

### Building and Testing the Site Locally

Here are the steps to build site on Ubuntu-based system (tested on KDE neon 24.04):

```shell
# install golang
sudo apt install golang

# install latest version of Hugo (the example uses v0.128.0)
wget https://github.com/gohugoio/hugo/releases/download/v0.128.0/hugo_extended_0.128.0_linux-amd64.deb
sudo dpkg -i hugo_extended_0.128.0_linux-amd64.deb

# build the site
hugo server

# http://localhost:1313
```

## Create New Article

To create an article using [the default archetype](./archetypes/default.md):
```shell
# Japanese
hugo new content posts/2024/something.md

# English
hugo new content/en/posts/2024/something.md
```

To create an article using [the release note archetype](./archetypes/releasenote.md):
```shell
# Japanese
hugo new content -k releasenote posts/2024/something.md

# English
hugo new -k releasenote content/en/posts/2024/something.md
```

### More Information

https://gohugo.io/content-management/archetypes 

### About Multilingual Archetypes

https://discourse.gohugo.io/t/multilingual-archetypes/39542/8

## License

Licensed under the [CC BY-SA 4.0].

[CC BY-SA 4.0]: https://creativecommons.org/licenses/by-sa/4.0/deed.ja "Creative Commons License BY-SA 4.0"
