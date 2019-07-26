using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShop.Models
{
    public class Flavor
    {
        public int FlavorId { get; set; }
        public string FlavorName { get; set; }

        public virtual int FBDetailsId { get; set; }
    }
}
