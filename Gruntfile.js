module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect:{
            server:{
                options:{
                    hostname: 'localhost',
                    port:9000,
                    keepalive:true,
                    open:true
                }
            }
        },
        jshint:{
            files:['Gruntfile.js','App/*.js']    
        },
        karma: {
            unit: {
                options: {
                    files: ['test/**/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('karma',['karma']);
    grunt.registerTask('server',['connect:server']);
    grunt.registerTask('default',['jshint','connect:server']);

};
