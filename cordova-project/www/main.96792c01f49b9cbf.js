"use strict";(self.webpackChunkangulartest=self.webpackChunkangulartest||[]).push([[179],{82946:(_,p,n)=>{n.d(p,{a:()=>e});var i=n(94650),t=n(87341),u=n(86630);class e{authService;router;constructor(c,E){this.authService=c,this.router=E}canActivate(c,E){return!!this.authService.isAuthenticated()||(this.router.navigate(["account/login"]),!1)}static \u0275fac=function(E){return new(E||e)(i.LFG(t.e),i.LFG(u.F0))};static \u0275prov=i.Yz7({token:e,factory:e.\u0275fac})}},87341:(_,p,n)=>{n.d(p,{e:()=>t});var i=n(94650);class t{isAuthenticated(){return null!=localStorage.getItem("currentUser")}static \u0275fac=function(l){return new(l||t)};static \u0275prov=i.Yz7({token:t,factory:t.\u0275fac})}},3757:(_,p,n)=>{n.d(p,{s:()=>u});var i=n(94650),t=n(80529);class u{http;data={};locale="";constructor(l){this.http=l,this.locale=localStorage.getItem("locale"),null==this.locale&&(this.locale="en",localStorage.setItem("locale",this.locale))}use(l){return new Promise((c,E)=>{const f=`./assets/i18n/${l||"en"}.json`;localStorage.setItem("locale",l),this.http.get(f).subscribe(g=>{this.data=Object.assign({},g||{}),c(this.data)},g=>{this.data={},c(this.data)})})}static \u0275fac=function(c){return new(c||u)(i.LFG(t.eN))};static \u0275prov=i.Yz7({token:u,factory:u.\u0275fac})}},84731:(_,p,n)=>{n.r(p),n.d(p,{HomeModule:()=>v});var i=n(24006),t=n(44466),u=n(86630),e=n(94650),l=n(36895),c=n(90782),E=n(23041);function f(P,M){if(1&P&&(e.TgZ(0,"mat-grid-tile",2),e._uU(1),e.qZA()),2&P){const m=M.$implicit;e.Udp("background",m.color),e.Q6J("colspan",m.cols)("rowspan",m.rows),e.xp6(1),e.hij(" ",m.text," ")}}class g{tiles=[{text:"Layout",cols:3,rows:1,color:"#c2185b"},{text:"Form",cols:1,rows:2,color:"#c2185b"},{text:"Table",cols:1,rows:1,color:"#c2185b"},{text:"Popup",cols:2,rows:1,color:"#c2185b"}];constructor(){}ngOnInit(){}static \u0275fac=function(m){return new(m||g)};static \u0275cmp=e.Xpm({type:g,selectors:[["app-dashboard"]],decls:5,vars:4,consts:[["cols","4","rowHeight","100px"],[3,"colspan","rowspan","background",4,"ngFor","ngForOf"],[3,"colspan","rowspan"]],template:function(m,T){1&m&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA(),e.TgZ(3,"mat-grid-list",0),e.YNc(4,f,2,5,"mat-grid-tile",1),e.qZA()),2&m&&(e.xp6(1),e.hij(" ",e.lcZ(2,2,"WELCOME_ANGULAR_GO"),"\n"),e.xp6(3),e.Q6J("ngForOf",T.tiles))},dependencies:[l.sg,c.Il,c.DX,E.X]})}const y=[{path:"",component:g}];class h{static \u0275fac=function(m){return new(m||h)};static \u0275mod=e.oAB({type:h});static \u0275inj=e.cJS({imports:[u.Bz.forChild(y),u.Bz]})}class v{static \u0275fac=function(m){return new(m||v)};static \u0275mod=e.oAB({type:v});static \u0275inj=e.cJS({imports:[t.m,i.u5,h]})}},44466:(_,p,n)=>{n.d(p,{m:()=>K});var i=n(36895),t=n(47957),u=n(42673),e=n(48242),l=n(4859),c=n(90811),E=n(73546),f=n(56709),g=n(77331),y=n(3238),h=n(99602),v=n(65938),P=n(44850),M=n(37084),m=n(90782),T=n(97392),F=n(44144),D=n(96338),b=n(28255),L=n(98739),Q=n(73162),z=n(51572),j=n(71948),Y=n(84385),I=n(90455),x=n(87314),U=n(17009),B=n(96308),G=n(86257),Z=n(53626),H=n(3848),S=n(10266),V=n(35423),X=n(55013),C=n(57851),N=n(94650);class K{static \u0275fac=function($){return new($||K)};static \u0275mod=N.oAB({type:K});static \u0275inj=N.cJS({imports:[i.ez,i.ez,X.HT,C.nZ,t.Bb,u.g,e._r,l.ot,c.vV,E.QW,f.p9,g.Hi,G.T5,h.FA,v.Is,P.t,M.To,m.N6,T.Ps,F.c,D.ie,b.Tx,y.XK,L.TU,Q.Cv,z.Cq,j.Fk,y.si,Y.LD,x.KP,I.rP,U.ZX,B.JX,Z.p0,H.Nh,S.AV,V.dp]})}},23041:(_,p,n)=>{n.d(p,{X:()=>u});var i=n(94650),t=n(3757);class u{translate;constructor(l){this.translate=l}transform(l){return this.translate.data[l]||l}static \u0275fac=function(c){return new(c||u)(i.Y36(t.s,16))};static \u0275pipe=i.Yjl({name:"translate",type:u,pure:!1})}},92340:(_,p,n)=>{n.d(p,{N:()=>i});const i={production:!0,baseUrl:"https://*.azurewebsites.net",webBaseUrl:"https://*.net",appInsights:{instrumentationKey:""}}},58808:(_,p,n)=>{var i=n(11481),t=n(94650),u=n(38746),e=n(24006),l=n(80529),c=n(92340),f=n(27217);class g{config={instrumentationKey:c.N.appInsights.instrumentationKey};constructor(){f.AppInsights.config||f.AppInsights.downloadAndSetup(this.config)}logPageView(o,a,s,O,d){f.AppInsights.trackPageView(o,a,s,O,d)}logEvent(o,a,s){f.AppInsights.trackEvent(o,a,s)}logException(o){f.AppInsights.trackException(o)}static \u0275fac=function(a){return new(a||g)};static \u0275prov=t.Yz7({token:g,factory:g.\u0275fac})}var y=n(62289);class h{getSideNavMenu(){return[{name:"Home",routerLink:"home",subItems:null,icon:"home"},{name:"Sample",routerLink:"sample",subItems:[{name:"Sample Layout",routerLink:"sample/sample-layout",subItems:null,icon:"home"},{name:"Sample List",routerLink:"sample/sample-list",subItems:null,icon:"home"},{name:"Sample Auth Guard",routerLink:"sample/sample-auth-guard",subItems:null,icon:"home"}],icon:"home"},{name:"Help",routerLink:"help",subItems:null,icon:"help"},{name:"Account",routerLink:"account",subItems:[{name:"Register",routerLink:"account/registration",subItems:null,icon:"account"},{name:"Login",routerLink:"account/login",subItems:null,icon:"account"}],icon:"account"}]}static \u0275fac=function(a){return new(a||h)};static \u0275prov=t.Yz7({token:h,factory:h.\u0275fac})}var v=n(86630),P=n(3757),M=n(36895),m=n(23267),T=n(97392),F=n(83683),D=n(96338),b=n(4859),L=n(28255),Q=n(23041);function z(r,o){1&r&&(t.TgZ(0,"div"),t._UZ(1,"span",15),t.qZA())}function j(r,o){if(1&r){const a=t.EpF();t.TgZ(0,"div")(1,"a",18),t.NdJ("click",function(){const d=t.CHM(a).$implicit,A=t.oxw(2),W=t.MAs(25);return t.KtG(A.navigate(d.name,d.routerLink,W))}),t.TgZ(2,"mat-icon",17),t._uU(3),t.qZA(),t._uU(4),t.qZA()()}if(2&r){const a=o.$implicit;t.xp6(3),t.Oqu(a.icon),t.xp6(1),t.hij("",a.name," ")}}function Y(r,o){if(1&r){const a=t.EpF();t.ynx(0),t.TgZ(1,"a",16),t.NdJ("click",function(){const d=t.CHM(a).$implicit,A=t.oxw(),W=t.MAs(25);return t.KtG(A.navigate(d.name,d.routerLink,W))}),t.TgZ(2,"mat-icon",17),t._uU(3),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"mat-list"),t.YNc(6,j,5,2,"div",13),t.qZA(),t.BQk()}if(2&r){const a=o.$implicit;t.xp6(3),t.Oqu(a.icon),t.xp6(1),t.Oqu(a.name),t.xp6(2),t.Q6J("ngForOf",a.subItems)}}class I{menuService;router;translate;title="Welcome";loading=!1;mobileQuery;items;_mobileQueryListener;constructor(o,a,s,O,d){this.menuService=s,this.router=O,this.translate=d,this.mobileQuery=a.matchMedia("(max-width: 600px)"),this._mobileQueryListener=()=>o.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}ngOnInit(){this.items=this.menuService.getSideNavMenu()}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener)}navigate(o,a,s){this.title=o,this.router.navigate([a]),this.mobileQuery.matches&&s.toggle()}setLanguage(){switch(localStorage.getItem("locale")){case"en":this.translate.use("ja");break;case"ja":this.translate.use("zh-Hans");break;default:this.translate.use("en")}}static \u0275fac=function(a){return new(a||I)(t.Y36(t.sBO),t.Y36(y.vx),t.Y36(h),t.Y36(v.F0),t.Y36(P.s))};static \u0275cmp=t.Xpm({type:I,selectors:[["app-layout"]],decls:31,vars:20,consts:[[4,"ngIf"],["color","primary",1,"toolbar"],[1,"example-app-name"],["mat-icon-button","","aria-label","Menu",3,"click"],[1,"example-spacer"],["mat-icon-button","","aria-label","More",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"example-container"],[1,"sidenav-container"],["fixedTopGap","0",3,"mode","fixedInViewport","opened"],["snav",""],[1,"nav-list"],[4,"ngFor","ngForOf"],[1,"rounter-outlet"],[1,"k-icon","k-i-loading"],["mat-list-item","",3,"click"],[1,"sidenav-menu-icon"],["mat-list-item","",1,"sub-mat-list-item",3,"click"]],template:function(a,s){if(1&a){const O=t.EpF();t.YNc(0,z,2,0,"div",0),t.TgZ(1,"mat-toolbar",1)(2,"h1",2),t._uU(3,"Angular Go"),t.qZA(),t.TgZ(4,"button",3),t.NdJ("click",function(){t.CHM(O);const A=t.MAs(25);return t.KtG(A.toggle())}),t.TgZ(5,"mat-icon"),t._uU(6,"menu"),t.qZA()(),t.TgZ(7,"span"),t._uU(8),t.qZA(),t._UZ(9,"span",4),t.TgZ(10,"span")(11,"button",5)(12,"mat-icon"),t._uU(13,"more_vert"),t.qZA()(),t.TgZ(14,"mat-menu",null,6)(16,"button",7),t.NdJ("click",function(){return s.setLanguage()}),t.TgZ(17,"mat-icon"),t._uU(18,"language"),t.qZA(),t.TgZ(19,"span"),t._uU(20),t.ALo(21,"translate"),t.qZA()()()()(),t.TgZ(22,"div",8)(23,"mat-sidenav-container",9)(24,"mat-sidenav",10,11)(26,"mat-nav-list",12),t.YNc(27,Y,7,3,"ng-container",13),t.qZA()(),t.TgZ(28,"mat-sidenav-content")(29,"div",14),t._UZ(30,"router-outlet"),t.qZA()()()()}if(2&a){const O=t.MAs(15),d=t.MAs(25);t.Q6J("ngIf",s.loading),t.xp6(2),t.ekj("example-is-mobile",s.mobileQuery.matches)("hide",!d.opened),t.xp6(5),t.ekj("hide",s.mobileQuery.matches&&d.opened),t.xp6(1),t.Oqu(s.title),t.xp6(3),t.Q6J("matMenuTriggerFor",O),t.xp6(9),t.Oqu(t.lcZ(21,18,"LANGUAGE")),t.xp6(2),t.ekj("example-is-mobile",s.mobileQuery.matches),t.xp6(2),t.Q6J("mode",s.mobileQuery.matches?"over":"side")("fixedInViewport",!0)("opened",!s.mobileQuery.matches),t.xp6(2),t.ekj("example-is-mobile",s.mobileQuery.matches),t.xp6(1),t.Q6J("ngForOf",s.items)}},dependencies:[M.sg,M.O5,v.lC,m.JX,m.TM,m.Rh,T.Hw,F.Ye,D.i$,D.Hk,D.Tg,b.lW,L.VK,L.OP,L.p6,Q.X],styles:[".example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;inset:0}.sidenav-toolbar[_ngcontent-%COMP%]{position:fixed;z-index:10;top:0;width:255px;display:flex}.toolbar[_ngcontent-%COMP%]{display:flex;position:fixed;z-index:10;top:0;left:0;right:0;width:100%}.example-is-mobile[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{display:flex;position:fixed;z-index:10;top:0;right:0;width:100%}h1.example-app-name[_ngcontent-%COMP%]{padding-left:16px;width:255px;font-weight:700}.example-is-mobile[_ngcontent-%COMP%]   h1.example-app-name[_ngcontent-%COMP%]{padding-left:8px;width:255px;font-weight:700}.sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto;margin-top:4rem}.example-is-mobile[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto;margin-top:3.5rem}.nav-list[_ngcontent-%COMP%]{margin-top:4rem}.example-is-mobile[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{margin-top:3.5rem}body[_ngcontent-%COMP%]{font-family:Roboto,Arial,sans-serif;margin:0}.basic-container[_ngcontent-%COMP%]{padding:30px}.mat-sidenav[_ngcontent-%COMP%]{width:255px}.rounter-outlet[_ngcontent-%COMP%]{padding:20px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-drawer-container[_ngcontent-%COMP%], .mat-drawer-content[_ngcontent-%COMP%]{position:unset!important}.hide[_ngcontent-%COMP%]{display:none}.sidenav-menu-icon[_ngcontent-%COMP%]{margin-right:.6rem;padding-bottom:1.7rem;font-size:24px}.sidenav-premium-icon[_ngcontent-%COMP%]{margin-left:.4rem;font-size:20px}.premium-feature[_ngcontent-%COMP%]{color:gray!important}.sub-mat-list-item[_ngcontent-%COMP%]{padding-left:1.3rem!important}"]})}class x{appInsightsMonitoringService;title=class E{static get APP_NAME(){return"Angular Go"}}.APP_NAME;isLogin=!1;constructor(o){this.appInsightsMonitoringService=o}ngOnInit(){}static \u0275fac=function(a){return new(a||x)(t.Y36(g))};static \u0275cmp=t.Xpm({type:x,selectors:[["app-root"]],decls:1,vars:0,consts:[["layout",""]],template:function(a,s){1&a&&t._UZ(0,"app-layout",0)},dependencies:[I],encapsulation:2})}class U{constructor(){}ngOnInit(){}static \u0275fac=function(a){return new(a||U)};static \u0275cmp=t.Xpm({type:U,selectors:[["app-page-not-found"]],decls:2,vars:0,template:function(a,s){1&a&&(t.TgZ(0,"p"),t._uU(1," Page Not Found\n"),t.qZA())},encapsulation:2})}class B{constructor(){}ngOnInit(){}static \u0275fac=function(a){return new(a||B)};static \u0275cmp=t.Xpm({type:B,selectors:[["app-help"]],decls:19,vars:0,consts:[["id","toggle1-5d",1,"toggle1","app-help__section"],[1,"container"],[1,"media-container-row"],[1,"col-12","col-md-8"],[1,"section-head","text-center","space30"],[1,"mbr-section-title","pb-5","mbr-fonts-style","display-2"],[1,"clearfix"],["id","bootstrap-toggle",1,"toggle-panel","accordionStyles","tab-content"],[1,"card"],["role","tab","id","headingOne",1,"card-header"],["role","button","data-toggle","collapse","data-parent","#accordion","data-core","","href","#collapse1_473","aria-expanded","false","aria-controls","collapse1",1,"collapsed","panel-title","text-black"],[1,"mbr-fonts-style","display-5"],[1,"sign","mbr-iconfont","mbri-arrow-down","inactive"],["id","collapse1_473","role","tabpanel","aria-labelledby","headingOne",1,"panel-collapse","noScroll","collapse"],[1,"panel-body","p-4"],[1,"mbr-fonts-style","panel-text","display-7"]],template:function(a,s){1&a&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),t._uU(6," FAQ"),t.qZA()(),t._UZ(7,"div",6),t.TgZ(8,"div",7)(9,"div",8)(10,"div",9)(11,"a",10)(12,"h4",11),t._UZ(13,"span",12),t._uU(14," What is Angular Go? "),t.qZA()()(),t.TgZ(15,"div",13)(16,"div",14)(17,"p",15),t._uU(18," Angular is"),t.qZA()()()()()()()()())},styles:[".app-help__section[_ngcontent-%COMP%]{height:100vh}"]})}const G=[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",loadChildren:()=>Promise.resolve().then(n.bind(n,84731)).then(r=>r.HomeModule)},{path:"sample",loadChildren:()=>n.e(645).then(n.bind(n,51645)).then(r=>r.SampleModule)},{path:"account",loadChildren:()=>n.e(773).then(n.bind(n,62773)).then(r=>r.AccountModule)},{path:"help",component:B},{path:"**",component:U}];class Z{static \u0275fac=function(a){return new(a||Z)};static \u0275mod=t.oAB({type:Z});static \u0275inj=t.cJS({imports:[v.Bz.forRoot(G,{relativeLinkResolution:"legacy"}),v.Bz]})}var H=n(42253),S=n(20923),X=(n(88279),n(85165));class C extends t.qLn{http;appInsightsMonitoringService;constructor(o,a){super(),this.http=o,this.appInsightsMonitoringService=a}handleError(o){super.handleError(o);try{const a=c.N.baseUrl,s=o.toString(),O=X.parse(o),d=s+"\r\nURL: "+window.location.href+"\r\ntack trace:"+O.join("\r\n")+"\r\n";this.appInsightsMonitoringService.logException(o);const A={headers:new l.WM({"Content-Type":"application/json"})};this.http.post(a+"/Exception",JSON.parse(d),A).subscribe(()=>{console.log("Error Logged:\r\n"+d)},W=>{console.error(W)})}catch(a){console.warn("Error server-side logging failed"),console.log(a)}}static \u0275fac=function(a){return new(a||C)(t.LFG(l.eN),t.LFG(g))};static \u0275prov=t.Yz7({token:C,factory:C.\u0275fac})}var K=n(87341),w=n(82946),k=n(44466);function $(r){return()=>r.use(localStorage.getItem("locale"))}class R{constructor(o){!function N(r,o){if(r)throw new Error(`${o} has already been loaded. Import Core modules in the AppModule only.`)}(o,"CoreModule")}static \u0275fac=function(a){return new(a||R)(t.LFG(R,12))};static \u0275mod=t.oAB({type:R});static \u0275inj=t.cJS({providers:[{provide:t.qLn,useClass:C},g,h,w.a,K.e,P.s,{provide:t.ip1,useFactory:$,deps:[P.s],multi:!0}],imports:[M.ez,v.Bz,S.IJ,m.SJ,T.Ps,F.g0,D.ie,b.ot,L.Tx,k.m]})}var q=n(84731);const tt=c.N.baseUrl;function nt(r){r.setBaseUrl(tt+"/api"),r.setDefaultHeaders({"Content-Type":"application/json; charset=UTF-8",Authorization:"Bearer "+JSON.parse(localStorage.getItem("currentUser")).token.access_token})}class J{static \u0275fac=function(a){return new(a||J)};static \u0275mod=t.oAB({type:J,bootstrap:[x]});static \u0275inj=t.cJS({imports:[i.b2,u.PW,e.UX,l.JF,H.Ec.forRoot(nt),S.IJ,Z,R,q.HomeModule]})}c.N.production&&(0,t.G48)(),i.q6().bootstrapModule(J).catch(r=>console.log(r))}},_=>{_.O(0,[736],()=>_(_.s=58808)),_.O()}]);