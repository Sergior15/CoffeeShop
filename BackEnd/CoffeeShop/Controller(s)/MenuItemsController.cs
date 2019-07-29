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
    public class MenuItemsController : ControllerBase
    {
        private readonly CoffeeShopContext _context;

        public MenuItemsController(CoffeeShopContext context)
        {
            _context = context;
        }

        // GET: api/MenuItems
        [HttpGet]
        public ActionResult<IEnumerable<MenuItem>> GetMenuItems()
        {
            return _context.MenuItems;
        }

        // GET: api/MenuItems/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMenuItem([FromRoute] int id)
        {


            var menuitem = await _context.MenuItems.FindAsync(id);

            if (menuitem == null)
            {
                return NotFound();
            }

            return Ok(menuitem);
        }

        // PUT: api/MenuItems/5
        [HttpPut]
        public ActionResult<IEnumerable<MenuItem>> PutMenuItem([FromBody] MenuItem menuItem)
        {
            _context.MenuItems.Update(menuItem);

            _context.SaveChanges();          

            return _context.MenuItems.ToList();
        }

        // POST: api/MenuItems
        [HttpPost]
        public ActionResult<IEnumerable<MenuItem>> PostMenuItem([FromBody] MenuItem menuItem)
        {
            _context.MenuItems.Add(menuItem);

            _context.SaveChanges();

            return _context.MenuItems.ToList();
        }

        // DELETE: api/MenuItems/5
        [HttpDelete]
        public ActionResult<IEnumerable<MenuItem>> DeleteMenuItem(MenuItem menuItem)
        {

            _context.MenuItems.Remove(menuItem);

            _context.SaveChanges();

            return _context.MenuItems.ToList();
        }

        private bool MenuItemExists(int id)
        {
            return _context.MenuItems.Any(e => e.MenuItemId == id);
        }
    }
}