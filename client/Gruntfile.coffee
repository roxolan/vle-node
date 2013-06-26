DESTINATION = '../public/javascript/application.js'
CMPNTS = 'components'
APP = 'app'
CTRLS = "#{APP}/controllers"
MDLS = "#{APP}/models"
VIEWS = "#{APP}/views"

module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON '../package.json'
    uglify:
      options:
        banner: ''
      build:
        src: ''
        dst: ''
    concat:
      src: [
        "#{CMPNTS}/jquery/jquery.js"
        "#{CMPNTS}/jquery.ui/jquery.js"
        "#{CMPNTS}/jquery/jquery.js"
        "#{CMPNTS}/jquery/jquery.js"
        "dist/app.js"
        "dist/controllers.js"
        "dist/models.js"
        "dist/view.js"
      ]
      dest: "#{DESTINATION}"


    coffee:
      compile:
        files:
          'dist/app.js': "#{APP}/main.coffee"
          'dist/controllers.js': ["#{CTRLS}/user.coffee"]
          'dist/models.js': ["#{MDLS}/user.coffee"]

    ember_handlebars:
      compile:
        options:
          namespace: "Lms.TEMPLATES"
        files:
          'dist/views.js': ["#{VIEWS}/session.hbs"]


  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-ember-handlebars'
  grunt.loadNpmTasks 'grunt-contrib-uglify'


  grunt.registerTask 'default', ['uglify']