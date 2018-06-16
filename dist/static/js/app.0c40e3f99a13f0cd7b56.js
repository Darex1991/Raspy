webpackJsonp([1],{"+tRJ":function(t,e){},"/UvA":function(t,e){},"/zW6":function(t,e){},"1ApB":function(t,e){},"1mfk":function(t,e){},"7YgM":function(t,e){t.exports={name:"raspy",version:"0.16.0+43",description:"Client for the Raspy Rest API server.",author:"Ardalan Samimi <ardalan@saturnfive.se>",private:!0,scripts:{dev:"node build/increment-version.js --version=build && webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",start:"npm run dev",build:"node build/increment-version.js --version=build && node build/build.js",patch:"node build/increment-version.js --version=patch --skip-build",minor:"node build/increment-version.js --version=minor --skip-build --reset-patch",major:"node build/increment-version.js --version=major --skip-build --reset-minor"},dependencies:{"@fortawesome/fontawesome":"^1.1.4","@fortawesome/fontawesome-free-brands":"^5.0.8","@fortawesome/fontawesome-free-solid":"^5.0.8","@fortawesome/vue-fontawesome":"0.0.22",axios:"^0.18.0",downloadjs:"^1.4.7",vue:"^2.5.2","vue-router":"^3.0.1","webpack-shell-plugin":"^0.5.0"},devDependencies:{autoprefixer:"^7.1.2","babel-core":"^6.22.1","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-loader":"^7.1.1","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-runtime":"^6.22.0","babel-plugin-transform-vue-jsx":"^3.5.0","babel-preset-env":"^1.3.2","babel-preset-stage-2":"^6.22.0",chalk:"^2.0.1","copy-webpack-plugin":"^4.0.1","css-loader":"^0.28.0","extract-text-webpack-plugin":"^3.0.0","file-loader":"^1.1.4","friendly-errors-webpack-plugin":"^1.6.1","html-webpack-plugin":"^2.30.1","node-notifier":"^5.1.2","optimize-css-assets-webpack-plugin":"^3.2.0",ora:"^1.2.0",portfinder:"^1.0.13","postcss-import":"^11.0.0","postcss-loader":"^2.0.8","postcss-url":"^7.2.1",rimraf:"^2.6.0",semver:"^5.3.0",shelljs:"^0.7.6","uglifyjs-webpack-plugin":"^1.1.1","url-loader":"^0.5.8","vue-loader":"^13.3.0","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.5.2",webpack:"^3.6.0","webpack-bundle-analyzer":"^2.9.0","webpack-dev-server":"^2.9.1","webpack-merge":"^4.1.0"},engines:{node:">= 6.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},KNm6:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a=i("U0v6"),o=i.n(a),n=(i("1P+R"),{name:"Header",components:{FontAwesomeIcon:o.a},methods:{browsePath:function(){var t=this.$CookieManager.getBookmark();return void 0!=t?{name:"Directory",params:{path:t}}:{name:"Browser"}}}}),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("div",{staticClass:"header"},[s("img",{staticStyle:{height:"5vw"},attrs:{src:i("cH+4")}}),t._v(" Raspy "+t._s(this.$Raspy.version)+"\n\t")]),t._v(" "),s("nav",{staticClass:"menu"},[s("router-link",{class:{active:1==this.$route.meta.tab},attrs:{to:this.browsePath()}},[s("font-awesome-icon",{attrs:{icon:"hdd"}}),t._v(" "),s("div",[t._v("Browse files")])],1),t._v(" "),s("router-link",{class:{active:2==this.$route.meta.tab},attrs:{to:"/dashboard"}},[s("font-awesome-icon",{attrs:{icon:"tachometer-alt"}}),t._v(" "),s("div",[t._v("Dashboard")])],1),t._v(" "),s("router-link",{class:{active:3==this.$route.meta.tab},attrs:{to:"/settings"}},[s("font-awesome-icon",{attrs:{icon:"sliders-h"}}),t._v(" "),s("div",[t._v("Settings")])],1)],1)])},staticRenderFns:[]};var c=i("VU/8")(n,r,!1,function(t){i("1mfk")},"data-v-77234c63",null).exports,l=i("QxPg"),d=i("N4DB"),v=i.n(d),u=i("nV8J"),h=i.n(u),m=i("WzPI"),g=i.n(m);l.default.library.add(v.a,g.a,h.a);var p={name:"Footer",components:{FontAwesomeIcon:o.a}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[this._v("\n\tBuilt with "),e("font-awesome-icon",{attrs:{icon:"heart"}}),this._v(" using "),e("font-awesome-icon",{attrs:{icon:["fab","vuejs"]}}),this._v(", "),e("font-awesome-icon",{attrs:{icon:["fab","node-js"]}}),this._v(" and "),e("font-awesome-icon",{attrs:{icon:["fab","python"]}})],1)},staticRenderFns:[]};var C={name:"App",components:{"app-header":c,"app-footer":i("VU/8")(p,f,!1,function(t){i("UaLM")},"data-v-bbcd4e80",null).exports},created:function(){0==this.$root.isLoggedIn&&this.$root._router.push("/")}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this.$root.isLoggedIn?e("app-header"):this._e(),this._v(" "),e("router-view",{staticClass:"container"}),this._v(" "),e("app-footer")],1)},staticRenderFns:[]};var I=i("VU/8")(C,w,!1,function(t){i("PcsO")},null,null).exports,b=i("/ocq"),_={startsWith:function(t,e){return!!t&&(t=t.toString()).charAt(0)===e.toString()},iconForFile:function(t){var e=t.split("."),i=e[e.length-1];return"pdf"==i?"file-pdf":["png","jpg","gif","svg","tif","bmp"].indexOf(i)>-1?"file-image":["txt","odt","rtf","tex"].indexOf(i)>-1?"file-alt":["doc","docx"].indexOf(i)>-1?"file-word":["ppt","pptx"].indexOf(i)>-1?"file-powerpoint":["xls","xlr","xlsx","ods"].indexOf(i)>-1?"file-excel":["zip","zipx","rar","bz2","gz","7z","arj","jar","tgz"].indexOf(i)>-1?"file-archive":["aif","cda","mid","mp3","mpa","ogg","wav","wma","midi"].indexOf(i)>-1?"file-audio":["avi","flv","h264","m4v","mkv","mov","mp4","mpg","mpeg","vob","wmv"].indexOf(i)>-1?"file-video":["c","cpp","java","class","cs","h","sh","swift","vb","py","erl","php","htm","html","css","js","vue","vue","md"].indexOf(i)>-1?"file-code":"file"},goBack:function(){this.$root._router.go(-1)},prettyPath:function(t){return decodeURIComponent(t)},bytesToHumanReadable:function(t,e){var i=e?1024:1e3;if(t<i)return t;var s=["","K","M","G","T","P","E","Z","Y"],a=Math.floor(Math.log(t)/Math.log(i));return a<=s.length?(t/Math.pow(i,a)).toFixed(1)+s[a]:t}},k={name:"Login",components:{FontAwesomeIcon:o.a},methods:{signIn:function(){this.username.length>0?(this.message=void 0,this.signingIn=!0,this.$APIManager.login(this.username,this.password,function(t){1==t.status?this.$root.createSession(this.username,this.password):(this.message=t.message,this.signingIn=!1)}.bind(this))):this.message="You must specify a username to sign in."}},data:function(){return{username:"",password:"",message:void 0,signingIn:!1}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"wrapper"},[0==t.signingIn?i("div",[i("div",{staticClass:"description"},[t._v("\n\t\t\tLogin to Raspy\n\t\t")]),t._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",name:"username",placeholder:"Username..."},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Password..."},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),i("div",{staticStyle:{"padding-top":"10px"}},[i("div",{staticClass:"button noselect",on:{click:t.signIn}},[t._v("Sign in")])])]),t._v(" "),void 0!=t.message?i("div",{staticClass:"message"},[t._v("\n\t\t\t"+t._s(t.message)+"\n\t\t")]):t._e()]):i("div",{staticClass:"description"},[t._v("\n\t\tSigning in, please wait...\n\t")])])},staticRenderFns:[]};var M={name:"Main",components:{Login:i("VU/8")(k,A,!1,function(t){i("UQQJ")},"data-v-13fd61bc",null).exports}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"wrapper"},[0==this.$root.isLoggedIn?e("Login"):this._e(),this._v(" "),e("div",{staticClass:"splash"},[e("img",{staticStyle:{margin:"auto"},attrs:{src:i("cH+4"),alt:"Raspy"}}),this._v("\n\t\tRaspy "+this._s(this.$Raspy.version.split("+")[0])+"\n")])],1)},staticRenderFns:[]};var y=i("VU/8")(M,D,!1,function(t){i("/UvA")},"data-v-af11fcb4",null).exports,S={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading-splash-view"},[e("div",{staticClass:"spinner"}),this._v(" "),e("div",[this._v("Loading...")])])}]};var x=i("VU/8")({name:"Spinner"},S,!1,function(t){i("ou2X")},"data-v-1d510ca6",null).exports,P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav",{staticClass:"bottom-dialog"},[e("div",{on:{click:this.cancel}},[e("span",[this._v("Cancel")])]),this._v(" "),e("div",{on:{click:this.confirm}},[e("span",[this._v("Confirm")])])])])},staticRenderFns:[]};var F=i("VU/8")({name:"ConfirmButton",props:["cancelCallback","confirmCallback"],methods:{cancel:function(){this.cancelCallback()},confirm:function(){this.confirmCallback()}}},P,!1,function(t){i("KNm6")},null,null).exports,R={props:["directories","files","showHidden","prettyPath"],name:"DirectoryListing",components:{FontAwesomeIcon:o.a},computed:{parentPath:function(){var t=this.prettyPath,e=t.lastIndexOf("/");return e>0?t.substring(0,e):0==e?"/":t}},methods:{icon:function(t){return this.iconForFile(t)}},created:function(){this.startsWith=_.startsWith,this.iconForFile=_.iconForFile}},Z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"wrapper"},[t.files.length>0||t.directories.length>0?i("nav",{staticClass:"file-list-view"},["/"!=this.prettyPath?i("router-link",{staticClass:"row",attrs:{to:{name:"Directory",params:{path:encodeURIComponent(this.parentPath)}}}},[i("div",{staticClass:"icon"},[i("font-awesome-icon",{attrs:{icon:"folder-open"}})],1),t._v(" "),i("div",{staticClass:"title"},[t._v("...")])]):t._e(),t._v(" "),t._l(t.directories,function(e){return t.showHidden||!e.name.startsWith(".")?i("nav",[i("router-link",{staticClass:"row",attrs:{to:{name:"Directory",params:{path:encodeURIComponent(e.path)}}}},[i("div",{staticClass:"icon"},[i("font-awesome-icon",{attrs:{icon:"folder-open"}})],1),t._v(" "),i("div",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"arrow"},[i("font-awesome-icon",{attrs:{icon:"angle-right"}})],1)])],1):t._e()}),t._v(" "),t._l(t.files,function(e){return t.showHidden||!e.name.startsWith(".")?i("nav",[i("router-link",{staticClass:"row",attrs:{to:{name:"File",params:{path:encodeURIComponent(e.path)}}}},[i("div",{staticClass:"icon"},[i("font-awesome-icon",{attrs:{icon:t.icon(e.name)}})],1),t._v(" "),i("div",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"arrow"},[i("font-awesome-icon",{attrs:{icon:"angle-right"}})],1)])],1):t._e()})],2):i("nav",{staticClass:"file-list-view"},["/"!=this.prettyPath?i("router-link",{staticClass:"row",attrs:{to:{name:"Directory",params:{path:encodeURIComponent(this.parentPath)}}}},[i("div",{staticClass:"icon"},[i("font-awesome-icon",{attrs:{icon:"folder-open"}})],1),t._v(" "),i("div",{staticClass:"title"},[t._v("...")])]):t._e()],1)])},staticRenderFns:[]};var H=i("VU/8")(R,Z,!1,function(t){i("l+b6")},"data-v-48da3c2e",null).exports,N={props:{path:{default:"/"}},name:"Browser",components:{FontAwesomeIcon:o.a,DirectoryListing:H,Spinner:x,ConfirmButton:F},watch:{$route:function(t,e){this.middleComponent="Spinner",this.didClickDelete=!1,this.isFavorite=this.$CookieManager.getBookmark()==this.prettyPath;var i=void 0!=t.params.path?decodeURIComponent(t.params.path):"/";this.$APIManager.listDirectory(i,this.didFinishRequest)},didClickDelete:function(){this.showConfirmation(this.didClickDelete)}},computed:{prettyPath:function(){return _.prettyPath(this.path)}},methods:{toggleFavorite:function(){this.isFavorite?this.$CookieManager.clearBookmark():this.$CookieManager.setBookmark(this.prettyPath),this.isFavorite=!this.isFavorite},didFinishRequest:function(t){this.files=t.files,this.directories=t.directories,0==t.status&&console.log(t),this.middleComponent="DirectoryListing"},showConfirmation:function(t){this.didClickDelete=t,this.bottomComponent=t?"ConfirmButton":""},didSelectCancel:function(){this.showConfirmation(!1)},didSelectConfirm:function(){this.$APIManager.deleteFile(this.prettyPath,function(t){1==t.status?this.goBack():(console.log("Error: "),console.log(t))}.bind(this))},makeFolder:function(){var t=prompt("Set folder name:");if(null!=t||""!=t){var e=this.prettyPath+"/"+t;this.$APIManager.createFolder(e,function(t){1==t.status?this.$router.push({name:"Directory",params:{path:encodeURIComponent(t.path)}}):(console.log("Error: "),console.log(t))}.bind(this))}}},data:function(){return{files:[],directories:[],middleComponent:"Spinner",bottomComponent:"",showHidden:this.$CookieManager.loadCookie("showHidden"),isFavorite:this.$CookieManager.getBookmark()==this.path,didClickDelete:!1,toggleHiddenIcon:"toggle-off"}},created:function(){this.goBack=_.goBack.bind(this),this.startsWith=_.startsWith,this.$APIManager.listDirectory(this.prettyPath,this.didFinishRequest)}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"wrapper"},[i("nav",{staticClass:"options"},[i("div",{staticClass:"noselect",class:{active:t.isFavorite},on:{click:t.toggleFavorite}},[i("font-awesome-icon",{attrs:{icon:"star"}}),t._v(" "),i("div",{staticClass:"title"},[t._v("Set as favorite")])],1),t._v(" "),i("div",{staticClass:"noselect",on:{click:function(e){t.showHidden=!t.showHidden}}},[i("font-awesome-icon",{attrs:{icon:t.showHidden?"toggle-on":"toggle-off"}}),t._v(" "),i("div",{staticClass:"title"},[t._v("Show hidden files")])],1),t._v(" "),i("div",{staticClass:"noselect",on:{click:t.makeFolder}},[i("font-awesome-icon",{attrs:{icon:"folder"}}),t._v(" "),i("div",{staticClass:"title"},[t._v("Create folder")])],1),t._v(" "),i("div",{staticClass:"noselect",class:{greyed:t.didClickDelete},on:{click:function(e){t.didClickDelete=!t.didClickDelete}}},[i("font-awesome-icon",{attrs:{icon:"trash"}}),t._v(" "),i("div",{staticClass:"title"},[t._v("Delete folder")])],1)]),t._v(" "),i(t.middleComponent,{tag:"component",attrs:{directories:t.directories,files:t.files,showHidden:t.showHidden,prettyPath:t.prettyPath}}),t._v(" "),i(t.bottomComponent,{tag:"component",attrs:{cancelCallback:t.didSelectCancel,confirmCallback:t.didSelectConfirm}})],1)},staticRenderFns:[]};var L=i("VU/8")(N,T,!1,function(t){i("+tRJ")},"data-v-2818ffb3",null).exports,j={props:["file"],name:"FileDetails",components:{FontAwesomeIcon:o.a},computed:{icon:function(){return _.iconForFile(this.file.filename)}},methods:{convertDate:function(t){return this.$dateFormatter.unixtimeToString(t,!0)},convertSize:function(t){return _.bytesToHumanReadable(t)}}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"file-viewer-details column-view"},[i("div",{staticClass:"file-icon-container"},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.icon}}),t._v(" "),i("div",{staticClass:"file-name"},[t._v(t._s(t.file.filename))])],1),t._v(" "),i("div",{staticClass:"table-view"},[i("div",{staticClass:"table-row-view"},[i("div",{staticClass:"table-cell-view"},[t._v("Size:")]),i("div",{staticClass:"table-cell-view right"},[t._v("\n\t\t\t\t"+t._s(t.convertSize(t.file.metadata.size))+"\n\t\t\t")])]),t._v(" "),i("div",{staticClass:"table-row-view"},[i("div",{staticClass:"table-cell-view"},[t._v("Created:")]),i("div",{staticClass:"table-cell-view right"},[t._v("\n\t\t\t\t"+t._s(t.convertDate(t.file.metadata.created))+"\n\t\t\t")])]),t._v(" "),i("div",{staticClass:"table-row-view"},[i("div",{staticClass:"table-cell-view"},[t._v("Last accessed:")]),i("div",{staticClass:"table-cell-view right"},[t._v("\n\t\t\t\t"+t._s(t.convertDate(t.file.metadata.accessed))+"\n\t\t\t")])]),t._v(" "),i("div",{staticClass:"table-row-view"},[i("div",{staticClass:"table-cell-view"},[t._v("Last modified:")]),i("div",{staticClass:"table-cell-view right"},[t._v("\n\t\t\t\t"+t._s(t.convertDate(t.file.metadata.modified))+"\n\t\t\t")])])])])},staticRenderFns:[]};var z=i("VU/8")(j,$,!1,function(t){i("YEXZ")},"data-v-3e783ae1",null).exports,B={props:["path"],name:"File",components:{FontAwesomeIcon:o.a,Spinner:x,ConfirmButton:F,FileDetails:z},watch:{didClickDelete:function(){this.showConfirmation(this.didClickDelete)}},methods:{didFinishRequest:function(t){this.file={filename:t.filename,metadata:t.metadata},0==t.status&&console.log(t),this.middleComponent="FileDetails"},showConfirmation:function(t){this.didClickDelete=t,this.bottomComponent=t?"ConfirmButton":""},didSelectCancel:function(){this.showConfirmation(!1)},didSelectConfirm:function(){this.middleComponent="Spinner",this.$APIManager.deleteFile(this.prettyPath,function(t){1==t.status?this.goBack():(this.middleComponent="FileDetails",console.log("Error: "),console.log(t))}.bind(this))},downloadFile:function(){this.middleComponent="Spinner",this.$APIManager.downloadFile(this.prettyPath,this.file.filename,function(){this.middleComponent="FileDetails"}.bind(this))}},data:function(){return{didClickDelete:!1,middleComponent:"Spinner",bottomComponent:"",file:void 0}},created:function(){this.goBack=_.goBack.bind(this),this.prettyPath=_.prettyPath(this.path),this.convertSize=_.bytesToHumanReadable,this.$APIManager.viewFile(this.prettyPath,this.didFinishRequest)}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"wrapper"},[i("nav",{staticClass:"options"},[i("div",{staticClass:"noselect",on:{click:t.goBack}},[i("font-awesome-icon",{attrs:{icon:"arrow-circle-left"}}),t._v(" "),i("div",{staticClass:"title"},[t._v("Back")])],1),t._v(" "),i("div",{staticClass:"noselect",on:{click:t.downloadFile}},[i("font-awesome-icon",{attrs:{icon:"download"}}),t._v(" "),i("div",{staticClass:"title"},[t._v("Download")])],1),t._v(" "),i("div",{staticClass:"noselect",class:{greyed:t.didClickDelete},on:{click:function(e){t.didClickDelete=!t.didClickDelete}}},[i("font-awesome-icon",{attrs:{icon:"trash"}}),t._v(" "),i("div",{staticClass:"title"},[t._v("Delete file")])],1)]),t._v(" "),i(t.middleComponent,{tag:"component",attrs:{file:t.file}}),t._v(" "),i(t.bottomComponent,{tag:"component",attrs:{cancelCallback:t.didSelectCancel,confirmCallback:t.didSelectConfirm}})],1)},staticRenderFns:[]};var G=i("VU/8")(B,U,!1,function(t){i("twyR")},"data-v-da87aa32",null).exports,E={name:"Dashboard",components:{FontAwesomeIcon:o.a},methods:{update:function(){this.$APIManager.getSystemInformation(this.didFinishRequest)},didFinishRequest:function(t){this.ram=t.ram,this.cpu=t.cpu,this.disk=t.disk,this.temperature=this.convertTemperature(t.temperature)},convertTemperature:function(t){return"f"==this.temperatureScale?(1.8*t+32).toFixed(2)+"°F":t+"°C"}},data:function(){return{ram:{},cpu:{},disk:0,temperature:0,intervalID:null,temperatureScale:void 0}},created:function(){this.update(),this.temperatureScale=this.$CookieManager.loadCookie("temperatureScale");var t=this.$CookieManager.loadCookie("refreshRate");t>0&&(this.intervalID=setInterval(this.update,1e3*t))},beforeDestroy:function(){null!=this.intervalID&&clearInterval(this.intervalID)}},W={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"wrapper"},[i("nav",{staticClass:"options"},[i("div",{staticClass:"noselect"},[i("font-awesome-icon",{attrs:{icon:"power-off"}}),t._v(" "),i("div",{staticClass:"title"},[t._v("Power off")])],1),t._v(" "),i("div",{staticClass:"noselect"},[i("font-awesome-icon",{attrs:{icon:"redo"}}),t._v(" "),i("div",{staticClass:"title"},[t._v("Reboot")])],1)]),t._v(" "),i("div",{staticClass:"column-view"},[i("div",{staticClass:"icon"},[i("font-awesome-icon",{attrs:{icon:"thermometer-three-quarters"}}),t._v(" "+t._s(this.temperature)+"\n\t\t ")],1),t._v(" "),i("div",{staticClass:"table-view"},[i("div",{staticClass:"table-row-view"},[i("div",{staticClass:"table-cell-view"},[t._v("CPU usage:")]),t._v(" "),i("div",{staticClass:"table-cell-view right"},[t._v(t._s(this.cpu)+" %")])]),t._v(" "),i("div",{staticClass:"table-row-view"},[i("div",{staticClass:"table-cell-view"},[t._v("RAM total: ")]),t._v(" "),i("div",{staticClass:"table-cell-view right"},[t._v(t._s(this.ram.total))])]),t._v(" "),i("div",{staticClass:"table-row-view"},[i("div",{staticClass:"table-cell-view"},[t._v("RAM used: ")]),t._v(" "),i("div",{staticClass:"table-cell-view right"},[t._v(t._s(this.ram.used))])]),t._v(" "),i("div",{staticClass:"table-row-view"},[i("div",{staticClass:"table-cell-view"},[t._v("RAM available: ")]),t._v(" "),i("div",{staticClass:"table-cell-view right"},[t._v(t._s(this.ram.available))])]),t._v(" "),i("div",{staticClass:"table-row-view"},[i("div",{staticClass:"table-cell-view"},[t._v("HDD total:")]),t._v(" "),i("div",{staticClass:"table-cell-view right"},[t._v(t._s(this.disk.total))])]),t._v(" "),i("div",{staticClass:"table-row-view"},[i("div",{staticClass:"table-cell-view"},[t._v("HDD used:")]),t._v(" "),i("div",{staticClass:"table-cell-view right"},[t._v(t._s(this.disk.used))])]),t._v(" "),i("div",{staticClass:"table-row-view"},[i("div",{staticClass:"table-cell-view"},[t._v("HDD free:")]),t._v(" "),i("div",{staticClass:"table-cell-view right"},[t._v(t._s(this.disk.free))])])])])])},staticRenderFns:[]};var V=i("VU/8")(E,W,!1,function(t){i("PTV2")},"data-v-30287c70",null).exports,J={name:"Settings",components:{FontAwesomeIcon:o.a}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"wrapper"},[i("div",{staticClass:"heading"},[t._v("Settings")]),t._v(" "),i("router-link",{staticClass:"row",attrs:{to:"/settings/browser"}},[i("div",{staticClass:"icon"},[i("font-awesome-icon",{attrs:{icon:"hdd"}})],1),t._v(" "),i("div",{staticClass:"title"},[t._v("File browser")]),t._v(" "),i("div",{staticClass:"arrow"},[i("font-awesome-icon",{attrs:{icon:"angle-right"}})],1)]),t._v(" "),i("router-link",{staticClass:"row",attrs:{to:"/settings/dashboard"}},[i("div",{staticClass:"icon"},[i("font-awesome-icon",{attrs:{icon:"tachometer-alt"}})],1),t._v(" "),i("div",{staticClass:"title"},[t._v("Dashboard")]),t._v(" "),i("div",{staticClass:"arrow"},[i("font-awesome-icon",{attrs:{icon:"angle-right"}})],1)]),t._v(" "),i("router-link",{staticClass:"row",attrs:{to:"/settings/account"}},[i("div",{staticClass:"icon"},[i("font-awesome-icon",{attrs:{icon:"user-circle"}})],1),t._v(" "),i("div",{staticClass:"title"},[t._v("Account")]),t._v(" "),i("div",{staticClass:"arrow"},[i("font-awesome-icon",{attrs:{icon:"angle-right"}})],1)]),t._v(" "),i("router-link",{staticClass:"row",attrs:{to:"/settings/general"}},[i("div",{staticClass:"icon"},[i("font-awesome-icon",{attrs:{icon:"wrench"}})],1),t._v(" "),i("div",{staticClass:"title"},[t._v("General")]),t._v(" "),i("div",{staticClass:"arrow"},[i("font-awesome-icon",{attrs:{icon:"angle-right"}})],1)])],1)},staticRenderFns:[]};var X=i("VU/8")(J,O,!1,function(t){i("lGgK")},"data-v-464460f8",null).exports,Y={name:"Settings-Browser",methods:{clearBookmark:function(){"None"!=this.favoritFolder&&(this.$CookieManager.clearBookmark(),this.favoritFolder="None")},toggleHiddenFiles:function(){this.showHidden=!this.showHidden,this.showHidden?this.$CookieManager.saveCookie("showHidden",!0):this.$CookieManager.clearCookie("showHidden")}},filters:{showHiddenLabel:function(t){return t?"On":"Off"}},data:function(){return{favoritFolder:"None",showHidden:!1}},created:function(){var t=this.$CookieManager.getBookmark();void 0!=t&&(this.favoritFolder=decodeURIComponent(t));var e=this.$CookieManager.loadCookie("showHidden");void 0!=e&&(this.showHidden=e)}},Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"wrapper"},[i("div",{staticClass:"heading"},[t._v("File browser settings")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"title"},[t._v("\n\t\t\tFavorite folder\n\t\t\t"),i("div",{staticClass:"subscript"},[t._v(t._s(this.favoritFolder))])]),t._v(" "),i("div",{staticClass:"button noselect",class:{greyed:"None"==this.favoritFolder},on:{click:t.clearBookmark}},[t._v("Clear")])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"title"},[t._v("Show hidden files")]),t._v(" "),i("div",{staticClass:"button",on:{click:t.toggleHiddenFiles}},[t._v(t._s(t._f("showHiddenLabel")(this.showHidden)))])])])},staticRenderFns:[]};var q=i("VU/8")(Y,Q,!1,function(t){i("k7pL")},"data-v-202034f0",null).exports,K={name:"SettingsDashboard",components:{FontAwesomeIcon:o.a},watch:{refreshRate:function(){this.$CookieManager.saveCookie("refreshRate",this.refreshRate)},temperatureScale:function(){this.$CookieManager.saveCookie("temperatureScale",this.temperatureScale)}},filters:{temperatureLabel:function(t){return"f"==t?"Fahrenheit":"Celsius"}},methods:{switchTemperatureScale:function(){"c"==this.temperatureScale?this.temperatureScale="f":this.temperatureScale="c"}},data:function(){var t=this.$CookieManager.loadCookie("temperatureScale"),e=this.$CookieManager.loadCookie("refreshRate");return{refreshRate:void 0!=e?e:0,temperatureScale:t||"c"}}},tt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"wrapper"},[i("div",{staticClass:"heading"},[t._v("Dashboard settings")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"title"},[t._v("\n\t\t\tDashboard refresh rate\n\t\t")]),t._v(" "),i("div",{staticClass:"button"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.refreshRate,expression:"refreshRate"}],staticClass:"select",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.refreshRate=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"0"}},[t._v("Never")]),t._v(" "),i("option",{attrs:{value:"3"}},[t._v("3 seconds")]),t._v(" "),i("option",{attrs:{value:"5"}},[t._v("5 seconds")]),t._v(" "),i("option",{attrs:{value:"15"}},[t._v("15 seconds")]),t._v(" "),i("option",{attrs:{value:"30"}},[t._v("30 seconds")]),t._v(" "),i("option",{attrs:{value:"60"}},[t._v("60 seconds")]),t._v(" "),i("option",{attrs:{value:"120"}},[t._v("2 minutes")])])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"title"},[t._v("Show temperatures in")]),t._v(" "),i("div",{staticClass:"button",on:{click:t.switchTemperatureScale}},[t._v(t._s(t._f("temperatureLabel")(this.temperatureScale)))])])])},staticRenderFns:[]};var et=i("VU/8")(K,tt,!1,function(t){i("Sgst")},"data-v-77fb499c",null).exports,it={name:"SettingsAccount",filters:{autoLoginFilter:function(t){return 1==t?"On":"Off"}},methods:{signOut:function(){this.$root.deleteSession(),this.$root._router.push("/")},toggleAutoLogin:function(){this.autoLogin=!this.autoLogin,this.$CookieManager.saveCookie("autoLogin",this.autoLogin,!1);var t=!this.autoLogin&&void 0,e=this.$CookieManager.loadCookie("username"),i=this.$CookieManager.loadCookie("password");this.$CookieManager.saveCookie("username",e,t),this.$CookieManager.saveCookie("password",i,t)}},data:function(){return{autoLogin:!1}},created:function(){var t=this.$CookieManager.loadCookie("autoLogin");this.autoLogin=void 0!=t&&"true"==t}},st={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"wrapper"},[i("div",{staticClass:"heading"},[t._v("Account settings")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"title"},[t._v("\n\t\t\tStay logged in\n\t\t")]),t._v(" "),i("div",{staticClass:"button noselect",on:{click:t.toggleAutoLogin}},[t._v(t._s(t._f("autoLoginFilter")(this.autoLogin)))])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"single-button noselect",on:{click:t.signOut}},[t._v("Sign out of Raspy")])])])},staticRenderFns:[]};var at=i("VU/8")(it,st,!1,function(t){i("/zW6")},"data-v-4b839d08",null).exports,ot={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"wrapper"},[e("div",{staticClass:"heading"},[this._v("General settings")])])}]};var nt=i("VU/8")({name:"SettingsGeneral"},ot,!1,function(t){i("1ApB")},"data-v-68684352",null).exports;s.a.use(b.a);var rt=new b.a({mode:"history",routes:[{path:"/",name:"Main",component:y},{path:"/browser/",name:"Browser",component:L,meta:{tab:1,requiresAuth:!0}},{path:"/browser/:path",name:"Directory",component:L,props:!0,meta:{tab:1,requiresAuth:!0}},{path:"/Browser/:path",name:"File",component:G,props:!0,meta:{tab:1,requiresAuth:!0}},{path:"/dashboard",name:"Dashboard",component:V,meta:{tab:2,requiresAuth:!0}},{path:"/settings",name:"Settings",component:X,meta:{tab:3,requiresAuth:!0}},{path:"/settings/browser",name:"Settings: Browser",component:q,meta:{tab:3,requiresAuth:!0}},{path:"/settings/dashboard",name:"Settings: Dashboard",component:et,meta:{tab:3,requiresAuth:!0}},{path:"/settings/account",name:"Settings: Account",component:at,meta:{tab:3,requiresAuth:!0}},{path:"/settings/general",name:"Settings: General",component:nt,meta:{tab:3,requiresAuth:!0}}]}),ct=i("7YgM"),lt=i.n(ct),dt={install:function(t){t.prototype.$Raspy={appName:lt.a.name,version:lt.a.version}}},vt={install:function(t){t.prototype.$CookieManager={currentBookmark:void 0,saveCookie:function(t,e,i){i=void 0==i?"":0==i?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; expires="+i,document.cookie=t+"="+e+i+"; path=/;"},loadCookie:function(t){var e=void 0,i="; "+document.cookie;if(i.indexOf(t)>=0){var s=i.split("; "+t+"=");2==s.length&&(e=s.pop().split(";").shift())}return e},clearCookie:function(t){document.cookie=t+"=undefined; path=/; expires=Fri, 31 Dec 1970 23:59:59 GMT"},setBookmark:function(t){this.currentBookmark=encodeURIComponent(t),this.saveCookie("bookmark",t,"Fri, 31 Dec 9999 23:59:59 GMT")},getBookmark:function(){if(void 0!=this.currentBookmark)return this.currentBookmark;var t="; "+document.cookie;if(t.indexOf("bookmark")>=0){var e=t.split("; bookmark=");2==e.length&&(this.currentBookmark=e.pop().split(";").shift())}return this.loadCookie("bookmark")},clearBookmark:function(){this.currentBookmark=void 0,this.clearCookie("bookmark")}}}},ut={install:function(t){t.prototype.$dateFormatter={normMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],abbrMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],unixtimeToString:function(t,e){var i=new Date(t);return this.styleDate(i,e)+" "+this.styleComponent(i.getHours())+":"+this.styleComponent(i.getMinutes())},styleDate:function(t,e){var i=t.getFullYear(),s=e?this.abbrMonths[t.getMonth()]:this.normMonths[t.getMonth()];return this.styleComponent(t.getDate())+" "+s+" "+i},styleComponent:function(t){return t<10?"0"+t:t}}}},ht=i("mtWM"),mt=i.n(ht),gt=i("sJst"),pt=i.n(gt),ft={install:function(t,e,i){t.prototype.$APIManager={HTTP:mt.a.create({baseURL:"/api/"}),setCredentials:function(t,e){this.HTTP=mt.a.create({baseURL:"/api/",auth:{username:t,password:e}})},clearCredentials:function(){this.http=mt.a.create({baseURL:"/api/"})},login:function(t,e,i){var s=this;this.HTTP.post("login",{username:t,password:e}).then(function(a){1==a.data.status&&(s.HTTP=mt.a.create({baseURL:"/api/",auth:{username:t,password:e}})),"function"==typeof i&&i(a.data)}).catch(function(t){console.log("Error: "),console.log(t)})},listDirectory:function(t,e){this.HTTP.get("browser"+t).then(function(t){"function"==typeof e&&e(t.data)}).catch(function(t){console.log("Error: "),console.log(t)})},viewFile:function(t,e){this.HTTP.get("file"+t).then(function(t){"function"==typeof e&&e(t.data)}).catch(function(t){console.log("Error: "),console.log(t)})},deleteFile:function(t,e){this.HTTP.delete("file"+t).then(function(t){"function"==typeof e&&e(t.data)}).catch(function(t){console.log("Error: "),console.log(t)})},createFolder:function(t,e){this.HTTP.post("folder/new",{fullPath:t}).then(function(t){"function"==typeof e&&e(t.data)}).catch(function(t){console.log("Error: "),console.log(t)})},downloadFile:function(t,e,i){var s=void 0!=e?e:"untitled",a=this.HTTP.defaults.baseURL,o=this.HTTP.defaults.auth;mt()({url:a+"download"+t,method:"get",responseType:"blob",auth:o}).then(function(t){pt()(t.data,s),"function"==typeof i&&i()}).catch(function(t){console.log("Error: "),console.log(t)})},getSystemInformation:function(t){this.HTTP.get("system").then(function(e){"function"==typeof t&&t(e.data)}).catch(function(t){console.log("Error: "),console.log(t)})}}}};s.a.config.productionTip=!1,rt.beforeEach(function(t,e,i){t.matched.some(function(t){return t.meta.requiresAuth})&&0==rt.app.isLoggedIn?i({path:"/"}):(window.scrollTo(0,0),i())}),s.a.use(vt),s.a.use(ut),s.a.use(ft),s.a.use(dt),new s.a({el:"#app",router:rt,components:{App:I},template:"<App/>",data:{isLoggedIn:!1},created:function(){var t=this.$CookieManager.loadCookie("username"),e=this.$CookieManager.loadCookie("password");void 0!=t&&(this.$APIManager.setCredentials(t,e),this.isLoggedIn=!0)},methods:{createSession:function(t,e){var i=!this.$CookieManager.loadCookie("autoLogin")&&void 0;this.$CookieManager.saveCookie("username",t,i),this.$CookieManager.saveCookie("password",e,i),this.isLoggedIn=!0},deleteSession:function(){this.$CookieManager.clearCookie("username"),this.$CookieManager.clearCookie("password"),this.$APIManager.clearCredentials(),this.isLoggedIn=!1}}})},PTV2:function(t,e){},PcsO:function(t,e){},Sgst:function(t,e){},UQQJ:function(t,e){},UaLM:function(t,e){},YEXZ:function(t,e){},"cH+4":function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzY0cHgiIGhlaWdodD0iNDIwcHgiIHZpZXdCb3g9IjAgMCAzNjQgNDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4xICg1MTE0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iOS45MTIzOTE2MiUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3QkNEOUUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQ1OUY2NSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjkuOTEyMzkxNjIlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNUVBNzdEIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0NTlGNjUiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPHRleHQgaWQ9InRleHQtMyIgZm9udC1mYW1pbHk9Ik1lbmxvLVJlZ3VsYXIsIE1lbmxvIiBmb250LXNpemU9IjMwMCIgZm9udC13ZWlnaHQ9Im5vcm1hbCI+CiAgICAgICAgICAgIDx0c3BhbiB4PSI5MSIgeT0iMzM5Ij5SPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgICAgPGZpbHRlciB4PSItOC41JSIgeT0iLTYuNCUiIHdpZHRoPSIxMTcuMCUiIGhlaWdodD0iMTIyLjglIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItNCI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjAiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjUiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDEgICAwIDAgMCAwIDEgICAwIDAgMCAwIDEgIDAgMCAwIDAuNSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cG9seWdvbiBpZD0iUG9seWdvbiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgcG9pbnRzPSIxODEuNTk5MDA5IDAuMjE2ODM1NTg5IDM2My4xMTc3MDggMTExLjM1NTE3NiAyOTMuNzgzNzM0IDQxOC43MzQ0ODMgMTgxLjU5OTAwOSA0MTguNzM0NDgzIDY5LjQxNDI4MzMgNDE4LjczNDQ4MyAwLjA4MDMwOTg3MzEgMTExLjM1NTE3NiI+PC9wb2x5Z29uPgogICAgICAgIDxwb2x5Z29uIGlkPSJQb2x5Z29uIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTIpIiBwb2ludHM9IjE4Mi4wNDAxNTUgMC4yMTY4MzU1ODkgMzYzLjU1ODg1NCAxMTEuMzU1MTc2IDI5NC4yMjQ4OCA0MTguNzM0NDgzIDE4Mi4wNDAxNTUgNDE4LjczNDQ4MyAxODIuMDQwMTU1IDExMS4zNTUxNzYiPjwvcG9seWdvbj4KICAgICAgICA8ZyBpZD0iUiI+CiAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPSIjRkZGRkZGIiBmaWxsPSIjMUYyMjI5IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNmaWx0ZXItNCkiIHhsaW5rOmhyZWY9IiN0ZXh0LTMiPjwvdXNlPgogICAgICAgICAgICA8dXNlIGZpbGw9IiMxRjIyMjkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3RleHQtMyI+PC91c2U+CiAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEiIHhsaW5rOmhyZWY9IiN0ZXh0LTMiPjwvdXNlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},k7pL:function(t,e){},"l+b6":function(t,e){},lGgK:function(t,e){},ou2X:function(t,e){},twyR:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0c40e3f99a13f0cd7b56.js.map