!function(o,e,t,i,d){o.colorbox.settings.onLoad=function(){n()};var n=function(e){var i,d;o("#cboxLoadedContent >div").hasClass("embedded-video")?(i="90%",d="90%",o(t).width()>960&&(i="860"),o(t).height()>700&&(d="630")):(i=o("#cboxLoadedContent img").width,d=o("#cboxLoadedContent img").height),o.colorbox.settings.height=d,o.colorbox.settings.width=i,e&&o("#cboxLoadedContent >div").hasClass("embedded-video")&&o.colorbox.resize({height:d,width:i})};o(t).resize((function(){n(!0)}))}(jQuery,Drupal,this,this.document);