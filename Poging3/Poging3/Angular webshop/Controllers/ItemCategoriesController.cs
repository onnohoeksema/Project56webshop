using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Angular_webshop.Controllers
{
    [Route("api/[controller]")]
    public class ItemCategoriesController : Controller
    {
        private readonly DatabaseModel _context;

        public ItemCategoriesController(DatabaseModel context)
        {
            _context = context;
        }


        //This is done the dirty way, created an extra table in the database consisting of the categories
        [HttpGet ("GetCategories")]
        public IActionResult GetCategories()
        {
            var categories = from p in _context.ProductCategories
                
                select p.categoryName;

            foreach (var category in categories)
            {
                Console.WriteLine("{0}",category);
            }
                return Ok(categories);
        }


        //These are queries for getting items. These are also defined in the itempagecontroller.
        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            /*var results = from p in _context.Products
            select p.productName;
            results = _context.Products.ToArray();
            */
             Console.WriteLine("\n\n Something will be done \n\n");
            var products = from p in _context.Products
                select p;
            
            Console.WriteLine("\n\n Done with database stuff, these should be the products \n\n");
            foreach (var product in products)
            {
                Console.WriteLine("{0}. {1}", product.productName, product.productCategory);
            }
            Console.WriteLine(products);
            return Ok(products);
            
        }


        [HttpGet("GetProducts/{name}")]
        public IActionResult GetProduct(string name)
        {
            var product = _context.Products.Where(a => a.productName == name).FirstOrDefault();
            if (product == null) return NotFound();
            return Ok(product);
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

    
    }
}