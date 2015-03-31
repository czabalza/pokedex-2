Pokedex.RootView.prototype.addToyToList = function (toy) {
  var $ul = this.$el.find('ul.toys');
  var content = JST['toyListItem']({ toy: toy });
  var $content = $(content);

  $content.data('id', toy.get('id'));
  $content.data('pokemon-id', toy.get('pokemon_id'));
  $ul.append($content);

};

Pokedex.RootView.prototype.renderToyDetail = function (toy) { // III
  this.$toyDetail.empty();
  var content = JST['toyDetail']({ toy: toy, pokes: this.pokes });
  this.$toyDetail.html(content);
  var $select = $toyDetail.find('select');
  $select.data('toy-id', toy.id);
  $select.data('pokemon-id', toy.escape('pokemon_id'));
};

Pokedex.RootView.prototype.selectToyFromList = function (event) {
  var $target = $(event.target);

  var toyId = $target.data('id');
  var pokemonId = $target.data('pokemon-id');

  var pokemon = this.pokes.get(pokemonId);
  var toy = pokemon.toys().get(toyId);

  this.renderToyDetail(toy);
};
