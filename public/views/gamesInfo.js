(function(){dust.register("gamesInfo",body_0);function body_0(chk,ctx){return chk.write("<div class=\"list-group\">").exists(ctx._get(false, ["games"]),ctx,{"block":body_1},null).write("<div class=\"progress\"><div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\"></div></div>\t\t").notexists(ctx._get(false, ["userCreatedGame"]),ctx,{"block":body_3},null).exists(ctx._get(false, ["userCreatedGame"]),ctx,{"block":body_4},null).write("\t</div>");}function body_1(chk,ctx){return chk.write("<a href=\"\" class=\"list-group-item active\">List of open games - click to start</a><div id=\"gamesList\">").section(ctx._get(false, ["games"]),ctx,{"block":body_2},null).write("\t</div>\t\t\t");}function body_2(chk,ctx){return chk.write("<a href=\"\" class=\"list-group-item joinBtn\" data-id=\"").reference(ctx._get(false, ["gameId"]),ctx,"h").write("\">Compete with ").reference(ctx._get(false, ["createdByName"]),ctx,"h").write("</a>");}function body_3(chk,ctx){return chk.write("<button id='startGameBtn' type=\"button\" class=\"btn btn-default btn-lg btn-block\">Start a game</button>");}function body_4(chk,ctx){return chk.write("You have created a game! Ask your friends to join you!");}return body_0;})();