using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ProjectAngular.Models
{
    public class P56Context : DbContext
    {
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Actor> Actors { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Username=postgres;Password=root;Database=Project56;Host=localhost");
        }
    }

    public class Movie 
    {
        public int MovieId { get; set; }
        public string Title { get; set; }
        public List<Actor> Actors { get; set; }
    }

    public class Actor
    {
        public int ActorId { get; set; }
        public string Name { get; set; }
        public int MovieId { get; set; }
        public Movie Movie { get; set; }
    }
}