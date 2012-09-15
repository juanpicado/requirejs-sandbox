//before returning its module definition.
define(['app/ganas'],function (ganas, title) {
    //Do setup work here
	//console.log("TITLE", title);
    return {
        manzana: "manzana",
        pera: "pera",
        correr : ganas.correr
    }
});