$(function() {

    for (i = 0; i < 15; i++) {
        var photo =
            "<div class=\"col-md-4 col-sm-6 portfolio-item\">\n" +
              "<a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#photoForm"+ i + "\">\n" +
              "<div class=\"portfolio-hover\">\n" +
                  "<div class=\"portfolio-hover-content\">\n" +
                    "<h2>Commander la photo</h2>\n" +
                  "</div>\n" +
                "</div>\n" +
              "<img class=\"img-fluid\" src=\"img/shop/Diapositive" + (i*3+1) + ".png\" alt=\"\">\n" +
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
            "                    </ol>\n" +
            "                    <div class=\"carousel-inner\">\n" +
            "                      <div class=\"carousel-item active\">\n" +
            "                        <img class=\"d-block w-100\" src=\"img/shop/Diapositive" + (i*3+1) + ".png\" alt=\"First slide\">\n" +
            "                      </div>\n" +
            "                      <div class=\"carousel-item\">\n" +
            "                        <img class=\"d-block w-100\" src=\"img/shop/Diapositive" + (i*3+2) + ".png\" alt=\"Second slide\">\n" +
            "                      </div>\n" +
            "                      <div class=\"carousel-item\">\n" +
            "                        <img class=\"d-block w-100\" src=\"img/shop/Diapositive" + (i*3+3) + ".png\" alt=\"Third slide\">\n" +
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
            "                    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators"+i+"\" role=\"button\" data-slide=\"next\">\n" +
            "                      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n" +
            "                      <span class=\"sr-only\">Next</span>\n" +
            "                    </a>\n" +
            "                  </div>\n" +
            "                  <p class=\"text-muted\">Veuillez remplir les informations ci-dessous.\n" +
            "                    Un mail de validation vous sera envoyé pour finaliser votre commande.</p>\n" +
            "              <form class=\"text-left\" id=\"commandeForm\" name=\"sentCommande\" novalidate=\"novalidate\">\n" +
            "                <div class=\"form-group\">\n" +
            "                  <input class=\"form-control\" id=\"nameCommande\" type=\"text\" placeholder=\"Nom\" required=\"required\" data-validation-required-message=\"Complétez votre nom.\">\n" +
            "                  <p class=\"help-block text-danger\"></p>\n" +
            "                </div>\n" +
            "                <div class=\"form-group\">\n" +
            "                  <input class=\"form-control\" id=\"emailCommande\" type=\"text\" placeholder=\"Email\" required=\"required\" data-validation-required-message=\"Complétez votre email.\">\n" +
            "                  <p class=\"help-block text-danger\"></p>\n" +
            "                </div>\n" +
            "                <div class=\"form-group\">\n" +
            "                  <div class=\"form-row\">\n" +
            "                    <div class=\"col\">\n" +
            "                      <label for=\"selectType\">Type d'impression</label>\n" +
            "                      <select class=\"form-control\" id=\"selectType\" onchange=\"changePrice()\">\n" +
            "                        <option value=\"Alu-dibond\">Alu-dibond </option>\n" +
            "                        <option value=\"Papier-Cadre\">Tirage papier et cadre</option>\n" +
            "                      </select>\n" +
            "                    </div>\n" +
            "                    <div class=\"col\">\n" +
            "                      <label for=\"selectSize\">Taille du tableau</label>\n" +
            "                      <select class=\"form-control\" id=\"selectSize\" onchange=\"changePrice()\">\n" +
            "                        <option value=\"petit\">Petit - 40x40 cm</option>\n" +
            "                        <option value=\"moyen\">Moyen - 70x70 cm</option>\n" +
            "                        <option value=\"grand\">Grand - 100 x100 cm</option>\n" +
            "                      </select>\n" +
            "                    </div>\n" +
            "                  </div>\n" +
            "                  <div class=\"text-right margin-top\">\n" +
            "                    <h2 id=\"price\">90,00€</h2>\n" +
            "                    <p class=\"font-italic\">Livraison incluse en france métropolitaine</p>\n" +
            "                  </div>\n" +
            "                  <div class=\"text-center margin-top\">\n" +
            "                    <p>Nous vous proposons ici une réduction de 10% pour le lancement de BeLoad.<br>\n" +
            "                      Les conditions de payement et de livraison seront échangées ensuite par mail.</p>\n" +
            "                  </div>\n" +
            "                </div>\n" +
            "                <div class=\"text-center\">\n" +
            "                  <div id=\"successCommande\"></div>\n" +
            "                  <button id=\"sendCommandeButton\" class=\"btn btn-info margin-top\" type=\"submit\" >Pré-commander</button>\n" +
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
