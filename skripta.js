$(document).ready(function(){
    $(".fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none"
      });
      
      $(".zoom").hover(function(){
          
          $(this).addClass('transition');
      }, function(){
          
          $(this).removeClass('transition');
      });
  });
      
  function provera(event) 
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(document.getElementById("ime").value=="" || document.getElementById("ime").value==null)
        {
            alert("Niste uneli ime!");
            document.forma.ime.focus();
            event.preventDefault();
            return false;
        }
    else if(document.getElementById("prezime").value=="" || document.getElementById("prezime").value==null)
        {
            alert("Niste uneli prezime!");
            document.forma.prezime.focus();
            event.preventDefault();
            return false;
        }
    else if(!(document.getElementById("email").value.match(mailformat)))
        {
            alert("Uneli ste neispravnu email adresu!");
            document.forma.email.focus();
            event.preventDefault();
            return false;
        }
    else if(document.getElementById("poruka").value=="" || document.getElementById("poruka").value==null)
        {
            alert("Niste uneli tekst poruke!");
            document.forma.poruka.focus();
            event.preventDefault();
            return false;
        }
    else
    {
        alert("Uspešno ste nas kontaktirali. Očekujte odgovor u naredna 24 časa.");
        return true;
    }
    
}