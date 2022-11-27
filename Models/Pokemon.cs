

namespace PokemonMVC.Models
{
    public class Pokemon
    {
        public string? name { get; set; }
        public string? url { get; set; }
    }
    public class PokemonList
    {
        public List<Pokemon>? results;
    }
}

