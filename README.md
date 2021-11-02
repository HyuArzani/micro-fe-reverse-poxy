# Micro Frontend App

> Simulate a micro frontend project using React and NGinx Reverse Proxy

## Setup

Please make sure that you have Docker and Docker compose installed in your machine. After that, just run the command

```bash
$ docker-compose up
# or "docker-compose up --build"
# if you want to rebuild the containers
```

And, after that, you'll can check the performance of Docker images using `docker stats` command.

## About the folders

Every folder is part of the Micro Frontend App demo project. In this project we have 3 folders with connected content.

### NGinx

NGinx is being used to make a reverse proxy, connecting every single page as only one application for the users. It's connected with all app and related projects.

### Run Individual App

The folder `dashboard` is the default app of our project, so when you run the containers using `docker-compose up` command and access `http://localhost` you will see the main page or our project with links for all other app, other app also can run individually
