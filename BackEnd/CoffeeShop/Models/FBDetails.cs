using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShop.Models
{
    public class FBDetails
    {
        public int FBDetailsId { get; set; }
        public  string Price{ get; set; }
        public string Calories { get; set; }
        public string FBDescription { get; set; }

        public virtual int MenuItemId { get; set; }
        public virtual List<Flavor> Flavors { get; set; }

    }
}
