"use strict";(self.webpackChunk_lamnhan_nguix_starter=self.webpackChunk_lamnhan_nguix_starter||[]).push([[410],{4592:(C,m,a)=>{a.d(m,{I:()=>b});var n=a(3018),l=a(8848),c=a(6505),p=a(8583);function u(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"a",12),n.NdJ("click",function(){n.CHM(t);const g=n.oxw().$implicit,d=n.oxw();return d.mobileMenuExpanded=!1,d.nav.scrollToTop(),d.select.emit(g)}),n.qZA()}if(2&e){const t=n.oxw().$implicit;n.Q6J("href",t.href,n.LSH)("usefulRouterLink",t.routerLink)("innerHtml",t.text,n.oJD)}}function M(e,r){if(1&e&&(n.TgZ(0,"strong",13),n._uU(1),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.Oqu(t.text)}}function i(e,r){if(1&e&&(n.TgZ(0,"li"),n.YNc(1,u,1,3,"a",10),n.YNc(2,M,2,1,"ng-template",null,11,n.W1O),n.qZA()),2&e){const t=r.$implicit,o=n.MAs(3);n.xp6(1),n.Q6J("ngIf",0!==t.level)("ngIfElse",o)}}let s=(()=>{class e{constructor(t){this.nav=t,this.name="Menu",this.select=new n.vpe,this.mobileMenuExpanded=!1}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.tZ))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-menu"]],inputs:{name:"name",items:"items"},outputs:{select:"select"},decls:11,vars:4,consts:[[1,"app-menu"],[1,"head"],[1,"title"],[1,"truncate",3,"click"],[1,"toggler"],[3,"click"],["name","list"],[1,"body"],[1,"menu-items"],[4,"ngFor","ngForOf"],["usefulRouterLinkActive","active",3,"href","usefulRouterLink","innerHtml","click",4,"ngIf","ngIfElse"],["noLinkElse",""],["usefulRouterLinkActive","active",3,"href","usefulRouterLink","innerHtml","click"],[1,"margin-top-2x"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"span",3),n.NdJ("click",function(){return o.mobileMenuExpanded=!o.mobileMenuExpanded}),n._uU(4),n.qZA(),n.qZA(),n.TgZ(5,"div",4),n.TgZ(6,"button",5),n.NdJ("click",function(){return o.mobileMenuExpanded=!o.mobileMenuExpanded}),n._UZ(7,"nguix-icon",6),n.qZA(),n.qZA(),n.qZA(),n.TgZ(8,"div",7),n.TgZ(9,"ul",8),n.YNc(10,i,4,2,"li",9),n.qZA(),n.qZA(),n.qZA()),2&t&&(n.xp6(4),n.Oqu(o.name),n.xp6(4),n.ekj("expanded",o.mobileMenuExpanded),n.xp6(2),n.Q6J("ngForOf",o.items))},directives:[c.IconComponent,p.sg,p.O5,l.jY],styles:[".app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:var(--app-size-border) solid var(--app-color-background-shade);padding:.5rem 1rem}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex:1;font-weight:bold}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]{display:flex;align-items:center}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border:none!important;background:none!important;outline:none!important;padding:0!important;width:32px;height:32px;margin-left:1rem;transition:transform .1s ease;opacity:.7}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{opacity:1}.app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{height:0;overflow:hidden;transition:height .1s ease,padding .3s ease;padding:0 1rem}.app-menu[_ngcontent-%COMP%]   .body.expanded[_ngcontent-%COMP%]{height:100%;padding-top:1rem;padding-bottom:1rem;border-bottom:var(--app-size-border) solid var(--app-color-background-shade)}.app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   strong[_ngcontent-%COMP%]{margin-top:0}.app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-weight:normal;color:var(--app-color-medium);text-transform:uppercase;padding-bottom:1rem}.app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-decoration:none;color:var(--app-color-foreground);padding:.5rem 1rem}.app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:var(--app-color-background-shade)}@media only screen and (min-width: 992px){.app-menu[_ngcontent-%COMP%]{border-bottom:none}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{flex-wrap:wrap;border-bottom:none}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%}.app-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]{display:none}.app-menu[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{height:100%;border-bottom:none;padding-top:1rem;padding-bottom:1rem}}"]}),e})();function _(e,r){1&e&&n.GkF(0)}function P(e,r){if(1&e&&(n.TgZ(0,"div",8),n.TgZ(1,"h2"),n._uU(2,"Error"),n.qZA(),n.TgZ(3,"span",9),n._uU(4),n.qZA(),n.qZA()),2&e){const t=n.oxw(2);n.xp6(4),n.Oqu(t.errorMessage)}}function O(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"nguix-content",12),n.NdJ("error",function(g){return n.CHM(t),n.oxw(3).onError(g)}),n.qZA()}if(2&e){const t=n.oxw(3);n.Q6J("input",t.contentSrc||t.content)}}function x(e,r){if(1&e&&n._UZ(0,"a",18),2&e){const t=n.oxw().$implicit;n.Q6J("usefulRouterLink",t.routerLink)("innerHtml",t.text,n.oJD)}}function v(e,r){if(1&e&&(n.TgZ(0,"li"),n.YNc(1,x,1,2,"a",17),n.qZA()),2&e){const t=r.$implicit;n.xp6(1),n.Q6J("ngIf",0!==t.level)}}function f(e,r){if(1&e&&(n.TgZ(0,"div",13),n.TgZ(1,"h3",14),n._uU(2),n.qZA(),n.TgZ(3,"ul",15),n.YNc(4,v,2,1,"li",16),n.qZA(),n.qZA()),2&e){const t=n.oxw(3);n.xp6(2),n.Oqu(t.menuName),n.xp6(2),n.Q6J("ngForOf",t.menuItems)}}function h(e,r){if(1&e&&(n.YNc(0,O,1,1,"nguix-content",10),n.YNc(1,f,5,2,"ng-template",null,11,n.W1O)),2&e){const t=n.MAs(2),o=n.oxw(2);n.Q6J("ngIf",o.contentSrc||o.content)("ngIfElse",t)}}function k(e,r){if(1&e&&(n.YNc(0,P,5,1,"div",6),n.YNc(1,h,3,2,"ng-template",null,7,n.W1O)),2&e){const t=n.MAs(2),o=n.oxw();n.Q6J("ngIf",o.errorMessage)("ngIfElse",t)}}let b=(()=>{class e{constructor(){this.menuName="",this.menuItems=[],this.content="",this.errorMessage=""}ngOnInit(){}onError(t){this.errorMessage=t.message}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-page"]],inputs:{menuName:"menuName",menuItems:"menuItems",content:"content",contentSrc:"contentSrc",bodyTemplate:"bodyTemplate"},decls:7,vars:3,consts:[[1,"app-page"],[1,"menu"],[3,"name","items","select"],[1,"body"],[4,"ngTemplateOutlet"],["defaultTemplate",""],["class","error",4,"ngIf","ngIfElse"],["noError",""],[1,"error"],[1,"margin-bottom-2x","alert-danger"],[3,"input","error",4,"ngIf","ngIfElse"],["listingElse",""],[3,"input","error"],[1,"listing"],[1,"title"],[1,"menu-items"],[4,"ngFor","ngForOf"],["usefulRouterLinkActive","active",3,"usefulRouterLink","innerHtml",4,"ngIf"],["usefulRouterLinkActive","active",3,"usefulRouterLink","innerHtml"]],template:function(t,o){if(1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"aside",1),n.TgZ(2,"app-menu",2),n.NdJ("select",function(){return o.errorMessage=""}),n.qZA(),n.qZA(),n.TgZ(3,"div",3),n.YNc(4,_,1,0,"ng-container",4),n.qZA(),n.qZA(),n.YNc(5,k,3,2,"ng-template",null,5,n.W1O)),2&t){const g=n.MAs(6);n.xp6(2),n.Q6J("name",o.menuName)("items",o.menuItems),n.xp6(2),n.Q6J("ngTemplateOutlet",o.bodyTemplate||g)}},directives:[s,p.tP,p.O5,c.ContentComponent,p.sg,l.jY],styles:[".app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{padding:1rem}.app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.7rem;margin-bottom:1rem}.app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--app-color-medium);text-transform:uppercase;margin-bottom:1rem}.app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   ul.menu-items[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap}.app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   ul.menu-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%;margin-top:1rem}.app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   ul.menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-decoration:none;padding:1rem 2rem;text-align:center;background:var(--app-color-background);color:var(--app-color-foreground);border:1px solid var(--app-color-medium);border-radius:var(--app-size-radius)}.app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   ul.menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   ul.menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   ul.menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   ul.menu-items[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:var(--app-color-background-shade)}@media screen and (min-width: 992px){.app-page[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap}.app-page[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%], .app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{padding-top:2rem}.app-page[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{width:250px}.app-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{flex:1;width:calc(992px - 250px - 3rem);padding-left:2rem;border-left:1px solid var(--app-color-background-shade)}}"]}),e})()},6025:(C,m,a)=>{a.d(m,{_:()=>M});var n=a(8583),l=a(8848),c=a(6505),p=a(3018);let u=(()=>{class i{}return i.\u0275fac=function(_){return new(_||i)},i.\u0275mod=p.oAB({type:i}),i.\u0275inj=p.cJS({imports:[[n.ez,l.Pf,c.NguixIconComponentModule]]}),i})(),M=(()=>{class i{}return i.\u0275fac=function(_){return new(_||i)},i.\u0275mod=p.oAB({type:i}),i.\u0275inj=p.cJS({imports:[[n.ez,u,c.NguixContentComponentModule,l.Pf]]}),i})()},2468:(C,m,a)=>{a.d(m,{D:()=>l});var n=a(3018);let l=(()=>{class c{constructor(){this.exampleMenuItems=[{text:"Link 1",routerLink:["link-1"]},{text:"Link 2",routerLink:["link-2"]},{text:"Link 3",href:"https://lamnhan.com",target:"_blank"}],this.guideMenu=[{text:"Getting started",level:0},{text:"Introduction",level:1,routerLink:["guide","introduction"]},{text:"Contribution",level:1,routerLink:["guide","contribution"]}],this.componentMenu=[{text:"Layout",level:0},{text:"Header",level:1,routerLink:["component","header"]},{text:"Header 2nd",level:1,routerLink:["component","header2nd"]},{text:"Tabs",level:1,routerLink:["component","tabs"]},{text:"Footer",level:1,routerLink:["component","footer"]},{text:"Content",level:0},{text:"Posts",level:1,routerLink:["component","posts"]},{text:"Post",level:1,routerLink:["component","post"]},{text:"Videos",level:1,routerLink:["component","videos"]},{text:"Skeleton videos",level:1,routerLink:["component","skeleton-videos"]},{text:"Video",level:1,routerLink:["component","video"]},{text:"Skeleton video",level:1,routerLink:["component","skeleton-video"]},{text:"User",level:0},{text:"Login",level:1,routerLink:["component","login"]},{text:"Register",level:1,routerLink:["component","register"]},{text:"Account",level:1,routerLink:["component","account"]},{text:"Misc",level:0},{text:"Oops",level:1,routerLink:["component","oops"]},{text:"Spinner",level:1,routerLink:["component","spinner"]},{text:"Icon",level:1,routerLink:["component","icon"]},{text:"Content",level:1,routerLink:["component","content"]},{text:"Share",level:1,routerLink:["component","share"]},{text:"Video Player",level:1,routerLink:["component","video-player"]},{text:"Image Cropper",level:1,routerLink:["component","image-cropper"]},{text:"Network Indicator",level:1,routerLink:["component","network-indicator"]},{text:"Nav Indicator",level:1,routerLink:["component","nav-indicator"]},{text:"PWA Box",level:1,routerLink:["component","pwa-box"]},{text:"PWA Reminder",level:1,routerLink:["component","pwa-reminder"]}],this.pageMenu=[{text:"General",level:0},{text:"Oops",level:1,routerLink:["page","oops"]},{text:"Terms",level:1,routerLink:["page","terms"]},{text:"Privacy",level:1,routerLink:["page","privacy"]},{text:"Setting",level:1,routerLink:["page","setting"]},{text:"Others",level:0},{text:"Oauth Popup",level:1,routerLink:["page","oauth-popup"]}],this.splashscreenMenu=[{text:"Logo",level:0},{text:"Still",level:1,routerLink:["splashscreen","still"]},{text:"Heartbeat",level:1,routerLink:["splashscreen","heartbeat"]},{text:"Bouncing",level:1,routerLink:["splashscreen","bouncing"]}]}}return c.\u0275fac=function(u){return new(u||c)},c.\u0275prov=n.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);