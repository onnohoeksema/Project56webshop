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

            var neworder = new Order();

            neworder.UserID = userid;
            neworder.ProductList = products;
            neworder.OrderDate = DateTime.Today.ToString();

            _context.Orders.Add(neworder);
            _context.SaveChanges();
            
            return Ok();
        }
    }
}