using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Angular_webshop.Models;
using Microsoft.Extensions.DependencyInjection;

namespace Angular_webshop
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = BuildWebHost(args);

            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                try
                {
                    // Requires using MvcMovie.Models;
                    SeedData.Initialize(services);
                }
                catch (Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occurred seeding the DB.");
                }
            }

            using (var db = new DatabaseModel())
            {
                var result = from u in db.Users
                             select u;

                Console.WriteLine("\n\n\n\n");
                Console.WriteLine("USername | Password");
                foreach (var item in result)
                {
                    Console.WriteLine("{0}, {1}", item.Username, item.Password);
                }
                Console.WriteLine("\n\n\n\n");
            }

            host.Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
