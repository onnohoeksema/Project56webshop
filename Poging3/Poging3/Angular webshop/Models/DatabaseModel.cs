﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Angular_webshop.Models
{
    public class DatabaseModel : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=Project56.db");
        }

       
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




    public static class FetchData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new DatabaseModel())
            {
                //Query for selecting all products??
                var products = from p in context.Products
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
}