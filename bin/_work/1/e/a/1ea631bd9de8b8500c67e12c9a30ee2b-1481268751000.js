define('1ea631bd9de8b8500c67e12c9a30ee2b-1481268751000',function(e,n){var r=e("body");n.on(n.event_routerchange,function(e,n){var l=n.url.substr(1).split("/");if(console.log("url",l),console.log("url.length",l.length),1==l.length){console.log("1",1);var s=r.find(".menu-list");s.find(".first-menu-selected").removeClass("first-menu-selected"),s.find(".second-menu-list").removeClass("hide"),n&&n.url&&s.find("[router-url='"+n.url+"']").addClass("first-menu-selected")}else if(2==l.length){console.log("2",2);var t=r.find(".second-menu-list");t.find(".second-menu-selected").removeClass("second-menu-selected"),n&&n.url&&t.find("[router-url='"+n.url+"']").addClass("second-menu-selected")}});r.on("click",".first-menu > a",function(r){var l=e(r.currentTarget);if(!l.is(".first-menu-selected")){var s={url:l.attr("router-url")};n.navigate("/docs/"+s.url,s)}}),r.on("click",".second-menu > a",function(r){var l=e(r.currentTarget),s={url:l.attr("router-url")};n.navigate("/docs/"+s.url,s)}),function(){var e=n.plugins.singlepage;e&&e.setViewHandler(function(e,r){var l="/admin/";l+=e&&e.url?e.url:"index",n.require(l,function(e,n){if(e){var l=e;r(!1,"<div class='text-error'>"+l+"</div>")}else r(!1,n)})})}()});