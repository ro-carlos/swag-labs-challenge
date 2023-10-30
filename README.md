<br/>
<p align="center">
  <a href="https://github.com/ro-carlos/swag-labs-challenge">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png" alt="Logo" width="200" height="100">
  </a>

  <h3 align="center">Challenge</h3>

  <p align="center">
    Cypress Automation Framework
    <br/>
    <br/>
    <a href="https://github.com/ro-carlos/swag-labs-challenge"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/ro-carlos/swag-labs-challenge/total) ![Contributors](https://img.shields.io/github/contributors/ro-carlos/swag-labs-challenge?color=dark-green) ![Issues](https://img.shields.io/github/issues/ro-carlos/swag-labs-challenge) ![License](https://img.shields.io/github/license/ro-carlos/swag-labs-challenge) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Authors](#authors)

## About The Project

![Screen Shot](https://drive.google.com/uc?export=view&id=1LXA14phfaZIIYH5XKI2qYhN8krl1-X1X)

This is an automation framework to run test cases using cypress with javascript.

## Built With

Cypress 12.17.4, Node 20.9.0, NPM 10.1.0

## Getting Started

You just need the Cypress, Node and NPM on your local machine.

### Prerequisites

Install Node.

* node

_Check Node, please refer to the [Node Versions](https://nodejs.org/en/download)_

### Installation

1. Clone the repo

```sh
git clone https://github.com/ro-carlos/swag-labs-challenge.git
```

2. Install Node Dependencies

```sh
npm install
```

## Usage

1. Run all features with @Smoke Annotation headed mode.
```sh
npx cypress run --env tags="@Smoke" --headed --browser chrome
```

2. Run all features in the integration folder headed mode.
```sh
npx cypress run --spec cypress/integration/*.feature --headed --browser chrome
```

3. Run all features in the integration folder headless mode.
```sh
npx cypress run --spec cypress/integration/*.feature --headless --browser chrome
```

4. Run single feature.
```sh
npx cypress run --spec cypress/integration/login.feature --headless --browser chrome
```

5. Generate cypress report after execution.
```sh
node cypress/generate-report.js
```

## Authors

* **Carlos Rodríguez** - *Software Engineer* - [Carlos Rodríguez](https://github.com/ro-carlos/) - *Challenge*

