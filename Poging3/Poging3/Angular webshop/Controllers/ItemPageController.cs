using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular_webshop.Models;

namespace Angular_webshop.Controllers
{
    [Route("api/[controller]")]
    public class ItemPageController : Controller
    {
        private readonly DatabaseModel _context;

        public ItemPageController(DatabaseModel context)
        {
            _context = context;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var _products = from p in _context.Products
                            select p;
            return Ok(_products);
        }

        [HttpGet("GetProducts/{name}")]
        public IActionResult GetProduct(string name)
        {
            var product = _context.Products.Where(a => a.productName == name).FirstOrDefault();
            if (product == null) return NotFound();
            return Ok(product);
        }


        private static string[] Summaries = new[]
        {
            "Item Freezing", "Item Bracing", "Item Chilly", "Item Cool", "Item Mild", "Item Warm", "Item Balmy", "Item Hot", "Item Sweltering", "Item Scorching"
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