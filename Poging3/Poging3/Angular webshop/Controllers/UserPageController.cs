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

        [HttpGet("GetAll/{username}")]
        public IActionResult GetAll(string username)
        {

            Console.WriteLine(username);
            var wishlistuserproducts = (from u in _context.Users.Where(u => u.Username == username)
                                        from a in _context.Wishlist.Where(a => a.UserID == u.UserId)
                                        from b in _context.Products.Where(b => a.ProductID == b.productID)
                                        select new { b.productID, b.productName, b.productPrice});
            //var wishlists = from p in _context.Wishlist
                //select p;
            
           
            return Ok(wishlistuserproducts);
        }
        
        [HttpGet("GetOrders/{username}")]
        public IActionResult GetOrders(string username)
        {

            Console.WriteLine(username);
            var orderuserproducts = (from a in _context.Users.Where(a => a.Username == username)
                                        from b in _context.Orders.Where(b => b.UserID == a.UserId)
                                        from c in _context.statustypes.Where(c => c.StatusTypeID == b.StatusTypeID)
                                        //from c in _context.Products.Where(c => c.productID == b.ProductID)
                                        // used to include c.productName, c.productPrice
                                        select new { b.OrderID, b.ProductList, b.OrderPrice, b.OrderDate, c.StatusTypeName });    
            return Ok(orderuserproducts);
        }

        [HttpGet("RemoveFromWishlist/{userID}/{prodID}/")]
        public IActionResult RemoveFromWishlist(string userID, int prodID)
        {
            var deleteitem = (from u in _context.Users.Where(u => u.Username == userID)
                                from w in _context.Wishlist.Where(w => w.UserID == u.UserId && w.ProductID == prodID)
                                select w);
                   
            _context.Wishlist.RemoveRange(deleteitem);
            _context.SaveChanges();

            return Ok();
        }

        [HttpGet("GetUserData/{uname}")]
        public  IActionResult GetUserData(string uname){
            var userdata = from u in _context.Users.Where(u => u.Username == uname)
                        select u;
                        
            return Ok(userdata);
    
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

        [HttpGet("ChangeMail/{email}/{uname}")]
        public IActionResult ChangeMail(string email, string uname)
        {
            var user = _context.Users.FirstOrDefault(u => u.Username == uname);

            if (user != null)
            {
                user.Email = email;

                _context.SaveChanges();
            }
            return Ok();
        }

        [HttpGet("ChangePassword/{passw}/{uname}")]
        public IActionResult ChangePassword(string passw, string uname)
        {
            var user = _context.Users.FirstOrDefault(u => u.Username == uname);

            if (user != null)
            {
                user.Password = passw;

                _context.SaveChanges();
            }
            return Ok();
        }

        [HttpGet("ChangeAddress/{street}/{uname}")]
        public IActionResult ChangeAddress(string street, string uname)
        {
            var user = _context.Users.FirstOrDefault(u => u.Username == uname);

            if (user != null)
            {
                user.Street = street;

                _context.SaveChanges();
            }
            return Ok();
        }
/*
        [HttpGet("ChangeHousenumber/{housenumber}/{uname}")]
        public IActionResult ChangeHousenumber(int housenumber, string uname)
        {
            var user = _context.Users.FirstOrDefault(u => u.Username == uname);

            if (user != null)
            {
                user.HouseNumber = housenumber;

                _context.SaveChanges();
            }
            return Ok();
        }
*/
        [HttpGet("ChangeCity/{city}/{uname}")]
        public IActionResult ChangeCity(string city, string uname)
        {
            var user = _context.Users.FirstOrDefault(u => u.Username == uname);

            if (user != null)
            {
                user.City = city;

                _context.SaveChanges();
            }
            return Ok();
        }
    }
}