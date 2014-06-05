module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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

    grunt.registerTask('default',['jshint','karma']);
    
};
