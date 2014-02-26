$(document).ready(function(){
/*
    var viewMode = "";
    var loc = window.location.href;
    if (loc.indexOf('item/') > -1) {
        viewMode = core.constants.DETAIL_VIEW;
    }
    else {
    	var regex = /gallery\/.+/;
        
        if (loc.match(regex) == undefined || com.art.core.utils.BrowserUtil.getQueryString("logout"))
            viewMode = core.constants.GALLERY_HOME;
        else
            viewMode = core.constants.GRID_VIEW;
    }  
    //init here or in HTML page
    core.init('', viewMode,''); 
    */
   
    //registerModule
    
	core.registerModule(new com.art.mvc.model.model1({},core));
	core.registerModule(new com.art.mvc.view.view1({},core));
	
	//Register Common Command
	core.registerSubscriber(new com.art.mvc.controller.controller1({target:''},core));	
	
	//startModule
	core.startModule(com.art.mvc.view.view1.NAME);		
	                	  		
	//addToSubEnvironment
    /*core.addToSubEnvironment('isMyGalleryPage',(location.href.indexOf("/me/") > -1 || location.href.indexOf("mygalleries.asp") ) > -1);
	core.addToSubEnvironment('isExternalPage',location.href.indexOf("/me/") == -1);
    core.addToSubEnvironment('isMyAccountPage',location.href.indexOf("/asp/secure") > -1);
    core.addToSubEnvironment('isMyPhotosPage',location.href.indexOf("/photostoart") > -1);  
   */
});


