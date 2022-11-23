# USER-City-View-UI
User City View UI is the UI for User-City-App API

User can sign into his/her profile and edit a city with this simple dashboard.

# Technical Stack & External Dependencies 
- ES-Lint
    - yarn add --dev eslint (dev dependency): give syntax rules
    - yarn add --dev eslint-plugin-react
    - yarn add --dev eslint-plugin-react-hooks
- Parcel Bundler
    - yarn add --dev parcel: UI package bundler with many features like minification, compressing and auto compilation and so on
    - yarn add --dev @parcel/transformer-sass
- Nodemon
    - yarn add --dev install nodemon : restart the server if changes are applied to the /app directory. Configured with nodemon.json file. This is applied only for "yarn watch" command
- env-cmd
    - yarn add --dev env-cmd: to manage different levels of environment variables while building and running the app locally
- husky
    - yarn add -D husky: to easily initiate git hooks
- lite-server
    - yarn add --dev lite-server: to run a local node server with auto refresh capability
- React
    - yarn add react: UI framework 
    - yarn add react-dom: to support to React core
    - yarn add react-router-dom: routing in React
    - yarn add styled-components: a good way to design self dependant components
- JWT Decode
    - yarn add jwt-decode: decode jwt token and access claims

# Steps to run manually
| Step  | Instructions                                | Description                                                                                               |
| ----- |:--------------------------------------------|:--------------------------------------------------------------------------------------------------------- |
| 1     | > yarn install | This command will install the dependencies. |
| 2     | > yarn dev-build | This command will build the User City View UI module. Once it completed you will find a new folder called dist in your folder hierarchy |
| 3     | > yarn watch | This command will run the build and re-start the server automatically with help of nodemon and lite-server. |
| 4     | > yarn dev-server | This command will run the lite server. |
| 5     | check console | Check the console to get the UI address. |

# Steps to run with Docker-Compose
| Step  | Instructions                                | Description                                                                                               |
| ----- |:--------------------------------------------|:--------------------------------------------------------------------------------------------------------- |
| 1     | docker compose -f docker-compose-dev.yml up --build | Access the project folder with the terminal and run the command. This command will build the Docker image of Nginx and will start the application container. We have placed our UI build package inside Nginx for better performance. |
| 2     | try localhost:80 | You can run the UI with the give URL. |

# Best Practices
- it has included following React design patterns. Container Component, Partially Applied Component, HOC Component, Split Screen Component, Controlled Component and React Hooks 
- make sure your node version is >= 14
- make sure to mention all the external dependencies and the purpose of the dependency under the Technical Stack & External Dependencies in this file
- make sure your IDE supports ESLint (install ESLint extension)
- make sure there is no any Lint rule violation after your development
