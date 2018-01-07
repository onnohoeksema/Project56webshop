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
            var Users = from u in _context.Users

                       select u.Username;

            foreach (var Username in Users)
            {
                Console.WriteLine("{0}", Username);
            }
            return Ok(Users);
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


        [HttpGet("GetUser/{uname}/{passw}")]
        public IActionResult GetUser(string uname, string passw)
        {
            var user = _context.Users.Where(u => u.Username == uname && u.Password == passw).FirstOrDefault();

            if (user == null) return NotFound();
            return Ok(user);
        }

        [HttpGet("CreateUser/{mail}/{uname}/{passw}/{fname}/{lname}/{strt}/{houseno}/{zip}/{city}/")]
        public IActionResult CreateUser(string mail, string uname, string passw, string fname, string lname, string strt, string houseno, string zip, string city)
        {
            var user = new User();
            
            user.Email = mail;
            user.Username = uname;
            user.Password = passw;
            user.FirstName = fname;
            user.LastName = lname;
            user.Street = strt;
            user.HouseNumber = houseno;
            user.Zipcode = zip;
            user.City = city;
            
            _context.Users.Add(user);
            _context.SaveChanges();
            Console.WriteLine("user should be created");
            
            return Ok();
        }

    }
}