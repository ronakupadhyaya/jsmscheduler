(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(e,t,n){e.exports=n.p+"static/media/gcstep1.ac14fdf8.png"},198:function(e,t,n){e.exports=n.p+"static/media/gcstep2.d0bf2a43.png"},199:function(e,t,n){e.exports=n.p+"static/media/gcstep3.b6e99921.png"},200:function(e,t,n){e.exports=n.p+"static/media/gcstep4.b3eb7aa2.png"},201:function(e,t,n){e.exports=n.p+"static/media/cstep1.82163c06.png"},202:function(e,t,n){e.exports=n.p+"static/media/cstep2.233667a8.png"},203:function(e,t,n){e.exports=n.p+"static/media/cstep3.6bd7698b.png"},204:function(e,t,n){e.exports=n(449)},209:function(e,t,n){},449:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=(n(209),n(13)),l=n(10),s=n(15),u=n(14),m=n(16),d=n(80),h=n(35),f=n(176),g=n.n(f),p=n(179),v=n.n(p),y={display:"flex",flexDirection:"column",height:"100vh",backgroundImage:"url('https://api.regonline.com/CustImages/290000/299570/104475878-DENVER_1.1910x1000_copy_2.jpg')",backgroundSize:"cover",fontWeight:"semi-bold",alignItems:"center"},b={marginTop:200,fontSize:70,color:"#FFFFFF",marginBottom:50},E={display:"flex",flexDirection:"row",alignItems:"center",height:50,width:500,backgroundColor:"#FFFFFF"},S={marginLeft:10,width:450},C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).setNameState=function(e){n.setState({name:e})},n.onKeyDown=function(e,t){console.log(e,t),"Enter"===e&&n.props.history.push({pathname:"/search",name:t})},n.state={name:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.name;return o.a.createElement("div",{style:y},o.a.createElement("div",{style:b},"Get your custom JSM schedule"),o.a.createElement("div",{style:E},o.a.createElement(g.a,{placeholder:"Your Name",disableUnderline:!0,style:S,value:t,onChange:function(t){return e.setNameState(t.target.value)},onKeyDown:function(t){return e.onKeyDown(t.key,t.target.value)}}),o.a.createElement(d.b,{to:{pathname:"/search",name:t}},o.a.createElement(v.a,null))))}}]),t}(o.a.Component),w=n(119),O=n.n(w),k=n(180),I=n.n(k),F=n(82),j=n.n(F),A=n(123),x=n.n(A),B=n(181),z=n.n(B),D={maxHeight:400,overflow:"auto",backgroundColor:"white",marginLeft:20,marginRight:20},L={width:250,justifyContent:"space-between",borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"#e0e0e0",height:50},T={marginTop:-8,width:250,justifyContent:"space-between",borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"#e0e0e0"},N={width:250,justifyContent:"space-between",borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"#e0e0e0"},R={marginLeft:10},G=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).setAddItemState=function(e){n.setState({item:e})},n.addItem=function(e){var t=n.props,a=t.type;(0,t.addItem)(n.state.item,a),n.setState({item:""})};var a=n.props,o=a.authors,r=a.item;return n.state={item:r,authors:o},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.authors!==e.authors||this.props.item!==e.item){var t=this.props,n=t.authors;t.item;this.setState({item:"",authors:n})}}},{key:"renderList",value:function(){var e=this.state.authors,t=this.props,n=t.deleteItem,a=t.type;return e&&e.length>0?o.a.createElement(I.a,null,e.map(function(e,t){return 0==t?o.a.createElement(j.a,{key:t,style:T},e,o.a.createElement(x.a,{style:R,onClick:function(){return n(e,a)}})):o.a.createElement(j.a,{key:t,style:L},e,o.a.createElement(x.a,{style:R,onClick:function(){return n(e,a)}}))})):null}},{key:"render",value:function(){var e=this,t=this.state.item;return o.a.createElement("div",{style:D},o.a.createElement(j.a,{style:N},o.a.createElement(O.a,{placeholder:"Add Name",disableUnderline:!0,value:t,onChange:function(t){return e.setAddItemState(t.target.value)}}),o.a.createElement(z.a,{style:R,onClick:function(){return e.addItem()}})),this.renderList())}}]),t}(o.a.Component),J=n(182),W=n.n(J),U=n(55),V=n.n(U),P=n(56),M=n.n(P),_=n(57),Y=n.n(_),K=n(81),H=n.n(K),$={display:"flex",flexDirection:"column",height:"100vh",backgroundImage:"url('https://api.regonline.com/CustImages/290000/299570/104475878-DENVER_1.1910x1000_copy_2.jpg')",backgroundSize:"cover",fontWeight:"semi-bold",alignItems:"center"},q={marginTop:50,fontSize:50,color:"#FFFFFF",marginBottom:25},Q={display:"flex",flexDirection:"row",marginBottom:25},X={marginLeft:20,fontSize:15,fontWeight:"semi-bold",textAlign:"center",color:"#FFFFFF",marginBottom:10},Z={fontSize:15,fontWeight:"semi-bold",textAlign:"center",color:"#FFFFFF",marginBottom:15},ee={display:"flex",flexDirection:"row",color:"#FFFFFF"},te={marginRight:10},ne={color:"#FFFFFF"},ae={display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},oe=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).formatString=function(e){return e.replace(/(\B)[^ ]*/g,function(e){return e.toLowerCase()}).replace(/^[^ ]/g,function(e){return e.toUpperCase()})},n.generateSchedule=function(){var e=n.state.selected;"Calendar View"==e?n.openCalendarView():"Google Calendar"==e?n.openGoogleCalendarInstructions():"iCal"==e?n.openiCalInstructions():n.openTextInstructions()},n.openCalendarView=function(){var e=n.state,t=e.citingAuthors,a=e.citedAuthors,o=e.others,r=t.concat(a).concat(o);n.props.history.push({pathname:"calendar",state:{authors:r}})},n.openGoogleCalendarInstructions=function(){var e=n.state,t=e.citingAuthors,a=e.citedAuthors,o=e.others,r=t.concat(a).concat(o);n.props.history.push({pathname:"instructions",state:{authors:r,view:"Google Calendar"}})},n.openiCalInstructions=function(){var e=n.state,t=e.citingAuthors,a=e.citedAuthors,o=e.others,r=t.concat(a).concat(o);n.props.history.push({pathname:"instructions",state:{authors:r,view:"iCal"}})},n.openTextInstructions=function(){var e=n.state,t=e.citingAuthors,a=e.citedAuthors,o=e.others,r=t.concat(a).concat(o);fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getText",{method:"POST",body:JSON.stringify({authors:r})}).then(function(e){return e.blob()}).then(function(e){var t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="schedule.txt",document.body.appendChild(t),t.click()},function(e){console.log(e)})},n.addItem=function(e,t){if("Citing"==t){var a=n.state.citingAuthors;a.unshift(e),n.setState({citingAuthors:a,citingAuthorsItem:""})}else if("Cited"==t){var o=n.state.citedAuthors;o.unshift(e),n.setState({citedAuthors:o,citedAuthorsItem:""})}else{var r=n.state.others;r.unshift(e),n.setState({others:r,othersItem:""})}},n.deleteItem=function(e,t){if("Citing"==t){var a=n.state.citingAuthors;a=a.filter(function(t){return t!==e}),n.setState({citingAuthors:a})}else if("Cited"==t){var o=n.state.citedAuthors;o=o.filter(function(t){return t!==e}),n.setState({citedAuthors:o})}else{var r=n.state.others;r=r.filter(function(t){return t!==e}),n.setState({others:r})}};var a=null;return n.props.location.name?(a=n.props.location.name,localStorage.setItem("name",a)):a=localStorage.getItem("name"),n.state={selected:"Calendar View",citingAuthors:JSON.parse(localStorage.getItem("citingAuthors")),citedAuthors:JSON.parse(localStorage.getItem("citedAuthors")),others:[],loading:!0,name:a},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"setRadioButtonChange",value:function(e){this.setState({selected:e})}},{key:"componentDidMount",value:function(){var e=this,t=this.state.name;this.state.citedAuthors&&this.state.citedAuthors.length&&this.state.citingAuthors&&this.state.citingAuthors.length?this.setState({loading:!1}):fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getAuthors?name="+t).then(function(e){return e.text()}).then(function(t){var n=JSON.parse(t),a=n["Cited Authors"],o=n["Citing Authors"];a=(a=a.map(function(e){return e.name})).filter(function(e){return!e.includes("null")}),o=(o=o.map(function(e){return e.name})).filter(function(e){return!e.includes("null")}),e.setState({citingAuthors:o,citedAuthors:a,loading:!1}),localStorage.setItem("citingAuthors",JSON.stringify(o)),localStorage.setItem("citedAuthors",JSON.stringify(a))}).catch(function(t){console.log(t),e.setState({loading:!1})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.selected,a=t.citingAuthors,r=t.citedAuthors,i=t.others,c=(t.citingAuthorsItem,t.citedAuthorsItem,t.othersItem,t.loading),l=t.name;if(c)return o.a.createElement("div",{style:ae},o.a.createElement(H.a,null));var s=l&&"undefined"!==l?l.split(" ")[0]+", here are the people we think you'd like to hear":"Here are the people we think you'd like to hear";return o.a.createElement("div",{style:$},o.a.createElement("div",{style:q},s),o.a.createElement("div",{style:Q},o.a.createElement("div",null,o.a.createElement("div",{style:X},"People who cite you a lot"),o.a.createElement(G,{type:"Citing",authors:a,addItem:this.addItem,deleteItem:this.deleteItem})),o.a.createElement("div",null,o.a.createElement("div",{style:X},"People you cite a lot"),o.a.createElement(G,{type:"Cited",authors:r,addItem:this.addItem,deleteItem:this.deleteItem})),o.a.createElement("div",null,o.a.createElement("div",{style:X},"Others"),o.a.createElement(G,{type:"Other",authors:i,addItem:this.addItem,deleteItem:this.deleteItem}))),o.a.createElement("div",{style:Z},"Feel free to edit these lists or add new names in 'Others' before generating your schedule"),o.a.createElement("div",{style:ee},o.a.createElement(W.a,{variant:"contained",size:"medium",onClick:function(){return e.generateSchedule()}},o.a.createElement("div",{style:te},"Generate my JSM schedule")),o.a.createElement("div",null,o.a.createElement(V.a,{style:ne,checked:"Calendar View"==n,icon:o.a.createElement(M.a,{fontSize:"small"}),checkedIcon:o.a.createElement(Y.a,{fontSize:"small"}),onChange:function(){return e.setRadioButtonChange("Calendar View")}}),"Calendar View",o.a.createElement(V.a,{style:ne,checked:"Google Calendar"==n,icon:o.a.createElement(M.a,{fontSize:"small"}),checkedIcon:o.a.createElement(Y.a,{fontSize:"small"}),onChange:function(){return e.setRadioButtonChange("Google Calendar")}}),"Google Calendar",o.a.createElement(V.a,{style:ne,checked:"iCal"==n,icon:o.a.createElement(M.a,{fontSize:"small"}),checkedIcon:o.a.createElement(Y.a,{fontSize:"small"}),onChange:function(){return e.setRadioButtonChange("iCal")}}),"iCal",o.a.createElement(V.a,{style:ne,checked:"Text"==n,icon:o.a.createElement(M.a,{fontSize:"small"}),checkedIcon:o.a.createElement(Y.a,{fontSize:"small"}),onChange:function(){return e.setRadioButtonChange("Text")}}),"Text (.txt)")))}}]),t}(o.a.Component),re=n(127),ie=n(196),ce=n.n(ie),le=(n(448),re.a.momentLocalizer(ce.a)),se={display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},ue=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).convertDateFormat=function(e){var t=e.substring(0,4),n=e.substring(4,6),a=e.substring(6,8),o=e.substring(9,11),r=e.substring(11,13);console.log(t,n,a);var i=new Date(t,n-1,a,o,r);return console.log(i),i},n.eventStyleGetter=function(e){return{style:{backgroundColor:"#FFFFFF",color:e.color}}},n.state={speakerEvents:[],authorEvents:[],selfEvents:[],loading:!0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.location&&this.props.location.state?this.props.location.state.authors:null;t?fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getSchedule",{method:"POST",body:JSON.stringify({authors:t})}).then(function(e){return e.text()}).then(function(t){var n=JSON.parse(t),a=n.Speaker,o=n.Author,r=n.Self;console.log(a),a=a.map(function(t){var n=Object.assign({},t);return n.color="#2979ff",n.start=e.convertDateFormat(t.start),n.end=e.convertDateFormat(t.end),n}),o=o.map(function(t){var n=Object.assign({},t);return n.color="#00796b",n.start=e.convertDateFormat(t.start),n.end=e.convertDateFormat(t.end),n}),r=r.map(function(t){var n=Object.assign({},t);return n.color="#ff3d00",n.start=e.convertDateFormat(t.start),n.end=e.convertDateFormat(t.end),n}),e.setState({speakerEvents:a,authorEvents:o,selfEvents:r,loading:!1})}).catch(function(t){console.log(t),e.setState({loading:!1})}):this.setState({loading:!1})}},{key:"render",value:function(){var e=this.state,t=e.authorEvents,n=e.speakerEvents,a=e.selfEvents,r=e.loading,i=t.concat(n).concat(a);return r?o.a.createElement("div",{style:se},o.a.createElement(H.a,null)):(console.log(i),o.a.createElement(re.a,{events:i,localizer:le,style:{height:"100vh",width:"100vw"},step:60,showMultiDayTimes:!0,eventPropGetter:this.eventStyleGetter,defaultView:"agenda",defaultDate:new Date(2019,6,26)}))}}]),t}(o.a.Component),me=n(197),de=n.n(me),he=n(198),fe=n.n(he),ge=n(199),pe=n.n(ge),ve=n(200),ye=n.n(ve),be={display:"flex",flexDirection:"column"},Ee={marginTop:50,fontSize:30,marginBottom:50,textAlign:"center"},Se={fontSize:15,marginLeft:20,marginBottom:5,fontWeight:"bold"},Ce={fontSize:15,marginLeft:20,marginBottom:5},we={fontSize:30,fontWeight:"bold",marginLeft:20,marginTop:20,marginBottom:20},Oe={margin:50,height:450,width:200},ke={margin:50,height:450,width:300},Ie={margin:50,height:150,width:300},Fe=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.authors;fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getSpeakerCalendar",{method:"POST",body:JSON.stringify({authors:e})}).then(function(e){return e.blob()}).then(function(e){var t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="speakercalendar.ics",document.body.appendChild(t),t.click()},function(e){console.log(e)}),fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getAuthorCalendar",{method:"POST",body:JSON.stringify({authors:e})}).then(function(e){return e.blob()}).then(function(e){var t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="authorcalendar.ics",document.body.appendChild(t),t.click()},function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",{style:be},o.a.createElement("div",{style:Ee},"Import calendar to Google Calendar"),o.a.createElement("div",{style:Se},"Your download will begin shortly."),o.a.createElement("div",{style:Ce},"You can transfer your events from a different calendar application or Google Account to Google Calendar."),o.a.createElement("div",{style:we},"Step 1: Open Google Calendar"),o.a.createElement("div",{style:Ce},"Navigate to calendar.google.com"),o.a.createElement("div",{style:we},"Step 2: Add other calendars"),o.a.createElement("div",{style:Ce},"Click on the '+' next other 'Other Calendar' on the left sidebar"),o.a.createElement("img",{style:Oe,src:de.a}),o.a.createElement("div",{style:we},"Step 3: Select Import"),o.a.createElement("div",{style:Ce},"Click on the 'Import' option from the pop-up"),o.a.createElement("img",{style:ke,src:fe.a}),o.a.createElement("div",{style:we},"Step 4: Select Calendar"),o.a.createElement("div",{style:Ce},"Click on 'Select file from your computer' and browse to locate the calendar .ics file to import."),o.a.createElement("img",{style:Ie,src:pe.a}),o.a.createElement("div",{style:we},"Step 5: Import"),o.a.createElement("div",{style:Ce},"Click on the 'Import' button"),o.a.createElement("img",{style:Ie,src:ye.a}))}}]),t}(o.a.Component),je=n(201),Ae=n.n(je),xe=n(202),Be=n.n(xe),ze=n(203),De=n.n(ze),Le={display:"flex",flexDirection:"column"},Te={marginTop:50,fontSize:30,marginBottom:50,textAlign:"center"},Ne={fontSize:15,marginLeft:20,marginBottom:5,fontWeight:"bold"},Re={fontSize:15,marginLeft:20,marginBottom:5},Ge={fontSize:30,fontWeight:"bold",marginLeft:20,marginTop:20,marginBottom:20},Je={margin:50,height:250,width:350},We={margin:50,height:250,width:450},Ue={margin:50,height:250,width:450},Ve=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.authors;fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getSpeakerCalendar",{method:"POST",body:JSON.stringify({authors:e})}).then(function(e){return e.blob()}).then(function(e){var t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="speakercalendar.ics",document.body.appendChild(t),t.click()},function(e){console.log(e)}),fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getAuthorCalendar",{method:"POST",body:JSON.stringify({authors:e})}).then(function(e){return e.blob()}).then(function(e){var t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="authorcalendar.ics",document.body.appendChild(t),t.click()},function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",{style:Le},o.a.createElement("div",{style:Te},"Import calendar to iCal"),o.a.createElement("div",{style:Ne},"Your download will begin shortly."),o.a.createElement("div",{style:Re},"You can transfer your events from a different calendar application to iCal."),o.a.createElement("div",{style:Ge},"Step 1: Open iCal"),o.a.createElement("div",{style:Ge},"Step 2: Select Import"),o.a.createElement("div",{style:Re},"Go to File>Import. In the Import section File field, browse to locate the calendar .ics file to import."),o.a.createElement("img",{style:Je,src:Ae.a}),o.a.createElement("div",{style:Ge},"Step 3: Select Calendar"),o.a.createElement("div",{style:Re},"Select an existing calendar or create a calendar to import the file."),o.a.createElement("img",{style:We,src:Be.a}),o.a.createElement("div",{style:Ge},"Step 3: Click OK"),o.a.createElement("img",{style:Ue,src:De.a}))}}]),t}(o.a.Component),Pe=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.location.state,t=e.view,n=e.authors;return"Google Calendar"==t?o.a.createElement(Fe,{authors:n}):o.a.createElement(Ve,{authors:n})}}]),t}(o.a.Component),Me=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){this.props.navigation;return o.a.createElement(d.a,null,o.a.createElement(h.a,{exact:!0,path:"/",component:C}),o.a.createElement(h.a,{path:"/search",component:oe}),o.a.createElement(h.a,{path:"/calendar",component:ue}),o.a.createElement(h.a,{path:"/instructions",component:Pe}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[204,1,2]]]);
//# sourceMappingURL=main.bbdc7750.chunk.js.map