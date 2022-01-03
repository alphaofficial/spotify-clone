# Spotify clone

A fullstack clone of [spotify web player](https://open.spotify.com/)

## Live preview

The app is deployed on vercel at [https://spotify-clone-seven-pi.vercel.app](https://spotify-clone-seven-pi.vercel.app/signin)

## Credentials

To login use the following test credentials:

```
email: user@test.com
password: password
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before we get started, we're going to need to make sure we have a few things installed and available on our machine.

#### Node >= 12

##### MacOS

```bash
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

##### Other

See the installation guides available @ nodejs.org:

https://nodejs.org/en/download/package-manager/

#### Yarn

```bash
npm i -g yarn
```

### Installing

Below is a series of step by step instructions that tell you how to get a development env running.

Create a local clone of the repository

Enter the cloned repositories' directory

Install the projects dependencies

```bash
yarn
```

Create a `.env` file based on the [.env.example template](.env.example)

Export the contents of the created `.env` file to the current terminal session.

```bash
set -o allexport; source .env; set +o allexport
```

Start the projects development server

```bash
yarn dev
```

The project should now be available at http://localhost:4000

## Technologies used

- Next JS (React)
- Prisma
- Chakra UI
