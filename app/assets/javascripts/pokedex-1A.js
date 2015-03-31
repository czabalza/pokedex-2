Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var content = JST['pokemonListItem']({pokemon: pokemon});
  var $content = $(content);
  $content.data('id', pokemon.get('id'));
  this.$pokeList.append($content);
};

Pokedex.RootView.prototype.refreshPokemon = function () {
  this.pokes.fetch({
    success: (function () {
      this.$pokeList.empty();
      this.pokes.each(this.addPokemonToList.bind(this));
    }).bind(this)
  });

  return this.pokes;
};
