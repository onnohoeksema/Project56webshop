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
            var categories = (from p in _context.Products
                
                select p.productCategory).Distinct();

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


        [HttpGet("GetProducts/{category}")]
        public IActionResult GetProducts(string category)
        {
            var filteredproducts = _context.Products.Where(a => a.productCategory == category);
            if (filteredproducts == null) return NotFound();

            Console.WriteLine("\n\n Done with database stuff, these should be the products \n\n");
            foreach (var product in filteredproducts)
            {
                Console.WriteLine("{0}. {1}", product.productName, product.productCategory);
            }
            
            return Ok(filteredproducts);
        }

        [HttpGet("GetBooks")]
        public IActionResult GetBooks()
        {
            var items = _context.Products.Where(a => a.productCategory == "Book");
                            
            foreach (var product in items)
            {
                Console.WriteLine("{0}. {1}", product.productName, product.productCategory);
            }
                return Ok(items);
        }

        [HttpGet("GetAccessories")]
        public IActionResult GetAccessories()
        {
            var items = _context.Products.Where(a => a.productCategory == "Accessory");

            foreach (var product in items)
            {
                Console.WriteLine("{0}. {1}", product.productName, product.productCategory);
            }

                return Ok(items);
        }

        [HttpGet("GetDice")]
        public IActionResult GetDice()
        {
            var items = _context.Products.Where(a => a.productCategory == "Dice");

            foreach (var product in items)
            {
                Console.WriteLine("{0}. {1}", product.productName, product.productCategory);
            }

                return Ok(items);
        }

        [HttpGet("GetExtras")]
        public IActionResult GetExtras()
        {
            var items = _context.Products.Where(a => a.productCategory == "Extra");

                foreach (var product in items)
            {
                Console.WriteLine("{0}. {1}", product.productName, product.productCategory);
            }

                return Ok(items);
        }

        [HttpGet("GetMiniatures")]
        public IActionResult GetMiniatures()
        {
            var items = _context.Products.Where(a => a.productCategory == "Miniatures");

            foreach (var product in items)
            {
                Console.WriteLine("{0}. {1}", product.productName, product.productCategory);
            }

                return Ok(items);
        }
        [HttpGet("GetItem")]
        public IActionResult GetItem()
        {
           
            var item = _context.Products.Where(a => a.productName == "Starter Set");      

                return Ok(item);
        }

        [HttpGet("GetSearch/{item}")]
        public IActionResult GetSearch(string item)
        {
            
            var search = _context.Products.Where(a => a.productName.Contains(item)).OrderBy(a => a.productName);
            foreach(var product in search)
            {
                Console.WriteLine("{0}", product.productName);
            }
            return Ok(search);
        }
        [HttpGet("NameSortZA/{itemname}")]
        public IActionResult NameSortZA(string itemname)
        {
            var search = _context.Products.Where(a => a.productName.Contains(itemname)).OrderByDescending(a => a.productName);

            return Ok(search);
        }

        [HttpGet("PriceSortLH/{itemname}")]
         public IActionResult PriceSortLH(string itemname)
        {
            var search = _context.Products.Where(a => a.productName.Contains(itemname)).OrderBy(a => a.productPrice);
            return Ok(search);
        }

        [HttpGet("PriceSortHL/{itemname}")]
          public IActionResult PriceSortHL(string itemname)
        {
            var search = _context.Products.Where(a => a.productName.Contains(itemname)).OrderByDescending(a => a.productPrice);
            return Ok(search);
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