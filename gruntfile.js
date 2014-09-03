module.exports = function(grunt) {

	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		paths: {
			bower: 'bower_components',
			modules: 'src/modules',
			output: 'dist'
		},

		connect: {
			server: {
				options: {
					port: 8000
				}
			}
		},
		concat: {
			options: {
				stripBanners: true
			},
			dist: {
				src: [
					'<%= paths.modules %>/*.js'
				],
				dest: '<%= paths.output %>/admanager.js'
			}
		},
		watch: {
			scripts: {
				files: [
					'<%= concat.dist.src %>',
					'bower_components/*'
				],
				tasks: ['concat'],
			},
		},
	});

	// grunt plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Tasks
	grunt.registerTask('default', ['concat', 'connect', 'watch']);

};