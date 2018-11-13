$(function() {
  $("#commandeForm input,#commandeForm select").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#nameCommande").val();
      var email = $("input#emailCommande").val();
      var type = $("select#selectType").val();
      var size = $("select#selectSize").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      console.log(size)
      $this = $("#sendCommandeButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "././mail/commande.php",
        type: "POST",
        data: {
            photo_name: "testNamePhoto",
            user_name: name,
            email: email,
            type: type,
            size: size
        },
        cache: false,
        success: function() {
          // Success message
          $('#successCommande').html("<div class='alert alert-success'>");
          $('#successCommande > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#successCommande > .alert-success')
            .append("<strong>Votre pré-commande a été envoyé. </strong>");
          $('#successCommande > .alert-success')
            .append('</div>');
          //clear all fields
          $('#commandeForm').trigger("reset");
        },
        error: function() {
          // Fail message
          $('#successCommande').html("<div class='alert alert-danger'>");
          $('#successCommande > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#successCommande > .alert-danger').append($("<strong>").text("Désolé " + firstName + ", il semble que le serveur ne répond pas. Veuillez réessayer plus tard !"));
          $('#successCommande > .alert-danger').append('</div>');
          //clear all fields
          $('#commandeForm').trigger("reset");
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
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#successCommande').html('');
});


function changePrice() {
    var type = $("select#selectType").val();
    var size = $("select#selectSize").val();
    if (type === "Alu-dibond"){
        if (size === "petit"){price = 90;}
        else if (size === "moyen"){price = 150;}
        else if (size === "grand"){price = 230;}
        else {price = 0};
    }
    else if (type === "Papier-Cadre"){
        if (size === "petit"){price = 110;}
        else if (size === "moyen"){price = 170;}
        else if (size === "grand"){price = 250;}
        else {price = 0};
    }
    else price = 0;

    document.getElementById("price").innerHTML = price + ",00€";
}


