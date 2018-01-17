using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Angular_webshop.Controllers
{
    [Route("api/[controller]")]
    public class ItemPageController : Controller
    {
        private readonly DatabaseModel _context;

        public ItemPageController(DatabaseModel context)
        {
            _context = context;
        }


        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            /*var results = from p in _context.Products
            select p.productName;
            results = _context.Products.ToArray();
            */
            // Console.WriteLine("\n\n Something will be done \n\n");
            var products = from p in _context.Products
                select p;
            
           // Console.WriteLine("\n\n Done with database stuff, these should be the products \n\n");
           // foreach (var product in products)
            //{
            //    Console.WriteLine("{0}. {1}", product.productName, product.productCategory);
           // }
            //Console.WriteLine(products);
            return Ok(products);
            
        }


        [HttpGet("GetProducts/{category}")]
        public IActionResult GetProducts(string category)
        {
            var filteredproducts = _context.Products.Where(a => a.productCategory == category).OrderBy(a => a.productName);
            if (filteredproducts == null) return NotFound();

            Console.WriteLine("\n\n Done with database stuff, these should be the products \n\n");
            foreach (var product in filteredproducts)
            {
                Console.WriteLine("{0}. {1}", product.productName, product.productCategory);
            }
            
            return Ok(filteredproducts);
        }

        [HttpGet("GetComments/{productID}")]
        public IActionResult Getcomments(int productID)
        {
            var comments = _context.Comments.Where(comment => comment.productID == productID);

            return Ok(comments);
        }

        [HttpGet("SubmitComment/{productID}/{user}/{rating}/{comment}")]
        public IActionResult SubmitComment(int productID, string user, int rating, string comment)
        {

            var newcomment = new Comment();

            newcomment.productID = productID;
            newcomment.user = user;
            newcomment.rating = rating;
            newcomment.comment = comment;
            
            _context.Comments.Add(newcomment);
            _context.SaveChanges();

            Console.WriteLine("comment should be created");
            return Ok();
        }
        
        [HttpGet("GetRandomItem")]
        public IActionResult GetRandomItem()
        {
            Console.WriteLine("starting randomizing");
            var query = from productID in _context.Products.Where(productID => productID.productStock>0)
                        select productID;
            
            int count = query.Count();
            Console.WriteLine("the count is " + count);
            int index = new Random().Next(count);
            Console.WriteLine("The index is " + index );

            var featureditem = from p in _context.Products.Where(p => p.productID == index)
                                select p;

            Console.WriteLine("Should have a random item now");
            return Ok(featureditem);
        }

        [HttpGet("GetItem/{itemID}")]
        public IActionResult GetItem(int itemID)
        {
           
            var finalitem = _context.Products.Where(a => a.productID == itemID);      

                return Ok(finalitem);
        }

        [HttpGet("GetItemComments/{itemID}")]
        public IActionResult GetItemComments(int itemID)
        {
           
            var itemcomments = _context.Comments.Where(a => a.productID == itemID && a.approved ==1);

            Console.WriteLine("Should have loaded comments");
                foreach (var comment in itemcomments)
            {
                Console.WriteLine("{0}. {1}", comment.user, comment.comment);
            }
                return Ok(itemcomments);
        }

        [HttpGet("AddToWishlist/{itemID}/{uname}")]
        public IActionResult AddToWishlist(int itemID, string uname){
            
            var userID = (from u in _context.Users.Where(u => u.Username == uname)
                        select u.UserId).FirstOrDefault();

            var wishlistitem = new Wishlist();

            wishlistitem.ProductID = itemID;
            wishlistitem.UserID = userID;

            _context.Wishlist.Add(wishlistitem);
            _context.SaveChanges();

            return Ok();
        }

        [HttpGet("AverageRating/{prodID}")]

        public IActionResult AverageRating(int prodID)
        {
            var ratingsum = (from c in _context.Comments.Where(c => c.productID == prodID && c.approved == 1)
                select c.rating).Sum();
            var ratingcount = (from c in _context.Comments.Where(c => c.productID == prodID && c.approved == 1)
                select c.rating).Count();

            if (ratingcount == 0)
            {
                var averagerating = 0;
                return Ok(averagerating);
            }
            else
            {
                var averagerating = Math.Round((ratingsum / ratingcount),2);
                return Ok(averagerating);
            }
                        
        }

        [HttpGet("NameSortZA/{category}")]
        public IActionResult NameSortZA(string category)
        {
            var filteredproducts = _context.Products.Where(a => a.productCategory == category).OrderByDescending(a => a.productName);

            return Ok(filteredproducts);
        }

        [HttpGet("PriceSortLH/{category}")]
         public IActionResult PriceSortLH(string category)
        {
            var filteredproducts = _context.Products.Where(a => a.productCategory == category).OrderBy(a => a.productPrice);
            return Ok(filteredproducts);
        }

        [HttpGet("PriceSortHL/{category}")]
          public IActionResult PriceSortHL(string category)
        {
            var filteredproducts = _context.Products.Where(a => a.productCategory == category).OrderByDescending(a => a.productPrice);
            return Ok(filteredproducts);
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