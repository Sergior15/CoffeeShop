using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoffeeShop;
using CoffeeShop.Models;

namespace CoffeeShop.Controllers
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
        public async Task<IActionResult> GetFBDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var fbdetail = await _context.FBDetails.FindAsync(id);

            if (fbdetail == null)
            {
                return NotFound();
            }

            return Ok(fbdetail);
        }

        // PUT: api/FBDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFBDetails([FromRoute] int id, [FromBody] FBDetails fBDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != fBDetails.FBDetailsId)
            {
                return BadRequest();
            }

            _context.Entry(fBDetails).State = EntityState.Modified;

          
            return NoContent();
        }


        // POST: api/FBDetails
        [HttpPost]
        public async Task<IActionResult> PostFBDetails([FromBody] FBDetails fBDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.FBDetails.Add(fBDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAlbum", new { id = fBDetails.FBDetailsId }, fBDetails);
        }
        // DELETE: api/FBDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFBDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var fBDetails = await _context.FBDetails.FindAsync(id);
            if (fBDetails == null)
            {
                return NotFound();
            }

            _context.FBDetails.Remove(fBDetails);
            await _context.SaveChangesAsync();

            return Ok(fBDetails);
        }
    }
}