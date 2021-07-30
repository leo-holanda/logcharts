(()=>{"use strict";var t={726:(t,e,i)=>{function n(t){for(var e,i,n=t.length;0!==n;)i=Math.floor(Math.random()*n),e=t[n-=1],t[n]=t[i],t[i]=e;return t}function a(t){return!["Date","Time",""].includes(t)}function r(t){if(t){const e=t.split(":"),i=new Date;if(i.setHours(e[0]),i.setMinutes(e[1]),i.setSeconds(e[2]),!isNaN(i.getTime()))return i}}function o(t){if(t){if("No"==t)return 0;if("Yes"==t)return 1;if(!isNaN(t))return parseFloat(t)}}function l(t,e){let i=t.tooltipCircle.node().getBoundingClientRect(),n=15*(document.querySelectorAll(".selector-btn").length-1),a=i.bottom+20+n-document.querySelector(".domain").getBoundingClientRect().y+n,r=e?-21-a:-21,o=e?15-a:15;t.tooltip.node().setAttribute("y",r),t.tooltipBackground.node().setAttribute("y",r),t.tooltipBackgroundStroke.node().setAttribute("y",r),t.tooltipTime.node().setAttribute("dy",o)}function d(t,e){const i=d3.bisector((t=>r(t.Time))).center,n=e.invert(d3.pointer(event,this)[0]),a=i(t.chart.log,n,1),o=t.chart.log[a-1],l=t.chart.log[a];return l&&n-r(o.Time)>r(l.Time)-n?l:o}function c(t,e,i,n){let a=t+": "+o(e[t]),r=i.tooltipBackground.node().getBoundingClientRect().width+15,l=n?5-r:20;i.tooltipText.append("tspan").text(a).attr("id",t).attr("class","tooltip-value").attr("x",l).attr("dy",15)}function s(t,e,i){let n=document.querySelector(".selector-btn-container"),a=!1;0==n.children.length&&(a=!0);let r=document.createElement("div");r.classList.add("selector-div"),r.style.borderBottom="3px solid "+e;let o=document.createElement("div");o.classList.add("color-picker"),r.appendChild(o);let l=document.createElement("input");l.setAttribute("type","radio"),l.setAttribute("id",t),l.setAttribute("name","selector-btn"),a&&(l.checked=!0),l.classList.add("selector-btn");let d=document.createElement("label");if(d.innerHTML=i,r.appendChild(l),r.appendChild(d),n.appendChild(r),Pickr.create({el:".color-picker",theme:"nano",default:e,defaultRepresentation:"HEX",swatches:["rgba(244, 67, 54, 1)","rgba(233, 30, 99, 1)","rgba(156, 39, 176, 1)","rgba(103, 58, 183, 1)","rgba(63, 81, 181, 1)","rgba(33, 150, 243, 1)","rgba(3, 169, 244, 1)","rgba(0, 188, 212, 1)","rgba(0, 150, 136, 1)","rgba(76, 175, 80, 1)","rgba(139, 195, 74, 1)","rgba(205, 220, 57, 1)","rgba(255, 235, 59, 1)","rgba(255, 193, 7, 1)"],components:{preview:!0,opacity:!0,hue:!0,interaction:{input:!0}}}).on("change",(function(e,i,n){document.querySelector("path#"+t).setAttribute("stroke",e.toHEXA()),r.style.borderBottom="3px solid "+e.toHEXA(),n.applyColor(n._lastColor)})),!a){let e,i=document.createElement("i");for(e of(i.classList.add("fas"),i.classList.add("fa-trash"),i.addEventListener("click",(function(){document.querySelector("path#"+t).remove(),r.remove()})),document.querySelectorAll(".pickr")))e.contains(i)||e.appendChild(i)}}function h(){let t=function(){for(var t=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"],e="#",i=0;i<6;i++)n(t),e+=t[0];return e}(),e="id"+(new Date).valueOf();s(e,t),f.addNewLine(e,t)}function u(t){this.log=t.parsedLog,this.container=t.container,this.defaultField=t.defaultField;let e=this.container.clientHeight,i=this.container.clientWidth;this.margin={top:50,right:50,bottom:40,left:60},this.width=i-this.margin.left-this.margin.right,this.height=e-this.margin.top-this.margin.bottom-100,this.brushHeight=80}function m(t){if(null!=document.querySelector(".form-alert"))return void(document.querySelector(".form-alert").innerHTML=t);let e=document.createElement("h3");e.innerHTML=t,e.classList.add("form-alert"),document.querySelector(".third-step").appendChild(e)}function p(t,e){!function(){let t;document.querySelector(".form-container").remove(),(t=document.querySelector(".loader-wrapper"))&&t.remove(),document.querySelector(".header").remove()}(),function(){document.querySelector("main").classList.remove("aligned");let t=document.createElement("div");t.classList.add("field-container"),document.querySelector("main").appendChild(t);let e=document.createElement("h4");e.innerHTML="FIELDS",e.classList.add("field-container-title"),document.querySelector(".field-container").appendChild(e),t=document.createElement("div"),t.classList.add("btn-container"),document.querySelector(".field-container").appendChild(t),t=document.createElement("div"),t.classList.add("report-container"),document.querySelector("main").appendChild(t),t=document.createElement("div"),t.classList.add("stats-container"),document.querySelector(".report-container").appendChild(t),t=document.createElement("div"),t.classList.add("selector-container"),document.querySelector(".report-container").appendChild(t),t=document.createElement("div"),t.classList.add("selector-btn-container"),document.querySelector(".selector-container").appendChild(t),t=document.createElement("div"),t.classList.add("chart-container"),document.querySelector(".report-container").appendChild(t)}(),function(t,e){let i,n;for(n of t)!n||n.includes("Time")||n.includes("Date")||(i=document.createElement("button"),i.id=n,i.innerHTML=n,i.classList.add("field-btn"),document.querySelector(".btn-container").appendChild(i));let a=document.getElementById(e);a.focus(),a.scrollIntoView({block:"center"})}(t.meta.fields,e),document.querySelector(".btn-container").addEventListener("click",(t=>{"field-btn"==t.target.className&&function(t){let e=document.querySelector(".selector-btn:checked");e.parentNode.querySelector("label").innerHTML=t;let i=document.querySelector(".selector-btn:first-of-type");e.id==i.id?(f.updateMainLine(t),function(t,e){let i=t.map((t=>o(t[e]))),n=d3.extent(i),a=d3.mean(i).toFixed(2),r=document.querySelector("#min_value"),l=document.querySelector("#mean"),d=document.querySelector("#max_value");r.children[0].innerHTML=n[0],l.children[0].innerHTML=a,d.children[0].innerHTML=n[1]}(f.log,t)):f.updateLineByField(t,e.id)}(t.target.innerHTML)})),function(){let t=document.createElement("button");t.classList.add("add-selector-btn"),t.classList.add("fas"),t.classList.add("fa-plus-circle"),t.id="add_selector_btn",t.addEventListener("click",h),document.querySelector(".selector-container").appendChild(t)}(),f=new u({container:document.querySelector(".chart-container"),parsedLog:t.data,defaultField:e}),f.draw(),function(t,e){let i,n,a,r=t.map((t=>o(t[e]))),l=d3.extent(r),d=0;for(;d<3;d++){switch(i=document.createElement("div"),n=document.createElement("h6"),a=document.createElement("h4"),i.classList.add("stats"),n.classList.add("stats-title"),a.classList.add("stats-value"),d){case 0:i.id="min_value",a.innerHTML=l[0],n.innerHTML="Minimum Value";break;case 1:i.id="mean",a.innerHTML=d3.mean(r).toFixed(2),n.innerHTML="Mean";break;case 2:i.id="max_value",a.innerHTML=l[1],n.innerHTML="Maximum Value"}document.querySelector(".stats-container").appendChild(i),i.appendChild(a),i.appendChild(n)}}(t.data,e)}let f;function g(t){Papa.parse(t,{header:!0,encoding:"latin3",skipEmptyLines:!0,transformHeader:function(t){return t.replace("�","°")},complete:function(t){!function(t){if(t.includes("Time"))return!0}(t.meta.fields)?m("Please send only logs from HWInfo!"):function(t){const e=document.querySelector(".third-step");e.querySelector("#form").remove();const i=document.createElement("h1");i.textContent="Please, select the default field",e.appendChild(i);const n=document.createElement("form"),r=document.createElement("select");for(let e of t.meta.fields)if(a(e)){let t=document.createElement("option");t.setAttribute("value",e),t.textContent=e,r.appendChild(t)}const o=document.createElement("button");o.textContent="Create chart",o.setAttribute("type","button"),o.addEventListener("click",(()=>{p(t,r.value)})),n.appendChild(r),n.appendChild(o),e.appendChild(n)}(t)}})}i.d(e,{u:()=>f}),u.prototype.draw=function(){this.chartSVG=d3.select(this.container).append("svg").attr("class","chart-svg").attr("viewBox",`0 0 ${this.width} ${this.height}`),this.contextSVG=d3.select(this.container).append("svg").attr("class","context-svg").attr("viewBox",`0 0 ${this.width} 100`),this.clip=this.chartSVG.append("clipPath").attr("id","line_clip").append("rect").attr("transform",`translate(${this.margin.left}, 0)`).attr("width",this.width-2*this.margin.right-9).attr("height",this.height),this.addScales(),this.addAxes(),this.addGrid(),this.addMainLine(),this.addBrush(),this.addTooltip()},u.prototype.addScales=function(){this.xScale=d3.scaleTime().domain(d3.extent(this.log,(t=>r(t.Time)))).range([this.margin.left,this.width-this.margin.right]),this.yScale=d3.scaleLinear().domain(d3.extent(this.log,(t=>o(t[this.defaultField])))).nice().range([this.height-this.margin.bottom,this.margin.top]),this.yContextScale=d3.scaleLinear().domain(d3.extent(this.log,(t=>o(t[this.defaultField])))).range([this.brushHeight,this.margin.top])},u.prototype.addAxes=function(){this.xAxis=(t,e=1e3,i=this.xScale,n=this.height,a=this.margin.bottom)=>t.attr("transform",`translate(0, ${n-a})`).transition().duration(e).call(d3.axisBottom(i)).attr("class","x-axis"),this.chartSVG.append("g").call(this.xAxis),this.contextSVG.append("g").call(this.xAxis,1e3,this.xScale,100,20),this.yAxis=t=>t.attr("transform",`translate(${this.margin.left},0)`).transition().duration(1e3).call(d3.axisLeft(this.yScale)).call((t=>t.select(".domain").remove())).attr("class","y-axis"),this.chartSVG.append("g").call(this.yAxis)},u.prototype.addGrid=function(){this.chartSVG.append("g").attr("class","grid").attr("transform",`translate(${this.margin.left}, 0)`).call(d3.axisLeft(this.yScale).tickSize(-this.width+2*this.margin.right).tickFormat("")).call((t=>t.select(".domain").remove()))},u.prototype.addMainLine=function(){let t="id"+(new Date).valueOf();s(t,"#4E7BFF",this.defaultField),this.chartSVG.append("path").datum(this.log).attr("clip-path","url(#line_clip)").attr("fill","none").attr("stroke","#4E7BFF").attr("stroke-width",2).attr("stroke-linejoin","round").attr("stroke-linecap","round").attr("class","chart-line").attr("id",t).attr("d",d3.line().defined((t=>void 0!==o(t[this.defaultField]))).x((t=>this.xScale(r(t.Time)))).y((t=>this.yScale(o(t[this.defaultField]))))),this.contextSVG.append("path").datum(this.log).attr("fill","none").attr("stroke","#4E7BFF").attr("stroke-width",2).attr("stroke-linejoin","round").attr("stroke-linecap","round").attr("class","context-line").attr("d",d3.line().defined((t=>void 0!==o(t[this.defaultField]))).x((t=>this.xScale(r(t.Time)))).y((t=>this.yContextScale(o(t[this.defaultField])))))},u.prototype.addNewLine=function(t,e,i=this.xScale.copy(),n=this.yScale.copy()){this.brushedXScale?i=this.brushedXScale:i.domain(d3.extent(this.log,(t=>r(t.Time)))),n.domain(d3.extent(this.log,(t=>o(t[this.defaultField])))).nice(),this.chartSVG.insert("path",".tooltip").datum(this.log).attr("clip-path","url(#line_clip)").attr("fill","none").attr("stroke",e).attr("stroke-width",2).attr("stroke-linejoin","round").attr("stroke-linecap","round").attr("class","chart-line").attr("field",this.defaultField).attr("id",t).attr("d",d3.line().defined((t=>void 0!==o(t[this.defaultField]))).x((t=>i(r(t.Time)))).y((t=>n(o(t[this.defaultField])))))},u.prototype.updateLineByField=function(t,e,i=this.xScale.copy(),n=this.yScale.copy()){this.brushedXScale?i=this.brushedXScale:i.domain(d3.extent(this.log,(t=>r(t.Time)))),n.domain(d3.extent(this.log,(e=>o(e[t])))).nice(),this.chartSVG.select("#"+e).transition().duration(1e3).attr("field",t).attr("d",d3.line().defined((e=>void 0!==o(e[t]))).x((t=>i(r(t.Time)))).y((e=>n(o(e[t])))))},u.prototype.updateMainLine=function(t){this.brushedXScale=void 0,this.selectedField=t,this.chartSVG.select(".chart-line")._groups[0][0].setAttribute("field",t),this.xScale.domain(d3.extent(this.log,(t=>r(t.Time)))),this.yScale.domain(d3.extent(this.log,(e=>o(e[t])))).nice(),this.yContextScale.domain(d3.extent(this.log,(e=>o(e[t])))),this.chartSVG.select(".x-axis").call(this.xAxis),this.chartSVG.select(".y-axis").transition().duration(1e3).call(this.yAxis),this.chartSVG.select(".grid").attr("transform",`translate(${this.margin.left}, 0)`).call(d3.axisLeft(this.yScale).tickSize(-this.width+2*this.margin.right).tickFormat("")).call((t=>t.select(".domain").remove())),1==this.chartSVG.select(".grid").selectAll(".tick").size()&&this.chartSVG.select(".grid").select(".tick").remove(),this.chartSVG.select(".chart-line").transition().duration(1e3).attr("d",d3.line().defined((e=>void 0!==o(e[t]))).x((t=>this.xScale(r(t.Time)))).y((e=>this.yScale(o(e[t]))))),this.contextSVG.select(".context-line").transition().duration(1e3).attr("d",d3.line().defined((e=>void 0!==o(e[t]))).x((t=>this.xScale(r(t.Time)))).y((e=>this.yContextScale(o(e[t]))))),this.contextSVG.select(".brush").transition().duration(1e3).call(this.brush.move,this.xScale.range()),this.chartSVG.select(".chart-line")._groups[0][0].setAttribute("domain",this.xScale.domain());let e,i=this.yScale.copy();for(e of document.querySelectorAll(".selector-btn"))t=e.parentNode.querySelector("label").innerHTML,i.domain(d3.extent(this.log,(e=>o(e[t])))).nice(),this.chartSVG.select("#"+e.id).transition().duration(1e3).attr("d",d3.line().defined((e=>void 0!==o(e[t]))).x((t=>this.xScale(r(t.Time)))).y((e=>i(o(e[t])))))},u.prototype.addBrush=function(){this.brush=d3.brushX().extent([[this.margin.left,0],[this.width-this.margin.right,this.brushHeight]]).on("brush",(t=>{if(t.sourceEvent){let e=t.selection;this.updateByBrush(e)}})),this.contextSVG.append("g").attr("class","brush").call(this.brush).call(this.brush.move,this.xScale.range())},u.prototype.updateByBrush=function(t,e=this.xScale.copy(),i=this.yScale.copy()){let n,a;for(a of(e.domain([e.invert(t[0]),e.invert(t[1])]),this.brushedXScale=e,this.chartSVG.select(".x-axis").call(this.xAxis,0,e),document.querySelectorAll(".selector-btn")))n=a.parentNode.querySelector("label").innerHTML,i.domain(d3.extent(this.log,(t=>o(t[n])))).nice(),this.chartSVG.select("#"+a.id).attr("d",d3.line().defined((t=>void 0!==o(t[n]))).x((t=>e(r(t.Time)))).y((t=>i(o(t[n])))))},u.prototype.addTooltip=function(){const t=this.chartSVG.append("g").attr("class","tooltip"),e=this.chartSVG.append("line").attr("class","tooltip-line").style("stroke","black").style("stroke-width",2).attr("x1",0).attr("x2",0).attr("y1",0).attr("y2",this.height-this.margin.bottom,this.margin.top),i=t.append("circle").attr("class","tooltip-circle").attr("r",5),n=t.append("rect").attr("class","tooltip-background").attr("width",100).attr("height",30).attr("x",15).attr("y",-21),a=t.append("rect").attr("class","tooltip-background-stroke").attr("width",100).attr("height",30).attr("x",15).attr("y",-21),s=t.append("text").attr("class","tooltip-value-container").attr("width",100).attr("height",30).attr("dx",15).attr("y",-15),h=s.append("tspan").attr("class","tooltip-time").attr("dy",15),u=this,m={tooltip:t,line:e,tooltipCircle:i,tooltipBackground:n,tooltipBackgroundStroke:a,tooltipText:s,tooltipTime:h,chart:u};this.chartSVG.on("touchmove mousemove",(function(i){t.selectAll(".tooltip-value").remove();const h=function(t){let e=document.body.clientWidth-document.querySelector(".chart-svg").getBoundingClientRect().width;return t.tooltipCircle.node().getBoundingClientRect().left+t.tooltipBackground.node().getBoundingClientRect().width-e>t.chart.width}(m);(function(t,e){let i=t.tooltipBackground.node().getBoundingClientRect().width+15,n=e?-i:15,a=e?5-i:20;t.tooltip.node().setAttribute("x",n),t.tooltipBackground.node().setAttribute("x",n),t.tooltipBackgroundStroke.node().setAttribute("x",n),t.tooltipTime.node().setAttribute("dx",a)})(m,!!h),function(t){let e=t.tooltipCircle.node().getBoundingClientRect(),i=15*(document.querySelectorAll(".selector-btn").length-1);return e.bottom+20+i>document.querySelector(".domain").getBoundingClientRect().y}(m)?l(m,!0):l(m,!1);const p=u.brushedXScale?u.brushedXScale:u.xScale;let f,g,y=d(m,p);for(f of document.querySelectorAll(".selector-btn"))g=f.parentNode.querySelector("label").innerHTML,c(g,y,m,h);const S=s.node().getBoundingClientRect(),x=S.height+10,b=S.width+10;n.node().setAttribute("height",x),n.node().setAttribute("width",b),a.node().setAttribute("height",x),a.node().setAttribute("width",b);const v=document.querySelector(".selector-div").lastChild.innerHTML,L=u.yScale;e.attr("transform","translate("+p(r(y.Time))+",0)"),t.attr("transform","translate("+p(r(y.Time))+","+L(o(y[v]))+")"),t.select(".tooltip-time").text(r(y.Time).toLocaleTimeString())})),this.chartSVG.on("mouseover",(function(){t.style("display",null),e.style("display",null)})),this.chartSVG.on("mouseout",(function(){t.style("display","none"),e.style("display","none")}))},document.getElementById("log_input").addEventListener("change",(function(){let t=document.getElementById("log_input").files[0];if(!function(t){if("text/csv"==t.type||"application/vnd.ms-excel"==t.type||!t.type)return!0}(t))return m("Please upload only CSV files!");g(t)})),document.getElementById("example").addEventListener("click",(async function(){(function(){let t=document.createElement("div");t.classList.add("loader-wrapper");let e=document.createElement("div");e.classList.add("loader"),t.appendChild(e),document.querySelector("main").appendChild(t)})(),g(await async function(){return await fetch("./assets/example.CSV").then((t=>t.text()))}())}))}},e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={exports:{}};return t[n](a,a.exports,i),a.exports}i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i(726)})();