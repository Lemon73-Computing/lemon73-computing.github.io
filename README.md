# Lemonium website

Promoting [website] for foundation Lemon's Resting Area. Build with the Hugo static site generator.

[website]: https://lemon73-computing.github.io "Lemon's Resting Area - Website"

## How to use

### Building and testing the site locally

Here are the steps to build site on Ubuntu-based system (tested on KDE neon 24.04):

```shell
# intall golang
sudo apt install golang

# install latest version of Hugo (the example uses v0.128.0)
wget https://github.com/gohugoio/hugo/releases/download/v0.128.0/hugo_extended_0.128.0_linux-amd64.deb
sudo dpkg -i hugo_extended_0.128.0_linux-amd64.deb

# build the site
hugo server

# http://localhost:1313
```

### Create new article

To create an article using [the default archetype](./archetypes/default.md):
```shell
# Japanese
hugo new content posts/2024/something.md

# English
hugo new content/en/posts/2024/something.md
```

To create an article using [the release note arthetype](./archetypes/releasenote.md):
```shell
# Japanese
hugo new content -k releasenote posts/2024/something.md

# English
hugo new -k releasenote content/en/posts/2024/something.md
```

More information: https://gohugo.io/content-management/archetypes

(About multilingual archetypes: https://discourse.gohugo.io/t/multilingual-archetypes/39542/8)

## License

Licensed under the [CC BY-SA 4.0].

[CC BY-SA 4.0]: https://creativecommons.org/licenses/by-sa/4.0/deed.ja "Creative Commons License BY-SA 4.0"
