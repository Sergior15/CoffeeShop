using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShop.Models
{
    public class MenuItem
    {
        public int MenuItemId { get; set; }
        public string FoodorBev { get; set; }
        public string Image { get; set; }
       
        public virtual List<FBDetails> FBDetails { get; set; }
    }
}
