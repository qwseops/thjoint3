!function(e){e.fn.sfsmallscreen=function(n){function s(a,i){for(var t="",l=e(a).children("li"),d=0;d<l.length;d++)for(var o=l.eq(d),r=o.children("a, span"),c=0;c<r.length;c++){var f=r.eq(c),u=f.is("a")?f.attr("href"):"",h=f.clone(),p=n.hyperlinkClasses?n.excludeClass_hyperlink&&h.hasClass(n.excludeClass_hyperlink)?h.removeClass(n.excludeClass_hyperlink).attr("class"):h.attr("class"):"";p=n.includeClass_hyperlink&&!h.hasClass(n.includeClass_hyperlink)?n.hyperlinkClasses?h.addClass(n.includeClass_hyperlink).attr("class"):n.includeClass_hyperlink:p;n.addSelected&&f.hasClass("active")&&(p+=" active"),disable=f.is("span")||"#"==f.attr("href")?' disabled="disabled"':"",subIndicator=1<i?Array(i).join("-")+" ":"",t+='<option value="'+u+'" class="'+p+'"'+disable+">"+subIndicator+e.trim(f.text())+"</option>",childUL=o.find("> ul");for(var m=0;m<childUL.length;m++)t+=s(childUL.eq(m),i+1)}return t}function a(a){var i=a.attr("id"),t=function(e){for(var n=e.clone(),s=n.find("span.sf-sub-indicator, span.sf-description"),a=n.find(".sf-smallscreen-remove"),i=n.find("ul.sf-megamenu"),t=0;t<a.length;t++)a.eq(t).replaceWith(a.eq(t).html());for(var l=0;l<s.length;l++)s.eq(l).remove();if(i.length>0){i.removeClass("sf-megamenu");for(var d=n.find("div.sf-megamenu-column > ol"),o=0;o<d.length;o++)d.eq(o).replaceWith("<ul>"+d.eq(o).html()+"</ul>");for(var r=["div.sf-megamenu-column",".sf-megamenu-wrapper > ol","li.sf-megamenu-wrapper"],c=0;c<r.length;c++){obj=n.find(r[c]);for(var f=0;f<obj.length;f++)obj.eq(f).replaceWith(obj.eq(f).html())}n.find(".sf-megamenu-column").removeClass("sf-megamenu-column")}return n.add(n.find("*")).css({width:""}),n}(a);if("accordion"==n.type){var l=i+"-toggle",d=i+"-accordion";if(0==e("#"+d).length){var o=a.attr("class").split(" ").filter((function(e){return e.indexOf("sf-style-")>-1?e:""})),r=e(t).attr("id",d);r.removeClass("sf-horizontal sf-vertical sf-navbar sf-shadow sf-js-enabled"),r.addClass("sf-accordion sf-hidden"),r.children("li").removeAttr("style").removeClass("sfHover"),r.find("ul").removeAttr("style").not(".sf-hidden").addClass("sf-hidden");var c='<div class="sf-accordion-toggle '+o+'"><a href="#" id="'+l+'"><span>'+n.title+"</span></a></div>";if(2==n.accordionButton)for(var f=r.find("li.menuparent"),u=0;u<f.length;u++)f.eq(u).prepend('<a href="#" class="sf-accordion-button">'+n.expandText+"</a>");a.before(c).before(r).hide();var h=e("#"+d),p=n.accordionButton<2?"a.menuparent,span.nolink.menuparent":"a.sf-accordion-button",m=h.find(p);e("#"+l).bind("click",(function(s){s.preventDefault(),e(this).toggleClass("sf-expanded"),h.hasClass("sf-expanded")?(h.add(h.find("li.sf-expanded")).removeClass("sf-expanded").end().find("ul").hide().end().hide().addClass("sf-hidden").show(),2==n.accordionButton&&h.find("a.sf-accordion-button").text(n.expandText)):h.addClass("sf-expanded").hide().removeClass("sf-hidden").show()})),m.bind("click",(function(s){if(e(this).closest("li").children("ul").length>0){s.preventDefault();var a=e(this).closest("li");if(1==n.accordionButton&&a.children("a.menuparent,span.nolink.menuparent").length>0&&0==a.children("ul").children("li.sf-clone-parent").length){var i=a.children("a.menuparent,span.nolink.menuparent").clone();i=e('<li class="sf-clone-parent" />').html(i);a.children("ul").addClass("sf-has-clone-parent").prepend(i)}a.hasClass("sf-expanded")?(a.children("ul").slideUp("fast",(function(){e(this).closest("li").removeClass("sf-expanded").end().addClass("sf-hidden").show()})),2==n.accordionButton&&a.children(".sf-accordion-button").length>0&&a.children(".sf-accordion-button").text(n.expandText)):a.children("ul").hide().removeClass("sf-hidden").slideDown("fast").end().addClass("sf-expanded").children("a.sf-accordion-button").text(n.collapseText).end().siblings("li.sf-expanded").children("ul").slideUp("fast",(function(){e(this).closest("li").removeClass("sf-expanded").end().addClass("sf-hidden").show()})).parent().children("a.sf-accordion-button").text(n.expandText)}}))}}else{var v=a.clone(),C=n.menuClasses?n.excludeClass_menu&&v.hasClass(n.excludeClass_menu)?v.removeClass(n.excludeClass_menu).attr("class"):v.attr("class"):"";C=(C=n.includeClass_menu&&!v.hasClass(n.includeClass_menu)?n.menuClasses?v.addClass(n.includeClass_menu).attr("class"):n.includeClass_menu:C)?' class="'+C+'"':"";if(0==e("#"+i+"-select").length){var g=s(t,1),x=e("<select"+C+' id="'+i+'-select"/>').html("<option>"+n.title+"</option>"+g).change((function(){e("option:selected",this).index()&&(window.location=x.val())}));n.addSelected&&x.find(".active").attr("selected",!0),a.before(x).hide()}}}function i(s){var a="#"+s.attr("id");e(a+"-"+n.type).remove(),"accordion"==n.type&&e(a+"-toggle").parent("div").remove(),e(a).show()}n=e.extend({mode:"inactive",type:"accordion",breakpoint:768,breakpointUnit:"px",useragent:"",title:"",addSelected:!1,menuClasses:!1,hyperlinkClasses:!1,excludeClass_menu:"",excludeClass_hyperlink:"",includeClass_menu:"",includeClass_hyperlink:"",accordionButton:1,expandText:"Expand",collapseText:"Collapse"},n);for(var t=0;t<this.length;t++){var l=e(this).eq(t),d=n.mode;if("always_active"==d)a(l);else if("window_width"==d){var o,r="em"==n.breakpointUnit?n.breakpoint*parseFloat(e("body").css("font-size")):n.breakpoint,c=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;(("undefined"==typeof Modernizr||"function"!=typeof Modernizr.mq)&&c<r||"undefined"!=typeof Modernizr&&"function"==typeof Modernizr.mq&&Modernizr.mq("(max-width:"+(r-1)+"px)"))&&a(l),e(window).resize((function(){clearTimeout(o),o=setTimeout((function(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;("undefined"==typeof Modernizr||"function"!=typeof Modernizr.mq)&&e<r||"undefined"!=typeof Modernizr&&"function"==typeof Modernizr.mq&&Modernizr.mq("(max-width:"+(r-1)+"px)")?a(l):i(l)}),50)}))}else if("useragent_custom"==d){if(""!=n.useragent){var f=RegExp(n.useragent,"i");navigator.userAgent.match(f)&&a(l)}}else"useragent_predefined"==d&&navigator.userAgent.match(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i)&&a(l)}return this}}(jQuery);