(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){},139:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(44),s=a.n(i),o=(a(53),a(3)),r=a(4),c=a(6),u=a(5),m=a(7),h=a(145),d=a(144),p=a(143),g=(a(20),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"header"},l.a.createElement(p.a,{className:"menuItm",to:{pathname:"/",state:{about:"true"}}},"About"),l.a.createElement(p.a,{className:"menuItm",to:"/contact"},"Contact"),l.a.createElement(p.a,{className:"menuItm",to:"/galleries"},"Gallery"))}}]),t}(n.Component)),b=a(19),f=a(11),v=a(12),E=a(24);f.b.add(E.b),f.b.add(E.c),f.b.add(E.a),f.b.add(v.c);var y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/tlsshoots/"},l.a.createElement(b.a,{className:"icon",icon:E.b})),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/tlsshoots"},l.a.createElement(b.a,{className:"icon",icon:E.c})),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/TLS-Shoots-LLC-326188911277649/"},l.a.createElement(b.a,{className:"icon",icon:E.a})),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:info@tlsshoots.com"},l.a.createElement(b.a,{className:"icon",icon:v.c}))),l.a.createElement("p",{style:{color:"#424242",fontSize:12}},"Copyright \xa9 2018. All Rights Reserved"))}}]),t}(n.Component),A=a(22),I=a.n(A),w=a(21),k=a.n(w),N=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(){this.props.location.state&&this.props.location.state.about&&this.scrollTo("about")}},{key:"scrollTo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"about",t=this;setTimeout(function(){t.refs[e].scrollIntoView({behavior:"smooth",block:"start"})},0)}},{key:"render",value:function(){return l.a.createElement("div",{ref:"home"},l.a.createElement("div",{className:"top"},l.a.createElement("img",{unselectable:"on",src:k.a,className:"bg",alt:"logo"}),l.a.createElement("div",{className:"splash"},l.a.createElement("img",{unselectable:"on",src:I.a,className:"logo",alt:"logo"}),l.a.createElement("div",null))),l.a.createElement("div",{ref:"about",className:"about"},l.a.createElement("p",null,l.a.createElement("span",{style:{fontSize:25,color:"#d4ae93",fontFamily:"AppleMyungjo"}},"About Me"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),"My name is Terrance Shields and I am a freelance Photographer residing in New York City. I have always been passionate about all the beautiful sites to see in the world. During my time traveling in the Army I have been fortunate enough to see some of the most beautiful sites firsthand. I've developed an amazing eye for beauty whether I'm capturing your dream wedding, your eclectic and funky clothing line, or a fun and exciting night out in NYC it is my goal to create amazing memories that will always warm your heart and keep a smile on your face. Let me capture your world through my lens!")))}}]),t}(n.Component),O=a(8),C=a.n(O),S=a(14),j=a(45),T=a(46),x=a.n(T),P=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.state={name:"",email:"",phone:"",details:""},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handleSubmit",value:function(){var e=Object(S.a)(C.a.mark(function e(t){var a,n,l,i,s;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=this.state,n=a.name,l=a.email,i=a.phone,s=a.details,!(n&&l&&i&&s)){e.next=14;break}return this.refs.err.hidden=!0,this.refs.name.hidden=!0,this.refs.email.hidden=!0,this.refs.phone.hidden=!0,this.refs.details.hidden=!0,this.refs.submit.style.display="none",this.refs.ty.hidden=!1,e.next=12,x.a.post("https://expresstls.herokuapp.com/mail",{name:n,email:l,phone:i,details:s});case 12:e.next=16;break;case 14:this.refs.err.hidden=!1,this.refs.contact.scrollIntoView({behavior:"smooth",block:"start"});case 16:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{ref:"contact",className:"contact"},l.a.createElement("img",{unselectable:"on",src:k.a,className:"bg",alt:"logo"}),l.a.createElement("h2",null,"Contact"),l.a.createElement("span",{hidden:!0,ref:"err",style:{color:"#f44336",fontWeight:"bold"}},"Please fill all fields before submitting"),l.a.createElement("span",{hidden:!0,ref:"ty",style:{color:"white",fontWeight:"bold",fontSize:21}},"Thank You! Expect a response shortly!"),l.a.createElement("form",null,l.a.createElement("label",null,l.a.createElement("input",{ref:"name",onChange:this.handleChange.bind(this),type:"text",name:"name",placeholder:"Name"})),l.a.createElement("label",null,l.a.createElement("input",{ref:"email",onChange:this.handleChange.bind(this),type:"text",name:"email",placeholder:"Email"})),l.a.createElement("label",null,l.a.createElement("input",{ref:"phone",onChange:this.handleChange.bind(this),type:"text",name:"phone",placeholder:"Phone"})),l.a.createElement("label",null,l.a.createElement("textarea",{ref:"details",onChange:this.handleChange.bind(this),type:"text",name:"details",placeholder:"Please describe the type of shoot you are interested in."})),l.a.createElement("div",{className:"submit",ref:"submit",onClick:this.handleSubmit.bind(this),type:"submit",value:"Submit"},l.a.createElement("h3",null,"Submit"))))}}]),t}(n.Component),D=a(15),G=a.n(D),L=a(16),U=a.n(L),R=a(27),_=a.n(R),z="https://enigmatic-lake-22259.herokuapp.com",F=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={opacity:0,albums:[],grouped_albums:[]},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getGroupedAlbums().then(this.getAlbums())}},{key:"getAlbums",value:function(){var e=Object(S.a)(C.a.mark(function e(){var t=this;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(z,"/albums"),{method:"GET",mode:"cors",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){var a=[];if(t.props.match.params.id)a=e.filter(function(e){var a={album:e.album,images:e.images.reverse()};if(a.album.album_group_id==t.props.match.params.id)return a});else{var n=[];a=e.map(function(e){var a=e.album.album_group_id;return a&&!n.includes(a)?(n.push(e.album.album_group_id),t.state.grouped_albums.find(function(e){if(e.id==a)return e})):a?void 0:{album:e.album,images:e.images.reverse()}}).filter(function(e){return void 0!==e})}t.setState({albums:a.reverse()}),console.log("=====API albums GET=====",a)}).catch(function(e){console.log("=====API error=====",e)});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getGroupedAlbums",value:function(){var e=Object(S.a)(C.a.mark(function e(){var t=this;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(z,"/album_groups"),{method:"GET",mode:"cors",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){t.setState({grouped_albums:e}),console.log("=====API GROUPED_ALBUMS GET=====",e)}).catch(function(e){console.log("=====API error=====",e)});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fadeIn",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this;setTimeout(function(){t.setState({opacity:1})},e)}},{key:"fadeOut",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this;setTimeout(function(){t.setState({opacity:0})},e)}},{key:"renderAlbums",value:function(){for(var e=[],t=0;t<this.state.albums.length;t++)this.state.albums[t].album?e.push(l.a.createElement(p.a,{to:{pathname:"/gallery/".concat(this.state.albums[t].album.id),state:{album:this.state.albums[t]}}},l.a.createElement("div",{className:"album-card"},l.a.createElement(G.a,{className:"img-itm",src:this.state.albums[t].images[this.state.albums[t].album.cover].url,loading:function(){return l.a.createElement(U.a,{type:"RevolvingDot",color:"#616161",height:"30",width:"30"})},error:function(){return l.a.createElement("div",null,"Loading...")}}),l.a.createElement("img",{unselectable:"on",src:_.a,className:"img-cover",alt:"cover"}),l.a.createElement("div",{className:"album-n"}),l.a.createElement("p",{className:"album-title"},this.state.albums[t].album.title)))):e.push(l.a.createElement(p.a,{to:{pathname:"/grouped_galleries/".concat(this.state.albums[t].id)}},l.a.createElement("div",{className:"album-card"},l.a.createElement(G.a,{className:"img-itm",src:this.state.albums[t].cover,loading:function(){return l.a.createElement(U.a,{type:"RevolvingDot",color:"#616161",height:"30",width:"30"})},error:function(){return l.a.createElement("div",null,"Loading...")}}),l.a.createElement("img",{unselectable:"on",src:_.a,className:"img-cover",alt:"cover"}),l.a.createElement("div",{className:"album-n"}),l.a.createElement("p",{className:"album-title"},this.state.albums[t].title))));return e}},{key:"render",value:function(){return l.a.createElement("div",{style:{height:"auto",position:"relative"}},l.a.createElement("img",{unselectable:"on",src:I.a,className:"logo-2",alt:"logo"}),l.a.createElement("div",{className:"img-gal"},this.renderAlbums()))}}]),t}(n.Component);f.b.add(v.b),f.b.add(v.a),f.b.add(v.d);var M=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={opacity:0,body:"home",activeImg:{index:0,img:""},activeImgStyle:{zIndex:-10,opacity:0},gallery:[],galleryAlbum:[]},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fadeOut(),this.props.location.state?setTimeout(function(){e.setState({galleryAlbum:e.props.location.state.album,activeImg:{index:0,img:""},activeImgStyle:{zIndex:-10,opacity:0,transition:".3s"}}),e.fadeIn()},0):e.getAlbum()}},{key:"getAlbum",value:function(){var e=Object(S.a)(C.a.mark(function e(){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this,fetch("".concat("https://enigmatic-lake-22259.herokuapp.com","/albums/").concat(this.props.match.params.id),{method:"GET",mode:"cors",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log("responseJson",e),t.setState({galleryAlbum:{album:e.album,images:e.images.reverse()},activeImg:{index:0,img:""},activeImgStyle:{zIndex:-10,opacity:0,transition:".3s"}})}).catch(function(e){console.log("=====API error=====",e)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fadeIn",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this;setTimeout(function(){t.setState({opacity:1})},e)}},{key:"fadeOut",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this;setTimeout(function(){t.setState({opacity:0})},e)}},{key:"renderGallery",value:function(){var e=this.state.galleryAlbum,t=[];if(e.images)for(var a=0;a<e.images.length;a++)t.push(l.a.createElement("div",{className:"img-card",onClick:this.popImage.bind(this,e.images[a].url,a,e.images[a].id)},l.a.createElement(G.a,{className:"img-itm-reg",src:e.images[a].url,style:{color:"#fff"},loading:function(){return l.a.createElement(U.a,{type:"RevolvingDot",color:"#616161",height:"30",width:"30"})},error:function(){return l.a.createElement("div",null,"Loading...")}}),l.a.createElement("img",{unselectable:"on",src:_.a,className:"img-cover",alt:"cover"}),l.a.createElement("p",null)));return t}},{key:"popImage",value:function(e,t,a){var n=this;this.fadeOut(),setTimeout(function(){n.setState({activeImg:{index:t,img:e},activeImgStyle:{zIndex:10,opacity:1},imageId:a}),n.fadeIn()},0)}},{key:"togglePopImage",value:function(){var e=this;this.fadeOut(),setTimeout(function(){e.setState({activeImgStyle:{zIndex:-10,opacity:0},imageId:0}),e.fadeIn()},0),setTimeout(function(){e.setState({activeImg:{index:0,img:""}}),e.fadeIn()},100)}},{key:"nextPic",value:function(e){e.preventDefault(),console.log("here");var t=this.state.activeImg.index+1;t<this.state.galleryAlbum.images.length&&this.setState({activeImg:{index:t,img:this.state.galleryAlbum.images[t].url},imageId:this.state.galleryAlbum.images[t].id})}},{key:"prevPic",value:function(e){e.preventDefault();var t=this.state.activeImg.index-1;t>=0&&this.setState({activeImg:{index:t,img:this.state.galleryAlbum.images[t].url},imageId:this.state.galleryAlbum.images[t].id})}},{key:"setLinkStyle",value:function(){if(this.refs.pop){var e=this.refs.pop;return{position:"absolute",bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width,zIndex:10001}}return{height:0}}},{key:"render",value:function(){return l.a.createElement("div",{style:{height:"auto",position:"relative"}},l.a.createElement(p.a,{to:"/"},l.a.createElement("img",{unselectable:"on",src:I.a,className:"logo-2",alt:"logo"})),l.a.createElement("div",{className:"img-gal"},this.renderGallery()),l.a.createElement("div",{style:this.state.activeImgStyle,className:"pop-img"},l.a.createElement("div",{onClick:this.togglePopImage.bind(this),style:{position:"absolute",top:0,bottom:0,left:0,right:0,background:"rgba(0,0,0,0)"}}),l.a.createElement("img",{unselectable:"on",ref:"pop",src:this.state.activeImg.img,className:"popped-img",style:{resizeMode:"contain",transition:"1s",background:"#000",zIndex:10001},alt:"logo"}),l.a.createElement(p.a,{to:"/images/".concat(this.state.imageId),style:this.setLinkStyle()}),l.a.createElement(b.a,{onClick:this.prevPic.bind(this),className:"icon-l",style:{zIndex:10002},icon:v.a}),l.a.createElement(b.a,{onClick:this.nextPic.bind(this),className:"icon-r",style:{zIndex:10002},icon:v.b})))}}]),t}(n.Component),W=a(34),B=a.n(W),J=(a(137),{access:"AKIAJTWTJET5YUFP4NTA",secret:"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"}),H=(window.innerWidth,window.innerHeight,"https://enigmatic-lake-22259.herokuapp.com"),K=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleAdminChangeText=function(t){e.setState({adminPass:t.target.value})},e.handleChangeText=function(t){e.setState({albumTitleInput:t.target.value})},e.handleAlbumGroupTitleInput=function(t){e.setState({albumGroupTitleInput:t.target.value})},e.selectImage=function(e){var t=document.getElementsByClassName("selectedImg")[0];t&&(t.style.display="none",t.classList.remove("selectedImg"));var a=e.target.closest(".fileItem").children;a[a.length-1].classList.add("selectedImg"),a[a.length-1].style.display="flex"},e.selectImageGroup=function(e){for(var t=document.getElementsByClassName("selectedImg");t.length>0;)t[0].style.display="none",t[0].classList.remove("selectedImg");var a=e.target.closest(".fileItem").children;a[a.length-1].classList.add("selectedImg"),a[a.length-1].style.display="flex",a[a.length-2].classList.add("selectedImg"),a[a.length-2].style.display="flex"},e.state={albums:{},activeAlbumIdx:0,activeAlbum:{},albumTitle:"No Album Selected",albumTitleInput:"",totalNumberOfImages:0,counter:0,uploading:!1,files:[],awsFiles:[],newFiles:!1,logged:!1,adminPass:"",grouped_albums:[],selectedGroupAlbums:[],groupEditor:!1,albumGroupTitleInput:""},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getAlbums(),this.getGroupedAlbums()}},{key:"verifyUser",value:function(){"M!ch3ll3S"==this.state.adminPass?this.setState({logged:!0}):alert("wrong password")}},{key:"getGroupedAlbums",value:function(){var e=Object(S.a)(C.a.mark(function e(){var t=this;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(H,"/album_groups")).then(function(e){return e.json()}).then(function(e){console.log("responseJson===",e),t.setState({grouped_albums:e}),console.log("=====API GROUPED_ALBUMS GET=====",e)}).catch(function(e){console.log("=====API error=====",e)});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getAlbums",value:function(){var e=Object(S.a)(C.a.mark(function e(){var t=this;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(H,"/albums"),{method:"GET",mode:"cors",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){var a=e.map(function(e){return{album:e.album,images:e.images.reverse()}});t.setState({albums:a.reverse()})}).catch(function(e){});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"selectAlbum",value:function(e){this.clearEditor();var t=this.state.albums[e];this.setState({activeAlbumIdx:e,activeAlbum:t,albumTitle:t.album.title,totalNumberOfImages:t.images.length,groupEditor:!1})}},{key:"updateAlbumTitle",value:function(){var e=this;!this.state.newFiles&&this.state.activeAlbum.album?this.state.albumTitleInput?window.confirm("Are you sure you want to change the Album title?")&&fetch("".concat(H,"/albums/").concat(this.state.activeAlbum.album.id),{method:"PUT",mode:"cors",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({title:this.state.albumTitleInput})}).then(function(e){return e.json()}).then(function(t){var a=e;e.setState({albumTitleInput:""}),e.getAlbums(),setTimeout(function(){a.selectAlbum(a.state.activeAlbumIdx)},2e3)}).catch(function(e){console.log("=====API error setCover=====",e)}):alert("No album title"):alert("button not active")}},{key:"updateAlbumCover",value:function(e){var t=this;window.confirm("Are you sure you want to change the cover image?")&&fetch("".concat(H,"/albums/").concat(this.state.activeAlbum.album.id),{method:"PUT",mode:"cors",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({cover:this.state.activeAlbum.images.indexOf(e)})}).then(function(e){return e.json()}).then(function(e){var a=t;t.getAlbums(),setTimeout(function(){a.selectAlbum(a.state.activeAlbumIdx)},2e3)}).catch(function(e){})}},{key:"selectNewAlbum",value:function(e){this.clearEditor();var t=e.target.files,a=[],n=Object.keys(t);n.sort(function(e,a){return parseInt(t[e].name.split("-")[0])-parseInt(t[a].name.split("-")[0])}),n.forEach(function(e){"jpg"===t[e].name.split(".")[1]&&a.push(t[e])}),this.setState({files:a,albumTitle:"New Album",newFiles:!0})}},{key:"uploadNewAlbumS3",value:function(){var e=this;if(this.state.newFiles)if(this.state.albumTitleInput){var t={bucketName:"tlsshootspics",dirName:this.state.albumTitleInput,region:"us-east-1",accessKeyId:J.access,secretAccessKey:J.secret,s3Url:"https://tlsshootspics.s3.amazonaws.com/"},a=new B.a(t),n=[];if(window.confirm("Are you sure you want to upload this album?")){this.uploading();for(var l=0;l<this.state.files.length;l++)a.uploadFile(this.state.files[l],t).then(function(t){n.push(t.location);var a=e.state.counter;e.setState({counter:a+=1}),e.state.counter==e.state.files.length&&(e.setState({awsFiles:n}),e.uploadNewAlbumServer()),e.uploading()}).catch(function(e){})}}else alert("No album title");else alert("button not active")}},{key:"uploadNewAlbumServer",value:function(){var e=this,t=this.state.awsFiles[0].split("/")[3];fetch("".concat(H,"/albums"),{method:"POST",mode:"cors",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({album:{title:this.state.albumTitleInput,cover:0,awsLocation:t,images:this.state.awsFiles}})}).then(function(e){return e.json()}).then(function(t){var a=e;e.getAlbums(),setTimeout(function(){a.selectAlbum(a.state.albums.length-1)},2e3)}).catch(function(e){})}},{key:"deleteAlbumS3",value:function(){var e=this;if(!this.state.newFiles&&this.state.activeAlbum.album){if(window.confirm("Are you sure you want to delete this album?")){this.uploading();for(var t={bucketName:"tlsshootspics",dirName:this.state.activeAlbum.album.awsLocation,accessKeyId:J.access,secretAccessKey:J.secret,s3Url:"https://tlsshootspics.s3.amazonaws.com/"},a=new B.a(t),n=function(){var n=e.state.activeAlbum.images[l].url.split("/")[4],i=l;a.deleteFile(n,t).then(function(e){}).catch(function(e){return console.error(e)}),fetch("".concat(H,"/images/").concat(e.state.activeAlbum.images[l].id),{method:"DELETE",mode:"cors",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){var a=e.state.counter;e.setState({counter:a+=1}),e.uploading(),e.state.activeAlbum.images.length-1==i&&e.deleteAlbumServer()}).catch(function(e){})},l=0;l<this.state.activeAlbum.images.length;l++)n()}}else alert("button not active")}},{key:"deleteAlbumServer",value:function(){var e=this;fetch("".concat(H,"/albums/").concat(this.state.activeAlbum.album.id),{method:"DELETE",mode:"cors",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.clearEditor(),e.getAlbums()}).catch(function(e){})}},{key:"confirmAction",value:function(e){}},{key:"clearEditor",value:function(){this.setState({activeAlbumIdx:0,activeAlbum:{},albumTitle:"No Album Selected",albumTitleInput:"",totalNumberOfImages:0,files:[],newFiles:!1})}},{key:"uploading",value:function(){this.state.newFiles?this.state.uploading&&this.state.counter===this.state.files.length?this.setState({uploading:!1,counter:0}):this.setState({uploading:!0}):this.state.uploading&&this.state.counter===this.state.activeAlbum.images.length?this.setState({uploading:!1,counter:0}):this.setState({uploading:!0})}},{key:"renderAlbums",value:function(){for(var e=[],t=this.state.albums,a=0;a<t.length;a++)e.push(l.a.createElement("div",{className:"albumIcon",onClick:this.selectAlbum.bind(this,a)},l.a.createElement(G.a,{src:t[a].images[t[a].album.cover].url,style:{width:150,height:150,margin:5},loading:function(){return l.a.createElement(U.a,{type:"RevolvingDot",color:"#616161",height:"30",width:"30"})},error:function(){return l.a.createElement("div",null,"Loading...")}}),l.a.createElement("p",{className:"albumIconTitle"},t[a].album.title)));return e}},{key:"renderActiveAlbumFiles",value:function(){var e=[],t=this.state.activeAlbum;if(0!==Object.keys(t).length){e.push(l.a.createElement("div",{className:"fileItem"},l.a.createElement(G.a,{src:t.images[t.album.cover].url,style:{width:50,height:50},loading:function(){return l.a.createElement(U.a,{type:"RevolvingDot",color:"#616161",height:"30",width:"30"})},error:function(){return l.a.createElement("div",null,"Loading...")}}),l.a.createElement("p",null,t.images[t.album.cover].url.split("/")[t.images[t.album.cover].url.split("/").length-1])));for(var a=0;a<t.images.length;a++)a!==t.album.cover&&e.push(l.a.createElement("div",{className:"fileItem",onClick:this.selectImage.bind(this)},l.a.createElement(G.a,{src:t.images[a].url,style:{width:50,height:50},loading:function(){return l.a.createElement(U.a,{type:"RevolvingDot",color:"#616161",height:"30",width:"30"})},error:function(){return l.a.createElement("div",null,"Loading...")}}),l.a.createElement("p",null,t.images[a].url.split("/")[t.images[a].url.split("/").length-1]),l.a.createElement("div",{className:"setCoverBtn",onClick:this.updateAlbumCover.bind(this,t.images[a])},l.a.createElement("span",null,"set as cover"))))}else if(0!==this.state.files.length)for(var n=0;n<this.state.files.length;n++)e.push(l.a.createElement("div",{className:"fileItem"},l.a.createElement("p",null," ",this.state.files[n].name," ")));return e}},{key:"selectAlbumGroup",value:function(e){var t=this.state.albums.filter(function(t){return t.album.album_group_id==e.id});this.setState({selectedGroupAlbums:t,selectedGroup:e,groupEditor:!0})}},{key:"renderGroupedAlbums",value:function(){var e=this;return this.state.grouped_albums.map(function(t){return l.a.createElement("div",{className:"albumIcon",onClick:e.selectAlbumGroup.bind(e,t)},l.a.createElement(G.a,{src:t.cover,style:{width:150,height:150,margin:5},loading:function(){return l.a.createElement(U.a,{type:"RevolvingDot",color:"#616161",height:"30",width:"30"})},error:function(){return l.a.createElement("div",null,"Loading...")}}),l.a.createElement("p",{className:"albumIconTitle"},t.title))})}},{key:"renderActiveGroup",value:function(){var e=this;return this.state.selectedGroupAlbums.map(function(t){return l.a.createElement("div",{className:"fileItem",onClick:e.selectImageGroup.bind(e)},l.a.createElement(G.a,{src:t.images[t.album.cover].url,style:{width:50,height:50},loading:function(){return l.a.createElement(U.a,{type:"RevolvingDot",color:"#616161",height:"30",width:"30"})},error:function(){return l.a.createElement("div",null,"Loading...")}}),l.a.createElement("p",null,t.album.title),l.a.createElement("div",{className:"setCoverBtn",onClick:!0},l.a.createElement("span",null,"View Images")),l.a.createElement("div",{className:"setCoverBtn",onClick:!0},l.a.createElement("span",null,"Remove")))})}},{key:"render",value:function(){return this.state.logged?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"editorContainer",style:{width:"95%"}},l.a.createElement("h2",null,"Admin Login"),l.a.createElement("input",{value:this.state.adminPass,type:"password",onChange:this.handleAdminChangeText.bind(this),placeholder:"Enter Password",className:"titleInput"}),l.a.createElement("div",{className:"btn",style:{width:"20%"},onClick:this.verifyUser.bind(this)},l.a.createElement("p",null,"enter")))):l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Admin"),l.a.createElement("div",{className:"bodyContainer"},l.a.createElement("div",{className:"rightContainer"},l.a.createElement("div",{className:"actionsContainer"},l.a.createElement("h2",null,"Actions"),l.a.createElement("div",{className:"actionsWrapper"},l.a.createElement("div",{className:"btn"},l.a.createElement("p",null,"upload album"),l.a.createElement("input",{className:"fileInput",type:"file",name:"New Gallery",onChange:this.selectNewAlbum.bind(this),multiple:"",directory:"",webkitdirectory:"",mozdirectory:""})),l.a.createElement("div",{className:"btn",onClick:this.updateAlbumTitle.bind(this)},l.a.createElement("p",null,"update title")),l.a.createElement("div",{className:"btn",onClick:this.clearEditor.bind(this)},l.a.createElement("p",null,"clear editor")),l.a.createElement("div",{className:"btn",onClick:this.uploadNewAlbumS3.bind(this)},l.a.createElement("p",null,"publish album")),l.a.createElement("div",{className:"btn",onClick:this.deleteAlbumS3.bind(this)},l.a.createElement("p",null,"delete album")))),this.state.groupEditor?l.a.createElement("div",{className:"editorContainer"},l.a.createElement("h2",null,"Album Group Editor - ",l.a.createElement("strong",{style:{fontWeight:"900",color:"#d4ae93"}},this.state.selectedGroup.title)," "),l.a.createElement("input",{onChange:this.handleAlbumGroupTitleInput.bind(this),value:this.state.albumGroupTitleInput,placeholder:"Update Album Group Title",type:"text",className:"titleInput"}),l.a.createElement("div",{className:"filesContainer"},this.renderActiveGroup())):l.a.createElement("div",{className:"editorContainer"},l.a.createElement("h2",null,"Album Editor - ",l.a.createElement("strong",{style:{fontWeight:"900",color:"#d4ae93"}},this.state.albumTitle)," "),l.a.createElement("input",{onChange:this.handleChangeText.bind(this),value:this.state.albumTitleInput,placeholder:"Update Album Title",type:"text",className:"titleInput"}),l.a.createElement("div",{className:"filesContainer"},this.renderActiveAlbumFiles()))),l.a.createElement("div",{className:"albumsContainer"},l.a.createElement("h2",null,"Stored Albums"),l.a.createElement("div",{className:"albumIcons"},this.renderAlbums()))),this.state.uploading?l.a.createElement("div",{style:{color:"#fff",fontSize:42,position:"fixed",top:0,bottom:0,left:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",background:"#00000090"}},this.state.newFiles?"uploaded":"deleted",": ",this.state.counter,"/",this.state.newFiles?this.state.files.length:this.state.activeAlbum.images.length):l.a.createElement("div",null))}}]),t}(n.Component),V=(a(139),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"containerAdmin"},l.a.createElement("h1",null,"TLS Shoots Website Docs"),l.a.createElement("a",{href:"#Development"},"Development Details"),l.a.createElement("br",null),l.a.createElement("a",{href:"#Admin"},"Admin Instructions"),l.a.createElement("br",null),l.a.createElement("a",{href:"#Developer"},"Developer"),l.a.createElement("a",{name:"Development"}),l.a.createElement("h2",null,"======Development Details======"),l.a.createElement("h3",null,"Tools"),l.a.createElement("ul",null,l.a.createElement("li",null,"ReactJS (frontend)"),l.a.createElement("li",null,"Ruby on Rails (backend)"),l.a.createElement("li",null,"Express.JS (mailing API)"),l.a.createElement("li",null,"AWS S3 (image storage)"),l.a.createElement("li",null,"Github Pages (frontend hosting)"),l.a.createElement("li",null,"Heroku (backend & mailing API hosting)"),l.a.createElement("li",null,"GoDaddy (Domain hosting)")),l.a.createElement("a",{name:"Admin"}),l.a.createElement("h2",null,"======Admin Instructions======"),l.a.createElement("h3",null,"Upload New Album"),l.a.createElement("ol",null,l.a.createElement("li",null,'Under Actions, Press "upload album"'),l.a.createElement("li",null,"Under Album Editor, type in the desired album title"),l.a.createElement("li",null,'Under Actions, Press "publish album" ',l.a.createElement("br",null),"IMPORTANT: DO NOT CLOSE THE BROSWER UNTIL THE PROCESS IS COMPLETE")),l.a.createElement("h3",null,"Modify New Album"),l.a.createElement("p",null,"Change Cover Image"),l.a.createElement("ol",null,l.a.createElement("li",null,"Under Stored Albums, select the Album you wish to modify"),l.a.createElement("li",null,"Under Album Editor, click on the image you want as the cover"),l.a.createElement("li",null,'On the selected image, click "set cover"')),l.a.createElement("p",null,"Change Album Title"),l.a.createElement("ol",null,l.a.createElement("li",null,"Under Stored Albums, select the Album you wish to modify"),l.a.createElement("li",null,"Under Album Editor, type in the new title"),l.a.createElement("li",null,'Under Actions, click "update title"')),l.a.createElement("h3",null,"Delete Album"),l.a.createElement("ol",null,l.a.createElement("li",null,"Under Stored Albums, select the Album you wish to delete"),l.a.createElement("li",null,'Under Actions, click "delete album"',l.a.createElement("br",null),"IMPORTANT: DO NOT CLOSE THE BROSWER UNTIL THE PROCESS IS COMPLETE")),l.a.createElement("a",{name:"Developer"}),l.a.createElement("h2",null,"======Developer======"),l.a.createElement("ul",null,l.a.createElement("li",null,"Wellington Vicioso"),l.a.createElement("li",null,"wellington.vicioso@gmail.com"),l.a.createElement("li",null,"310-367-2608 ")))}}]),t}(n.Component));f.b.add(v.b),f.b.add(v.a),f.b.add(v.d);var Y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={opacity:0,activeImg:"",activeImgStyle:{zIndex:10,opacity:1}},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.location.state?setTimeout(function(){e.setState({activeImg:""})},0):e.getImage()}},{key:"getImage",value:function(){var e=Object(S.a)(C.a.mark(function e(){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this,fetch("http://localhost:3000/images/".concat(this.props.match.params.id),{method:"GET",mode:"cors",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log("responseJson",e),t.setState({activeImg:e.url,activeImgStyle:{zIndex:10,opacity:1,transition:".3s"}})}).catch(function(e){console.log("=====API error=====",e)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fadeIn",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this;setTimeout(function(){t.setState({opacity:1})},e)}},{key:"fadeOut",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this;setTimeout(function(){t.setState({opacity:0})},e)}},{key:"render",value:function(){return l.a.createElement("div",{style:{height:"auto",position:"relative",padding:100,paddingBottom:0}},l.a.createElement("img",{unselectable:"on",ref:"pop",src:this.state.activeImg,className:"popped-img",style:{resizeMode:"contain",transition:"1s",background:"#000",zIndex:10001},alt:"logo"}))}}]),t}(n.Component),X=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={opacity:0},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.fadeIn()}},{key:"fadeIn",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this;setTimeout(function(){t.setState({opacity:1})},e)}},{key:"render",value:function(){return l.a.createElement(h.a,{basename:""},l.a.createElement("div",{className:"App",style:{opacity:this.state.opacity}},l.a.createElement(g,null),l.a.createElement(d.a,{path:"/",exact:!0,component:N}),l.a.createElement(d.a,{path:"/contact",component:P}),l.a.createElement(d.a,{path:"/gallery/:id",component:M}),l.a.createElement(d.a,{path:"/grouped_galleries/:id",component:F}),l.a.createElement(d.a,{path:"/galleries",component:F}),l.a.createElement(d.a,{path:"/images/:id",component:Y}),l.a.createElement(d.a,{path:"/admin",component:K}),l.a.createElement(d.a,{path:"/adminDocs",component:V}),l.a.createElement(y,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},20:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/tls-camera.ba93efd3.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/TLSLogo.0f9e5528.png"},27:function(e,t,a){e.exports=a.p+"static/media/private.d2b3583c.jpg"},48:function(e,t,a){e.exports=a(142)},53:function(e,t,a){}},[[48,2,1]]]);
//# sourceMappingURL=main.25b09ae6.chunk.js.map