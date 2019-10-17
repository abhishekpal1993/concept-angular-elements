# MagentoDropin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

### Development (without bundling)

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Development (with bundling)

Run `npm run start:local` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

### Build

Run `npm run build:prod` to build the project. The build artifacts will be stored in the `./dist/bundle` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## App Structure
```
|-- app
    |-- core
        |-- [+] http
        |-- [+] interceptors
        |-- [+] services
        |-- core.module.ts
    |
    |-- shared
        |-- [+] components
        |-- [+] directives
        |-- [+] pipess
        |-- [+] models
        |-- styles.scss
    |
    |-- [+] Web UI Elements
    |-- app.module.ts
```
### The Core Module
The CoreModule is not the module which gets bootstrapped by Angular at run-time. The CoreModule should contain singleton services (which is usually the case), where there’s only once instance per application. To prevent re-importing the core module elsewhere, you should also add a guard for it in the core module’ constructor.
```
|-- core
    |-- [+] http
    |-- [+] interceptors
    |-- [+] services
    |-- core.module.ts
```
The http folder handles stuff like http calls from our application. The folder contain files for interacting with the different API-routes.

The interceptors folder is a collection of interceptors. Angular has a feature for handling http requests — the HttpInterceptor interface. This allows us to catch and modify the requests and responses from our API calls.

All additional singleton services are placed in the services folder.

### The Shared Module
The SharedModule is where any shared components, pipes/filters and directives should go. The SharedModule can be imported in any other module when those items will be re-used. The shared module shouldn’t have any dependency to the rest of the application and should therefore not rely on any other module.
```
|-- shared
    |-- [+] components
    |-- [+] directives
    |-- [+] pipes
    |-- [+] models
    |-- styles.scss
```
The components folder contains all the “shared” components. This are components like loaders and buttons , which multiple components would benefit from.

The directives , pipes and models folders contains the directives, pipes and models used across the application.

The global styles or similar imports for the project is placed in styles.scss file.