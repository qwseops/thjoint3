/*! Originally based on the tinynav.js library found at http://tinynav.viljamis.com by @viljamis */
!function(t,e,n){t.fn.tinyNav=function(a){var i=t.extend({active:"selected",header:!1,indent:"--",depth_count:3},a);return this.each((function(){n++;var a=t(this),l="tinynav",d=l+n,h=".l_"+d,o=t("<select/>").addClass(l+" "+d);if(a.is("ul,ol")){i.header&&o.append(t('<option value="-null-"/>').text(Drupal.t("Navigation")));var r="";a.addClass("l_"+d).find("a").each((function(){for(var e="",n=t(this).parents("ul,ol").length,a=1;a<n;a++)e+=i.indent;""!=e&&(e+=" "),n<i.depth_count&&(r+='<option value="'+t(this).attr("href")+'">'+e+t(this).text()+"</option>")})),o.append(r),o.find(":eq("+(i.header+t(h+" li").index(t(h+" ."+i.active)))+")").attr("selected",!0),o.change((function(){"-null-"!=t(this).val()&&(e.location.href=t(this).val())})),t(h).after(o)}}))}}(jQuery,this,0);