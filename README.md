# babel-bug-super
Error Message:
  ReferenceError: this hasn't been initialised - super() hasn't been called

## To run this repo:
  Run `npm start`
  Open up `localhost:9000`

## More info
The app receives a reference error for not using a constructor class in a component class. I expected the `babel-plugin-transform-class-properties` to transform the component class properly into ES5. The version of babel-plugins and libraries
are mostly using 7.0.0-alpha.20. To fix the issue I also installed `babel-plugin-transform-es2015-classes` as per suggested in similar [issue] (https://github.com/babel/babel/issues/3722) hoping that this plugin would fix this issue by doing what `babel-plugin-transform-class-properties` could not.

Node version: v8.1.0
yarn: v0.24.6