(self.webpackChunk_lamnhan_nguix_starter=self.webpackChunk_lamnhan_nguix_starter||[]).push([[36],{3966:(n,e,t)=>{"use strict";t.d(e,{I:()=>P});var o=t(7368),i=t(4023),r=t(1286),c=t(1116);function a(n,e){if(1&n){const n=o.EpF();o.TgZ(0,"a",12),o.NdJ("click",function(){o.CHM(n);const e=o.oxw().$implicit,t=o.oxw();return t.mobileMenuExpanded=!1,t.nav.scrollToTop(),t.select.emit(e)}),o.qZA()}if(2&n){const n=o.oxw().$implicit;o.Q6J("href",n.href,o.LSH)("usefulRouterLink",n.routerLink)("innerHtml",n.text,o.oJD)}}function p(n,e){if(1&n&&(o.TgZ(0,"strong",13),o._uU(1),o.qZA()),2&n){const n=o.oxw().$implicit;o.xp6(1),o.Oqu(n.text)}}function g(n,e){if(1&n&&(o.TgZ(0,"li"),o.YNc(1,a,1,3,"a",10),o.YNc(2,p,2,1,"ng-template",null,11,o.W1O),o.qZA()),2&n){const n=e.$implicit,t=o.MAs(3);o.xp6(1),o.Q6J("ngIf",0!==n.level)("ngIfElse",t)}}let l=(()=>{class n{constructor(n){this.nav=n,this.name="Menu",this.select=new o.vpe,this.mobileMenuExpanded=!1}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(i.tZ))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-menu"]],inputs:{name:"name",items:"items"},outputs:{select:"select"},decls:11,vars:4,consts:[[1,"app-menu"],[1,"head"],[1,"title"],[1,"truncate",3,"click"],[1,"toggler"],[3,"click"],["name","list"],[1,"body"],[1,"menu-items"],[4,"ngFor","ngForOf"],["usefulRouterLinkActive","active",3,"href","usefulRouterLink","innerHtml","click",4,"ngIf","ngIfElse"],["noLinkElse",""],["usefulRouterLinkActive","active",3,"href","usefulRouterLink","innerHtml","click"],[1,"margin-top-2x"]],template:function(n,e){1&n&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"span",3),o.NdJ("click",function(){return e.mobileMenuExpanded=!e.mobileMenuExpanded}),o._uU(4),o.qZA(),o.qZA(),o.TgZ(5,"div",4),o.TgZ(6,"button",5),o.NdJ("click",function(){return e.mobileMenuExpanded=!e.mobileMenuExpanded}),o._UZ(7,"nguix-icon",6),o.qZA(),o.qZA(),o.qZA(),o.TgZ(8,"div",7),o.TgZ(9,"ul",8),o.YNc(10,g,4,2,"li",9),o.qZA(),o.qZA(),o.qZA()),2&n&&(o.xp6(4),o.Oqu(e.name),o.xp6(4),o.ekj("expanded",e.mobileMenuExpanded),o.xp6(2),o.Q6J("ngForOf",e.items))},directives:[r.IconComponent,c.sg,c.O5,i.jY],styles:[".app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:var(--app-size-border) solid var(--app-color-background-shade);padding:.5rem 1rem}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex:1;font-weight:700}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]{display:flex;align-items:center}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border:none!important;background:none!important;outline:none!important;padding:0!important;width:32px;height:32px;margin-left:1rem;transition:transform .1s ease;opacity:.7}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:1}.app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{height:0;overflow:hidden;transition:height .1s ease,padding .3s ease;padding:0 1rem}.app-menu[_ngcontent-%COMP%]   .body.expanded[_ngcontent-%COMP%]{height:100%;padding-top:1rem;padding-bottom:1rem;border-bottom:var(--app-size-border) solid var(--app-color-background-shade)}.app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   strong[_ngcontent-%COMP%]{margin-top:0}.app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-weight:400;color:var(--app-color-medium);text-transform:uppercase;padding-bottom:1rem}.app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-decoration:none;color:var(--app-color-foreground);padding:.5rem 1rem;opacity:.7}.app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:1;background:var(--app-color-background-shade)}@media only screen and (min-width:992px){.app-menu[_ngcontent-%COMP%], .app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{border-bottom:none}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{flex-wrap:wrap}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]{display:none}.app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{height:100%;border-bottom:none;padding-top:1rem;padding-bottom:1rem}}"]}),n})();function u(n,e){1&n&&o.GkF(0)}function s(n,e){if(1&n&&(o.TgZ(0,"div",8),o.TgZ(1,"h2"),o._uU(2,"Error"),o.qZA(),o.TgZ(3,"span",9),o._uU(4),o.qZA(),o.qZA()),2&n){const n=o.oxw(2);o.xp6(4),o.Oqu(n.errorMessage)}}function m(n,e){if(1&n){const n=o.EpF();o.TgZ(0,"nguix-content",12),o.NdJ("error",function(e){return o.CHM(n),o.oxw(3).onError(e)}),o.qZA()}if(2&n){const n=o.oxw(3);o.Q6J("content",n.content)("contentSrc",n.contentSrc)}}function d(n,e){if(1&n&&o._UZ(0,"a",18),2&n){const n=o.oxw().$implicit;o.Q6J("usefulRouterLink",n.routerLink)("innerHtml",n.text,o.oJD)}}function M(n,e){if(1&n&&(o.TgZ(0,"li"),o.YNc(1,d,1,2,"a",17),o.qZA()),2&n){const n=e.$implicit;o.xp6(1),o.Q6J("ngIf",0!==n.level)}}function O(n,e){if(1&n&&(o.TgZ(0,"div",13),o.TgZ(1,"h3",14),o._uU(2),o.qZA(),o.TgZ(3,"ul",15),o.YNc(4,M,2,1,"li",16),o.qZA(),o.qZA()),2&n){const n=o.oxw(3);o.xp6(2),o.Oqu(n.menuName),o.xp6(2),o.Q6J("ngForOf",n.menuItems)}}function _(n,e){if(1&n&&(o.YNc(0,m,1,2,"nguix-content",10),o.YNc(1,O,5,2,"ng-template",null,11,o.W1O)),2&n){const n=o.MAs(2),e=o.oxw(2);o.Q6J("ngIf",e.contentSrc||e.content)("ngIfElse",n)}}function C(n,e){if(1&n&&(o.YNc(0,s,5,1,"div",6),o.YNc(1,_,3,2,"ng-template",null,7,o.W1O)),2&n){const n=o.MAs(2),e=o.oxw();o.Q6J("ngIf",e.errorMessage)("ngIfElse",n)}}let P=(()=>{class n{constructor(){this.menuName="",this.menuItems=[],this.content="",this.errorMessage=""}ngOnInit(){}onError(n){this.errorMessage=n.message}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-page"]],inputs:{menuName:"menuName",menuItems:"menuItems",content:"content",contentSrc:"contentSrc",bodyTemplate:"bodyTemplate"},decls:7,vars:3,consts:[[1,"app-page"],[1,"menu"],[3,"name","items","select"],[1,"body"],[4,"ngTemplateOutlet"],["defaultTemplate",""],["class","error",4,"ngIf","ngIfElse"],["noError",""],[1,"error"],[1,"margin-bottom-2x","alert-danger"],[3,"content","contentSrc","error",4,"ngIf","ngIfElse"],["listingElse",""],[3,"content","contentSrc","error"],[1,"listing"],[1,"title"],[1,"menu-items"],[4,"ngFor","ngForOf"],["usefulRouterLinkActive","active",3,"usefulRouterLink","innerHtml",4,"ngIf"],["usefulRouterLinkActive","active",3,"usefulRouterLink","innerHtml"]],template:function(n,e){if(1&n&&(o.TgZ(0,"div",0),o.TgZ(1,"aside",1),o.TgZ(2,"app-menu",2),o.NdJ("select",function(){return e.errorMessage=""}),o.qZA(),o.qZA(),o.TgZ(3,"div",3),o.YNc(4,u,1,0,"ng-container",4),o.qZA(),o.qZA(),o.YNc(5,C,3,2,"ng-template",null,5,o.W1O)),2&n){const n=o.MAs(6);o.xp6(2),o.Q6J("name",e.menuName)("items",e.menuItems),o.xp6(2),o.Q6J("ngTemplateOutlet",e.bodyTemplate||n)}},directives:[l,c.tP,c.O5,r.ContentComponent,c.sg,i.jY],styles:[".app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{padding:1rem}.app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.7rem;margin-bottom:1rem}.app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--app-color-medium);text-transform:uppercase;margin-bottom:1rem}.app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   ul.menu-items[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap}.app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   ul.menu-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%;margin-top:1rem}.app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   ul.menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-decoration:none;padding:1rem 2rem;text-align:center;background:var(--app-color-background);color:var(--app-color-foreground);border:1px solid var(--app-color-medium);border-radius:var(--app-size-radius)}.app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   ul.menu-items[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   ul.menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   ul.menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   ul.menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:var(--app-color-background-shade)}@media screen and (min-width:992px){.app-page[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap}.app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%], .app-page[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{padding-top:2rem}.app-page[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{width:250px}.app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{flex:1;width:calc(992px - 250px - 3rem);padding-left:2rem;border-left:1px solid var(--app-color-background-shade)}}"]}),n})()},7318:(n,e,t)=>{"use strict";t.d(e,{_:()=>p});var o=t(1116),i=t(4023),r=t(1286),c=t(7368);let a=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[o.ez,i.Pf,r.NguixIconComponentModule]]}),n})(),p=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[o.ez,a,r.NguixContentComponentModule,i.Pf]]}),n})()},4519:(n,e,t)=>{"use strict";t.d(e,{D:()=>i});var o=t(7368);let i=(()=>{class n{constructor(){this.exampleMenuItems=[{text:"Link 1",routerLink:["link-1"]},{text:"Link 2",routerLink:["link-2"]},{text:"Link 3",href:"https://lamnhan.com",target:"_blank"}],this.templateItems={intro:{id:"intro",title:"Intro",description:"General landing page template",thumbnail:"http://source.unsplash.com/SymZoeE8quA/768x480"},blog:{id:"blog",title:"Blog",description:"General bloging template",thumbnail:"http://source.unsplash.com/3GZNPBLImWc/768x480"},shop:{id:"shop",title:"Shop",description:"Online shoping template",thumbnail:"http://source.unsplash.com/c9FQyqIECds/768x480"}},this.guideMenu=[{text:"Getting started",level:0},{text:"Introduction",level:1,routerLink:["guide","introduction"]},{text:"Contribution",level:1,routerLink:["guide","contribution"]}],this.componentMenu=[{text:"Layout",level:0},{text:"Header",level:1,routerLink:["component","header"]},{text:"Header 2nd",level:1,routerLink:["component","header2nd"]},{text:"Footer",level:1,routerLink:["component","footer"]},{text:"Misc",level:0},{text:"Oops",level:1,routerLink:["component","oops"]},{text:"Spinner",level:1,routerLink:["component","spinner"]},{text:"Icon",level:1,routerLink:["component","icon"]},{text:"Content",level:1,routerLink:["component","content"]},{text:"Nav Indicator",level:1,routerLink:["component","nav-indicator"]},{text:"PWA Box",level:1,routerLink:["component","pwa-box"]},{text:"PWA Reminder",level:1,routerLink:["component","pwa-reminder"]}],this.pageMenu=[{text:"General",level:0},{text:"Oops",level:1,routerLink:["page","oops"]},{text:"Terms",level:1,routerLink:["page","terms"]},{text:"Privacy",level:1,routerLink:["page","privacy"]},{text:"Setting",level:1,routerLink:["page","setting"]},{text:"Others",level:0},{text:"Oauth Popup",level:1,routerLink:["page","oauth-popup"]}],this.splashscreenMenu=[{text:"Logo",level:0},{text:"Still",level:1,routerLink:["splashscreen","still"]},{text:"Heartbeat",level:1,routerLink:["splashscreen","heartbeat"]},{text:"Bouncing",level:1,routerLink:["splashscreen","bouncing"]}],this.templateMenu=[{text:"Blank",level:1,routerLink:["template","blank"]},{text:"Blog",level:1,routerLink:["template","blog"]},{text:"Shop",level:1,routerLink:["template","shop"]}]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);