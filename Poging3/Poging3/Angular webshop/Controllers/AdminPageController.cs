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

        [HttpGet("GetUsers")]
        public IActionResult GetUsers()
        {
            var users = from u in _context.Users

                select u;

            return Ok(users);
        }

        [HttpGet("SaveData/{prodID}/{prodName}/{prodPrice}/{prodStock}/{prodCategory}/{prodTag}/")]
        
        public IActionResult SaveData(int prodID, string prodName, float prodPrice, int prodStock, string prodCategory, string prodTag)
        {
         var prod = _context.Products.FirstOrDefault(p => p.productID == prodID);
            Console.WriteLine("Product will be modified");
         if (prod != null)
         {
            prod.productName = prodName;
            prod.productPrice = prodPrice;
            prod.productStock = prodStock;
            prod.productCategory = prodCategory;
            prod.productTag = prodTag;
            _context.SaveChanges();
            Console.WriteLine("Product should be modified");
         }
            
            
            return Ok();
        }

        [HttpGet("ChangeUserData/{uID}/{mail}/{uname}/{passw}/{fname}/{lname}/{strt}/{zip}/{city}/")]
        public IActionResult ChangeUserData(int uID, string mail, string uname, string passw, string fname, string lname, string strt, string zip, string city)
        {
            var user = _context.Users.FirstOrDefault(u => u.UserId == uID);
            Console.WriteLine("User will be modified");
            if (user != null)
            {
                user.Email = mail;
                user.Username = uname;
                user.Password = passw;
                user.FirstName = fname;
                user.LastName = lname;
                user.Street = strt;
                //user.HouseNumber = houseno;
                user.Zipcode = zip;
                user.City = city;
                _context.SaveChanges();
                Console.WriteLine("User should be modified");
            }
            return Ok();
        }

        [HttpGet("GetComments")]
        public IActionResult GetComments()
        {
            var comments = from c in _context.Comments.Where(c => c.approved == 0)
                    select c;

            return Ok(comments);
        }

        [HttpGet("UpdateComment/{cID}/pID/{uname}/{commenttext}/{prodrating}/{appr}/")]
        public IActionResult UpdateComment(int cID, int pID, string uname, string commenttext, int prodrating, string appr)
        {
            var comment = _context.Comments.FirstOrDefault(c => c.commentID == cID);
            Console.WriteLine("comment will be modified");
            if (comment != null)
            {
                comment.productID = pID;
                comment.user = uname;
                comment.comment = commenttext;
                comment.rating = prodrating;
                
                
                _context.SaveChanges();
                Console.WriteLine("comment should be modified");
            }
            return Ok();
        }

        [HttpGet("CommentToApproved/{cID}/")]
        public IActionResult CommentToApproved(int cID)
        {
            var comment = _context.Comments.FirstOrDefault(c => c.commentID == cID);
            Console.WriteLine("comment will be modified");
            if (comment != null)
            {
                comment.approved = 1;
                
                _context.SaveChanges();
                Console.WriteLine("comment should be modified");
            }

            return Ok();
        }

        [HttpGet("CommentNotApproved/{cID}/")]
        public IActionResult CommentNotApproved(int cID)
        {
            var comment = _context.Comments.FirstOrDefault(c => c.commentID == cID);
            Console.WriteLine("comment will be modified");
            if (comment != null)
            {
                comment.approved = 2;
                
                _context.SaveChanges();
                Console.WriteLine("comment should be modified");
            }

            return Ok();
        }
        
        [HttpGet("AddNewProduct/{prodName}/{prodPrice}/{prodStock}/{prodCategory}/{prodTag}/")]
        public IActionResult AddNewProduct(string prodName, float prodPrice, int prodStock, string prodCategory, string prodTag)
        {
              var newproduct = new Product();
            Console.WriteLine("Product will be created");
       
            newproduct.productName = prodName;
            newproduct.productPrice = prodPrice;
            newproduct.productStock = prodStock;
            newproduct.productCategory = prodCategory;
            newproduct.productTag = prodTag;
            _context.Products.Add(newproduct);
            _context.SaveChanges();
            Console.WriteLine("Product should be created");
         
         
            return Ok();
        }

        [HttpGet("RemoveProduct/{prodID}")]  
        public IActionResult RemoveProduct(int prodID)
        {
            var deleteproduct = _context.Products.FirstOrDefault(p => p.productID == prodID);

            _context.Products.Remove(deleteproduct);
            _context.SaveChanges();

            Console.WriteLine("Product should be removed");
            return Ok();
        }
    }
}