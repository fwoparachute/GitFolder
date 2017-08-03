/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      kill: {
        simpleService: {
            pid: 15632
        }
    }
  });

  // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-kill');

  // Default task.
  grunt.registerTask('default', ['kill']);
};
