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
    public class FlavorsController : ControllerBase
    {
        private readonly CoffeeShopContext _context;

        public FlavorsController(CoffeeShopContext context)
        {
            _context = context;
        }

        // GET: api/Flavors
        [HttpGet]
        public ActionResult<IEnumerable<Flavor>> GetFlavors()
        {
            return _context.Flavors;
        }

        // GET: api/Flavors/5
        [HttpGet("{id}")]
        public IEnumerable<Flavor> GetFbDetail([FromRoute] int id)
        {
            return _context.Flavors.Where(r => r.FBDetailsId == id);
        }

        // PUT: api/Flavors/5
        [HttpPut("{id}")]
        public async Task<IEnumerable<Flavor>> PutFbDetails([FromRoute] int id, [FromBody] Flavor flavor)
        {


            _context.Entry(flavor).State = EntityState.Modified;


            await _context.SaveChangesAsync();


            return _context.Flavors.Where(r => r.FBDetailsId == flavor.FBDetailsId);
        }

        // POST: api/FBDetails
        [HttpPost]
        public async Task<IEnumerable<Flavor>> PostFlavorAsync([FromBody] Flavor flavor)
        {

            _context.Flavors.Add(flavor);
            await _context.SaveChangesAsync();

            return _context.Flavors.Where(r => r.FBDetailsId == flavor.FBDetailsId);
        }
        // DELETE: api/FBDetails/5
        [HttpDelete("{id}")]
        public async Task<IEnumerable<Flavor>> DeleteFlavor([FromRoute] int id)
        {


            var flavor = await _context.Flavors.FindAsync(id);


            _context.Flavors.Remove(flavor);
            await _context.SaveChangesAsync();

            return _context.Flavors.Where(r => r.FBDetailsId == flavor.FBDetailsId);
        }

        private bool FBDetailsExists(int id)
        {
            return _context.FBDetails.Any(e => e.FBDetailsId == id);
        }
    }
}