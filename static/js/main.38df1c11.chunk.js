(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,n){e.exports=n.p+"static/media/gcstep1.ac14fdf8.png"},131:function(e,t,n){e.exports=n.p+"static/media/gcstep2.d0bf2a43.png"},132:function(e,t,n){e.exports=n.p+"static/media/gcstep3.b6e99921.png"},133:function(e,t,n){e.exports=n.p+"static/media/gcstep4.b3eb7aa2.png"},134:function(e,t,n){e.exports=n.p+"static/media/cstep1.82163c06.png"},135:function(e,t,n){e.exports=n.p+"static/media/cstep2.233667a8.png"},136:function(e,t,n){e.exports=n.p+"static/media/cstep3.6bd7698b.png"},204:function(e,t,n){e.exports=n(449)},209:function(e,t,n){},449:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),l=(n(209),n(14)),c=n(10),s=n(16),d=n(15),m=n(17),u=n(125),h=n(41),g=n(11),p=n.n(g),f=n(48),v=n.n(f),y=n(36),E=n.n(y),S={display:"flex",flexDirection:"column",height:"100vh",backgroundImage:"url('http://res.cloudinary.com/simpleview/image/upload/v1477951440/clients/denver/20130701_ccc_219_ac3da237-da9f-489b-9a26-2fe47e781887.jpg')",backgroundSize:"cover",fontWeight:"semi-bold",alignItems:"center"},b={display:"flex",flexDirection:"column",height:"100vh",backgroundImage:"url('http://res.cloudinary.com/simpleview/image/upload/v1477951440/clients/denver/20130701_ccc_219_ac3da237-da9f-489b-9a26-2fe47e781887.jpg')",backgroundSize:"cover",fontWeight:"semi-bold",alignItems:"center"},C={marginTop:250,marginBottom:50},k={fontSize:30,color:"#FFFFFF"},w={marginTop:180,fontSize:25,color:"#FFFFFF",marginBottom:100},I={display:"flex",flexDirection:"row",alignItems:"center",height:50,width:800,backgroundColor:"#FFFFFF"},x={display:"flex",flexDirection:"row",alignItems:"center",height:25,width:350,padding:10,backgroundColor:"#FFFFFF"},F={marginLeft:10,width:750},O={backgroundColor:"#2761AA",fontSize:12,marginRight:10,marginLeft:5,color:"#FFFFFF"},A={marginTop:15,backgroundColor:"#FFFFFF",fontSize:10},D=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).setNameState=function(e){n.setState({name:e})},n.onKeyDown=function(e,t){"Enter"===e&&n.props.history.push({pathname:"/search",name:t,previous:"home"})},n.search=function(){var e=n.state.name;n.props.history.push({pathname:"/search",name:e,previous:"home"})},n.state={name:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.name;return o.a.createElement("div",null,o.a.createElement(p.a,{query:"(max-device-width: 480px)"},o.a.createElement("div",{style:b},o.a.createElement("div",{style:w},"Get a custom JSM schedule"),o.a.createElement(v.a,{placeholder:"Your Name (First Last)",disableUnderline:!0,style:x,value:t,onChange:function(t){return e.setNameState(t.target.value)},onKeyDown:function(t){return e.onKeyDown(t.key,t.target.value)}}),o.a.createElement(E.a,{style:A,variant:"contained",size:"medium",onClick:function(){return e.search()}},o.a.createElement("div",null,"Search")))),o.a.createElement(p.a,{query:"(min-device-width: 480px)"},o.a.createElement("div",{style:S},o.a.createElement("div",{style:C},o.a.createElement("div",{style:k},"Get your custom JSM schedule")),o.a.createElement("div",{style:I},o.a.createElement(v.a,{placeholder:"Your Name (First Last)",disableUnderline:!0,style:F,value:t,onChange:function(t){return e.setNameState(t.target.value)},onKeyDown:function(t){return e.onKeyDown(t.key,t.target.value)}}),o.a.createElement(E.a,{style:O,variant:"contained",size:"medium",onClick:function(){return e.search()}},o.a.createElement("div",null,"Search"))))))}}]),t}(o.a.Component),B=n(122),z=n.n(B),j=n(187),L=n.n(j),T=n(84),R=n.n(T),W=n(126),G=n.n(W),N=n(188),J=n.n(N),U={maxHeight:400,overflow:"auto",backgroundColor:"white",marginLeft:20,marginRight:20,border:"1px solid"},K={width:250,justifyContent:"space-between",borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"#e0e0e0",height:50},P={marginTop:-8,width:250,justifyContent:"space-between",borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"#e0e0e0"},V={width:250,justifyContent:"space-between",borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"#e0e0e0"},q={marginLeft:10},M=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).setAddItemState=function(e){n.setState({item:e})},n.addItem=function(e){var t=n.props,a=t.type;(0,t.addItem)(n.state.item,a),n.setState({item:""})};var a=n.props,o=a.authors,r=a.item;return n.state={item:r,authors:o},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.authors!==e.authors||this.props.item!==e.item){var t=this.props,n=t.authors;t.item;this.setState({item:"",authors:n})}}},{key:"renderList",value:function(){var e=this.state.authors,t=this.props,n=t.deleteItem,a=t.type;return e&&e.length>0?o.a.createElement(L.a,null,e.map(function(e,t){return 0==t?o.a.createElement(R.a,{key:t,style:P},e,o.a.createElement(G.a,{style:q,onClick:function(){return n(e,a)}})):o.a.createElement(R.a,{key:t,style:K},e,o.a.createElement(G.a,{style:q,onClick:function(){return n(e,a)}}))})):null}},{key:"render",value:function(){var e=this,t=this.state.item;return o.a.createElement("div",{style:U},o.a.createElement(R.a,{style:V},o.a.createElement(z.a,{placeholder:"Add Name",disableUnderline:!0,value:t,onChange:function(t){return e.setAddItemState(t.target.value)}}),o.a.createElement(J.a,{style:q,onClick:function(){return e.addItem()}})),this.renderList())}}]),t}(o.a.Component),Y=n(31),_=n.n(Y),H=n(32),$=n.n(H),Q=n(33),X=n.n(Q),Z=n(60),ee=n.n(Z),te={display:"flex",flexDirection:"column",height:"100vh",color:"#000000",backgroundSize:"cover",fontWeight:"semi-bold",alignItems:"center"},ne={display:"flex",flexDirection:"column",height:"100%",backgroundSize:"cover",fontWeight:"semi-bold",alignItems:"center"},ae={display:"flex",flexDirection:"row",marginBottom:25},oe={display:"flex",flexDirection:"column",marginBottom:40},re={marginLeft:20,fontSize:15,fontWeight:"semi-bold",textAlign:"center",color:"#000000",marginBottom:10},ie={marginTop:40,fontSize:15,fontWeight:"semi-bold",textAlign:"center",color:"#000000",marginBottom:10},le={marginTop:20,fontSize:20,fontWeight:"semi-bold",textAlign:"center",color:"#000000",marginBottom:25},ce={display:"flex",flexDirection:"row",color:"#000000"},se={display:"flex",flexDirection:"column",color:"#000000",marginTop:20,marginLeft:20,marginRight:20,marginBottom:20,alignItems:"center"},de={marginRight:10,backgroundColor:"#2761AA",color:"#FFFFFF"},me={color:"#000000"},ue={display:"flex",height:"100vh",flexDirection:"column",alignItems:"center"},he={marginTop:80,fontSize:20,color:"#000000",textAlign:"center",marginBottom:50},ge={marginTop:80,fontSize:10,color:"#000000",textAlign:"center",marginBottom:50},pe={display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#2761AA",height:70,padding:25,width:"100vw"},fe={display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#2761AA",height:40,padding:15,width:"100vw"},ve={display:"flex",flexDirection:"row",alignItems:"center",height:50,width:800,backgroundColor:"#FFFFFF"},ye={display:"flex",flexDirection:"row",alignItems:"center",height:40,width:350,backgroundColor:"#FFFFFF"},Ee={marginLeft:10,width:750},Se={marginLeft:10,width:750},be={backgroundColor:"#2761AA",fontSize:10,marginRight:10,marginLeft:5,color:"#FFFFFF"},Ce={backgroundColor:"#2761AA",fontSize:10,marginRight:10,marginLeft:5,color:"#FFFFFF"},ke=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).formatString=function(e){return e.replace(/(\B)[^ ]*/g,function(e){return e.toLowerCase()}).replace(/^[^ ]/g,function(e){return e.toUpperCase()})},n.fetchAuthorData=function(){var e=n.state.name;console.log(n.props.location.previous),!n.props.location.previous||"home"!=n.props.location.previous&&"searchFirst"!=n.props.location.previous?n.setState({loading:!1}):fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getAuthors?name="+e).then(function(e){return e.text()}).then(function(e){var t=JSON.parse(e),a=t["Cited Authors"],o=t["Citing Authors"],r=[];a=(a=a.map(function(e){return e.name})).filter(function(e){return!e.includes("null")}),o=(o=o.map(function(e){return e.name})).filter(function(e){return!e.includes("null")}),r=(r=r.map(function(e){return e.name})).filter(function(e){return!e.includes("null")}),n.setState({citingAuthors:o,citedAuthors:a,coAuthors:r,loading:!1}),localStorage.setItem("citingAuthors",JSON.stringify(o)),localStorage.setItem("citedAuthors",JSON.stringify(a)),localStorage.setItem("coAuthors",JSON.stringify(r)),localStorage.setItem("others",JSON.stringify([]))}).catch(function(e){console.log(e),n.setState({loading:!1})})},n.generateSchedule=function(){var e=n.state.selected;"Calendar View"==e?n.openCalendarView():"Google Calendar"==e?n.openGoogleCalendarInstructions():"iCal"==e?n.openiCalInstructions():n.openTextInstructions()},n.openCalendarView=function(){var e=n.state,t=e.citingAuthors,a=e.citedAuthors,o=e.coAuthors,r=e.others,i=t.concat(a).concat(o).concat(r);n.props.history.push({pathname:"calendar",state:{authors:i}})},n.openGoogleCalendarInstructions=function(){var e=n.state,t=e.citingAuthors,a=e.citedAuthors,o=e.coAuthors,r=e.others,i=t.concat(a).concat(o).concat(r);n.props.history.push({pathname:"instructions",state:{authors:i,view:"Google Calendar"}})},n.openiCalInstructions=function(){var e=n.state,t=e.citingAuthors,a=e.citedAuthors,o=e.coAuthors,r=e.others,i=t.concat(a).concat(o).concat(r);n.props.history.push({pathname:"instructions",state:{authors:i,view:"iCal"}})},n.openTextInstructions=function(){var e=n.state,t=e.citingAuthors,a=e.citedAuthors,o=e.coAuthors,r=e.others,i=t.concat(a).concat(o).concat(r);fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getText",{method:"POST",body:JSON.stringify({authors:i})}).then(function(e){return e.blob()}).then(function(e){var t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="schedule.txt",document.body.appendChild(t),t.click()},function(e){console.log(e)})},n.addItem=function(e,t){if("Citing"==t){var a=n.state.citingAuthors;a.unshift(e),n.setState({citingAuthors:a,citingAuthorsItem:""}),localStorage.setItem("citingAuthors",JSON.stringify(a))}else if("Cited"==t){var o=n.state.citedAuthors;o.unshift(e),n.setState({citedAuthors:o,citedAuthorsItem:""}),localStorage.setItem("citedAuthors",JSON.stringify(o))}else if("Co"==t){var r=n.state.coAuthors;r.unshift(e),n.setState({coAuthors:r,coAuthorsItem:""}),localStorage.setItem("coAuthors",JSON.stringify(r))}else{var i=n.state.others;i.unshift(e),n.setState({others:i,othersItem:""}),localStorage.setItem("others",JSON.stringify(i))}},n.deleteItem=function(e,t){if("Citing"==t){var a=n.state.citingAuthors;a=a.filter(function(t){return t!==e}),n.setState({citingAuthors:a}),localStorage.setItem("citingAuthors",JSON.stringify(a))}else if("Cited"==t){var o=n.state.citedAuthors;o=o.filter(function(t){return t!==e}),n.setState({citedAuthors:o}),localStorage.setItem("citedAuthors",JSON.stringify(o))}else if("Co"==t){var r=n.state.coAuthors;r=r.filter(function(t){return t!==e}),n.setState({coAuthors:r}),localStorage.setItem("coAuthors",JSON.stringify(r))}else{var i=n.state.others;i=i.filter(function(t){return t!==e}),n.setState({others:i}),localStorage.setItem("others",JSON.stringify(i))}},n.setNameState=function(e){n.setState({name:e})},n.onKeyDown=function(e,t){"Enter"===e&&n.props.history.push({pathname:"/search",name:t,previous:"searchFirst"})},n.search=function(){var e=n.state.name;n.props.history.push({pathname:"/search",name:e,previous:"searchFirst"})};var a=null,o=null,r=null,i=null,c=null;return n.props.location.previous&&"home"==n.props.location.previous?(a=n.props.location.name,r=[],o=[],i=[],c=[],localStorage.setItem("name",a)):(a=localStorage.getItem("name"),r=JSON.parse(localStorage.getItem("citingAuthors"))||[],o=JSON.parse(localStorage.getItem("citedAuthors"))||[],i=JSON.parse(localStorage.getItem("coAuthors"))||[],c=JSON.parse(localStorage.getItem("others"))||[]),n.state={selected:"Calendar View",citingAuthors:r,citedAuthors:o,coAuthors:i,others:c,loading:!0,name:a},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"setRadioButtonChange",value:function(e){this.setState({selected:e})}},{key:"componentDidUpdate",value:function(e,t){if(this.props.location.previous&&"searchFirst"==this.props.location.previous&&this.props.location.name!=e.location.name){console.log("in");var n=this.props.location.name;localStorage.setItem("name",n),this.setState({selected:"Calendar View",citingAuthors:[],citedAuthors:[],coAuthors:[],others:[],loading:!0,name:n}),this.fetchAuthorData()}}},{key:"componentDidMount",value:function(){this.fetchAuthorData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.selected,a=t.citingAuthors,r=t.citedAuthors,i=t.coAuthors,l=t.others,c=(t.citingAuthorsItem,t.citedAuthorsItem,t.othersItem,t.loading),s=t.name;if(c)return o.a.createElement("div",null,o.a.createElement(p.a,{query:"(max-device-width: 480px)"},o.a.createElement("div",{style:ue},o.a.createElement("div",{style:ge},o.a.createElement("p",null,"Please wait while your personal talk recommendations are being generated."),o.a.createElement("p",null,"This may take 30 seconds or so... but it's far less time than going through the entire JSM program book yourself!")),o.a.createElement(ee.a,null))),o.a.createElement(p.a,{query:"(min-device-width: 480px)"},o.a.createElement("div",{style:ue},o.a.createElement("div",{style:he},o.a.createElement("p",null,"Please wait while your personal talk recommendations are being generated."),o.a.createElement("p",null,"This may take 30 seconds or so... but it's far less time than going through the entire JSM program book yourself!")),o.a.createElement(ee.a,null))));s&&"undefined"!==s&&s.split(" ")[0];return o.a.createElement("div",null,o.a.createElement(p.a,{query:"(max-device-width: 480px)"},o.a.createElement("div",{style:ne},o.a.createElement("div",{style:fe},o.a.createElement("div",{style:ye},o.a.createElement(v.a,{placeholder:"Your Name (First Last)",disableUnderline:!0,style:Se,value:s,onChange:function(t){return e.setNameState(t.target.value)},onKeyDown:function(t){return e.onKeyDown(t.key,t.target.value)}}),o.a.createElement(E.a,{style:Ce,variant:"contained",size:"medium",onClick:function(){return e.search()}},o.a.createElement("div",null,"Search")))),o.a.createElement("div",{style:oe},o.a.createElement("div",null,o.a.createElement("div",{style:ie},"People who cite you a lot"),o.a.createElement(M,{type:"Citing",authors:a,addItem:this.addItem,deleteItem:this.deleteItem})),o.a.createElement("div",null,o.a.createElement("div",{style:ie},"People you cite a lot"),o.a.createElement(M,{type:"Cited",authors:r,addItem:this.addItem,deleteItem:this.deleteItem})),o.a.createElement("div",null,o.a.createElement("div",{style:ie},"Co Authors"),o.a.createElement(M,{type:"Co",authors:i,addItem:this.addItem,deleteItem:this.deleteItem})),o.a.createElement("div",null,o.a.createElement("div",{style:ie},"Others"),o.a.createElement(M,{type:"Other",authors:l,addItem:this.addItem,deleteItem:this.deleteItem}))),o.a.createElement("div",{style:se},o.a.createElement("div",null,o.a.createElement(_.a,{style:me,checked:"Calendar View"==n,icon:o.a.createElement($.a,{fontSize:"small"}),checkedIcon:o.a.createElement(X.a,{fontSize:"small"}),onChange:function(){return e.setRadioButtonChange("Calendar View")}}),"Calendar View",o.a.createElement(_.a,{style:me,checked:"Google Calendar"==n,icon:o.a.createElement($.a,{fontSize:"small"}),checkedIcon:o.a.createElement(X.a,{fontSize:"small"}),onChange:function(){return e.setRadioButtonChange("Google Calendar")}}),"Google Calendar"),o.a.createElement("div",null,o.a.createElement(_.a,{style:me,checked:"iCal"==n,icon:o.a.createElement($.a,{fontSize:"small"}),checkedIcon:o.a.createElement(X.a,{fontSize:"small"}),onChange:function(){return e.setRadioButtonChange("iCal")}}),"iCal",o.a.createElement(_.a,{style:me,checked:"Text"==n,icon:o.a.createElement($.a,{fontSize:"small"}),checkedIcon:o.a.createElement(X.a,{fontSize:"small"}),onChange:function(){return e.setRadioButtonChange("Text")}}),"Text (.txt)"),o.a.createElement(E.a,{variant:"contained",size:"medium",onClick:function(){return e.generateSchedule()}},o.a.createElement("div",null,"Generate my JSM schedule"))))),o.a.createElement(p.a,{query:"(min-device-width: 480px)"},o.a.createElement("div",{style:te},o.a.createElement("div",{style:pe},o.a.createElement("div",{style:ve},o.a.createElement(v.a,{placeholder:"Your Name (First Last)",disableUnderline:!0,style:Ee,value:s,onChange:function(t){return e.setNameState(t.target.value)},onKeyDown:function(t){return e.onKeyDown(t.key,t.target.value)}}),o.a.createElement(E.a,{style:be,variant:"contained",size:"medium",onClick:function(){return e.search()}},o.a.createElement("div",null,"Search")))),o.a.createElement("div",{style:le},"Feel free to add or remove any names before generating your schedule"),o.a.createElement("div",{style:ae},o.a.createElement("div",null,o.a.createElement("div",{style:re},"People who cite you a lot"),o.a.createElement(M,{type:"Citing",authors:a,addItem:this.addItem,deleteItem:this.deleteItem})),o.a.createElement("div",null,o.a.createElement("div",{style:re},"People you cite a lot"),o.a.createElement(M,{type:"Cited",authors:r,addItem:this.addItem,deleteItem:this.deleteItem})),o.a.createElement("div",null,o.a.createElement("div",{style:re},"Co Authors"),o.a.createElement(M,{type:"Co",authors:i,addItem:this.addItem,deleteItem:this.deleteItem})),o.a.createElement("div",null,o.a.createElement("div",{style:re},"Others"),o.a.createElement(M,{type:"Other",authors:l,addItem:this.addItem,deleteItem:this.deleteItem}))),o.a.createElement("div",{style:ce},o.a.createElement(E.a,{style:de,variant:"contained",size:"medium",onClick:function(){return e.generateSchedule()}},"Generate my JSM schedule"),o.a.createElement("div",null,o.a.createElement(_.a,{style:me,checked:"Calendar View"==n,icon:o.a.createElement($.a,{fontSize:"small"}),checkedIcon:o.a.createElement(X.a,{fontSize:"small"}),onChange:function(){return e.setRadioButtonChange("Calendar View")}}),"Calendar View",o.a.createElement(_.a,{style:me,checked:"Google Calendar"==n,icon:o.a.createElement($.a,{fontSize:"small"}),checkedIcon:o.a.createElement(X.a,{fontSize:"small"}),onChange:function(){return e.setRadioButtonChange("Google Calendar")}}),"Google Calendar",o.a.createElement(_.a,{style:me,checked:"iCal"==n,icon:o.a.createElement($.a,{fontSize:"small"}),checkedIcon:o.a.createElement(X.a,{fontSize:"small"}),onChange:function(){return e.setRadioButtonChange("iCal")}}),"iCal",o.a.createElement(_.a,{style:me,checked:"Text"==n,icon:o.a.createElement($.a,{fontSize:"small"}),checkedIcon:o.a.createElement(X.a,{fontSize:"small"}),onChange:function(){return e.setRadioButtonChange("Text")}}),"Text (.txt)")))))}}]),t}(o.a.Component),we=n(87),Ie=n(202),xe=n.n(Ie),Fe=(n(443),we.a.momentLocalizer(xe.a)),Oe={display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},Ae={margin:10},De=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).convertDateFormat=function(e){var t=e.substring(0,4),n=e.substring(4,6),a=e.substring(6,8),o=e.substring(9,11),r=e.substring(11,13);return new Date(t,n-1,a,o,r)},n.eventStyleGetter=function(e){return{style:{backgroundColor:"#FFFFFF",color:e.color}}},n.state={speakerEvents:[],authorEvents:[],selfEvents:[],chairEvents:[],loading:!0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.location&&this.props.location.state?this.props.location.state.authors:null;t?fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getSchedule",{method:"POST",body:JSON.stringify({authors:t,name:localStorage.getItem("name")})}).then(function(e){return e.text()}).then(function(t){var n=JSON.parse(t),a=n.Speaker,o=n.Author,r=n.Self,i=n.Chair;a=a.map(function(t){var n=Object.assign({},t);return n.color="#ff3d00",n.title=t.title+" ("+t.location+")",n.start=e.convertDateFormat(t.start),n.end=e.convertDateFormat(t.end),n}),o=o.map(function(t){var n=Object.assign({},t);return n.color="#ff00f2",n.title=t.title+" ("+t.location+")",n.start=e.convertDateFormat(t.start),n.end=e.convertDateFormat(t.end),n}),r=r.map(function(t){var n=Object.assign({},t);return n.color="#2979ff",n.title=t.title+" ("+t.location+")",n.start=e.convertDateFormat(t.start),n.end=e.convertDateFormat(t.end),n}),i=i.map(function(t){var n=Object.assign({},t);return n.color="#2979ff",n.title=t.title+" ("+t.location+")",n.start=e.convertDateFormat(t.start),n.end=e.convertDateFormat(t.end),n}),o=(o=o.filter(function(e){return-1==r.findIndex(function(t){return t.title==e.title})})).filter(function(e){return-1==i.findIndex(function(t){return t.title==e.title})}),a=(a=a.filter(function(e){return-1==r.findIndex(function(t){return t.title==e.title})})).filter(function(e){return-1==i.findIndex(function(t){return t.title==e.title})}),i=i.map(function(e){return e.title="Chair: "+e.title,e}),e.setState({speakerEvents:a,authorEvents:o,selfEvents:r,chairEvents:i,loading:!1})}).catch(function(t){console.log(t),e.setState({loading:!1})}):this.setState({loading:!1})}},{key:"render",value:function(){var e=this.state,t=e.authorEvents,n=e.speakerEvents,a=e.selfEvents,r=e.chairEvents,i=e.loading,l=t.concat(n).concat(a).concat(r);return i?o.a.createElement("div",{style:Oe},o.a.createElement(ee.a,null)):o.a.createElement("div",null,o.a.createElement(p.a,{query:"(max-device-width: 480px)"},o.a.createElement(we.a,{style:Ae,events:l,localizer:Fe,step:60,showMultiDayTimes:!0,eventPropGetter:this.eventStyleGetter,defaultView:"agenda",defaultDate:new Date(2019,6,26)})),o.a.createElement(p.a,{query:"(min-device-width: 480px)"},o.a.createElement(we.a,{events:l,localizer:Fe,style:{height:"100vh",width:"100vw"},step:60,showMultiDayTimes:!0,eventPropGetter:this.eventStyleGetter,defaultView:"agenda",defaultDate:new Date(2019,6,26)})))}}]),t}(o.a.Component),Be=n(130),ze=n.n(Be),je=n(131),Le=n.n(je),Te=n(132),Re=n.n(Te),We=n(133),Ge=n.n(We),Ne={display:"flex",flexDirection:"column",margin:25},Je={marginTop:50,fontSize:30,marginBottom:50,textAlign:"center"},Ue={fontSize:15,marginLeft:20,marginBottom:5,fontWeight:"bold"},Ke={fontSize:15,marginLeft:20,marginBottom:5},Pe={fontSize:30,fontWeight:"bold",marginLeft:20,marginTop:20,marginBottom:20},Ve={margin:50,height:450,width:200},qe={margin:50,height:300,width:180},Me={margin:50,height:450,width:300},Ye={margin:50,height:300,width:200},_e={margin:50,height:150,width:300},He={margin:50,height:200,width:300},$e=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).renderContent=function(){var e=n.state.step;return"Introduction"==e?o.a.createElement("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"#F7F7F7",width:"100%",paddingLeft:200}},o.a.createElement("div",{style:{marginTop:150,fontSize:40,fontWeight:"bold",marginBottom:50}},"Import calendar to Google Calendar"),o.a.createElement("div",null,o.a.createElement("p",{style:{fontWeight:"bold",fontSize:25}},o.a.createElement("span",{style:{borderBottom:"1px solid black",paddingBottom:2,marginRight:5}},"1 "),"Summary")),o.a.createElement("div",{style:{color:"#696868"}},o.a.createElement("p",null,"Your download will begin shortly."),o.a.createElement("p",null,"speakercalendar.ics contains talks where the person of interest is a speaker"),o.a.createElement("p",null,"authorcalendar.ics contains talks where the person of interest is a non-speaking author"),o.a.createElement("p",null,"You can transfer your events from a different calendar application or Google Account to Google Calendar."))):"Open Google Calendar"==e?o.a.createElement("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"#F7F7F7",width:"100%",paddingLeft:200}},o.a.createElement("div",{style:{marginTop:150,fontSize:40,fontWeight:"bold",marginBottom:50}},"Import calendar to Google Calendar"),o.a.createElement("div",null,o.a.createElement("p",{style:{fontWeight:"bold",fontSize:25}},o.a.createElement("span",{style:{borderBottom:"1px solid black",paddingBottom:2,marginRight:5}},"2 "),"Open Google Calendar")),o.a.createElement("div",{style:{color:"#696868"}},"Navigate to calendar.google.com")):"Add Other Calendars"==e?o.a.createElement("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"#F7F7F7",paddingLeft:200,paddingRight:20,width:"100%",paddingBottom:30}},o.a.createElement("div",{style:{marginTop:150,fontSize:40,fontWeight:"bold",marginBottom:50}},"Import calendar to Google Calendar"),o.a.createElement("div",null,o.a.createElement("p",{style:{fontWeight:"bold",fontSize:25}},o.a.createElement("span",{style:{borderBottom:"1px solid black",paddingBottom:2,marginRight:5}},"3 "),"Add Other Calendars")),o.a.createElement("img",{style:Ve,src:ze.a}),o.a.createElement("div",{style:{color:"#696868"}},"Click on the '+' next other 'Other Calendar' on the left sidebar")):"Select Import"==e?o.a.createElement("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"#F7F7F7",paddingLeft:200,paddingRight:20,width:"100%",paddingBottom:30}},o.a.createElement("div",{style:{marginTop:150,fontSize:40,fontWeight:"bold",marginBottom:50}},"Import calendar to Google Calendar"),o.a.createElement("div",null,o.a.createElement("p",{style:{fontWeight:"bold",fontSize:25}},o.a.createElement("span",{style:{borderBottom:"1px solid black",paddingBottom:2,marginRight:5}},"4 "),"Select Import")),o.a.createElement("img",{style:Me,src:Le.a}),o.a.createElement("div",{style:{color:"#696868"}},"Click on the 'Import' option from the pop-up")):"Select Calendar"==e?o.a.createElement("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"#F7F7F7",paddingLeft:200,paddingRight:20,width:"100%"}},o.a.createElement("div",{style:{marginTop:150,fontSize:40,fontWeight:"bold",marginBottom:50}},"Import calendar to Google Calendar"),o.a.createElement("div",null,o.a.createElement("p",{style:{fontWeight:"bold",fontSize:25}},o.a.createElement("span",{style:{borderBottom:"1px solid black",paddingBottom:2,marginRight:5}},"5 "),"Select Calendar")),o.a.createElement("img",{style:_e,src:Re.a}),o.a.createElement("div",{style:{color:"#696868"}},"Click on 'Select file from your computer' and browse to locate the calendar .ics file to import")):"Import"==e?o.a.createElement("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"#F7F7F7",paddingLeft:200,paddingRight:20,width:"100%"}},o.a.createElement("div",{style:{marginTop:150,fontSize:40,fontWeight:"bold",marginBottom:50}},"Import calendar to Google Calendar"),o.a.createElement("div",null,o.a.createElement("p",{style:{fontWeight:"bold",fontSize:25}},o.a.createElement("span",{style:{borderBottom:"1px solid black",paddingBottom:2,marginRight:5}},"6 "),"Import")),o.a.createElement("img",{style:_e,src:Ge.a}),o.a.createElement("div",{style:{color:"#696868"}},"Click on the 'Import' button")):null},n.onClick=function(e){n.setState({step:e})},n.renderDiv=function(e){return o.a.createElement("div",{style:{marginTop:10,marginBottom:10,fontSize:20,color:"#696868"},onClick:function(){return n.onClick(e)}},e)},n.renderSelectedDiv=function(e){return o.a.createElement("div",{style:{marginTop:10,marginBottom:10,fontSize:20,fontWeight:"bold",color:"#000000"}},e)},n.renderSideBar=function(){var e=n.state.step;return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100vh",width:"25%",marginLeft:40}},"Introduction"!=e?n.renderDiv("Introduction"):n.renderSelectedDiv("Introduction"),"Open Google Calendar"!=e?n.renderDiv("Open Google Calendar"):n.renderSelectedDiv("Open Google Calendar"),"Add Other Calendars"!=e?n.renderDiv("Add Other Calendars"):n.renderSelectedDiv("Add Other Calendars"),"Select Import"!=e?n.renderDiv("Select Import"):n.renderSelectedDiv("Select Import"),"Select Calendar"!=e?n.renderDiv("Select Calendar"):n.renderSelectedDiv("Select Calendar"),"Import"!=e?n.renderDiv("Import"):n.renderSelectedDiv("Import"))},n.state={step:"Introduction"},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.authors;fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getSpeakerCalendar",{method:"POST",body:JSON.stringify({authors:e})}).then(function(e){return e.blob()}).then(function(e){var t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="speakercalendar.ics",document.body.appendChild(t),t.click()},function(e){console.log(e)}),fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getAuthorCalendar",{method:"POST",body:JSON.stringify({authors:e})}).then(function(e){return e.blob()}).then(function(e){var t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="authorcalendar.ics",document.body.appendChild(t),t.click()},function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p.a,{query:"(max-device-width: 480px)"},o.a.createElement("div",{style:Ne},o.a.createElement("div",{style:Je},"Import calendar to Google Calendar"),o.a.createElement("div",{style:Ue},o.a.createElement("p",null,"Your download will begin shortly."),o.a.createElement("p",null,"speakercalendar.ics contains talks where the person of interest is a speaker"),o.a.createElement("p",null,"authorcalendar.ics contains talks where the person of interest is a non-speaking author")),o.a.createElement("div",{style:Ke},"You can transfer your events from a different calendar application or Google Account to Google Calendar."),o.a.createElement("div",{style:Pe},"Step 1: Open Google Calendar"),o.a.createElement("div",{style:Ke},"Navigate to calendar.google.com"),o.a.createElement("div",{style:Pe},"Step 2: Add other calendars"),o.a.createElement("div",{style:Ke},"Click on the '+' next other 'Other Calendar' on the left sidebar"),o.a.createElement("img",{style:qe,src:ze.a}),o.a.createElement("div",{style:Pe},"Step 3: Select Import"),o.a.createElement("div",{style:Ke},"Click on the 'Import' option from the pop-up"),o.a.createElement("img",{style:Ye,src:Le.a}),o.a.createElement("div",{style:Pe},"Step 4: Select Calendar"),o.a.createElement("div",{style:Ke},"Click on 'Select file from your computer' and browse to locate the calendar .ics file to import."),o.a.createElement("img",{style:He,src:Re.a}),o.a.createElement("div",{style:Pe},"Step 5: Import"),o.a.createElement("div",{style:Ke},"Click on the 'Import' button"),o.a.createElement("img",{style:He,src:Ge.a}))),o.a.createElement(p.a,{query:"(min-device-width: 480px)"},o.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},this.renderSideBar(),this.renderContent())))}}]),t}(o.a.Component),Qe=n(134),Xe=n.n(Qe),Ze=n(135),et=n.n(Ze),tt=n(136),nt=n.n(tt),at={display:"flex",flexDirection:"column",margin:25},ot={marginTop:50,fontSize:30,marginBottom:50,textAlign:"center"},rt={fontSize:15,marginLeft:20,marginBottom:5,fontWeight:"bold"},it={fontSize:15,marginLeft:20,marginBottom:5},lt={fontSize:30,fontWeight:"bold",marginLeft:20,marginTop:20,marginBottom:20},ct={margin:50,height:250,width:350},st={margin:50,height:150,width:250},dt={margin:50,height:250,width:450},mt={margin:50,height:150,width:250},ut={margin:50,height:250,width:450},ht={margin:50,height:150,width:250},gt=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).renderContent=function(){var e=n.state.step;return"Introduction"==e?o.a.createElement("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"#F7F7F7",width:"100%",paddingLeft:200}},o.a.createElement("div",{style:{marginTop:150,fontSize:40,fontWeight:"bold",marginBottom:50}},"Import calendar to iCal"),o.a.createElement("div",null,o.a.createElement("p",{style:{fontWeight:"bold",fontSize:25}},o.a.createElement("span",{style:{borderBottom:"1px solid black",paddingBottom:2,marginRight:5}},"1 "),"Summary")),o.a.createElement("div",{style:{color:"#696868"}},o.a.createElement("p",null,"Your download will begin shortly."),o.a.createElement("p",null,"speakercalendar.ics contains talks where the person of interest is a speaker"),o.a.createElement("p",null,"authorcalendar.ics contains talks where the person of interest is a non-speaking author"),o.a.createElement("p",null,"You can transfer your events from a different calendar application to iCal."))):"Open iCal"==e?o.a.createElement("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"#F7F7F7",width:"100%",paddingLeft:200}},o.a.createElement("div",{style:{marginTop:150,fontSize:40,fontWeight:"bold",marginBottom:50}},"Import calendar to iCal"),o.a.createElement("div",null,o.a.createElement("p",{style:{fontWeight:"bold",fontSize:25}},o.a.createElement("span",{style:{borderBottom:"1px solid black",paddingBottom:2,marginRight:5}},"2 "),"Open iCal")),o.a.createElement("div",{style:{color:"#696868"}},"Open iCal")):"Select Import"==e?o.a.createElement("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"#F7F7F7",paddingLeft:200,paddingRight:20,width:"100%"}},o.a.createElement("div",{style:{marginTop:150,fontSize:40,fontWeight:"bold",marginBottom:50}},"Import calendar to iCal"),o.a.createElement("div",null,o.a.createElement("p",{style:{fontWeight:"bold",fontSize:25}},o.a.createElement("span",{style:{borderBottom:"1px solid black",paddingBottom:2,marginRight:5}},"3 "),"Select Import")),o.a.createElement("img",{style:ct,src:Xe.a}),o.a.createElement("div",{style:{color:"#696868"}},"Go to File>Import. In the Import section File field, browse to locate the calendar .ics file to import.")):"Select Calendar"==e?o.a.createElement("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"#F7F7F7",paddingLeft:200,paddingRight:20,width:"100%"}},o.a.createElement("div",{style:{marginTop:150,fontSize:40,fontWeight:"bold",marginBottom:50}},"Import calendar to iCal"),o.a.createElement("div",null,o.a.createElement("p",{style:{fontWeight:"bold",fontSize:25}},o.a.createElement("span",{style:{borderBottom:"1px solid black",paddingBottom:2,marginRight:5}},"4 "),"Select Calendar")),o.a.createElement("img",{style:dt,src:et.a}),o.a.createElement("div",{style:{color:"#696868"}},"Select an existing calendar or create a calendar to import the file.")):"Click OK"==e?o.a.createElement("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"#F7F7F7",paddingLeft:200,paddingRight:20,width:"100%"}},o.a.createElement("div",{style:{marginTop:150,fontSize:40,fontWeight:"bold",marginBottom:50}},"Import calendar to iCal"),o.a.createElement("div",null,o.a.createElement("p",{style:{fontWeight:"bold",fontSize:25}},o.a.createElement("span",{style:{borderBottom:"1px solid black",paddingBottom:2,marginRight:5}},"5 "),"Click OK")),o.a.createElement("img",{style:ut,src:nt.a}),o.a.createElement("div",{style:{color:"#696868"}},"Click OK")):null},n.onClick=function(e){n.setState({step:e})},n.renderDiv=function(e){return o.a.createElement("div",{style:{marginTop:10,marginBottom:10,fontSize:20,color:"#696868"},onClick:function(){return n.onClick(e)}},e)},n.renderSelectedDiv=function(e){return o.a.createElement("div",{style:{marginTop:10,marginBottom:10,fontSize:20,fontWeight:"bold",color:"#000000"}},e)},n.renderSideBar=function(){var e=n.state.step;return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100vh",width:"25%",marginLeft:40}},"Introduction"!=e?n.renderDiv("Introduction"):n.renderSelectedDiv("Introduction"),"Open iCal"!=e?n.renderDiv("Open iCal"):n.renderSelectedDiv("Open iCal"),"Select Import"!=e?n.renderDiv("Select Import"):n.renderSelectedDiv("Select Import"),"Select Calendar"!=e?n.renderDiv("Select Calendar"):n.renderSelectedDiv("Select Calendar"),"Click OK"!=e?n.renderDiv("Click OK"):n.renderSelectedDiv("Click OK"))},n.state={step:"Introduction"},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.authors;fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getSpeakerCalendar",{method:"POST",body:JSON.stringify({authors:e})}).then(function(e){return e.blob()}).then(function(e){var t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="speakercalendar.ics",document.body.appendChild(t),t.click()},function(e){console.log(e)}),fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getAuthorCalendar",{method:"POST",body:JSON.stringify({authors:e})}).then(function(e){return e.blob()}).then(function(e){var t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="authorcalendar.ics",document.body.appendChild(t),t.click()},function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p.a,{query:"(max-device-width: 480px)"},o.a.createElement("div",{style:at},o.a.createElement("div",{style:ot},"Import calendar to iCal"),o.a.createElement("div",{style:rt},o.a.createElement("p",null,"Your download will begin shortly."),o.a.createElement("p",null,"speakercalendar.ics contains talks where the person of interest is a speaker"),o.a.createElement("p",null,"authorcalendar.ics contains talks where the person of interest is a non-speaking author")),o.a.createElement("div",{style:it},"You can transfer your events from a different calendar application to iCal."),o.a.createElement("div",{style:lt},"Step 1: Open iCal"),o.a.createElement("div",{style:lt},"Step 2: Select Import"),o.a.createElement("div",{style:it},"Go to File>Import. In the Import section File field, browse to locate the calendar .ics file to import."),o.a.createElement("img",{style:st,src:Xe.a}),o.a.createElement("div",{style:lt},"Step 3: Select Calendar"),o.a.createElement("div",{style:it},"Select an existing calendar or create a calendar to import the file."),o.a.createElement("img",{style:mt,src:et.a}),o.a.createElement("div",{style:lt},"Step 3: Click OK"),o.a.createElement("img",{style:ht,src:nt.a}))),o.a.createElement(p.a,{query:"(min-device-width: 480px)"},o.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},this.renderSideBar(),this.renderContent())))}}]),t}(o.a.Component),pt=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.location.state,t=e.view,n=e.authors;return"Google Calendar"==t?o.a.createElement($e,{authors:n}):o.a.createElement(gt,{authors:n})}}]),t}(o.a.Component),ft=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){this.props.navigation;return o.a.createElement(u.a,null,o.a.createElement(h.a,{exact:!0,path:"/",component:D}),o.a.createElement(h.a,{path:"/search",component:ke}),o.a.createElement(h.a,{path:"/calendar",component:De}),o.a.createElement(h.a,{path:"/instructions",component:pt}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(ft,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[204,1,2]]]);
//# sourceMappingURL=main.38df1c11.chunk.js.map