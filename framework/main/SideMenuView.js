var VRender = require("v-render");


var Utils = VRender.Utils;

var SideMenuView = VRender.UIView.extend(module, {
    id: "main-sideMenu",
    readyCode: "main.sideMenu",
    doInit: function () {
        SideMenuView.__super__.doInit.call(this);
        var menus = this.menus = [];
        var self = this;
        setTimeout(function () {
            menus = [
                {
                    grp: "账号安全",
                    icon: "#icon-exit",
                    children: [
                        {name: "移动设备管理"},
                        {name: "登陆日志"}
                    ]
                }, {
                    grp: "企业设置",
                    icon: "#icon-search",
                    children: [
                        {name: "工作设置"},
                        {name: "企业信息"}
                    ]
                }];
            self.ready("main.sideMenu");
        }, 3000);
    },

    renderView: function () {
        SideMenuView.__super__.renderView.call(this);

        var currentMenu = this.options.active;

        var target = VRender.$("<ul class='menu-list'></ul>").appendTo(this.$el);
        Utils.each(menus, function (data) {
            var firstMenu = target.appendAndGet("<li class='first-menu'></li>");
            firstMenu.write("<a class='title'><svg class='icon'><use xlink:href='" + parseInt(data.icon) + "'></use></svg>" + data.grp + "</a>");

            // var list = firstMenu.appendAndGet("<ul class='menus'></ul>");
            // Utils.each(data.children, function (data) {
            //     var item = list.appendAndGet("<li class='menu'></li>");
            //     item.attr("name", data.name).text(data.label);
            //     if (data.name === currentMenu)
            //         item.addClass("selected");
            // });
        });

        // var menuTag = VRender.$("<ul></ul>").appendTo(this.$el);
        // Utils.each(this.menus, function (menu) {
        //     menuTag.write("<aside>" +
        //         " <ul class='menu-list'>" +
        //         "<li id=''><a class='selected'>" +
        //         "" +
        //         menu.menuName +
        //         "</a>" +
        //         "<ul><li><a>子菜单</a></li></ul>" +
        //         "</li>" +
        //         "</ul>" +
        //         "</aside>");
        // });
    }
});
