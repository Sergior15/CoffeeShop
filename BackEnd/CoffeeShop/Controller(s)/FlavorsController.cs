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
        public ActionResult<Flavor> GetFlavor(int id)
        {

            return _context.Flavors.Single(a => a.FlavorId == id);
        }

        // PUT: api/Flavors/5
        [HttpPut]
        public ActionResult<IEnumerable<Flavor>> PutFlavor([FromBody] Flavor flavor)
        {
            _context.Flavors.Update(flavor);

            _context.SaveChanges();

            return _context.Flavors.ToList();
        }

        // POST: api/FBDetails
        [HttpPost]
        public ActionResult<FBDetails> PostFlavor([FromBody] Flavor flavor)
        {

            _context.Flavors.Add(flavor);

            _context.SaveChanges();

            return _context.FBDetails.Single(a => a.MenuItemId == flavor.FBDetailsId);
        }

        // DELETE: api/FBDetails/5
        [HttpDelete]
        public ActionResult<IEnumerable<Flavor>> DeleteFlavor([FromBody] Flavor flavor)
        {

            _context.Flavors.Remove(flavor);

            _context.SaveChanges();

            return _context.Flavors.ToList();
        }

        private bool FBDetailsExists(int id)
        {
            return _context.FBDetails.Any(e => e.FBDetailsId == id);
        }
    }
}