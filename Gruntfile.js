module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      'public/app.js': ['client/app.js'],
      options: {
        debug: true
      }
    },
    watch: {
      scripts: {
        files: [ "/client/**/*.js"],
        tasks: [ 'browserify' ]
      }
    },
    concurrent: {
      target: {
        tasks: ['watch:scripts', 'nodemon:app'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      app: {
        options: {
          file: "app.js",
          ignoredFiles: ['/client/**/*.*', '/public/**/*.js']
        }
      }
    }
  })
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent')

  grunt.registerTask('develop', ['browserify', 'concurrent'])
}
