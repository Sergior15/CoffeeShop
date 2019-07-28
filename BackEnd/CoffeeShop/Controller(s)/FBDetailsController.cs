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
        public IEnumerable<FBDetails> GetfbDetail([FromRoute] int id)
        {
            return _context.FBDetails.Where(r => r.MenuItemId == id);
        }

        // PUT: api/FBDetails/5
        [HttpPut("{id}")]
        public async Task<IEnumerable<FBDetails>> PutfbDetail([FromRoute] int id, [FromBody] FBDetails fbdetail)
        {


            _context.Entry(fbdetail).State = EntityState.Modified;


            await _context.SaveChangesAsync();


            return _context.FBDetails.Where(r => r.MenuItemId == fbdetail.MenuItemId);
        }

        // POST: api/FBDetails
        [HttpPost]
        public async Task<IEnumerable<FBDetails>> PostFbDetailAsync([FromBody] FBDetails fbdetail)
        {

            _context.FBDetails.Add(fbdetail);
            await _context.SaveChangesAsync();

            return _context.FBDetails.Where(r => r.MenuItemId == fbdetail.MenuItemId);
        }

        // DELETE: api/FBDetails/5
        [HttpDelete("{id}")]
        public async Task<IEnumerable<FBDetails>> DeleteFbdetail([FromRoute] int id)
        {

            var fbdetail = await _context.FBDetails.FindAsync(id);


            _context.FBDetails.Remove(fbdetail);
            await _context.SaveChangesAsync();

            return _context.FBDetails.Where(r => r.MenuItemId == fbdetail.MenuItemId);
        }

        private bool FBDetailsExists(int id)
        {
            return _context.FBDetails.Any(e => e.FBDetailsId == id);
        }
    }
}