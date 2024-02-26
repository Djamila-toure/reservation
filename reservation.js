document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire

    // Récupérer les valeurs des champs
    var fullname = document.getElementById('fullname').value;
    var city = document.getElementById('city').value;
    var phone = document.getElementById('phone').value;
    var service = document.getElementById('service').value;

    // Afficher un message de succès
    document.getElementById('success-message').style.display = 'block';

    // Réinitialiser le formulaire
    document.getElementById('reservation-form').reset();
});
