<div align="center">

<a href="[Speakeasy](https://speakeasyapi.dev/)">
  <img src="https://github.com/speakeasy-api/speakeasy/assets/68016351/e959f81a-b250-4003-8c5c-a45b9463fc95" alt="Speakeasy Logo" width="400">
<h2>Speakeasy Hono OpenAPI Example</h2>
</a>

</div>

This example Hono app demonstrates Speakeasy-recommended practices for generating clear OpenAPI specifications and SDKs.

This project was bootstrapped with the [Hono Node.js starter template](https://hono.dev/docs/getting-started/basic#starter) and has three example API endpoints in `src/routes/users/users.index.ts` to get all users, get a user by id, and create a user.

## Prerequisites

You need to have Node.js version >= 18 to run this project. You can download Node.js from [here](https://nodejs.org/).

To generate an SDK, you'll also need the Speakeasy CLI installed, or use the Speakeasy dashboard.

## Installation

To install the application on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/speakeasy-api/speakeasy-hono-example.git
```

2. Navigate into the directory:

```bash
cd speakeasy-hono-example
```

3. Install all dependencies for the application using NPM:

```bash
npm install
```

4. [Install the Speakeasy CLI](https://github.com/speakeasy-api/speakeasy#installation):

```bash
brew install speakeasy-api/homebrew-tap/speakeasy
```

## Running the application

Start the server:

```bash
npm run start
```

### For development

You can use the provided script to run the application in development mode. It will watch for any changes in the source code and automatically restart the server.

```bash
npm run dev
```

## Creating an OpenAPI specification

Run the following command to create an OpenAPI spec YAML file in your root folder:

```bash Terminal
npm run create:openapi
```

## Generating an SDK using Speakeasy

To generate a Speakeasy SDK run:

```bash
speakeasy quickstart
```

## License

This project is licensed under the terms of the Apache 2.0 license.
