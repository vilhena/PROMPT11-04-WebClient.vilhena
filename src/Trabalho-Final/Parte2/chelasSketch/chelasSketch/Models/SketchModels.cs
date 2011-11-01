using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace chelasSketch.Models
{
    public class SketchModel
    {
        public int Id { get; set; }
        public string Tittle { get; set; }
        public string Image { get; set; }
        public string Author { get; set; }
        public DateTime Created { get; set; }
        public DateTime Changed { get; set; }
        public CategoryModel Category { get; set; }
    }
}