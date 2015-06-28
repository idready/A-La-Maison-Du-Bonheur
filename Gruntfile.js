// Generated on 2015-05-08 using
// generator-webapp 0.5.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    app: 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // This makes the package values accessible
    pkg: grunt.file.readJSON('package.json'),

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= config.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:concat', 'newer:uglify', 'jshint'],
        options: {
          livereload: true
        }
      },
      jstest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['test:watch']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['<%= config.app %>/sass/**/*.{scss,sass}'], // remember to prefer **/* folder match pattern for css
        tasks: ['sass:server'/*, 'autoprefixer:default'*/],
        options: {
          livereload: true
        }
      },
      styles: {
        files: ['<%= config.app %>/styles/{,*/}*.css'],
        tasks: [/*'newer:copy:styles',*/ 'newer:autoprefixer:default']
      },
      svg: {
        files: [
          '<%= config.app %>/images/svg/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        tasks: ['newer:svgmin', 'newer:svgstore']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/{,*/}*.html',
          '<%= config.app %>/styles/{,*/}*.css',
          '<%= config.app %>/images/{,*/}*'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000, // +1
        open: true,
        livereload: 35729, //+1
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(config.app)
            ];
          }
        }
      },
      test: {
        options: {
          open: false,
          port: 9001, // +1
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(config.app)
            ];
          }
        }
      },
      dist: {
        options: {
          base: '<%= config.dist %>',
          livereload: false
        }
      }
    },

    // merge all js files
    concat: {
        options: {
          separator: ';',
          stripBanners: true,
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
        },
        home: {
          src: ['bower_components/svg4everybody/svg4everybody.min.js',
                'bower_components/lazysizes/plugins/unveilhooks/ls.unveilhooks.min.js',
                'bower_components/lazysizes/lazysizes.min.js',
                'bower_components/lazysizes/plugins/bgset/ls.bgset.min.js',
                'bower_components/lazysizes/plugins/optimumx/ls.optimumx.min.js',
                'bower_components/lazysizes/plugins/respimg/ls.respimg.min.js',
                'bower_components/jquery/dist/jquery.js',
                'bower_components/swiper/dist/js/swiper.min.js',
                '<%= config.app %>/scripts/app-home.js',
                '<%= config.app %>/scripts/main.js'],
          dest: '<%= config.app %>/scripts/home_dev.js',
        },
        ourPlus: {
          src: ['bower_components/svg4everybody/svg4everybody.min.js',
                // 'bower_components/jquery/dist/jquery.js',
                '<%= config.app %>/scripts/app-our-plus.js',
                '<%= config.app %>/scripts/main.js'],
          dest: '<%= config.app %>/scripts/our-plus_dev.js',
        },
        contact: {
          src: ['bower_components/svg4everybody/svg4everybody.min.js',
                // 'bower_components/jquery/dist/jquery.js',
                '<%= config.app %>/scripts/app-contact.js',
                '<%= config.app %>/scripts/main.js'],
          dest: '<%= config.app %>/scripts/contact_dev.js',
        },
        discover: {
          src: ['bower_components/svg4everybody/svg4everybody.min.js',
                'bower_components/lazysizes/plugins/unveilhooks/ls.unveilhooks.min.js',
                'bower_components/lazysizes/lazysizes.min.js',
                'bower_components/lazysizes/plugins/bgset/ls.bgset.min.js',
                'bower_components/lazysizes/plugins/optimumx/ls.optimumx.min.js',
                'bower_components/lazysizes/plugins/respimg/ls.respimg.min.js',
                'bower_components/swiper/dist/js/swiper.min.js',
                // 'bower_components/jquery/dist/jquery.js',
                '<%= config.app %>/scripts/app-discover.js',
                '<%= config.app %>/scripts/main.js'],
          dest: '<%= config.app %>/scripts/discover_dev.js',
        },
        ourRooms: {
          src: ['bower_components/svg4everybody/svg4everybody.min.js',
                'bower_components/lazysizes/plugins/unveilhooks/ls.unveilhooks.min.js',
                'bower_components/lazysizes/lazysizes.min.js',
                'bower_components/lazysizes/plugins/bgset/ls.bgset.min.js',
                'bower_components/lazysizes/plugins/optimumx/ls.optimumx.min.js',
                'bower_components/lazysizes/plugins/respimg/ls.respimg.min.js',
                'bower_components/swiper/dist/js/swiper.min.js',
                // 'bower_components/jquery/dist/jquery.js',
                '<%= config.app %>/scripts/app-rooms.js',
                '<%= config.app %>/scripts/main.js'],
          dest: '<%= config.app %>/scripts/our-rooms_dev.js',
        },
        dist: {}
    },

    // minify all js files
    uglify: {
      options: {
        screwIE8: true,
        // separator: ';',
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      home: {
        src: ['<%= config.app %>/scripts/home_dev.js'],
        dest: '<%= config.app %>/scripts/home.js',
      },
      ourPlus: {
        src: ['<%= config.app %>/scripts/our-plus_dev.js'],
        dest: '<%= config.app %>/scripts/our-plus.js',
      },
      contact: {
        src: ['<%= config.app %>/scripts/contact_dev.js'],
        dest: '<%= config.app %>/scripts/contact.js',
      },
      discover: {
        src: ['<%= config.app %>/scripts/discover_dev.js'],
        dest: '<%= config.app %>/scripts/discover.js',
      },
      ourRooms: {
        src: ['<%= config.app %>/scripts/our-rooms_dev.js'],
        dest: '<%= config.app %>/scripts/our-rooms.js',
      },
      dist: {}
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      images: {
        files: [{
          dot: true,
          src: [
            '<%= config.app %>/images/discover',
            '<%= config.app %>/images/rooms',
          ]
        }]
      },
      server: '.tmp'
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= config.app %>/scripts/main.js',
        // '<%= config.app %>/scripts/{,*/}*.js',
        '!<%= config.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },

    // Mocha testing framework configuration options
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/*.html']
        }
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    // Install grunt-sass to avoid any workaround for libsass missing features like lists.
    // https://github.com/sass/libsass/issues/263
    sass: {
      options: {
        sourceMap: true, // This crashed libsass compile and generate : Segmentation fault (core dumped) error
        includePaths: ['bower_components']
        },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/sass',
          src: ['*.{scss,sass}'],
          dest: '.tmp/styles',
          ext: '.css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/sass',
          src: ['*.{scss,sass}'],
          dest: '<%= config.app %>/styles',
          ext: '.css'
        }]
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
      },
      default: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/styles/',
          src: '{,*/}*.css',
          dest: '<%= config.app %>/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/styles/',
          src: '{,*/}*.css',
          dest: '.<%= config.dist %>/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the HTML file
    wiredep: {
      app: {
        ignorePath: /^\/|\.\.\//,
        src: ['<%= config.app %>/index.html']
      },
      sass: {
        src: ['<%= config.app %>/sass/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= config.dist %>/scripts/{,*/}*.js',
            '<%= config.dist %>/styles/{,*/}*.css',
            '<%= config.dist %>/images/{,*/}*.*',
            '<%= config.dist %>/styles/fonts/{,*/}*.*',
            '<%= config.dist %>/*.{ico,png}'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      options: {
        dest: '<%= config.dist %>'
      },
      html: '<%= config.app %>/*.html'
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      options: {
        assetsDirs: [
          '<%= config.dist %>',
          '<%= config.dist %>/images',
          '<%= config.dist %>/styles'
        ]
      },
      html: ['<%= config.dist %>/{,*/}*.html'],
      css: ['<%= config.dist %>/styles/{,*/}*.css']
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/images',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: '<%= config.app %>/images'
        }]
      }
    },

    responsive_images: {

      rooms: {
        options: {
          upscale: true,
          engine: 'im', // set to avoid permissions warning
          quality: 90, // 80% could be enough
          aspectRation: true,
          sizes: [{
            name: '768',
            // height: 500,
            width: 768,
          },{
            name: '991',
            // height: 500,
            width: 991,
          },{
            name: '2500',
            height: 700,
            // width: 2500,
          }]
        },
        files: [{
          expand: true,
          cwd: '<%= config.app %>/images/assets/rooms/',
          src: ['{,*/}*.{gif,jpeg,jpg,png}'],
          dest: '<%= config.app %>/images/rooms/'
        }]
      },
      discover: {
        options: {
          quality: 90, // 80% could be enough
          upscale: true,
          engine: 'im', // set to avoid permissions warning
          sizes: [{
            name: '300',
            width: 300,
          },{
            name: '600',
            width: 600,
          },{
            name: '991',
            width: 991,
          },{
            name: '1200',
            width: 1200,
          }]
        },
        files: [{
          expand: true,
          cwd: '<%= config.app %>/images/assets/discover/',
          src: ['{,*/}*.{gif,jpeg,jpg,png}'],
          dest: '<%= config.app %>/images/discover/'
        }]
      }
    },

    // optimize svg
    svgmin: {
      options: {
          plugins: [
              { removeViewBox: false },
              { removeUselessStrokeAndFill: false },
              { cleanupIDs: false }
          ]
      },
      default: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/images/svg/raws',
          src: '{,*/}*.svg',
          dest: '<%= config.app %>/images/svg/sprites'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= config.dist %>/images/svg/sprites'
        }]
      }
    },

    // create svg sprite
    svgstore: {
      options: {
        prefix : 'shape-', // This will prefix each <g> ID
        // externalDefs: '<%= yeoman.app %>/frontend/bytel/default/medias/images/svgs-def/external-defs.svg'
        // The next two options below remove gradients on FF
        // cleanup: ['style', 'id'],
        // cleanupdefs: true
      },
      default: { // SVG sprite for all pages
        files: {
          '<%= config.app %>/images/svg/icons-defs.svg': ['<%= config.app %>/images/svg/sprites/**/*.svg']
        }
      },
    },

    // Notify errors
    notify: {

        options: {
            enabled: true,
            max_jshint_notifications: 5, // maximum number of notifications from jshint output
                title: 'ALaMaison', // defaults to the name in package.json, or will use project directory's name
            success: false, // whether successful grunt executions should be notified automatically
            duration: 3 // the duration of notification in seconds, for `notify-send only
        },

        watch: {

            options: {
              title: 'iDready Inte',  // optional
              message: 'ALaMaison Website notifications', //required
              spawn: true,
              files: [
                  '<%= config.app %>/sass/{,*/}*.{scss,css}',
                  'tasks/**/*.js',
                  'test/**/*.js'
                ],
                tasks: [
                  'notify:custom_options'
                ]
            }

        }
    },

    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeAttributeQuotes: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          useShortDoctype: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '{,*/}*.html',
          dest: '<%= config.dist %>'
        }]
      }
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care
    // of minification. These next options are pre-configured if you do not
    // wish to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= config.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= config.app %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= config.dist %>/scripts/scripts.js': [
    //         '<%= config.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt}',
            'images/{,*/}*.webp',
            '{,*/}*.html',
            'styles/fonts/{,*/}*.*'
          ]
        }, {
          src: 'node_modules/apache-server-configs/dist/.htaccess',
          dest: '<%= config.dist %>/.htaccess'
        }]
      },
      // styles: {
      //   expand: true,
      //   dot: true,
      //   cwd: '<%= config.app %>/styles',
      //   dest: '<%= config.app %>/styles/',
      //   src: '{,*/}*.css'
      // }
    },

    // Run some tasks in parallel to speed up build process
    concurrent: {
      server: [
        'sass:server',
        // 'copy:styles'
      ],
      test: [
        // 'copy:styles'
      ],
      dist: [
        'sass',
        // 'copy:styles',
        'imagemin',
        'svgmin'
      ]
    }
  });


  grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'notify',
      'watch'
    ]);
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run([target ? ('serve:' + target) : 'serve']);
  });

  grunt.registerTask('test', function (target) {
    if (target !== 'watch') {
      grunt.task.run([
        'clean:server',
        'concurrent:test',
        'autoprefixer'
      ]);
    }

    grunt.task.run([
      'connect:test',
      'mocha'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',
    'rev',
    'usemin',
    'htmlmin',
    'responsive_images'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
