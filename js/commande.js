function sendCommande(i) {
  console.log(i)
  $("#commandeForm"+i+" input,#commandeForm"+i+" select").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM

      var name = $("input#nameCommande"+i).val();
      var email = $("input#emailCommande"+i).val();
      var type = $("select#selectType"+i).val();
      var size = $("select#selectSize"+i).val();

      $this = $("#sendCommandeButton"+i);
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "././mail/commande.php",
        type: "POST",
        data: {
            photo_name: "Diapositive"+i,
            user_name: name,
            email: email,
            type: type,
            size: size
        },
        cache: false,
        success: function() {
          // Success message
          $('#successCommande'+i).html("<div class='alert alert-success'>");
          $('#successCommande'+i+' > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#successCommande'+i+' > .alert-success')
            .append("<strong>Votre pré-commande a été envoyé. </strong>");
          $('#successCommande'+i+' > .alert-success')
            .append('</div>');
          //clear all fields
          $('#commandeForm'+i).trigger("reset");
        },
        error: function() {
          // Fail message
          $('#successCommande'+i).html("<div class='alert alert-danger'>");
          $('#successCommande'+i+' > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#successCommande'+i+' > .alert-danger').append($("<strong>").text("Désolé, il semble que le serveur ne répond pas. Veuillez réessayer plus tard !"));
          $('#successCommande'+i+' > .alert-danger').append('</div>');
          //clear all fields
          $('#commandeForm'+i).trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
};

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#successCommande'+i).html('');
});


function sendCommandePerso(imageData) {
  var photo_name = imageData;
  var name = $("input#nameCommande0").val();
  var email = $("input#emailCommande0").val();
  var type = $("select#selectType0").val();
  var size = $("select#selectSize0").val();

  $.ajax({
    url: "././mail/commande.php",
    type: "POST",
    data: {
        photo_name: photo_name,
        user_name: name,
        email: email,
        type: type,
        size: size
    },
    cache: false,
    success: function() {
      // Success message
      $('#successCommande0').html("<div class='alert alert-success'>");
      $('#successCommande0'+' > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append("</button>");
      $('#successCommande0'+' > .alert-success')
        .append("<strong>Votre pré-commande a été envoyé. </strong>");
      $('#successCommande0'+' > .alert-success')
        .append('</div>');
      //clear all fields
      $('#commandeForm0').trigger("reset");
    },
    error: function() {
      // Fail message
      $('#successCommande0').html("<div class='alert alert-danger'>");
      $('#successCommande0'+' > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append("</button>");
      $('#successCommande0'+' > .alert-danger').append($("<strong>").text("Désolé, il semble que le serveur ne répond pas. Veuillez réessayer plus tard !"));
      $('#successCommande0'+' > .alert-danger').append('</div>');
      //clear all fields
      $('#commandeForm0').trigger("reset");
    }
  });
  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
};

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#successCommande0').html('');
});



function changePrice(i) {
    var type = $("select#selectType"+i).val();
    var size = $("select#selectSize"+i).val();
    if (type === "Alu-dibond"){
        if (size === "petit"){price = 99;}
        else if (size === "moyen"){price = 179;}
        else if (size === "grand"){price = 319;}
        else {price = 0};
    }
    else if (type === "Papier"){
        if (size === "petit"){price = 59;}
        else if (size === "moyen"){price = 109;}
        else if (size === "grand"){price = 169;}
        else {price = 0};
    }
    else if (type === "Papier-Cadre"){
        if (size === "petit"){price = 119;}
        else if (size === "moyen"){price = 219;}
        else if (size === "grand"){price = 319;}
        else {price = 0};
    }
    else price = 0;

    console.log("size = ", price)

    document.getElementById("price"+i).innerHTML = price + ",00€";
}
