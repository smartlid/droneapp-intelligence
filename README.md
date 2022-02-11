# Intelligence-3

Intelligence reported started late Jan 2022.

### Built with

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org)
- [Model Viewer](https://modelviewer.dev)
- [Airtable](https://www.npmjs.com/package/airtable)

### Getting Started

#### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

#### Local Development

1. Clone the repo
    ```sh
    git clone https://github.com/Remote-Roofing/intelligence-3.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Copy `.env.example` into `.env.local` and Enter your API in `.env.local`

    ```js
    AIRTABLE_API_KEY = "ENTER YOUR AIRTABLE API KEY";
    AIRTABLE_BASE_KEY = "ENTER YOUR AIRTABLE BASE";
    AIRTABLE_TABLE_NAME = "ENTER YOUR AIRTABLE TABLE NAME";
    ```

4. Run the project
    ```sh
    npm run dev
    ```

#### Deploy to heroku

1. Create an app in heroku
2. Connect the app to the repository
    - Heroku app dashboard -> Deploy -> Deployment method
      There are 3 options. **Heroku Git**, **Github**, **Container Registry**.
      Choose the **Github**(Connect to Github)
      Select your github account and search this repository and click the ```connect``` button.
    - Enable automatic deploy after app is connected to Github repo.
      If this is enabled, every push to ```main``` branch will deploy a new version of the heroku app. **Deploys happen automatically**.
3. Set config variables
    - Heroku app dashboard -> Settings -> Config Vars
      Click ```Reveal Config Vars``` button. Add 3 variables as followings:
      - AIRTABLE_API_KEY: API key to access airtable
      - AIRTABLE_BASE_KEY: key to access airtable base
      - AIRTABLE_TABLE_NAME: table name to access
