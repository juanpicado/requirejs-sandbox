require(["jquery", "jquery.alpha", "jquery.beta"], function($, b, c) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
    	console.log("jquery", $);
    	console.log("jquery1", b);
    	console.log("jquery2", c);
        $('body').alpha().beta();
    });
});
