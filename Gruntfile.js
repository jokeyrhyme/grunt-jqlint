/*jslint indent:2, node:true*/

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({

    jslint: {
      main: {
        src: [
          '**/*.js',
          '**/*.json',
          '!tests/**/*',
          '!**/node_modules/**/*'
        ],
        options: {
          errorsOnly: true,
          failOnError: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-jslint');

  grunt.registerTask('test', ['jslint']);

  grunt.registerTask('default', ['test']);

};
