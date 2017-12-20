using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Data;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Text;
using Microsoft.Extensions.Logging;


namespace Models
{
    
    public class DatabaseModel : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> ProductCategories { get; set; }
        public DbSet<DCdicetype> DiceType { get; set; }
        public DbSet<DCdicecolor> DiceColor { get; set; }
        public DbSet<DCnumbercolor> NumberColor { get; set; }
        public DbSet<DCdicepattern> DicePattern { get; set; }
        
        public DatabaseModel(DbContextOptions<DatabaseModel> options):base(options)
        {        
        }
/* 
        protected override void OnConfiguring(DbContextOptionsBuilder<DatabaseModel> optionsBuilder)
        {
            //password needs to be changed to developers password
            optionsBuilder.UseMySQL(@"User Id = root;Password=root;Host=localhost;Database=Project56test");
        }
         */
    }

    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class Product
    {
        public int productID { get; set; }
        public string productName { get; set; }
        public float productPrice { get; set; }
        public int productStock { get; set; }
        public string productCategory { get; set; }
        public string productTag { get; set; }
    }

    public class Category
    {
        public int categoryID { get; set; }
        public string categoryName { get; set; }
    }

    public class DCdicetype
    {
        public int dcdicetypeID { get; set; }
        public string dcdicetypeName { get; set; }
        public int dicetypeStock { get; set; }
    }
    

    public class DCdicecolor
    {
        public int dcdicecolorID { get; set; }
        public string dcdicecolorName { get; set; }
        public int dcdicecolorStock { get; set; }
    }

    public class DCnumbercolor
    {
        public int dcnumbercolorID { get; set; }
        public string dcnumbercolorName { get; set; }
        public int dcnumbercolorStock { get; set; }
    }

    public class DCdicepattern
    {
        public int dcdicepatternID { get; set; }
        public string dcdicepatternName { get; set; }
        public int dcdicepatternStock { get; set; }
    }
/* 

    public static class FetchData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new DatabaseModel())
            {
                //Query for selecting all products??
                var products = from p in context.pro
                    select p;

            }
        }

    }

    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new DatabaseModel())
            {
                if (context.Users.Any())
                {
                    return; // DB has been seeded
                }

                context.Users.AddRange(
                    new User
                    {
                        Username = "Shane",
                        Password = "Shane69"
                    },
                    new User
                    {
                        Username = "Khanh",
                        Password = "Khanh69"
                    }
                );
                context.SaveChanges();
            }
        }
    }
    */
}
