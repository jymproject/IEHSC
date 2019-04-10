using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AppService.Models
{
    public class InfoEntity
    {
        public string MaterNo { get; set; }
        public string ProductQty { get; set; }

        public string BatchNo { get; set; }

        public string ShiftId { get; set; }
        public string DeciveNo { get; set; }
        public string Obj_id { get; set; }
        public string User_Name { get; set; }

    }
    public class BatchNoAndObjid
    {
        public string Obj_id { get; set; }
        public string User_Name { get; set; }
    }
}