(function(e){function t(t){for(var i,n,r=t[0],l=t[1],c=t[2],p=0,u=[];p<r.length;p++)n=r[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],i=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(i=!1)}i&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},s={app:0},o=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1f7a":function(e,t,a){},"20d3":function(e,t,a){e.exports=a.p+"img/user.e6c0e18a.svg"},"272e":function(e,t,a){e.exports=a.p+"img/portrait-portfolio2.5694effe.jpg"},"2da3":function(e,t,a){e.exports=a.p+"img/instagram.6c1e7215.svg"},4926:function(e,t,a){e.exports=a.p+"img/Homepage.0ca1ab45.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar",{on:{goto:e.goto}}),a("b-container",[a("router-view")],1)],1)},o=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"nav-wrapper",staticClass:"nav-wrapper"},[a("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav-menu"}},[a("li",{staticClass:"nav-menu_item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#home",expression:"'#home'"}],attrs:{href:"#"}},[e._v("Home")])]),a("li",{staticClass:"nav-menu_item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about-me",expression:"'#about-me'"}],attrs:{href:"#"}},[e._v("About")])]),a("li",{staticClass:"nav-menu_item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],attrs:{href:"#"}},[e._v("Portfolio")])]),a("li",{staticClass:"nav-menu_item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#design",expression:"'#design'"}],attrs:{href:"#"}},[e._v("Design")])]),a("li",{staticClass:"nav-menu_item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],attrs:{href:"#"}},[e._v("Contact")])])]),[a("div",{staticClass:"nav-collapse-wrapper"},[a("b-navbar",{attrs:{toggleable:"",type:"dark",variant:"dark"}},[a("b-navbar-brand",{attrs:{href:"#"}},[e._v("Navigation")]),a("b-navbar-toggle",{attrs:{target:"navbar-toggle-collapse"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.expanded;return[a("b-icon",t?{attrs:{icon:"chevron-bar-up"}}:{attrs:{icon:"chevron-bar-down"}})]}}])}),a("b-collapse",{attrs:{id:"navbar-toggle-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#home",expression:"'#home'"}],attrs:{href:"#"}},[e._v("Home")]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about-me",expression:"'#about-me'"}],attrs:{href:"#"}},[e._v("About Me")]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],attrs:{href:"#"}},[e._v("Portfolio")]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#design",expression:"'#design'"}],attrs:{href:"#"}},[e._v("Design Process")]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],attrs:{href:"#"}},[e._v("Contact")])],1)],1)],1)],1)]],2)},r=[],l={mounted:function(){var e=this;window.addEventListener("scroll",(function(){var t=window.scrollY;t>36?(e.$refs["nav-wrapper"].style.position="fixed",e.$refs["nav-wrapper"].style["border-bottom"]="2px solid #f3f3f3"):(e.$refs["nav-wrapper"].style.position="absolute",e.$refs["nav-wrapper"].style["border-bottom"]="none")}))},methods:{goto:function(e){this.$emit("goto",e)}}},c=l,d=a("2877"),p=Object(d["a"])(c,n,r,!1,null,null,null),u=p.exports,m={name:"App",components:{Navbar:u},data:function(){return{}},methods:{goto:function(e){console.log(e);var t=0;"home"===e?t=0:"about"===e?t=750:"portfolio"===e?t=1750:"design"===e?t=2625:"contact"===e&&(t=3500),window.scrollTo(0,t)}}},v=m,f=Object(d["a"])(v,s,o,!1,null,null,null),g=f.exports,h=a("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-view-container"},[a("HomeSection"),a("AboutMeSection"),a("PortfolioSection",{attrs:{projects:e.projects}}),a("DesignProcessSection"),a("ContactSection")],1)},_=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"home_section",attrs:{id:"home"}},[e._m(0),a("div",{staticClass:"homepage-image_container"},[a("div",{staticClass:"homepage-image_wrapper"},[a("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"text-upper-left-wrapper"},[a("span",[e._v("Taking the")]),e._v(" "),a("span",[e._v("Best of Both Worlds")])]),e._m(1),a("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"text-lower-right-wrapper"},[a("span",[e._v("Immerse Yourself")]),e._v(" "),a("span",[e._v("Warp Reality")])])])])])},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title-container"},[a("h1",[e._v("TRACY YU.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"image_wrapper"},[i("img",{attrs:{src:a("4926"),alt:"Main Homepage"}})])}],C={},k=Object(d["a"])(C,y,w,!1,null,null,null),S=k.exports,j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"about-me_container container",attrs:{id:"about-me"}},[i("section",{staticClass:"about-me-description_container"},[i("div",{staticClass:"about-me_description"},[i("h3",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}]},[e._v("Where do I begin...")]),i("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"description-body"},[i("p",[e._v(" I’ve cultivated a passion for problem solving and for building large scale applications to help client’s ideas come to fruition. Having built businesses and products ranging from ecommerce to aerospace, I’ve gained an integral ability to see the entire pipeline as a whole and not just separate components. I love leveraging my skills in system design, system architecture, and user experience to develop real-world applications that help the world stay connected. ")]),i("p",[e._v(" Recently, I have been putting more focus on understanding UX and UI concepts and theories to create user-friendly and engaging prototypes best suited for different needs. My research has span over different industries from game design, e-commerce product pages, and internal organizational dashboard for device companies, and given me a broader perspective on tackling design approaches for clients. Nothing is more satisfying than bringing 2D designs to life as web applications for users to engage and interact with. ")])])]),i("div",{staticClass:"about-me_image-container"},[i("div",{staticClass:"top-header_wrapper"},[i("h2",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"top-header"},[e._v(" ABOUT ")])]),i("div",{staticClass:"about-me_image"},[i("img",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"profile-image",attrs:{src:a("272e"),alt:"profile photo"}})]),i("div",{staticClass:"bottom-header_wrapper"},[i("h2",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"bottom-header"},[e._v(" ME ")])])])]),i("section",{staticClass:"skills_container"},[i("h3",[e._v("Skills")]),i("div",{staticClass:"skills-infograph-container"},[i("div",{staticClass:"frontend skills_description-container"},[i("ul",{class:"frontend"===e.selectedSkill||"me"===e.selectedSkill?"emphasize":""},[i("li",[e._v("Javascript")]),i("li",[e._v("React")]),i("li",[e._v("NextJS")]),i("li",[e._v("HTML5")]),i("li",[e._v("CSS3")]),i("li",[e._v("SASS")]),i("li",[e._v("Redux")]),i("li",[e._v("Semantic UI")]),i("li",[e._v("Bootstrap")]),i("li",[e._v("D3")])])]),i("div",{staticClass:"design skills_description-container"},[i("ul",{class:"design"===e.selectedSkill||"me"===e.selectedSkill?"emphasize":""},[i("li",[e._v("Sketch")]),i("li",[e._v("Lightroom")]),i("li",[e._v("InVision")]),i("li",[e._v("Wireframes")]),i("li",[e._v("UI Prototyping")])])]),i("div",{staticClass:"skills-infograph_image-container"},[i("SkillsInfoGraph",{on:{selectSkill:e.selectSkill}})],1),i("div",{staticClass:"backend skills_description-container"},[i("ul",{class:"backend"===e.selectedSkill||"me"===e.selectedSkill?"emphasize":""},[i("li",[e._v("Node.js")]),i("li",[e._v("Express")]),i("li",[e._v("MySQL")]),i("li",[e._v("MongoDB")]),i("li",[e._v("Mongoose")]),i("li",[e._v("Python")]),i("li",[e._v("Restful API")]),i("li",[e._v("Sequelize")]),i("li",[e._v("Firebase")])])]),i("div",{staticClass:"tools skills_description-container"},[i("ul",{class:"tools"===e.selectedSkill||"me"===e.selectedSkill?"emphasize":""},[i("li",[e._v("Jest")]),i("li",[e._v("Mocha")]),i("li",[e._v("Enzyme")]),i("li",[e._v("AWS")]),i("li",[e._v("Git")]),i("li",[e._v("Webpack")]),i("li",[e._v("Heroku")])])])])])])},x=[],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"skills-infograph_wrapper"},[a("div",{staticClass:"circle frontend_wrapper",on:{mouseover:function(t){return e.selectSkill("frontend")},mouseleave:function(t){return e.selectSkill("")}}},[a("span",[e._v("FRONTEND")])]),a("div",{staticClass:"circle design_wrapper",on:{mouseover:function(t){return e.selectSkill("design")},mouseleave:function(t){return e.selectSkill("")}}},[a("span",[e._v("DESIGN")])]),a("div",{staticClass:"circle me_wrapper",on:{mouseover:function(t){return e.selectSkill("me")},mouseleave:function(t){return e.selectSkill("")}}},[a("span",[e._v("ME")])]),a("div",{staticClass:"circle backend_wrapper",on:{mouseover:function(t){return e.selectSkill("backend")},mouseleave:function(t){return e.selectSkill("")}}},[a("span",[e._v("BACKEND")])]),a("div",{staticClass:"circle tools_wrapper",on:{mouseover:function(t){return e.selectSkill("tools")},mouseleave:function(t){return e.selectSkill("")}}},[a("span",[e._v("TOOLS")])])])},E=[],O={methods:{selectSkill:function(e){this.$emit("selectSkill",e)}}},P=O,L=Object(d["a"])(P,D,E,!1,null,null,null),A=L.exports,I={data:function(){return{selectedSkill:null}},components:{SkillsInfoGraph:A},methods:{selectSkill:function(e){this.selectedSkill=e}}},N=I,M=Object(d["a"])(N,j,x,!1,null,null,null),T=M.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"portfolio_container container",attrs:{id:"portfolio"}},[a("h2",[e._v("PORTFOLIO")]),a("section",{staticClass:"portfolio_wrapper"},[a("TableFilter",{attrs:{category:e.selectedCategory},on:{selectFilter:e.selectFilter}}),a("div",{staticClass:"project_grid-container"},e._l(e.filteredProjects,(function(t){return a("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],key:t.title,staticClass:"card portfolio-item",on:{click:function(a){return e.showModal(t.title)}}},[a("a",{staticClass:"portfolio-link",attrs:{"data-toggle":"modal"}},[a("div",{staticClass:"portfolio-hover"},[a("div",{staticClass:"portfolio-hover-content"},[a("p",{staticClass:"portfolio-hover-description"},[e._v(e._s(t.title))])])]),a("img",{attrs:{src:t.images[0],alt:t.title}})])])})),0)],1),null!==e.selectedProject?[a("PortfolioModal",{attrs:{project:e.selectedProject}})]:e._e()],2)},R=[],z=(a("4de4"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-nav",{staticClass:"filter-menu",attrs:{pills:"",justified:""}},[a("b-nav-item",{staticClass:"filter-menu_item",attrs:{active:"all"===e.category},on:{click:function(t){return e.selectFilter("all")}}},[a("span",[e._v("All")])]),a("b-nav-item",{staticClass:"filter-menu_item",attrs:{active:"backend"===e.category},on:{click:function(t){return e.selectFilter("backend")}}},[a("span",[e._v("Backend")])]),a("b-nav-item",{staticClass:"filter-menu_item",attrs:{active:"frontend"===e.category},on:{click:function(t){return e.selectFilter("frontend")}}},[a("span",[e._v("Frontend")])]),a("b-nav-item",{staticClass:"filter-menu_item",attrs:{active:"web"===e.category},on:{click:function(t){return e.selectFilter("web")}}},[a("span",[e._v("Web / Javascript")])])],1)}),F=[],J={props:{category:String},methods:{selectFilter:function(e){this.$emit("selectFilter",e)}}},H=J,W=Object(d["a"])(H,z,F,!1,null,null,null),B=W.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{ref:"my-modal",attrs:{centered:"",id:"modal-1",size:"lg"},scopedSlots:e._u([{key:"modal-header",fn:function(t){var i=t.close;return[a("b-button",{attrs:{size:"sm",variant:"outline-danger"},on:{click:function(e){return i()}}},[e._v(" X ")])]}},{key:"modal-footer",fn:function(t){var i=t.ok;return[a("b-button",{staticClass:"close-btn",attrs:{block:"",variant:"secondary"},on:{click:function(e){return i()}}},[e._v(" CLOSE PROJECT ")])]}}])},[a("div",{staticClass:"d-block text-center"},[a("h3",{staticClass:"modal-header text-center"},[e._v(e._s(e.project.title))]),a("p",{staticClass:"project-summary text-center"},[e._v(e._s(e.project.summary))]),a("CarouselProjectImages",{attrs:{images:e.project.images}}),a("p",{staticClass:"project-detailed-summary text-center p-4"},[e._v(e._s(e.project.detailedDescription))]),a("b-button",{staticClass:"project-link",attrs:{variant:"primary",href:e.project.githubLink}},[e._v(" GITHUB ")])],1)])},G=[],q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"400","img-height":"450"},on:{"sliding-start":e.onSlideStart,"sliding-end":e.onSlideEnd},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},e._l(e.images,(function(e,t){return a("b-carousel-slide",{key:t,attrs:{"img-src":e}})})),1)},Q=[],Y={props:{images:Array}},Z=Y,K=Object(d["a"])(Z,q,Q,!1,null,null,null),X=K.exports,V={props:{project:Object},components:{CarouselProjectImages:X}},ee=V,te=Object(d["a"])(ee,U,G,!1,null,null,null),ae=te.exports,ie={props:{projects:Array},components:{TableFilter:B,PortfolioModal:ae},data:function(){return{filteredProjects:this.projects,selectedProject:null,selectedCategory:"all"}},methods:{showModal:function(e){this.selectedProject=this.projects.filter((function(t){return t.title===e}))[0],this.$root.$emit("bv::show::modal","modal-1","#btnShow")},hideModal:function(){this.$root.$emit("bv::hide::modal","modal-1","#btnShow")},toggleModal:function(){this.$refs["my-modal"].toggle("#toggle-btn")},selectFilter:function(e){this.selectedCategory=e,this.filteredProjects="all"===e?this.projects:this.projects.filter((function(t){return t.category===e}))}}},se=ie,oe=Object(d["a"])(se,$,R,!1,null,null,null),ne=oe.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"design-process_container container",attrs:{id:"design"}},[a("h2",[e._v("DESIGN PROCESS")]),a("div",{staticClass:"design_process_wrapper"},[a("section",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"design-process_section"},[e._m(0),e._m(1)]),a("section",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"design-process_section"},[e._m(2),e._m(3)])])])},le=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"design-process_description"},[a("h3",[e._v("Project 10 K")]),a("div",{staticClass:"description-body"},[a("p",[e._v(" High-level overview of all departments for management and board members get up-to-date information about important statistics and data per quarter. ")]),a("p",[e._v(" Incorporates a world map to show location of all devices, sales charts for all quarterlu revenue, QA checklist while during QA phase, Jira Integration for all projects spread acrosee Dev Team, important calendars for Marketing/ Press and internal events for entire company. ")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"design-process_image-container"},[i("img",{staticClass:"p10k-image-1",attrs:{src:a("7840")}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"design-process_description"},[a("h3",[e._v("Device Management Inventory Dashboard")]),a("div",{staticClass:"description-body"},[a("p",[e._v(" Device Management Dashboard for internal usage among Operations and Dev Team to manage and track all devices shipped and used by individual clients and instituations for all platforms. ")]),a("p",[e._v(" Displays instrumentation data for individual devices connected to specific organizations. Allows user to view specific content platform for each device while having access to overview data about organization spanning over weeks, months, and one year period. ")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"design-process_image-container"},[i("img",{staticClass:"p10k-image-2",attrs:{src:a("e6f3")}})])}],ce={},de=Object(d["a"])(ce,re,le,!1,null,null,null),pe=de.exports,ue=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},me=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"contact-me_container container",attrs:{id:"contact"}},[i("h2",[e._v("CONTACT ME")]),i("ul",{staticClass:"social-list"},[i("li",{staticClass:"social-list_item"},[i("img",{staticClass:"social-icon",attrs:{src:a("5fff"),alt:"email icon"}}),i("span",{staticClass:"social-description"},[e._v("Email: tracykaleiyu@gmail.com")])]),i("li",{staticClass:"social-list_item"},[i("img",{staticClass:"social-icon",attrs:{src:a("efde"),alt:"linkedin icon"}}),i("span",{staticClass:"social-description"},[e._v("LinkedIn: "),i("a",{attrs:{href:"https://www.linkedin.com/in/tracyyu93/"}},[e._v("tracyyu93")])])]),i("li",{staticClass:"social-list_item"},[i("img",{staticClass:"social-icon",attrs:{src:a("dc22"),alt:"github icon"}}),i("span",{staticClass:"social-description"},[e._v("Github: "),i("a",{attrs:{href:"https://github.com/tracyyu"}},[e._v("tracyyu")])])]),i("li",{staticClass:"social-list_item"},[i("img",{staticClass:"social-icon",attrs:{src:a("20d3"),alt:"blog icon"}}),i("span",{staticClass:"social-description"},[e._v("Blog: "),i("a",{attrs:{href:"https://www.glimpseofwanderlust.com/"}},[e._v("glimpseofwanderlust")])])]),i("li",{staticClass:"social-list_item"},[i("img",{staticClass:"social-icon",attrs:{src:a("2da3"),alt:"instagram icon"}}),i("span",{staticClass:"social-description"},[e._v("Instgram: "),i("a",{attrs:{href:"https://www.instagram.com/tracyyu_/"}},[e._v("tracyyu_")])])])])])}],ve={},fe=Object(d["a"])(ve,ue,me,!1,null,null,null),ge=fe.exports,he={name:"Home",components:{HomeSection:S,AboutMeSection:T,PortfolioSection:ne,DesignProcessSection:pe,ContactSection:ge},data:function(){return{projects:[{title:"Initiative Project",images:["https://portfolio-vue-ty.s3.amazonaws.com/Initiative-project.png"],summary:"Dungeons and Dragons Game Tracker for Game Masters",detailedDescription:"A web application designed for game masters of Dungeon and Dragons to track and manage current and previous initiatives for different campaigns. \n                              Its responsive and easy-to-use design allows beginning or advance game masters to make quick edits and customize existing players or monsters \n                              without disrupting game play. Built with React, CSS, and Firebase.",githubLink:"https://github.com/theinitiativeproject/The-Initiative-Project-public",category:"frontend"},{title:"Rent N' Share",images:["https://portfolio-vue-ty.s3.amazonaws.com/Rent-N-Share.png","https://portfolio-vue-ty.s3.amazonaws.com/FEC_Reviews_Condensed.png"],summary:"Fronetnd Web App of the Product Page of RenttheRunway",detailedDescription:" A frontend-focused, mockup web application for retail ecommerce RenttheRunway that allows clients to browse and rent one-time or monthly subscription of designer apparel.\n                              A microservice architecutre app built using React, CSS modules, and Sass with images hosting on AWS.",githubLink:"https://github.com/tracyyu/rentTheRunwayReviewsService",category:"frontend"},{title:"Sharebnb Legacy",images:["https://portfolio-vue-ty.s3.amazonaws.com/sharebnb-legacy.png"],summary:"Sharebnb Calendar Component Databse Optimization.",detailedDescription:"Re-architected the legacy backend of a hospitality marketplace Microservice to support production-level traffic. Scope of work required a refactoring of certain frontend React components and life-cycle methods for fetching data. \n                              Overhauled the legacy NoSQL architecture improving query times by 100ms by eliminating the ORM layer opting for raw MYSQL with partition tables and indexing on listing ids.",githubLink:"https://github.com/sdctargaryen/Reservation-Checkout/",category:"backend"},{title:"Rose Edition",images:["https://portfolio-vue-ty.s3.amazonaws.com/Rose-Edition.png"],summary:"UCLA CS group project focus on optimally sorting data efficiently",detailedDescription:"A dual E-commerce/ Logistic web app prototype for company Rose Edition showcasing both side of their businesses and combining both platforms into one user friendly platform.",githubLink:"https://github.com/tracyyu/UCLA-CS-145-Cuisiner",category:"frontend"},{title:"Shutterscope",images:["https://portfolio-vue-ty.s3.amazonaws.com/shutterscope-preview.png"],summary:"Protoypte FrontPage WEb Design using AngularJS Framework to ",detailedDescription:"Freontend Web Design of a travel app focused on allowing users to document their travel photos \n                              and blog to share with other like-minded travelers looking for advice on popular travel destinations",githubLink:"https://github.com/tracyyu/UCLA-CS-145-Cuisiner",category:"frontend"},{title:"InspoDiary",images:["https://portfolio-vue-ty.s3.amazonaws.com/inspodiary.png"],summary:"Inspire everyday & Share it with someone.",detailedDescription:"A tumblr/yelp/instagram/travel social media site that have users journal their ideas, thoughts, tip, and hacks they come up with or from hearsay.\n                                  Website incorporates CSS, HTML, Javascript, and AngularJS to create dynamic webpage to provide a much more fluid experience.",githubLink:"https://github.com/tracyyu/InspoDiary",category:"web"},{title:"Dr. Jie Zheng Lab",images:["https://portfolio-vue-ty.s3.amazonaws.com/labdesign.png","https://portfolio-vue-ty.s3.amazonaws.com/lab-contact-page.png"],summary:"A biomolecular lab focusing on drug discovery under Jules Stein Institute.",detailedDescription:"Dr. Jie Zheng Lab</a> is a website incorporating Javascript, SCSS and Bootstrap to showcase past and current research projects and updated lab documentations.\n                                  The website is designed to be simple and easy to maneuver, so the focus is solely on the information displayed. This website could be used as template for future websites and all components are made in teh same style, and can be easily integrated for future projects.",githubLink:"http://htmlpreview.github.io/?https://github.com/tracyyu/Dr.Zheng-Lab-Design/blob/master/Jie_Zhang_Lab/index.html",category:"web"},{title:"FlyPath Simulator",images:["https://portfolio-vue-ty.s3.amazonaws.com/flightpath.png"],summary:"Flight tracker Demo for Teledyne to project flightpatterns.",detailedDescription:'A web application designed during my internship at Teledyne that incorporates "real-time" flight data recorded on their flight recorder and displays to into an application for their clients.\n                                  The XML parser takes a JSON file and parse the information in python and displayed using HTML, CSS, and  Bootstrap on a Django framework. The application was expected to be presented at Teledyne\'s annual Fall Conference.',githubLink:"https://github.com/tracyyu/FlightSimulator",category:"backend"},{title:"Revolving Images",images:["https://portfolio-vue-ty.s3.amazonaws.com/gallery.png"],summary:"3D sliding image displayer.",detailedDescription:"A mixture of CSS, HTML, and Javascript to play around with 3D divs to display images. A different take on an image gallery.\n                                  Can click on left and right image to rotate the gallery instead of the buttons.",githubLink:"https://htmlpreview.github.io/?https://github.com/tracyyu/revolvingImages/blob/master/index.html",category:"web"},{title:"Cuisiner Database",images:["https://portfolio-vue-ty.s3.amazonaws.com/kaggle.png","https://portfolio-vue-ty.s3.amazonaws.com/kaggle-preview.png"],summary:"UCLA CS group project focus on optimally sorting data efficiently",detailedDescription:"'Project is based on the Kaggle Competition, what is cooking? Where we are given \n                              a database of ingredients and cuisines and must sort all the databse on\n                              request of the user in the most efficient time and method. The project \n                              focused on the different concepts and database sorting algorithms to determine which method\n                               would be the optimal choice in dealing with large amounts of data.",githubLink:"https://github.com/tracyyu/UCLA-CS-145-Cuisiner",category:"backend"}]}},computed:{},methods:{}},be=he,_e=Object(d["a"])(be,b,_,!1,null,null,null),ye=_e.exports;i["default"].use(h["a"]);var we=new h["a"]({mode:"history",routes:[{path:"/",component:ye}]}),Ce=(a("4160"),a("159b"),new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("enter"),t.unobserve(e.target))}))}))),ke={bind:function(e){e.classList.add("before-enter"),Ce.observe(e)}},Se=a("5f5b"),je=a("b1e0"),xe=(a("1f7a"),a("f13c"));i["default"].directive("scrollanimation",ke),i["default"].config.productionTip=!1,i["default"].use(xe),i["default"].use(xe,{container:"body",duration:500,easing:"ease",offset:-200,force:!1,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),i["default"].use(Se["a"]),i["default"].use(je["a"]),new i["default"]({router:we,render:function(e){return e(g)}}).$mount("#app")},"5fff":function(e,t,a){e.exports=a.p+"img/telegram-1.64fe6150.svg"},7840:function(e,t,a){e.exports=a.p+"img/p10k-design-portfolio.17e132ae.jpg"},dc22:function(e,t,a){e.exports=a.p+"img/github-logo.f9b77a93.svg"},e6f3:function(e,t,a){e.exports=a.p+"img/AVR Device Management Dashboard (7).f81e4c46.png"},efde:function(e,t,a){e.exports=a.p+"img/linkedin.9e03d1cb.svg"}});
//# sourceMappingURL=app.ff38a417.js.map