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
        public IEnumerable<MenuItem> GetMenuItems()
        {
            return _context.MenuItems;
        }

        // GET: api/MenuItems/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMenuItem([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var menuItem = await _context.MenuItems.FindAsync(id);

            if (menuItem == null)
            {
                return NotFound();
            }

            return Ok(menuItem);
        }

        // PUT: api/MenuItems/5
        [HttpPut("{id}")]
        public async Task<ActionResult<IEnumerable<MenuItem>>> PutMenuItem([FromRoute] int id, [FromBody] MenuItem menuItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != menuItem.MenuItemId)
            {
                return BadRequest();
            }

            _context.Entry(menuItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MenuItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return _context.MenuItems;
        }

        // POST: api/MenuItems
        [HttpPost]
        public async Task<ActionResult<IEnumerable<MenuItem>>> PostMenuItem([FromBody] MenuItem menuItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.MenuItems.Add(menuItem);
            await _context.SaveChangesAsync();

            return _context.MenuItems;
        }

        // DELETE: api/MenuItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<IEnumerable<MenuItem>>> DeleteMenuItem([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var menuItem = await _context.MenuItems.FindAsync(id);
            if (menuItem == null)
            {
                return NotFound();
            }

            _context.MenuItems.Remove(menuItem);
            await _context.SaveChangesAsync();

            return _context.MenuItems;
        }

        private bool MenuItemExists(int id)
        {
            return _context.MenuItems.Any(e => e.MenuItemId == id);
        }
    }
}