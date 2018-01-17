using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Angular_webshop.Controllers
{
    [Route("api/[controller]")]
    public class ShoppingCartController : Controller
    {
        private readonly DatabaseModel _context;

        public ShoppingCartController(DatabaseModel context)
        {
            _context = context;
        }

        [HttpGet("OrderItems/{username}/{products}")]
        public IActionResult OrderItems(string username, string products)
        {

            var userid = (from u in _context.Users.Where(u => u.Username == username)
                        select u.UserId).FirstOrDefault();
            Console.WriteLine("USERID = " + userid);
            //var neworder = new Order();
            //neworder.OrderID = 31;
            //neworder.UserID = userid;
            //neworder.ProductList = products;
            //neworder.OrderDate = DateTime.Today.ToString();
            //neworder.StatusTypeID = 1;
            Order newOrder = new Order
            {
                OrderID = 31,
                UserID = userid,
                ProductList = products,
                OrderDate = DateTime.Today.ToString(),
                StatusTypeID = 1
            };

            _context.Orders.Add(newOrder);
            _context.SaveChanges();
            Console.WriteLine("ADDED TO DATABASE??");
            
            return Ok();
        }
    }
}