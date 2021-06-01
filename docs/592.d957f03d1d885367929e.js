(self.webpackChunk_lamnhan_nguix_starter=self.webpackChunk_lamnhan_nguix_starter||[]).push([[592],{2273:(n,t,e)=>{"use strict";e.d(t,{E:()=>s});var o=e(7368),a=e(1116),r=e(2537);function p(n,t){1&n&&o.GkF(0)}function i(n,t){1&n&&o._uU(0,"No preview available.")}function c(n,t){if(1&n&&(o.TgZ(0,"div",9),o.TgZ(1,"h2"),o._uU(2,"API"),o.qZA(),o._UZ(3,"nguix-content",10),o.qZA()),2&n){const n=o.oxw();o.xp6(3),o.Q6J("contentSrc",n.apiSrc)}}let s=(()=>{class n{constructor(){this.importName="...",this.usageContent=""}ngOnInit(){this.usageContent=`\nImport the module:\n\`\`\`ts\nimport {${this.importName}} from '@lamnhan/nguix-starter';\n@NgModule({ imports: [${this.importName}] })\n\`\`\`\n\nUse the component:\n\`\`\`html\n${this.htmlCode}\n\`\`\``}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-compbody"]],inputs:{componentTemplate:"componentTemplate",apiSrc:"apiSrc",importName:"importName",htmlCode:"htmlCode"},decls:14,vars:3,consts:[[1,"app-compbody"],[1,"display"],[1,"container"],[1,"code"],[4,"ngTemplateOutlet"],["defaultTemplate",""],[1,"usage","margin-top-2x"],[3,"content"],["class","api margin-top-2x",4,"ngIf"],[1,"api","margin-top-2x"],[3,"contentSrc"]],template:function(n,t){if(1&n&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"h2"),o._uU(3,"Preview"),o.qZA(),o.TgZ(4,"div",2),o.TgZ(5,"div",3),o.YNc(6,p,1,0,"ng-container",4),o.YNc(7,i,1,0,"ng-template",null,5,o.W1O),o.qZA(),o.qZA(),o.qZA(),o.TgZ(9,"div",6),o.TgZ(10,"h2"),o._uU(11,"Usage"),o.qZA(),o._UZ(12,"nguix-content",7),o.qZA(),o.YNc(13,c,4,1,"div",8),o.qZA()),2&n){const n=o.MAs(8);o.xp6(6),o.Q6J("ngTemplateOutlet",t.componentTemplate||n),o.xp6(6),o.Q6J("content",t.usageContent),o.xp6(1),o.Q6J("ngIf",t.apiSrc)}},directives:[a.tP,r.ContentComponent,a.O5],styles:[".app-compbody[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%]{border:1px solid var(--app-color-medium);border-radius:3px}.app-compbody[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{background:var(--app-color-primary);color:var(--app-color-primary-contrast);font-size:1.2rem;padding:.5rem 1rem;margin:0}.app-compbody[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:1rem;background:url(/assets/images/transparent.jpg);background-size:auto;background-repeat:repeat}.app-compbody[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]{background:var(--app-color-background)}"]}),n})()},2950:(n,t,e)=>{"use strict";e.d(t,{y:()=>i});var o=e(1116),a=e(1949),r=e(2537),p=e(7368);let i=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=p.oAB({type:n}),n.\u0275inj=p.cJS({imports:[[o.ez,r.NguixContentComponentModule,a.Pf]]}),n})()},2006:(n,t,e)=>{"use strict";e.d(t,{x:()=>p});var o=e(7368),a=e(2537),r=e(1949);let p=(()=>{class n{constructor(){this.pageUrl="/oops",this.importName="...",this.usageContent=""}ngOnInit(){this.usageContent=`\nUse the page directly:\n\`\`\`ts\n{ path: 'path/to/page', loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.${this.importName}) }\n\`\`\`\n\nOr, through a proxy:\n\`\`\`ts\n// import the page module\nimport {${this.importName}} from '@lamnhan/nguix-starter';\n// create a proxy\n@NgModule({ imports: [${this.importName}] }) ${this.importName}WrapperModule {}\n// add the route\n{ path: 'path/to/page', loadChildren: () => import('./path/to/proxy/module').then(m => m.${this.importName}WrapperModule) }\n\`\`\``}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-pagebody"]],inputs:{pageUrl:"pageUrl",importName:"importName"},decls:12,vars:5,consts:[[1,"app-pagebody"],[1,"display"],[1,"container"],[1,"code"],[3,"src"],[1,"usage","margin-top-2x"],[3,"content"]],template:function(n,t){1&n&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"h2"),o._uU(3,"Preview"),o.qZA(),o.TgZ(4,"div",2),o.TgZ(5,"div",3),o._UZ(6,"iframe",4),o.ALo(7,"safe"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(8,"div",5),o.TgZ(9,"h2"),o._uU(10,"Usage"),o.qZA(),o._UZ(11,"nguix-content",6),o.qZA(),o.qZA()),2&n&&(o.xp6(6),o.Q6J("src",o.xi3(7,2,t.pageUrl,!1),o.uOi),o.xp6(5),o.Q6J("content",t.usageContent))},directives:[a.ContentComponent],pipes:[r.yl],styles:[".app-pagebody[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%]{border:1px solid var(--app-color-medium);border-radius:3px}.app-pagebody[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{background:var(--app-color-primary);color:var(--app-color-primary-contrast);font-size:1.2rem;padding:.5rem 1rem;margin:0}.app-pagebody[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:1rem;background:url(/assets/images/transparent.jpg);background-size:auto;background-repeat:repeat}.app-pagebody[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]{background:var(--app-color-background)}.app-pagebody[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:480px}"]}),n})()},2288:(n,t,e)=>{"use strict";e.d(t,{r:()=>i});var o=e(1116),a=e(1949),r=e(2537),p=e(7368);let i=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=p.oAB({type:n}),n.\u0275inj=p.cJS({imports:[[o.ez,r.NguixContentComponentModule,a.Pf,a.ZZ]]}),n})()}}]);