module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    ts: {
      app: {
        files: [{
          src: ["src/**/*.ts"],
          dest: "./js"
        }],
        options: {
          module: "commonjs",
          noLib: false,
          target: "es6",
          sourceMap: false
        }
      }
    },
    nodemon: {
      dev: {
        script: './bin/www'
      }
    }
  });

  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask("default", [
    "ts"
  ]);

};
