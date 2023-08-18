//La fonction $(document).ready() est un événement JavaScript qui se déclenche lorsque le DOM (Document Object Model) est complètement chargé et prêt à être manipulé.

$(document).ready(function() {
  update_amount();
  $('.qty, .price').on('keyup keypress blur change', function(e) {
    update_amount();
  });
});

//La fonction update_amount() est une fonction JavaScript qui calcule le montant total des articles dans un panier et met à jour les montants individuels de chaque article ainsi que le montant total affiché.

//Voici comment la fonction fonctionne en détail :

//La variable sum est initialisée avec une valeur de 0.0. Cette variable sera utilisée pour stocker le montant total.
//La méthode each() de jQuery est utilisée pour itérer à travers chaque ligne (<tr>) du tableau (#myTable > tbody > tr). Cette boucle permet de parcourir chaque article dans le panier.
//À l'intérieur de la boucle, les variables qty et price sont déclarées et affectées aux valeurs des champs de quantité (avec la classe .qty) et de prix (avec la classe .price) respectivement, pour chaque ligne de l'article en cours d'itération.
//La variable amount est calculée en multipliant les valeurs de qty et price, ce qui donne le montant individuel de cet article.
//La variable amount est ensuite ajoutée à la variable sum, ce qui permet de cumuler les montants individuels et d'obtenir le montant total.
//La méthode text() de jQuery est utilisée pour mettre à jour le contenu du champ de montant (avec la classe .amount) de chaque ligne d'article en cours d'itération, avec la valeur de amount. Cela met à jour les montants individuels affichés pour chaque article dans le panier.
//Enfin, la méthode text() de jQuery est également utilisée pour mettre à jour le contenu du champ de montant total (avec la classe .total), avec la valeur de sum. Cela met à jour le montant total affiché.
//Ainsi, chaque fois que la fonction update_amount() est appelée, elle parcourt tous les articles du panier, calcule les montants individuels, cumule les montants pour obtenir le montant total et met à jour les montants individuels et le montant total affichés dans le HTML.

function update_amount() {
  var sum = 0.0;
  $('#myTable > tbody > tr').each(function() {
    var qty = $(this).find('.qty').val();
    var price = $(this).find('.price').val();
    var amount = qty * price;
    sum += amount;
    $(this).find('.amount').text(amount);
  });
  $('.total').text(sum);
}
//La fonction $('.cart-qty-plus').click(function() { ... }) est un gestionnaire d'événements JavaScript qui est déclenché lorsque le bouton avec la classe .cart-qty-plus est cliqué. Cette fonction est utilisée pour augmenter la valeur de la quantité d'un article dans un panier lorsqu'on clique sur le bouton "+" correspondant.

//Voici comment cette fonction fonctionne en détail :

//Lorsque le bouton "+" avec la classe .cart-qty-plus est cliqué, la fonction est déclenchée.
//La variable $n est déclarée et elle fait référence à l'élément input de quantité (<input class="qty">) qui se trouve dans le même conteneur (.button-container) que le bouton cliqué. Cela est réalisé en utilisant la méthode parent('.button-container') pour remonter dans la structure DOM, puis la méthode find('.qty') pour rechercher l'élément input de quantité dans ce conteneur spécifique.
//La valeur actuelle du champ de quantité est récupérée en utilisant la méthode val() de jQuery, puis convertie en nombre en utilisant la fonction Number(). Cela permet d'effectuer des opérations mathématiques sur cette valeur.
//La valeur de la quantité est augmentée de 1 en ajoutant 1 à la valeur actuelle, et ensuite, la nouvelle valeur est affectée au champ de quantité en utilisant la méthode val() de jQuery. Cela met à jour la valeur affichée dans le champ de quantité.
//Enfin, la fonction update_amount() est appelée pour mettre à jour les montants individuels et le montant total en fonction de la nouvelle valeur de la quantité.
//En résumé, lorsque le bouton "+" est cliqué, cette fonction récupère la valeur de la quantité, l'incrémente de 1, met à jour la valeur affichée dans le champ de quantité, puis appelle la fonction update_amount() pour mettre à jour les montants. Cela permet d'augmenter la quantité d'un article dans le panier et de mettre à jour les montants correspondants.

$('.cart-qty-plus').click(function() {
  var $n = $(this).parent('.button-container').find('.qty');
  $n.val(Number($n.val()) + 1);
  update_amount();
});

//La fonction $('.cart-qty-minus').click(function() { ... }) est un gestionnaire d'événements JavaScript qui est déclenché lorsque le bouton avec la classe .cart-qty-minus est cliqué. Cette fonction est utilisée pour réduire la valeur de la quantité d'un article dans un panier lorsqu'on clique sur le bouton "-" correspondant.

//Voici comment cette fonction fonctionne en détail :

//Lorsque le bouton "-" avec la classe .cart-qty-minus est cliqué, la fonction est déclenchée.
//La variable $n est déclarée et elle fait référence à l'élément input de quantité (<input class="qty">) qui se trouve dans le même conteneur (.button-container) que le bouton cliqué. Cela est réalisé en utilisant la méthode parent('.button-container') pour remonter dans la structure DOM, puis la méthode find('.qty') pour rechercher l'élément input de quantité dans ce conteneur spécifique.
//La valeur actuelle du champ de quantité est récupérée en utilisant la méthode val() de jQuery, puis convertie en nombre en utilisant la fonction Number(). Cela permet d'effectuer des opérations mathématiques sur cette valeur.
//Une condition if est utilisée pour vérifier si la valeur de la quantité (QtyVal) est supérieure à 0. Cela permet de s'assurer que la quantité ne devient pas négative.
//Si la condition est vraie (c'est-à-dire, si la quantité est supérieure à 0), alors la valeur de la quantité est réduite de 1 en soustrayant 1 de la valeur actuelle, et ensuite, la nouvelle valeur est affectée au champ de quantité en utilisant la méthode val() de jQuery. Cela met à jour la valeur affichée dans le champ de quantité.
//Enfin, la fonction update_amount() est appelée pour mettre à jour les montants individuels et le montant total en fonction de la nouvelle valeur de la quantité.
//En résumé, lorsque le bouton "-" est cliqué, cette fonction récupère la valeur de la quantité, vérifie si elle est supérieure à 0, la réduit de 1 si c'est le cas, met à jour la valeur affichée dans le champ de quantité, puis appelle la fonction update_amount() pour mettre à jour les montants. Cela permet de réduire la quantité d'un article dans le panier et de mettre à jour les montants correspondants.

$('.cart-qty-minus').click(function() {
  var $n = $(this).parent('.button-container').find('.qty');
  var QtyVal = Number($n.val());
  if (QtyVal > 0) {
    $n.val(QtyVal - 1);
    update_amount();
  }
});



