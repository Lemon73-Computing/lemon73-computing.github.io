# Lemonium website

Promoting [website] for foundation Lemon's Resting Area. Build with the Hugo static site generator.

[website]: https://lemon73-computing.github.io "Lemon's Resting Area - Website"

## Building and testing the site locally

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

## License

Licensed under the [CC BY-SA 4.0].

[CC BY-SA 4.0]: https://creativecommons.org/licenses/by-sa/4.0/deed.ja "Creative Commons License BY-SA 4.0"
