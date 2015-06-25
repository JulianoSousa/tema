module.exports = function(grunt){
	'use strict';
	pkg: grunt.file.readJSON('package.json');
	grunt.initConfig({
		concat: {
		    options: {
		      separator: ';',
		    },

		    dist: {
		      src: [
		      	'javascripts/bootstrap/collapse.js',
		      	'javascripts/bootstrap/transition.js'
		      ],
		      dest: 'javascripts/bootstrap.js',
		    },
		    
		  },
		uglify: {
		  build: {
		    files: {
		      'javascripts/bootstrap.min.js': ['javascripts/bootstrap.js'],
		      'javascripts/count.min.js': ['javascripts/count.js'],
		    }
		  }
		},
		cssmin: {
		  options: {
		    shorthandCompacting: false,
		    roundingPrecision: -1
		  },
		  target: {
		    files: {
		      'stylesheets/estilo.min.css': ['stylesheets/estilo.css' ]
		    }
		  }
		},

		imagemin: {                          
		    dynamic: {                         
		      files: [{
		        expand: true,                  
		        cwd: 'img/',                  
		        src: ['**/*.{png,jpg,gif,svg}'],   
		        dest: 'dist/'                  
		      }]
		    }
		}


		
	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('default', [
	     'concat',
	     'uglify',
	     'cssmin',
	     'imagemin'
		]);
}