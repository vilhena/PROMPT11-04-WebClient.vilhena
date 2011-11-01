using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using chelasSketch.Models;

namespace chelasSketch.Services
{
    public class SketchService
    {
        public static List<SketchModel> _sketchs;
        public static List<CategoryModel> _categories = new List<CategoryModel>(){
            new CategoryModel(){ Id=1, Name = "Abstracto"},
            new CategoryModel(){ Id=2, Name = "Animais"},
            new CategoryModel(){ Id=3, Name = "Pessoas"},
        };

        static SketchService()
        {
            _sketchs = new List<SketchModel>(){
                new SketchModel(){
                 Id=1, 
                 Author="Vilhena",
                 Category = _categories[0],
                 Changed = DateTime.Now,
                 Created = DateTime.Now,
                 Image = @"data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub/
/ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcpp
V0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7",
                 Tittle = "MyWorld"
                },
                new SketchModel(){
                 Id=2, 
                    Author="Maria",
                 Category = _categories[1],
                 Changed = DateTime.Now,
                 Created = DateTime.Now,
                 Image = @"data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub/
/ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcpp
V0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7",
                 Tittle = "Maria Page"
                },
                new SketchModel(){
                 Id=3, 
                    Author="Vilhena",
                 Category = _categories[2],
                 Changed = DateTime.Now,
                 Created = DateTime.Now,
                 Image = @"data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub/
/ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcpp
V0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7",
                 Tittle = "Taste Like Pizza"
                },
                new SketchModel(){
                 Id=4, 
                    Author="Vilhena",
                 Category = _categories[1],
                 Changed = DateTime.Now,
                 Created = DateTime.Now,
                 Image = @"data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub/
/ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcpp
V0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7",
                 Tittle = "Today it is"
                },
                new SketchModel(){
                 Id=5, 
                    Author="António",
                 Category = _categories[0],
                 Changed = DateTime.Now,
                 Created = DateTime.Now,
                 Image = @"data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub/
/ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcpp
V0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7",
                 Tittle = "Motorbike"
                },
            };
        }

        public IQueryable<SketchModel> ListAll()
        {
            return _sketchs.AsQueryable();
        }

        public SketchModel Get(int id)
        {
            return _sketchs.First(s => s.Id == id);
        }

        public void Add(SketchModel model)
        {
            model.Id = _sketchs.Max(s => s.Id) + 1;
            _sketchs.Add(model);
        }

        public void Update(SketchModel model)
        {
            _sketchs.RemoveAll(s => s.Id == model.Id);
            _sketchs.Add(model);
        }

        public void Delete(int id)
        {
            _sketchs.RemoveAll(s => s.Id == id);
        }

        public IQueryable<SketchModel> ListTop(int count)
        {
            return _sketchs.OrderBy(s => s.Changed).Take(count).AsQueryable();
        }
    }
}