﻿using System;
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
        public DbSet<DCdicetype> dcdicetype { get; set; }
        public DbSet<DCdicecolor> dcdicecolor { get; set; }
        public DbSet<DCnumbercolor> dcnumbercolor { get; set; }
        public DbSet<DCdicepattern> dcdicepattern { get; set; }
        
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
        public int dicetypeID { get; set; }
        public string dicetypeName { get; set; }
        public string dicetypeStock { get; set; }
    }
    

    public class DCdicecolor
    {
        public int dicecolorID { get; set; }
        public string dicecolorName { get; set; }
        public string dicecolorStock { get; set; }
    }

    public class DCnumbercolor
    {
        public int numbercolorID { get; set; }
        public string numbercolorName { get; set; }
        public string numbercolorStock { get; set; }
    }

    public class DCdicepattern
    {
        public int dicepatternID { get; set; }
        public string dicepatternName { get; set; }
        public string dicepatternStock { get; set; }
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
