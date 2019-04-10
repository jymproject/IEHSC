using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AppService.Controllers
{
    public class CategoriesController : ApiController
    {
        /// <summary>
        /// home图标显示
        /// </summary>
        Categories[] categories = new Categories[]
        {
            new Categories { Id = 1, FavoritesTitle="计划切换",Icon="icon-binding",IsEnable=1 } 
        };
        [HttpGet]
        public IEnumerable<Categories> GetAllProducts()
        {
            return categories;
        }
        [HttpGet]
        public IHttpActionResult GetProduct(int id)
        {
            var category = categories.FirstOrDefault((p) => p.Id == id);
            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }
        public string Options()
        {
            return null;
        }
    }
}

