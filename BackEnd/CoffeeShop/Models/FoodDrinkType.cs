using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShop.Models
{
    public class FoodDrinkType
    {
        public int FDId { get; set; }
        public int ExpireDate { get; set; }

        public virtual List<Crepe> Crepes { get; set; }
        public virtual List<Muffin> Muffins { get; set; }
       
    }
}
