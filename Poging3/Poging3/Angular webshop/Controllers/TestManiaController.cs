using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular_webshop.Models;
using Microsoft.EntityFrameworkCore;

namespace Angular_webshop.Controllers
{
    [Route("api/[controller]")]
    public class TestManiaController : Controller
    {
        private readonly DatabaseModel _context;

        public TestManiaController(DatabaseModel context)
        {
            _context = context;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            return Ok(_context.Products.ToArray());
        }

        private static string[] Summaries = new[]
        {
            "Testing Freezing", "Testing Bracing", "Testing Chilly", "Testing Cool", "Testing Mild", "Testing Warm", "Testing Balmy", "Testing Hot", "Testing Sweltering", "Testing Scorching"
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
