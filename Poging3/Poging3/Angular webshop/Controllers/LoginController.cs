using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Angular_webshop.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private readonly DatabaseModel _context;

        public LoginController(DatabaseModel context)
        {
            _context = context;
        }


        //This is done the dirty way, created an extra table in the database consisting of the categories
        [HttpGet("GetUsers")]
        public IActionResult GetUsers()
        {
            var User = from u in _context.Users

                       select u.Username;

            foreach (var Username in User)
            {
                Console.WriteLine("{0}", Username);
            }
            return Ok(User);
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
            var User = from u in _context.Users
                           select u;

            Console.WriteLine("\n\n Done with database stuff, these should be the Usernames \n\n");
            foreach (var Users in User)
            {
                Console.WriteLine("{0}. {1}", Users.Username);
            }
            Console.WriteLine(User);
            return Ok(User);

        }


        [HttpGet("GetUsers/{name}")]
        public IActionResult GetUsername(string name)
        {
            var User = _context.Users.Where(a => a.Username == name).FirstOrDefault();
            if (User == null) return NotFound();
            return Ok(User);
        }

        


        }
    }