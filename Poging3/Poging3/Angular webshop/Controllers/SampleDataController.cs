using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Angular_webshop.Models;


namespace Angular_webshop.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        
        private readonly DatabaseModel _context;

        public SampleDataController(DatabaseModel context)
        {
            _context = context;
        }
        
        [HttpGet("GetAll")]
        public IQueryable GetAll()
        {
            //var items = from p in _context.Products
                //select p.productName;
            //results = _context.Products.ToArray();
            var results = from p in _context.Products
                select p;

        
            return(results);
        }
        
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
            
        }

          
      
    }
}
