![cover](https://user-images.githubusercontent.com/26682297/191619100-aa2d1c7e-f2a5-492c-9f04-07baef0936ae.jpg)

History Research was a high school project, created in 2017, at a time when the political landscape of Brazil was tense with supporters of the return of the military period.

Initially the project was developed in PHP and JavaScript with MySQL database. In 2022 it was redone using more current technologies for development.

- [Technologies](#technologies)
- [How to run](#how-to-run)
- [Production](#production)
  - [Hygraph](#hygraph)
  - [Environment variables](#environment-variables)
- [Preview](#preview)
- [Licence](#license)

<a id="technologies"></a>

## ✨ Technologies

This project was developed with the following technologies:

- React
- Next.js
- TypeScript
- Tailwindcss
- GraphQL
- Apollo Client

<a id="how-to-run"></a>

## 🚀 How to run

- Clone the repository

```bash
git clone https://github.com/igorssc/history-research.git

cd history-research
```

- Install dependencies

```bash
yarn

# or

npm init
```

- Start the GraphQL Server

```bash
yarn server

# or

npm run server
```

> In development environment, [json-graphql-server](https://github.com/marmelab/json-graphql-server) is used to simulate the content storage service.

- Start the NextJs server

```bash
yarn dev

# or

npm run dev
```

You can now access [`localhost:3000`](http://localhost:3000) from your browser.

<a id="production"></a>

## 🎗️ Production

<a id="hygraph"></a>

### 🎲 Hygraph

To configure the content storage service, you must follow a few steps:

1. Go to the website <https://hygraph.com> and create a new project;

2. Create a schema model, named "Vote", as in the image below:

<img src="https://user-images.githubusercontent.com/26682297/191612078-8fec2f38-4c1c-4914-a6a5-4f3f71d58cba.png" width="600em">

3. In the project settings, copy your Master Environment Url:

<img src="https://user-images.githubusercontent.com/26682297/191612090-d52375b4-2cdf-4151-8edd-8dfab439f5da.png" width="600em">

> It will be used in the environment variables

4. Create an Permanent Access Token:

<img src="https://user-images.githubusercontent.com/26682297/191612108-5abae9a8-be7a-475b-8c88-a64d8ee9dfdf.png" width="600em">

5. Change the permissions of your permanent access token, and leave it as below:

<img src="https://user-images.githubusercontent.com/26682297/191612116-3ec54d1b-6ce3-40cb-9ac6-bbd02e60d3bf.png" width="600em">

<a id="environment-variables"></a>

### 🔐 Environment variables

In this project, `environment variables are used only in production`, to connect with the content storage service [hygraph](https://hygraph.com/).

Locally, [json-graphql-server](https://github.com/marmelab/json-graphql-server) is used to simulate the content storage service.

For the correct operation of the system, the following environment variables must be used:

```
NEXT_PUBLIC_API_URL=your-hygraph-master-environment-url

NEXT_PUBLIC_API_ACCESS_TOKEN=your-hygraph-permanent-token
```

<a id="preview"></a>

## 🪄 Preview

Access <https://history-research.vercel.app>

<a id="license"></a>

## 📝 Licence

This project is under MIT licence. See the archive [LICENSE](LICENSE.md) to more details.

---

Made with 💜 by [IGS Design](https://igsdesign.com.br) - Igor Santos 👋
