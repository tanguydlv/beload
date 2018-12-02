$(function() {

    for (i = 1; i < 51; i++) {
        if (i < 17) {
            val = "0"
        }
        else{
            val = ""
        }
        var photo =
        "<div class=\"col-md-4 col-sm-6 portfolio-item\">\n" +
            "<a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#photoForm"+ i + "\">\n" +
            "<div class=\"portfolio-hover\">\n" +
                "<div class=\"portfolio-hover-content\">\n" +
                "<h2>Commander la photo</h2>\n" +
                "</div>\n" +
            "</div>\n" +
            "<img class=\"img-fluid\" src=\"img/shop/Diapositive" + val + (i*6+1) + ".jpg\" alt=\"\">\n" +
            "</a>\n" +
        "</div>"
        $(photo).appendTo("#galerie");
        var overview =
            "<div class=\"portfolio-modal modal fade\" id=\"photoForm"+i+"\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n" +
            "      <div class=\"modal-dialog\">\n" +
            "        <div class=\"modal-content\">\n" +
            "          <div class=\"close-modal\" data-dismiss=\"modal\">\n" +
            "            <div class=\"lr\">\n" +
            "              <div class=\"rl\"></div>\n" +
            "            </div>\n" +
            "          </div>\n" +
            "          <div class=\"container\">\n" +
            "            <div class=\"row\">\n" +
            "              <div class=\"col-lg-6 mx-auto\">\n" +
            "                <div class=\"modal-body\">\n" +
            "                  <h3 class=\"text-uppercase\">Commander votre tableau</h3>\n" +
            "\n" +
            "                  <div id=\"carouselExampleIndicators"+i+"\" class=\"carousel slide margin-top\" data-ride=\"carousel\">\n" +
            "                    <ol class=\"carousel-indicators\">\n" +
            "                      <li data-target=\"#carouselExampleIndicators"+i+"\" data-slide-to=\"0\" class=\"active\"></li>\n" +
            "                      <li data-target=\"#carouselExampleIndicators"+i+"\" data-slide-to=\"1\"></li>\n" +
            "                      <li data-target=\"#carouselExampleIndicators"+i+"\" data-slide-to=\"2\"></li>\n" +
            "                      <li data-target=\"#carouselExampleIndicators"+i+"\" data-slide-to=\"3\"></li>\n" +
            "                      <li data-target=\"#carouselExampleIndicators"+i+"\" data-slide-to=\"4\"></li>\n" +
            "                    </ol>\n" +
            "                    <div class=\"carousel-inner\">\n" +
            "                      <div class=\"carousel-item active\">\n" +
            "                        <img class=\"d-block w-100\" src=\"img/shop/Diapositive" + val  + (i*6+2) + ".jpg\" alt=\"First slide\">\n" +
            "                      </div>\n" +
            "                      <div class=\"carousel-item\">\n" +
            "                        <img class=\"d-block w-100\" src=\"img/shop/Diapositive" + val  + (i*6+3) + ".jpg\" alt=\"Second slide\">\n" +
            "                      </div>\n" +
            "                      <div class=\"carousel-item\">\n" +
            "                        <img class=\"d-block w-100\" src=\"img/shop/Diapositive" + val + (i*6+4) + ".jpg\" alt=\"Third slide\">\n" +
            "                      </div>\n" +
            "                      <div class=\"carousel-item\">\n" +
            "                        <img class=\"d-block w-100\" src=\"img/shop/Diapositive" + val + (i*6+5) + ".jpg\" alt=\"Third slide\">\n" +
            "                      </div>\n" +
            "                      <div class=\"carousel-item\">\n" +
            "                        <img class=\"d-block w-100\" src=\"img/shop/Diapositive" + val + (i*6+6) + ".jpg\" alt=\"Third slide\">\n" +
            "                      </div>\n" +
            "                    </div>\n" +
            "                    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators"+i+"\" role=\"button\" data-slide=\"prev\">\n" +
            "                      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n" +
            "                      <span class=\"sr-only\">Previous</span>\n" +
            "                    </a>\n" +
            "                    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators"+i+"\" role=\"button\" data-slide=\"next\">\n" +
            "                      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n" +
            "                      <span class=\"sr-only\">Next</span>\n" +
            "                    </a>\n" +
            "                  </div>\n" +
            "                  <p class=\"text-muted\">\n" +
            "                   Encore quelques informations à remplir ! </br>Une fois votre photo pré-commandée, nous vous enverrons un email de validation pour finaliser votre transaction.</p>\n" +

            "              <form class=\"text-left\" id=\"commandeForm"+i+"\" name=\"sentCommande\" novalidate=\"novalidate\" >\n" +
            "                <div class=\"form-group\">\n" +
            "                  <input class=\"form-control\" id=\"nameCommande"+i+"\" type=\"text\" placeholder=\"Nom\" required=\"required\" data-validation-required-message=\"Complétez votre nom.\">\n" +
            "                  <p class=\"help-block text-danger\"></p>\n" +
            "                </div>\n" +
            "                <div class=\"form-group\">\n" +
            "                  <input class=\"form-control\" id=\"emailCommande"+i+"\" type=\"text\" placeholder=\"Email\" required=\"required\" data-validation-required-message=\"Complétez votre email.\">\n" +
            "                  <p class=\"help-block text-danger\"></p>\n" +
            "                </div>\n" +
            "                <div class=\"form-group\">\n" +
            "                  <div class=\"form-row\">\n" +
            "                    <div class=\"col\">\n" +
            "                      <label for=\"selectType\">Type d'impression</label>\n" +
            "                      <select class=\"form-control\" id=\"selectType"+i+"\" onchange=\"changePrice("+i+")\">\n" +
            "                        <option value=\"Alu-dibond\">Alu-dibond </option>\n" +
            "                        <option value=\"Papier\">Tirage papier </option>\n" +
            "                        <option value=\"Papier-Cadre\">Tirage papier + cadre</option>\n" +
            "                      </select>\n" +
            "                    </div>\n" +
            "                    <div class=\"col\">\n" +
            "                      <label for=\"selectSize\">Taille du tableau</label>\n" +
            "                      <select class=\"form-control\" id=\"selectSize"+i+"\" onchange=\"changePrice("+i+")\">\n" +
            "                        <option value=\"petit\">Petit - 40x40 cm</option>\n" +
            "                        <option value=\"moyen\">Moyen - 70x70 cm</option>\n" +
            "                        <option value=\"grand\">Grand - 100 x100 cm</option>\n" +
            "                      </select>\n" +
            "                    </div>\n" +
            "                  </div>\n" +
            "                  <div class=\"text-right margin-top\">\n" +
            "                    <h2 id=\"price"+i+"\">99,00€</h2>\n" +
            "                    <p class=\"font-italic\">Livraison incluse en France métropolitaine</p>\n" +
            "                  </div>\n" +
            "                  <div class=\"text-center margin-top\">\n" +
            "                    <p>A tout de suite par mail pour finaliser votre transaction !</p>\n" +
            "                  </div>\n" +
            "                </div>\n" +
            "                <div class=\"text-center\">\n" +
            "                  <div id=\"successCommande"+i+"\"></div>\n" +
            "                  <button id=\"sendCommandeButton"+i+"\" class=\"btn btn-outline-dark text-uppercase\" onclick=\"sendCommande("+i+")\" >Pré-commander</button>\n" +
            "                </div>\n" +
            "              </form>\n" +

            "                </div>\n" +
            "              </div>\n" +
            "            </div>\n" +
            "          </div>\n" +
            "          </div>\n" +
            "        </div>\n" +
            "      </div>\n" +
            "    </div>"
        $(overview).appendTo("#apercu");
    };
});