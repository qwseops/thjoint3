!function(t){Drupal.googleanalytics={},t(document).ready((function(){t(document.body).bind("mousedown keyup touchstart",(function(a){t(a.target).closest("a,area").each((function(){Drupal.googleanalytics.isInternal(this.href)?t(this).is(".colorbox")&&Drupal.settings.googleanalytics.trackColorbox||(Drupal.settings.googleanalytics.trackDownload&&Drupal.googleanalytics.isDownload(this.href)?ga("send",{hitType:"event",eventCategory:"Downloads",eventAction:Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),eventLabel:Drupal.googleanalytics.getPageUrl(this.href),transport:"beacon"}):Drupal.googleanalytics.isInternalSpecial(this.href)&&ga("send",{hitType:"pageview",page:Drupal.googleanalytics.getPageUrl(this.href),transport:"beacon"})):Drupal.settings.googleanalytics.trackMailto&&t(this).is("a[href^='mailto:'],area[href^='mailto:']")?ga("send",{hitType:"event",eventCategory:"Mails",eventAction:"Click",eventLabel:this.href.substring(7),transport:"beacon"}):Drupal.settings.googleanalytics.trackOutbound&&this.href.match(/^\w+:\/\//i)&&(2!==Drupal.settings.googleanalytics.trackDomainMode||2===Drupal.settings.googleanalytics.trackDomainMode&&!Drupal.googleanalytics.isCrossDomain(this.hostname,Drupal.settings.googleanalytics.trackCrossDomains))&&ga("send",{hitType:"event",eventCategory:"Outbound links",eventAction:"Click",eventLabel:this.href,transport:"beacon"})}))})),Drupal.settings.googleanalytics.trackUrlFragments&&(window.onhashchange=function(){ga("send",{hitType:"pageview",page:location.pathname+location.search+location.hash})}),Drupal.settings.googleanalytics.trackColorbox&&t(document).bind("cbox_complete",(function(){var a=t.colorbox.element().attr("href");a&&ga("send",{hitType:"pageview",page:Drupal.googleanalytics.getPageUrl(a)})}))})),Drupal.googleanalytics.isCrossDomain=function(a,e){return!!e&&t.inArray(a,e)>-1},Drupal.googleanalytics.isDownload=function(t){return new RegExp("\\.("+Drupal.settings.googleanalytics.trackDownloadExtensions+")([?#].*)?$","i").test(t)},Drupal.googleanalytics.isInternal=function(t){return new RegExp("^(https?)://"+window.location.host,"i").test(t)},Drupal.googleanalytics.isInternalSpecial=function(t){return new RegExp("(/go/.*)$","i").test(t)},Drupal.googleanalytics.getPageUrl=function(t){var a=new RegExp("^(https?)://"+window.location.host,"i");return t.replace(a,"")},Drupal.googleanalytics.getDownloadExtension=function(t){var a=new RegExp("\\.("+Drupal.settings.googleanalytics.trackDownloadExtensions+")([?#].*)?$","i").exec(t);return null===a?"":a[1]}}(jQuery);