# React Deployment

__App__ folder contains the React client

__Server__ folder contains the Node.js server

## Dependencies
Do this in both folders to install modules
```
npm i
```

## Global Dependencies
```
npm i -g typescript
npm i -g react-scripts
```

## Compilation
(Both are already precompiled!)

In server/ (typescript compile)
```
tsc
```

In app/ (react-scripts build)
```
npm run build
```

## Running Server
In the server/ folder
```
npm start
```

For custom ports... (port 8085 as example)
```
PORT=8085 npm start
```
