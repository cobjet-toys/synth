(function(){dust.register("master",body_0);function body_0(chk,ctx){return chk.write("<!DOCTYPE html><html lang=\"en\"><head><title>balloon bursters</title><link rel=\"stylesheet\" href=\"css/style.css\"><link rel=\"stylesheet\" href=\"css/bootstrap.css\"><link href='http://fonts.googleapis.com/css?family=Nosifer' rel='stylesheet' type='text/css'></head><body><h2 class=\"page-header\">balloon bursters</h2><div class=\"well well-lg\"><div id=\"register\" class=\"hide\"><div class=\"panel panel-primary\"><div class=\"panel-heading\">Please enter your name to get started!</div><div class=\"panel-body\"><form id=\"registerForm\"><div class=\"row\"><div class=\"col-lg-6\"><div class=\"input-group\"><input type=\"text\" class=\"form-control\" name=\"name\" autocorrect=\"off\" value=\"\" placeholder=\"name\"><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"submit\" id=\"registerBtn\" type=\"button\">Start</button></span></div></div></div>\t\t\t\t\t\t</form></div></div></div><div id='dashboard' class=\"hide\"><div id='userInfoWrapper' class=\"\"></div><div id='gamesInfoWrapper' class=\"\"></div></div></div><script src=\"js/lib/socket.io.js\"></script><script src=\"js/lib/jquery.min.js\"></script><script src=\"js/lib/dust-core-2.2.0.js\"></script><script src=\"views/userInfo.js\"></script><script src=\"views/gamesInfo.js\"></script><script src=\"js/main.js\"></script><!-- Latest compiled and minified JavaScript --><script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js\"></script></body></html>");}return body_0;})();