# Password Recovery Web Service

[![CI](https://github.com/Ubademy-G3/password.reset.web/actions/workflows/default.yml/badge.svg)](https://github.com/Ubademy-G3/password.reset.web/actions/workflows/default.yml)

Service dedicated to resetting passwords in case a user has forgotten them

## Directory structure

```tree
├── LICENSE
├── package.json
├── package-lock.json
├── public
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.css
    ├── App.jsx
    ├── components
    │   ├── HeaderBar.jsx
    │   └── index.js
    ├── index.css
    ├── index.jsx
    ├── resetpassword.css
    ├── ResetPassword.jsx
    └── Routes.jsx
```

# Tech Stack

* React.js (as a JavaScript library for building user interfaces)
* CSS 

# Local Environment

## Requirements

* NodeJS
* npm

### Environment Variables
REACT_APP_GATEWAY_URL={your_url_here}

## Install Dependencies

`npm install`

## Run application

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
