using AppService.Models;
using Dapper;
using DapperExtensions;
using MSTL.DbClient;
using System;
using System.Text;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using AppService.Tools;
using DapperExtensions.Mapper;
using System.Threading;
using System.Collections;

namespace AppService.Tools
{
    public class DBHelper
    {
        private IDatabase db;
        public string constr = McConfig.Instance.getConfig("SqlConnect");
        private static DBHelper _instance = null;
        /// <summary>
        /// 单例模式
        /// </summary>
        public static DBHelper Instance
        {
            get
            {
                if (_instance == null)
                {
                    lock (typeof(DbHelper))
                    {
                        if (_instance == null)
                        {
                            _instance = new DBHelper();
                        }
                    }
                }
                return _instance;
            }
        }

        internal string UpdateBatchNoChange(BatchNoAndObjid info)
        {
            try
            {
                string strSql = "update [JYM_DBS].[dbo].[X_PRODUCT_PLAN]  set SLMS_FLAG = 1,READ_TIME = getDate(),READ_USER_ID =@userName where OBJID = @objid";
                DynamicParameters dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("userName",info.User_Name);
                dynamicParameters.Add("objid", info.Obj_id);
                db.Connection.Execute(strSql, dynamicParameters);
                return "切换成功";
            }
            catch (Exception ex) { return "失败，请联系管理员"; }

        }

        internal InfoEntity GetInfo(InfoEntity info)
        {
            try
            {
                string strSql = "SELECT top 1 PRODUCT_NAME,PRODUCT_QTY,OBJID  FROM [JYM_DBS].[dbo].[X_PRODUCT_PLAN] t where t.BATCH_NO = @batchNo and t.EQUIP_NO = @equipNo and t.SHIFT_ID=@shiftId";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("batchNo", info.BatchNo);
                parameters.Add("equipNo",info.DeciveNo);
                parameters.Add("shiftId", info.ShiftId);
               var dt = db.Connection.QueryTable(strSql,parameters);
                if (dt != null && dt.Rows.Count > 0)
                {
                    return new InfoEntity { MaterNo = dt.Rows[0]["PRODUCT_NAME"].ToString(), ProductQty = dt.Rows[0]["PRODUCT_QTY"].ToString(), Obj_id = dt.Rows[0]["OBJID"].ToString() };
                }
                else { return new InfoEntity { MaterNo = "未查询到符合条件信息",ProductQty = "未查询到符合条件信息", Obj_id = "0" };  }

            }
            catch (Exception ex) { return null; }
        }

        internal string[] GetBatchNoMethod()
        {
            try
            {

                List<string> url_list = new List<string>();
                string strSql = "SELECT BATCH_NO  FROM [JYM_DBS].[dbo].[X_PRODUCT_PLAN]";
                var dt = db.Connection.QueryTable(strSql);
                if (dt != null && dt.Rows.Count > 0)
                {
                    foreach (DataRow row in dt.Rows)
                    {
                        url_list.Add(row["BATCH_NO"].ToString());
                    }
                }
                return url_list.ToArray();
            }
            catch (Exception ex) { return null; }
        }

        public DBHelper()
        {
            //用来连接sqlserver数据库
            string errMsg = string.Empty;
            try
            {
                db = DbHelper.GetDb(constr, DbHelper.DataBaseType.SqlServer, ref errMsg);
            }
            catch (Exception ex)
            { }
        }

        public string UpdatePassWord(string adminusername, string adminpassword, string addusername, string addpassword)
        {
            try
            {
                string resultstr;
                //判断管理员用户名是否正确
                if (adminusername != "admin")
                {
                    return "管理员用户名不正确";
                }
                //判断管理员用户密码是否正确
                var sb = new StringBuilder();
                sb.Append("SELECT * FROM USERS_FOR_ANDROID WHERE USERNAME='admin'");
                var dt = db.Connection.QueryTable(sb.ToString());
                if (dt != null && dt.Rows.Count > 0)
                {
                    resultstr = (dt.Rows[0]["PASSWORD"] ?? "").ToString();
                    if (resultstr != adminpassword)
                    {
                        return "管理员密码不正确";
                    }
                    //判断数据库是否已经存在要更改的用户
                    string strSq = "SELECT * FROM USERS_FOR_ANDROID WHERE USERNAME =@USERNAME";
                    DynamicParameters param = new DynamicParameters();
                    param.Add("USERNAME", addusername);
                    var data = db.Connection.QueryTable(strSq.ToString(), param);
                    if (data != null && data.Rows.Count > 0)
                    {
                        //开始插入用户名密码
                        string strSql = "UPDATE USERS_FOR_ANDROID SET PASSWORD =@PASSWORD , IS_ENABLE = '1'  WHERE USERNAME =@USERNAME";
                        DynamicParameters parame = new DynamicParameters();
                        parame.Add("USERNAME", addusername);
                        parame.Add("PASSWORD", addpassword);
                        db.Connection.Execute(strSql.ToString(), parame);

                        //获取用户名密码，检查是否更新
                        string strSql1 = "SELECT * FROM USERS_FOR_ANDROID WHERE USERNAME =@USERNAME AND PASSWORD =@PASSWORD";
                        DynamicParameters param1 = new DynamicParameters();
                        param1.Add("USERNAME", addusername);
                        param1.Add("PASSWORD", addpassword);
                        var data1 = db.Connection.QueryTable(strSql1.ToString(), param1);
                        if (data1 != null && data1.Rows.Count > 0)
                        {
                            return "OK";
                        }
                        return "更新用户名密码失败";
                    }
                    return "数据库没有此用户名";

                }
                else
                {
                    return "数据库没有此管理员用户";
                }

            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        /// <summary>
        /// 新增用户名和密码
        /// </summary>
        /// <param name="adminusername"></param>
        /// <param name="adminpassword"></param>
        /// <param name="addusername"></param>
        /// <param name="addpassword"></param>
        /// <returns></returns>
        public string insertPassWord(string adminusername, string adminpassword, string addusername, string addpassword)
        {
            try
            {
                string resultstr;
                //判断管理员用户名是否正确
                if (adminusername != "admin")
                {
                    return "管理员用户名不正确";
                }
                //判断管理员用户密码是否正确
                var sb = new StringBuilder();
                sb.Append("SELECT * FROM USERS_FOR_ANDROID WHERE USERNAME='admin'");
                var dt = db.Connection.QueryTable(sb.ToString());
                if (dt != null && dt.Rows.Count > 0)
                {
                    resultstr = (dt.Rows[0]["PASSWORD"] ?? "").ToString();
                    if (resultstr != adminpassword)
                    {
                        return "管理员密码不正确";
                    }
                    //判断数据库是否已经存在要添加的用户
                    string strSq = "SELECT * FROM USERS_FOR_ANDROID WHERE USERNAME =@USERNAME";
                    DynamicParameters param = new DynamicParameters();
                    param.Add("USERNAME", addusername);
                    var data = db.Connection.QueryTable(strSq.ToString(), param);
                    if (data != null && data.Rows.Count > 0)
                    {
                        return "数据库已经存在此用户名";
                    }
                    //开始插入用户名密码
                    string strSql = "INSERT INTO USERS_FOR_ANDROID(USERNAME,PASSWORD,IS_ENABLE,LOGIN_STATUS)VALUES(@USERNAME,@PASSWORD,'1','1')";
                    DynamicParameters parame = new DynamicParameters();
                    parame.Add("USERNAME", addusername);
                    parame.Add("PASSWORD", addpassword);
                    db.Connection.Execute(strSql.ToString(), parame);
                    //获取用户名密码，检查是否插入
                    string strSql1 = "SELECT * FROM USERS_FOR_ANDROID WHERE USERNAME =@USERNAME AND PASSWORD =@PASSWORD";
                    DynamicParameters param1 = new DynamicParameters();
                    param1.Add("USERNAME", addusername);
                    param1.Add("PASSWORD", addpassword);
                    var data1 = db.Connection.QueryTable(strSql1.ToString(), param1);
                    if (data1 != null && data1.Rows.Count > 0)
                    {
                        return "OK";
                    }
                    return "插入用户名密码失败";
                }
                else
                {
                    return "数据库没有此管理员用户";
                }

            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        /// <summary>
        /// 用户登陆验证
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="passWorld"></param>
        /// <param name="storeNo"></param>
        /// <returns></returns>
        public bool GetResultFromDB(string userName, string passWorld)
        {
            try
            {
                string strSql = "select * from USERS_FOR_ANDROID where username =@userName and password =@passWorld";
                DynamicParameters param = new DynamicParameters();
                param.Add("userName", userName);
                param.Add("passWorld", passWorld);
                var dt = db.Connection.QueryTable(strSql, param);
                if (dt != null && dt.Rows.Count > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        /// <summary>
        /// 获取版本号
        /// </summary>
        /// <returns></returns>
        internal string GetVersionDBMethod()
        {
            string result;
            try
            {
                string strSql = "select t.LAST_VERSION from USERS_FOR_ANDROID t where rownum <=1 and t.LAST_VERSION is not null";
                var dt = db.Connection.QueryTable(strSql);
                if (dt != null && dt.Rows.Count > 0)
                {
                    result = (dt.Rows[0]["LAST_VERSION"] ?? "").ToString();
                }
                else
                {
                    result = "";
                }
                return result;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

    }
}