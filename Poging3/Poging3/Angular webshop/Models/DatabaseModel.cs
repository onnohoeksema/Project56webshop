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
        public DbSet<DCdicetype> dcDiceType { get; set; }
        public DbSet<DCdicecolor> dcDiceColor { get; set; }
        public DbSet<DCnumbercolor> dcNumberColor { get; set; }
        public DbSet<DCdicepattern> dcDicePattern { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Wishlist> Wishlist { get; set; }
        public DbSet<statustype> statustypes { get; set; }

        public DatabaseModel(DbContextOptions<DatabaseModel> options):base(options)
        {        
        }

    }

    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        //public int HouseNumber { get; set; }
        public string Zipcode { get; set; }
        public string City { get; set; }
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
        public int dcdicetypeStock { get; set; }
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

    public class Comment
    {
        public int commentID { get; set; }
        public int productID { get; set; }
        public string user { get; set; }
        public string comment { get; set; }
        public double rating { get; set; }
        public int approved { get; set; }
    }

    public class Order
    {
        public int OrderID { get; set; }
        public int UserID { get; set; } 
        public string ProductList { get; set; }
        public string OrderDate { get; set; }
        public int StatusTypeID { get; set; }
        public int OrderPrice { get; set; }
    }

    public class Wishlist
    {
        public int WishlistID { get; set; }
        public int UserID { get; set; } 
        public int ProductID { get; set; }
    }

    public class statustype
    {
        public int StatusTypeID { get; set; }
        public string StatusTypeName { get; set; }
    }
}
