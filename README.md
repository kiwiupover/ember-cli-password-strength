# Ember-CLI-Password-Strength

[![Build Status](https://travis-ci.org/elwayman02/ember-cli-password-strength.svg)](https://travis-ci.org/elwayman02/ember-cli-password-strength)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-password-strength.svg)](https://emberobserver.com/addons/ember-cli-password-strength)
[![Dependency Status](https://www.versioneye.com/user/projects/562ec54036d0ab002100140f/badge.svg?style=flat)](https://www.versioneye.com/user/projects/562ec54036d0ab002100140f)
[![Code Climate](https://codeclimate.com/github/elwayman02/ember-cli-password-strength/badges/gpa.svg)](https://codeclimate.com/github/elwayman02/ember-cli-password-strength)
[![Codacy Badge](https://api.codacy.com/project/badge/d7d7c6a87e55428888cae7978849c74a)](https://www.codacy.com/app/hawker-jordan/ember-cli-password-strength)

This addon is an Ember-CLI wrapper for [zxcvbn](https://github.com/dropbox/zxcvbn), a "realistic password strength estimator".
In addition to bringing that package into your project, Ember-CLI-Password-Strength exposes a `password-strength` shim 
as an ES6 module you can import anywhere in your application, rather than using the Bower package's global variable.

Check out the [Demo](http://jhawk.co/e-c-password-strength-demo)!

## Installation

`ember install ember-cli-password-strength`

## Usage

Simply import the `password-strength` shim into your project:

```javascript
//components/foo.js
import Ember from 'ember';
import strength from 'password-strength';

const { Component, computed } = Ember;

export default Component.extend({
  password: '',

  strength: computed('password', function () {
    return strength(this.get('password'));
  })
});
```

Full documentation for the strength checking method can be found [here](https://github.com/dropbox/zxcvbn#usage).

## Contributing

This README outlines the details of collaborating on this Ember addon.

### Installation

* `git clone git@github.com:elwayman02/ember-cli-password-strength.git`
* `cd ember-cli-password-strength`
* `npm install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
