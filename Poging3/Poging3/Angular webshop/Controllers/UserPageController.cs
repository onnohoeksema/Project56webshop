using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Angular_webshop.Controllers
{
    [Route("api/[controller]")]
    public class UserPageController : Controller
    {
        private readonly DatabaseModel _context;

        public UserPageController(DatabaseModel context)
        {
            _context = context;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var wishlistuserproducts = (from a in _context.Wishlist
                                        from b in _context.Products.Where(b => a.ProductID == b.productID)
                                        select new {b = b.productName, b.productPrice});
            //var wishlists = from p in _context.Wishlist
                //select p;
            
           
            return Ok(wishlistuserproducts);
            
        }

[HttpGet("SaveData/{wishID}/{userID}/{prodID}/")]

        public IActionResult SaveData(int wishID, int userID, int prodID)
        {
         var wish = _context.Wishlist.FirstOrDefault(w => w.WishlistID == wishID);
            Console.WriteLine("Product will be modified");
         if (wish != null)
         {
            wish.WishlistID = wishID;
            wish.UserID = userID;
            wish.ProductID = prodID;
            
            _context.SaveChanges();
            Console.WriteLine("Product should be modified");
         }
            
            
            return Ok();
        }
    }
}