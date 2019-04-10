using AppService.Models;
using AppService.Tools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AppService.Controllers
{
    public class ProductPlanController : ApiController
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
        public string[] GetBatchNo()
        {
            return DBHelper.Instance.GetBatchNoMethod();
        }
        [HttpPost]
        public InfoEntity QueryInfo(InfoEntity info)
        {
            return DBHelper.Instance.GetInfo(info);
        }

        [HttpPost]
        public string UpdateBatch(BatchNoAndObjid batchNoAndObjid)
        {
            return DBHelper.Instance.UpdateBatchNoChange(batchNoAndObjid);

        }
    }

  
}

