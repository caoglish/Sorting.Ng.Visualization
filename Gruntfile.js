var config = {
    src: "./src/"
};

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            app: {
                files: {
                    'app/script.js': [config.src + "js/main.js"]
                }
            }
        },
        less: {
            development: {
                files: {
                    "app/style.css": config.src + "less/main.less"
                }
            }
        },
        copy: {
            html: {
                expand: true,
                cwd: config.src,
                src: '*.html',
                dest: 'app/'
            },
            bower: {
                expand: true,
                src: 'bower.json',
                dest: 'app/'
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    livereload: true,
                    base: './'
                }
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            js: {
                files: [config.src + "js/**/*.js"],
                tasks: ['browserify'],
            },
            css: {
                files: [config.src + "less/**/*.less"],
                tasks: ['less']
            },
            html: {
                files: [config.src + "*.html"],
                tasks: ['copy']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');


    grunt.registerTask('dev', ["connect","watch"]);
    grunt.registerTask('default', ['browserify', 'less', 'copy:html', 'copy:bower']);
};