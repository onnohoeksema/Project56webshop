using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Angular_webshop.Controllers
{
    [Route("api/[controller]")]
    public class DiceCustomizerController : Controller
    {
        private readonly DatabaseModel _context;

        public DiceCustomizerController(DatabaseModel context)
        {
            _context = context;
        }


        [HttpGet ("GetdcDiceTypes")]
        public IActionResult GetdcDiceTypes()
        {
            var dcdicetypes = from p in _context.dcDiceType.Where(a => a.dcdicetypeStock != 0)
            
                select p.dcdicetypeName;

            foreach (var dcdicetype in dcdicetypes)
            {
                Console.WriteLine("{0}",dcdicetypes);
            }
                return Ok(dcdicetypes);
        }

        [HttpGet ("GetdcDiceTypesOutOfStock")]
        public IActionResult GetdcDiceTypesOutOfStock()
        {
            var dcdicetypesoutofstock = from p in _context.dcDiceType.Where(a => a.dcdicetypeStock == 0)
            
                select p.dcdicetypeName;

            foreach (var dcdicetypeoutofstock in dcdicetypesoutofstock)
            {
                Console.WriteLine("{0}",dcdicetypesoutofstock);
            }
                return Ok(dcdicetypesoutofstock);
        }

        [HttpGet ("GetdcDiceColors")]
        public IActionResult GetdcDiceColors()
        {
            var dcdicecolors = from p in _context.dcDiceColor.Where(a => a.dcdicecolorStock != 0)
                
                select p.dcdicecolorName;

            foreach (var dcdicecolor in dcdicecolors)
            {
                Console.WriteLine("{0}",dcdicecolors);
            }
                return Ok(dcdicecolors);
        }

        [HttpGet ("GetdcDiceColorsOutOfStock")]
        public IActionResult GetdcDiceColorsOutOfStock()
        {
            var dcdicecolorsoutofstock = from p in _context.dcDiceColor.Where(a => a.dcdicecolorStock == 0)
                
                select p.dcdicecolorName;

            foreach (var dcdicecoloroutofstock in dcdicecolorsoutofstock)
            {
                Console.WriteLine("{0}",dcdicecolorsoutofstock);
            }
                return Ok(dcdicecolorsoutofstock);
        }

        [HttpGet ("GetdcNumberColors")]
        public IActionResult GetdcNumberColors()
        {
            var dcnumbercolors = from p in _context.dcNumberColor.Where(a => a.dcnumbercolorStock != 0)
                
                select p.dcnumbercolorName;

            foreach (var dcnumbercolor in dcnumbercolors)
            {
                Console.WriteLine("{0}",dcnumbercolors);
            }
                return Ok(dcnumbercolors);
        }

        [HttpGet ("GetdcNumberColorsOutOfStock")]
        public IActionResult GetdcNumberColorsOutOfStock()
        {
            var dcnumbercolorsoutofstock = from p in _context.dcNumberColor.Where(a => a.dcnumbercolorStock == 0)
                
                select p.dcnumbercolorName;

            foreach (var dcnumbercoloroutofstock in dcnumbercolorsoutofstock)
            {
                Console.WriteLine("{0}",dcnumbercolorsoutofstock);
            }
                return Ok(dcnumbercolorsoutofstock);
        }

        [HttpGet ("GetdcDicePatterns")]
        public IActionResult GetdcDicePatterns()
        {
            var dcdicepatterns = from p in _context.dcDicePattern.Where(a => a.dcdicepatternStock != 0)
                
                select p.dcdicepatternName;

            foreach (var dcdicepattern in dcdicepatterns)
            {
                Console.WriteLine("{0}",dcdicepatterns);
            }
                return Ok(dcdicepatterns);
        }

        [HttpGet ("GetdcDicePatternsOutOfStock")]
        public IActionResult GetdcDicePatternsOutOfStock()
        {
            var dcdicepatternsoutofstock = from p in _context.dcDicePattern.Where(a => a.dcdicepatternStock == 0)
                
                select p.dcdicepatternName;

            foreach (var dcdicepatternoutofstock in dcdicepatternsoutofstock)
            {
                Console.WriteLine("{0}",dcdicepatternsoutofstock);
            }
                return Ok(dcdicepatternsoutofstock);
        }
    }
}