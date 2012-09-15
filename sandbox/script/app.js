requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'script/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

//Start the main app logic.
requirejs(['jquery', 'app/sub', 'app/eat'],
function   ($,sub, eat) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
	console.log("SUB", sub);
	console.log("$", $)
	var x = sub, f = eat;
	console.log("SUB", x.color);
	console.log("SUB", x.size);
	console.log("SUB", f.correr);
});