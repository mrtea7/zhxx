
var VRender = require("v-render");
var HeaderView = require("./HeaderView");
var SideMenuView = require("./SideMenuView");
var ContainerView = require("./ContainerView");
var CustomerView = require("../../modules/customer/CustomerView");


var MainView = VRender.SinglePageView.extend(module, {
    readyCode: "mainView",

    doInit: function () {
        MainView.__super__.doInit.call(this);

        var self = this;
        // this.headView = new HeaderView(this);
        this.sideMenu = new SideMenuView(this);
        this.sideMenu.ready(function () {
            self.ready("mainView");
        });
        // this.readyAll([this.headView, this.sideMenu], function () {
        //     self.ready("mainview");
        // });
    },

    renderBody: function (body) {
        MainView.__super__.renderBody.call(this, body);

        var mainBody = VRender.$("<div id='main-body'></div>").appendTo(body);

        new HeaderView(this).render(mainBody);

        this.sideMenu.render(mainBody);

        new ContainerView(this).render(mainBody);

        // var mainContainer = VRender.$("<div id='main-conatiner'>container</div>").appendTo(mainBody);

        body.append("<div id='main-detail'>detail</div>");

        // new CustomerView(this).render(ContainerView);
    }
});

MainView.import(["/theme/css/style.css", "/theme/css/main.css","/iconfont/iconfont.css"]);
MainView.import(["/js/main.js","/iconfont/iconfont.js"]);
