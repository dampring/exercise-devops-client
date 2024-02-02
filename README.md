> [!CAUTION]
> **Please don't create a public fork of this repo!** Instead, clone or [import this into a new private repo](https://github.com/new/import) and then share with us. Thanks!

## Client

This project was bootstrapped with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).

It issues a GET request to an API server at the root path `/` and displays the response body.

If successful, the response body is displayed in a green outlined box. Otherwise, the outline is red.

### Prerequisites

This project requires Node.js v14+ to be installed in your environment.

* https://nodejs.org/en/

### Installation

After checking out the code repository, run the following command to install dependencies:

`npm ci`

### Configuration

The `.env` file contains the configuration settings for the application.

#### REACT_APP_API_URL

This is the path of the API server url. For example, `http://localhost:5000` (no trailing slash).

### Scripts

#### npm run build

Builds static assets for deployment.


#### npm run format

Formats all source code.

#### npm start

Starts the application in development mode.

#### npm test

Runs tests, including checking formatting and checking for linter issues.

### Deployment

Deployment consists of the following steps:

1. Get the code.
2. Configure environment variables.
3. Install the dependencies.
4. Build the application.
5. Deploy the static assets.

- To get the code, clone the repository.
- To configure the environment variables, create (or overwrite) the `.env.` file with the appropriate settings.
- To install the dependencies, run the following command: `npm ci`.
- To build the application, run the following command: `npm run build`.
- To deploy the static assets, FTP the contents of the `build` directory from step 4 to the appropriate destination. `index.html` should be served for all GET requests. You may use any technology for serving static assets (e.g. nginx).
