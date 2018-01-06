using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Angular_webshop.Controllers
{
    [Route("api/[controller]")]
    public class AdminPageController : Controller
    {
        private readonly DatabaseModel _context;

        public AdminPageController(DatabaseModel context)
        {
            _context = context;
        }

        [HttpGet("SaveData/{prodID}/{prodName}/{prodPrice}/{prodStock}/{prodCategory}/{prodTag}/")]
        
        public IActionResult SaveData(int prodID, string prodName, float prodPrice, int prodStock, string prodCategory, string prodTag)
        {
         var prod = _context.Products.FirstOrDefault(p => p.productID == prodID);
            Console.WriteLine("will be modified");
         if (prod != null)
         {
            prod.productName = prodName;
            prod.productPrice = prodPrice;
            prod.productStock = prodStock;
            prod.productCategory = prodCategory;
            prod.productTag = prodTag;
            _context.SaveChanges();
            Console.WriteLine("should be modified");
         }
            
            
            return Ok();
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