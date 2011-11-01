using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using chelasSketch.Services;
using chelasSketch.Models;

namespace chelasSketch.Controllers
{
    public class SketchController : Controller
    {
        //
        // GET: /Sketch/

        private static SketchService service = new SketchService();

        public ActionResult Index()
        {
            return View(service.ListTop(10));
        }

        //JSON request
        public JsonResult GetTop(int count)
        {
            var list = service.ListTop(count);
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public ActionResult TopSketches()
        {
            return View();
        }

        public ActionResult Search()
        {
            return View(service.ListAll());
        }

        //
        // GET: /Sketch/Details/5

        public ActionResult Details(int id)
        {
            return View(service.Get(id));
        }

        //
        // GET: /Sketch/Create

        public ActionResult Create()
        {
            return View(new SketchModel());
        } 

        //
        // POST: /Sketch/Create

        [HttpPost]
        public ActionResult Create(string Author, string Tittle, string imagebase64, HttpPostedFileBase file)
        {
            try
            {
                SketchModel model = new SketchModel();
                //sets date
                

                model.Author = Author;
                model.Tittle = Tittle;
                model.Image = imagebase64;
                model.Created = model.Changed = DateTime.Now;

                service.Add(model);
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
        
        //
        // GET: /Sketch/Edit/5
 
        public ActionResult Edit(int id)
        {
            return View(service.Get(id));
        }

        //
        // POST: /Sketch/Edit/5

        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                SketchModel model = new SketchModel();
                service.Update(model);
 
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Sketch/Delete/5
 
        public ActionResult Delete(int id)
        {
            return View(service.Get(id));
        }

        //
        // POST: /Sketch/Delete/5

        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here
                service.Delete(id);
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
