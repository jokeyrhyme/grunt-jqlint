# grunt-jqlint

> Grunt.JS automation for https://github.com/jokeyrhyme/jqlint

## Getting Started
This plugin requires Grunt `0.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jqlint --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jqlint');
```

## The "jqlint" task

### Overview
In your project's Gruntfile, add a section named `jqlint` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jqlint: {
    configName1: {
      options: {
        // Task-specific options go here.
      },
      src: {
        // list files or file patterns here
      }
    },
    // additional configurations
  },
});
```

### Options

#### options.errorsOnly
Type: `String`
Default value: `true`

Log each file as it is scanned, or only if errors were encountered.

#### options.failOnError
Type: `String`
Default value: `true`

Fail the task (ending the Grunt run) if any errors were encountered, or continue regardless.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  jqlint: {
    all: {
      options: {
        errorsOnly: true,
        failOnError: true
      },
      src: [
        // list files or file patterns here
      ]
    }
  }
});
```

## Contributing

Formal style-guide for this project is JSLint. See JSLint settings at the top of
each file.

Add unit tests for any new or changed functionality. Lint and test your code
using [Grunt](http://gruntjs.com/).

    grunt test

This project uses [Git Flow](https://github.com/nvie/gitflow), so the master
branch always reflects what is in production (i.e. what is in the NPM repository).
New code should be merged into the develop branch.

## Release History

See the [releases](https://github.com/jokeyrhyme/grunt-jqlint/releases) page on GitHub.
