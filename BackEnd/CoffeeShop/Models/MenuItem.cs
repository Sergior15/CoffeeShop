using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShop.Models
{
    public class MenuItem
    {
        public int ItemId { get; set; }
        public string FoodOrDrink { get; set; }
        public int ItemPrice { get; set; }
        public int Calories { get; set; }

        public virtual int FoodId { get; set; }
    }
}
