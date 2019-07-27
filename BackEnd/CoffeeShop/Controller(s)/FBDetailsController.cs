using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoffeeShop;
using CoffeeShop.Models;

namespace CoffeeShop.Controller_s_
{
    [Route("api/[controller]")]
    [ApiController]
    public class FBDetailsController : ControllerBase
    {
        private readonly CoffeeShopContext _context;

        public FBDetailsController(CoffeeShopContext context)
        {
            _context = context;
        }

        // GET: api/FBDetails
        [HttpGet]
        public ActionResult<IEnumerable<FBDetails>> GetFBDetails()
        {
            return _context.FBDetails;
        }

        // GET: api/FBDetails/5
        [HttpGet("{id}")]
        public ActionResult<FBDetails> GetFBDetails(int id)
        {
            return _context.FBDetails.Single(a => a.FBDetailsId == id);
        }

        // PUT: api/FBDetails/5
        [HttpPut]
        public ActionResult<IEnumerable<FBDetails>> PutFBDetails([FromBody] FBDetails fBDetails)
        {
            _context.FBDetails.Update(fBDetails);
              
            _context.SaveChanges();

            return _context.FBDetails.ToList();
        }

        // POST: api/FBDetails
        [HttpPost]
        public ActionResult<MenuItem> PostFBDetails([FromBody] FBDetails fBDetails)
        {
           
            _context.FBDetails.Add(fBDetails);

            _context.SaveChanges();

            return _context.MenuItems.Single(a => a.MenuItemId == fBDetails.MenuItemId);
        }

        // DELETE: api/FBDetails/5
        [HttpDelete]
        public ActionResult<IEnumerable<FBDetails>> DeleteFBDetails([FromRoute] FBDetails fBDetails)
        {                             

            _context.FBDetails.Remove(fBDetails);

            _context.SaveChanges();

            return _context.FBDetails.ToList();
        }

        private bool FBDetailsExists(int id)
        {
            return _context.FBDetails.Any(e => e.FBDetailsId == id);
        }
    }
}